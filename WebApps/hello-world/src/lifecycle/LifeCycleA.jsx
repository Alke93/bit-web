import { LifeCycleB } from "./LifeCycleB";

const { Component } = require("react")

export class LifeCycleA extends Component {

    constructor(props) {
        super(props);
        console.log('A constructor');
        this.state = {
            name: 'Nikola'

        }

        this.changeName = this.changeName.bind(this);
        this.changeValueName = this.changeValueName.bind(this);
    }

    changeName() {
        this.setState({ name: 'Nikola Alic' })
    }

    changeValueName(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        console.log('A render');
        let componentB = <LifeCycleB />;
        if(this.state.name != 'Nikola') {
            componentB = null;
        }
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Change state</button>
                <input value={this.state.name} onChange={this.changeValueName}/>
                {componentB}
            </div>
        )
    }

    componentDidMount() {
        console.log('A componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('A componentDidUpdate')
    }

}