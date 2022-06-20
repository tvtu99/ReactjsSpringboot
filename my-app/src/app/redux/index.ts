// import { configureStore } from "@reduxjs/toolkit";
// import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./modules/root"; 
// import { rootEpic, rootReducer } from "./modules/root";
import { createStore} from 'redux'

// const epicMiddleware = createEpicMiddleware();

// const store = configureStore({
// 	reducer: {
// 		...rootReducer
// 	},
// 	// middleware: [epicMiddleware]
// });

// epicMiddleware.run(rootEpic);

const store = createStore(rootReducer);
export default store;


