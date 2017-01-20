import * as C from "./constants.jsx";

export default function calcReducer(state = {total: 0}, action){
	switch (action.type){
		case C.ADD_NUMBER:
			return { total: state.total + action.amount };
		case C.SUBTRACT_NUMBER:
			return { total: state.total - action.amount };
		case C.MULTIPLY_NUMBER:
			return { total: state.total * action.by };
		default:
			return state;
	}
}