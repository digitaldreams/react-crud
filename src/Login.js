import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'rosemichele12@gmail.com',
            password: '123456',
            token: null
        }
    }


    componentWillMount() {

    }

    componentDidMount() {
        this.token();
    }

    token() {
        axios.defaults.baseURL = 'http://laracrud.test';
        axios.defaults.headers.post['Content-Type'] = 'Application/json';
        return axios.post('/api/auth/token', {
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        })
    }

    render() {
        return <button>Login</button>
    }

}

export default Login;