import { Component } from "react";

export class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        console.log('B constructor')
    }

    render() {
        console.log('B render');
        return <h2>Component B</h2>
    }

    componentDidMount() {
        console.log('B componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('B componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('B componentWillUnmount');
    }
}