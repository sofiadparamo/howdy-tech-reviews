import React from 'react';
import './LoginPage.css';


class LoginPage extends React.Component{
    render() {

        let email = "";
        let password = "";

        const handleSubmit = (ev) => {
            if(!validateForm())
                return;
            console.log(email);
            console.log(password);
        }

        const onEmailChange = (ev) => {
            email = ev.target.value;
            validateForm();
        }

        const onPasswordChange = (ev) => {
            password = ev.target.value;
            validateForm();
        }

        const validateForm = () => {
            return email.length > 0 && password.length > 0;
        }

        return(
            <div className="login-page">
                <div className="login-box">
                    <div className="logo"/>
                    <div className="head-container">
                        <div className="line"/>
                        <h1>Login</h1>
                        <div className="line"/>
                    </div>
                    <form>
                        <input type="text" id="email" name="email" placeholder="Email or username" onChange={onEmailChange}>
                        </input>
                        <input type="password" id="password" name="password" placeholder="Password" onChange={onPasswordChange}>
                        </input>
                        <button type="button" onClick={handleSubmit} className={validateForm? 'valid' : 'invalid'}>Enter</button>
                    </form>
                </div>
            </div>
        )
    }
}


/*const LoginPage = () => (
  <div className="login-page">
    <div className="login-box">
        <div className="logo"/>
        <div className="head-container">
            <div className="line"/>
            <h1>Login</h1>
            <div className="line"/>
        </div>
        <form>
            <input type="text" id="email" name="email" placeholder="Email or username" onChange={onEmailChange}>
            </input>
            <input type="password" id="password" name="password" placeholder="Password" onChange={onPasswordChange}>
            </input>
            <button type="button" onClick={handleSubmit} className={classNameButton}>Enter</button>
        </form>
    </div>
  </div>
)*/

export default LoginPage
