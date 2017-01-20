import Calculator from "./calculator.jsx";
import CalculatorDisplay from "./calculatorDisplay.jsx";
import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers.jsx";

let store = createStore(reducers, {total: 0});


render(
	<Provider store={store}>
		<div>
			<CalculatorDisplay/>
			<Calculator/>
		</div>
	</Provider>,
	document.body
);


