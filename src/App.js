import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Login from './Login'

class FullName extends React.Component {
    render() {
        return <h4>Hey {this.props.name}</h4>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showTime: true,
            token: null,
            user: null
        };
        this.stopTimer = this.stopTimer.bind(this);
    }

    // will be called when component completely rendered to dom
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    setToken(token) {
        this.setState({
            token: token
        })
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    setUser(user) {
        this.setState({
            user: user
        })
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

    stopTimer(e) {
        e.preventDefault();
        if (this.state.showTime == true) {
            this.componentWillUnmount()
            this.setState({showTime: false});
        } else {
            this.componentDidMount();
            this.setState({showTime: true});
        }

    }

    render() {
        return (
            <div>
                <FullName name="Tuhin Beppari"/>
                <p>
                    <small>Its {this.state.date.toLocaleTimeString()}</small>
                    <button onClick={this.stopTimer}>Stop Timer</button>

                    <Login token={this.setToken} user={this.setUser}/>
                </p>
            </div>
        );
    }
}

export default App;
ReactDOM.render(<App/>, document.getElementById("root"));