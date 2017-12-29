import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchdata,windowsResizeStyle} from '../actions/navbar_action'
import I_nav from '../components/I_nav'
import Card from '../components/Card'

class Aa extends Component {
    constructor(props) {
        super(props);
        this.onWindowResize = this.onWindowResize.bind(this);
    }
    componentDidMount() {
       this.props.dispatch(fetchdata());
       window.addEventListener('resize', this.onWindowResize);
    }
    onWindowResize(e) {
        this.props.dispatch(windowsResizeStyle());
    }
    render() {
        let {i_card_back_height} = this.props;
        let isOpen = false;
        return (
            <div id='i_navbar'>
                <div id="i_nav_back" className="container" >
                    <I_nav nickname={this.props.nickname}/>
                </div>
                <Card i_card_back_height={i_card_back_height} isOpen={isOpen}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state;
}


export default connect(mapStateToProps)(Aa);
