import React from 'react'
import html from './data/navbarList'
import { Link } from 'react-router-dom';


export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let items = [];
        for (let i = 0, len = html.length; i < len; i++) {
            if (html[i].dropdown) {
                items.push(<Card_brand key={i} value={html[i]} index={i} isOpen={this.props.isOpen}/>);
            }
        }
        return (
            <div id="i_card_back" className="card card-inverse"
                 style={{height: this.props.i_card_back_height}}>
                <div className="card-block">
                    {items}
                </div>
            </div>
        );
    }
}

class Card_brand extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       // <a key={item[i].href}  href={item[i].href} id={item[i].id}></a>
    }

    getBrandComponents() {
        let item = this.props.value.dropdown;
        let big = [];
        for (let i = 0, len = this.props.value.dropdown.length; i < len; i++) {
            big.push(
                <Link to='/echarts' id={item[i].id} key={item[i].href}>
                    <div className="i-card-d">
                        <img
                            src={"../../image/" + (item[i].href ? item[i].href : "logout") + "_white.png"}/>
                        <span>{item[i].text}</span>
                    </div>
                </Link>
            );
        }
        return big;
    }

    render() {
        return (
            <div className="card i_card_back_b">
                <div className="card-header" role="tab" id={"heading" + this.props.index}>
                    <img src={"../../image/" + html[this.props.index].href + "_white.png"}/>
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                       href={"#collapse" + this.props.index} aria-expanded="true"
                       aria-controls={"collapse" + this.props.index}>{html[this.props.index].text}</a>
                </div>
                <div id={"collapse" + this.props.index} className="collapse"
                     role="tabpanel"
                     aria-labelledby={"heading" + this.props.index}>
                    {this.getBrandComponents()}
                </div>
            </div>
        );
    }
}