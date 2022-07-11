import { Action } from "../../../models/redux/action";
import {
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGIN_CANCELLED,
	FETCH_CURRENT_USER_SUCCESS,
	FETCH_CURRENT_USER_FAILED,
	FETCH_PERMISSIONS_SUCCESS,
	FETCH_PERMISSIONS_FAILED,
	LOGOUT_SUCCESS,
} from "./actions";

const initState = {
	user: null,
	user_type: null,
	token: null,
	error: null,
	permissions: [],
};



export const authReducer = (state: any = initState, action: Action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.token,
			};
		case LOGIN_FAILED:
			return {
				user: null,
				token: null,
				permissions: [],
				error: action.payload,
			};
		case LOGIN_CANCELLED:
		case LOGOUT_SUCCESS:
			return {
				user: null,
				token: null,
				permissions: [],
			};
		case FETCH_CURRENT_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
			};
		case FETCH_CURRENT_USER_FAILED:
			return {
				...state,
				user: null,
				error: action.payload,
			};

		// Permissions
		case FETCH_PERMISSIONS_SUCCESS:
			return {
				...state,
				permissions: action.payload.permissions,
			};

		case FETCH_PERMISSIONS_FAILED:
			return {
				...state,
				error: action.payload,
				permissions: [],
			};

		default:
			return state;
	}
};
