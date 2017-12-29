import React from 'react'

export default class I_nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {nickname} = this.props;
        return (
            <nav id="i_nav" className="nav fixed-top navbar-inverse">
                <a id="i_nav_log" className="navbar-brand" href="#">Online-Log</a>
                <I_nav_right nickname={nickname}/>
            </nav>
        );
    }
}

class I_nav_right extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="i_nav_right">
                <a className="navbar-brand" href="#">{this.props.nickname}</a>
            </div>
        );
    }
}
