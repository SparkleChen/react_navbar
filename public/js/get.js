/*
var EventEmitter = require('events').EventEmitter;

class Store_MessageList extends EventEmitter {
    constructor(props) {
		super(props);
        this.allData = null;
    }

    getAllData(callback) {
        var self = this;
        fetch(
            "http://localhost:3000/navbar/data",{
                method: 'GET',
                mode:'cors',
                cache: 'default'
            }
        )
        .then(function(res) {
           if (res.ok) {
                res.json().then(function(data) {
                    self.allData = data;
                    callback(self.allData);
                });
            } else {
                console.log("Looks like the response wasn't perfect, got status", res.status);
            }
        }, function(e) {
            console.log("Fetch failed!", e);
        });
    }
}

module.exports = new Store_MessageList();*/
