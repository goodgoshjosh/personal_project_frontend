import React, { Component, Fragment } from "react";
import "./Home.css"

class Home extends Component {
    render() {
        return (
        <div className="Home">
            <h1>Welcome home!</h1>
            <p> This full-stack application uses PostGreSQL and Elephant SQL to make a database that connects to Loopback as its API that then uses NOW to deploy online, that the application fetches and maps onto tables.</p>
            <p>In each system (Nintendo Switch, PS4, and Xbox One), you will see a table that corresponds to this database.</p>
        </div>        
        )
    }
}

export default Home;