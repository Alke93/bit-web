import { Component } from "react";

export class StateTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Lorem ipsum'
        }

        this.changeText = this.changeText.bind(this)
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.changeText}>Change text</button>
            </div>
        )
    }

    changeText() {
        this.setState({text:'Lorem ipsum dolores'});
    }
}