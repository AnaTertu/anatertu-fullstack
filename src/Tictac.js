import React, {Component} from 'react';

export class Tictac extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

render() {
    return(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
}

export default Tictac;

//ReactDOM.render(
   // <Tictac/>,
   // document.getElementById('root')
//);
