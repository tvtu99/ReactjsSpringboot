import { Action } from "../../../models/redux/action";
import {
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	REGISTER_CANCELLED,
} from "./actions";

const initState = {
	user: null,
	error: null,
};



export const registerReducer = (state: any = initState, action: Action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				token: action.payload.user,
			};
		case REGISTER_FAILED:
			return {
				user: null,
				error: action.payload,
			};
		case REGISTER_CANCELLED:
		default:
			return state;
	}
};
