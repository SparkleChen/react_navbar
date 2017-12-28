// Map Redux state to component props
import React from 'react'
import {connect} from "react-redux";
import Simple from '../components/simpleComponents'
import increaseAction from '../actions/simpleAction'




function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction())
    }
}

// Connected Component
export  default connect(
    mapStateToProps,
    mapDispatchToProps
)(Simple);