import { ofType } from "redux-observable";
import { Observable, of } from "rxjs";
import { map, catchError, takeUntil, mergeMap } from "rxjs/operators";
import { Action } from "../../../models/redux/action";
import Register from "../../../services/register";
import { CANCEL_ALL_REQUEST } from "../../default";
import { REGISTER, registerFailed, registerSuccess, REGISTER_CANCELLED } from "./actions";
import { onEpicSuccess, onEpicFailed } from "../../../helpers/reduxEpic";

export const registerEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(REGISTER),
    mergeMap((action:any) =>
      Register.register(action.user).pipe(
        map((response:any) => {
          return registerSuccess(response);
        }),
        catchError((error) => {
            return of(registerFailed(error));
        }),
        takeUntil(
          action$.pipe(ofType(REGISTER_CANCELLED, CANCEL_ALL_REQUEST))
        )
      )
    )
  );