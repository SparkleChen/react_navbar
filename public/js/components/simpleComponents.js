import React,{Component} from 'react'

class Simple extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {value, onIncreaseClick} = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        );
    }
}
export default Simple;