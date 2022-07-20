import { combineEpics } from "redux-observable";
import { loginEpic, authReducer, fetchPermissionsEpic, fetchUserEpic , onFetchUserSuccessEpic } from "./auth";
import { registerEpic, registerReducer } from "./register";


export const rootEpic = combineEpics(
	loginEpic,
	registerEpic,
	// fetchUserEpic,
	// onFetchUserSuccessEpic,
	// fetchPermissionsEpic,
	// logoutEpic,
	
	
);

export const rootReducer = {
	auth: authReducer,
	register: registerReducer
}
