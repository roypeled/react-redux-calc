import React from "react";
import {connect} from "react-redux";

class CalculatorDisplay extends React.Component {

	render(){
		return(
			<div>
				{this.props.total}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		total: state.total
	}
}

export default connect(mapStateToProps, null) (CalculatorDisplay);