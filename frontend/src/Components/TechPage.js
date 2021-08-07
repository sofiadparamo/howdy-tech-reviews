import React from 'react';
import './TechPage.css';


class TechPage extends React.Component{
    render() {

        let tech_name = "Lenovo Ideapad 330s";
        let score = 4;

        return(
            <div className="tech-page">
                <div className="tech-box">
                    <div className="logo"/>
                    <div className="head-container">
                        <div className="line"/>
                        <h1>Tech</h1>
                        <div className="line"/>
                    </div>
                    <form>
                        <button type="button" >Button</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TechPage
