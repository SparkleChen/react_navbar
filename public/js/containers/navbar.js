import React, { Component } from 'react'
import { connect } from 'react-redux'
import  {fetchdata}  from '../actions/navbar_action'
import I_nav from '../components/I_nav'

class Aa extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
       this.props.dispatch(fetchdata());
    }
    render() {

        return (
            <div id='i_navbar'>
                <div id="i_nav_back" className="container" >
                    <I_nav nickname={this.props.nickname}/>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        nickname: state.nickname
    }
}

export default connect(mapStateToProps)(Aa);
