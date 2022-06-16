import { User } from "../../../models/User";
import { Action } from "../../../models/redux/action";
import { ReduxCallbacks } from "../../../models/redux/Callbacks";
export const LOGIN = "LOGIN";

export const login = (user: User): Action => ({
	type: LOGIN,
	payload: { user },
});