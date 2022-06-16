import { combineReducers } from "redux";
// import { combineEpics } from "redux-observable";
// import { loginReducer, logoutEpic } from "./login";

// export const rootEpic: any = combineEpics(
// 	logoutEpic,
// );
import { loginReducer } from "./login";

export const rootReducer = combineReducers({
	login:loginReducer,
});
