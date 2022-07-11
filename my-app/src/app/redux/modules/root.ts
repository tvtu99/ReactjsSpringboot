import { combineEpics } from "redux-observable";
import { loginEpic, authReducer, fetchPermissionsEpic, fetchUserEpic , onFetchUserSuccessEpic } from "./auth";
// import { loginEpic, authReducer } from "./auth";


export const rootEpic: any = combineEpics(
	loginEpic,
	// fetchUserEpic,
	// onFetchUserSuccessEpic,
	// fetchPermissionsEpic,
	// logoutEpic,
	
);

export const rootReducer = {
	auth: authReducer
}
