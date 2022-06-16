import { configureStore } from "@reduxjs/toolkit";
// import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./modules/root"; // import { rootEpic, rootReducer } from "./modules/root";


// const epicMiddleware = createEpicMiddleware();

const store = configureStore({
	reducer: {
		...rootReducer
	},
	// middleware: [epicMiddleware]
});

// epicMiddleware.run(rootEpic);


export default store;


