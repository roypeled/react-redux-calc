import React from "react";
import * as C from "./constants.jsx";
import {connect} from "react-redux";

class Calculator extends React.Component {

	render(){
		return(
			<div>
				<input type="number" ref={ (el)=> this.input = el }/>
				<button onClick={ ()=> this.props.add(this.input.value) }>+</button>
				<button onClick={ ()=> this.props.subtract(this.input.value) }>-</button>
				<button onClick={ ()=> this.props.multiply(this.input.value) }>*</button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return {
		add: (amount)=> dispatch({ type: C.ADD_NUMBER, amount: parseInt(amount) }),
		subtract: (amount)=> dispatch({ type: C.SUBTRACT_NUMBER, amount: parseInt(amount) }),
		multiply: (amount)=> dispatch({ type: C.MULTIPLY_NUMBER, by: parseInt(amount) })
	}
}

export default connect(null, mapDispatchToProps) (Calculator);