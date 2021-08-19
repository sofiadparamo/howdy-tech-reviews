import React from 'react';
import './LoginPage.css';


class LoginPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            errorMsg: '',
            valid: false,
            username: '',
            password: ''
        }
    }

    render() {

        const handleSubmit = () => {
            if(this.state.username.length === 0 ||
                this.state.password.length === 0){
                this.setState({
                    errorMsg: "You must fill all fields"
                });
            } else {
                console.log(this.state.username);
                console.log(this.state.password);
            }
        }

        const onUsernameChange = (ev) => {
            this.setState({
                    username: ev.target.value
            }, () => validateForm());
        }

        const onPasswordChange = (ev) => {
            this.setState({
                    password: ev.target.value
            }, () => validateForm());
        }

        const validateForm = () => {
            this.setState({
                    errorMsg: ""
            })
            if(this.state.username.length > 0 && this.state.password.length > 0){
                this.setState({
                    valid: true
                })
            } else {
                this.setState({
                    valid: false
                })
            }

        }

        return(
            <div className="login-page">
                <div className="login-box">
                    { this.state.errorMsg.length > 0 &&
                        <h1 className={'error-message'}>{this.state.errorMsg}</h1>
                    }
                    <div className="logo"/>
                    <div className="head-container">
                        <div className="line"/>
                        <h1>Login</h1>
                        <div className="line"/>
                    </div>
                    <form>
                        <input type="text" id="username" name="username" placeholder="Username" onChange={onUsernameChange}>
                        </input>
                        <input type="password" id="password" name="password" placeholder="Password" onChange={onPasswordChange}>
                        </input>
                        <button type="button" onClick={handleSubmit} className={this.state.valid ? 'valid' : 'invalid'}>Enter</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage
