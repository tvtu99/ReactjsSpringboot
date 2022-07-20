import { ReduxCallbacks } from "../../../models/redux/Callbacks";
import { Action } from "../../../models/redux/action";
import { User } from "../../../models/User";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_CANCELLED = "REGISTER_CANCELLED";

export const register = (user: User): Action => ({
	type: REGISTER,
	payload: user,
});

export const registerSuccess = ({
	user
}: {
	user: User;
}): Action => ({
	type: REGISTER_SUCCESS,
	payload: {user},
});

export const registerFailed = (error: any): Action => ({
	type: REGISTER_FAILED,
	payload: error,
});

export const registerCancelled = (): Action => ({
	type: REGISTER_CANCELLED,
});