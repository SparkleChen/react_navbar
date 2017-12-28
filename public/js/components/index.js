/*
var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../get');
require("../../css/navbar.css");

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: ""
        };
        this.getData();
    }

    render() {
		var arr = this.state.messageList; 
        return <section className="pageContentInner">
            <div className="head-section"><h1>MessageLists: </h1></div>
            <ul>
                {arr}
            </ul>
        </section>;
    }

    getData() {
        var self = this;
		store.getAllData(function(data){
			self.setState({messageList:data.name});
		});
    }
}

ReactDOM.render(
  <MessageList />,
  document.getElementById('i_navbar')
);*/
