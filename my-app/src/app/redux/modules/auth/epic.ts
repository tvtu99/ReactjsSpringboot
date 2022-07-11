import { ofType } from "redux-observable";
import { Observable } from "rxjs";
import { map, catchError, takeUntil, mergeMap } from "rxjs/operators";
import { Action } from "../../../models/redux/action";
import {
  LOGIN,
  loginSuccess,
  loginFailed,
  LOGIN_CANCELLED,
  FETCH_CURRENT_USER_CANCELLED,
  fetchUserSuccess,
  fetchUserFailed,
  fetchPermissionsSuccess,
  fetchPermissionsFailed,
  FETCH_PERMISSIONS_CANCELLED,
  FETCH_CURRENT_USER,
  FETCH_PERMISSIONS,
  LOGOUT,
  logoutSuccess,
  FETCH_CURRENT_USER_SUCCESS,
  fetchPermissions,
} from "./actions";
import { Auth } from "../../../services/auth";
import { of } from "rxjs";
import { onEpicSuccess, onEpicFailed } from "../../../helpers/reduxEpic";
import { CANCEL_ALL_REQUEST } from "../../default";
export const loginEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap((action:any) =>
      Auth.login(action.user).pipe(
        map((response:any) => {
          return onEpicSuccess(
            action,
            response,
            loginSuccess({
              token: response.jwtAuthenticationResponse.accessToken,
              user_type: response.type,
            })
          );
        }),
        catchError((error) => {
          return of(onEpicFailed(action, error, loginFailed(error)));
        }),
        takeUntil(action$.pipe(ofType(LOGIN_CANCELLED, CANCEL_ALL_REQUEST)))
      )
    )
  );
export const fetchUserEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(FETCH_CURRENT_USER),
    mergeMap((action) =>
      Auth.fetchUser().pipe(
        map((response:any) => {
          return fetchUserSuccess(response);
        }),
        catchError((error) => {
          return of(fetchUserFailed(error));
        }),
        takeUntil(
          action$.pipe(ofType(FETCH_CURRENT_USER_CANCELLED, CANCEL_ALL_REQUEST))
        )
      )
    )
  );
export const onFetchUserSuccessEpic = (
  action$: Observable<Action>,
  state$: any
) =>
  action$.pipe(
    ofType(FETCH_CURRENT_USER_SUCCESS),
    mergeMap((action) => {
      if (state$.value.currentUnit) {
        return of(fetchPermissions(state$.value.currentUnit.unitId));
      }
      return of();
    })
  );
export const fetchPermissionsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(FETCH_PERMISSIONS),
    mergeMap((action) =>
      Auth.fetchPermissions(action.payload.unitId).pipe(
        map((response:any) => fetchPermissionsSuccess(response)),
        catchError((error) => of(fetchPermissionsFailed(error))),
        takeUntil(
          action$.pipe(ofType(FETCH_PERMISSIONS_CANCELLED, CANCEL_ALL_REQUEST))
        )
      )
    )
  );
export const logoutEpic = (action$: Observable<Action>) =>
action$.pipe(
  ofType(LOGOUT),
  map((action) => onEpicSuccess(action, null, logoutSuccess()))
);
