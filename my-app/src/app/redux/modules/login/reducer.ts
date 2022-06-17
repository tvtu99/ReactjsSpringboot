import { Action } from "../../../models/redux/action";
import {
	LOGIN,
} from "./actions";

const initState = {
	user: null,
};



export const loginReducer = (state: any = initState, action: Action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};
