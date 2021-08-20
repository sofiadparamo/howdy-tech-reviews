import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import SiteAPI from "../api";

class NavigationBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: ""
        }

        this.logout = this.logout.bind(this);

        let token = localStorage.getItem("token")
        if(!token)
            token = ""

        SiteAPI.session(token)
        .then((response) => {
            let status = response.data.status;
            if(status === "not logged in" || status === "session expired"){
                console.warn(status)
                localStorage.clear()
            } else {
                console.log(status)
                console.log(response.data.username.username)
                this.setState({
                    username: response.data.username.username
                })
            }
        }).catch(err => console.log(err))
    }

    logout() {
        localStorage.clear()
        this.setState({
            username: ""
        })
    }

    render(){
        return (
            <header>
            <nav>
                <div className="nav-buttons">
                    <div className="logo ltr"/>
                    <Link className="link ltr" to="/">Home</Link>
                    <Link className="link ltr" to="/NewPostPage">New Post</Link>
                    <div className="space"/>
                    {this.state.username.length > 0 ?
                            <Link className="link rtl" to="/login" onClick={this.logout}>{this.state.username}</Link>
                        : <>
                            <Link className="link rtl" to="/login">Login</Link>
                            <Link className="link rtl" to="/register">Register</Link>
                        </>
                    }
                </div>
            </nav>
          </header>
        )
    }
}

export default NavigationBar
