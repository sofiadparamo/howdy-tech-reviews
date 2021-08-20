import React from 'react';
import './LoginPage.css';
import './RegisterPage.css';
import SiteAPI from "../api";

class LoginPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            errorMsg: '',
            valid: false,
            username: '',
            password: '',
            passwordConfirm: ''
        }
    }

    render() {
        const handleSubmit = () => {
            if(this.state.username.length === 0 ||
                this.state.password.length === 0 ||
                this.state.passwordConfirm.length === 0){
                this.setState({
                    errorMsg: "You must fill all fields"
                });
            } else if(this.state.password !== this.state.passwordConfirm){
                this.setState({
                    errorMsg: "Passwords don't match"
                })
            } else {
                SiteAPI.register(this.state.username, this.state.password)
                .then((response) => {
                    console.log(response.data)
                  if(response.data.status === "error"){
                      this.setState({
                          errorMsg: response.data.message
                      })
                  } else if(response.data.status === "success"){
                      window.location.replace("/login?ref");
                  }
                })
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

        const onPasswordChangeConfirmation = (ev) => {
            this.setState({
                    passwordConfirm: ev.target.value
            }, () => validateForm());
        }

        const validateForm = () => {
            this.setState({
                    errorMsg: ""
            })
            if(this.state.username.length > 0 && this.state.password.length > 0 && this.state.passwordConfirm.length > 0){
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
                        <h1>Register</h1>
                        <div className="line"/>
                    </div>
                    <form>
                        <input type="text" id="username" name="username" placeholder="Username" onChange={onUsernameChange}>
                        </input>
                        <input type="password" id="password" name="password" placeholder="Password" onChange={onPasswordChange}>
                        </input>
                        <input type="password" id="password-confirmation" name="password-confirmation" placeholder="Confirm Password" onChange={onPasswordChangeConfirmation}>
                        </input>
                        <button type="button" onClick={handleSubmit} className={this.state.valid ? 'valid' : 'invalid'}>Enter</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage
