import React from "react";
import ReactDOM from "react-dom";

class FullName extends React.Component {
    render() {
        return <h4>Hey {this.props.name}</h4>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    // will be called when component completely rendered to dom
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // will be called before rendering component to dom
    componentWillMount() {

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <FullName name="Tuhin Beppari"/>
                <p>
                    <small>Its {this.state.date.toLocaleTimeString()}</small>
                </p>
            </div>
        );
    }
}

export default App;
ReactDOM.render(<App/>, document.getElementById("root"));