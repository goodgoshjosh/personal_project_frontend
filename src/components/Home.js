import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
        constructor(props) { //constructing state for the game form
            super(props);
            this.state = {value: ''};
        
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
        
          handleChange(event) {
            this.setState({value: event.target.value});
          }
        
          handleSubmit(event) {
            alert('A game was submitted: ' + this.state.value);
            event.preventDefault();
          }
    
    render() {
        return (
        <div className="Home">
            <h1>Welcome home!</h1>
            <p> This full-stack application uses PostGreSQL and Elephant SQL to make a database that connects to Loopback as its API that then uses NOW to deploy online, that the application fetches and maps onto tables.</p>
            <p> In each system (Nintendo Switch, PS4, and Xbox One), you will see a table that corresponds to this database.</p>
            <p> This site is a work-in-progress. The first time you load it, it may take a few moments for the database to load as NOW's hosting takes a moment to get going.</p>
        

        <p>Below will be where you update data via a form and submit through the selector</p>

        <p>FORM GOES HERE</p>
        
        {/* code for form begins here */}
        <form onSubmit={this.handleSubmit}> 
        <label>
          Game Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={this.handleSubmit}> 
        <label>
          Genre: 
          <input type="text"/>
        </label>
      </form>

      <form onSubmit={this.handleSubmit}> 
        <label>
          Description:
          <input type="text"/>
        </label>
      </form>

      <form onSubmit={this.handleSubmit}> 
        <label>
          Rating:
          <input type="text"/>
        </label>
      </form>

      
      <form onSubmit={this.handleSubmit}> 
        <label>
          Digital Copy:
          <input type="text"/>
        </label>
      </form>


      <form onSubmit={this.handleSubmit}> 
        <label>
          Physical Copy:
          <input type="text"/>
        </label>
      </form>
      
            {/* Console Selector Drop Down */}
            <div class="form-group">
                <select class="custom-select">
                    <option selected="">Console Selector</option>
                    <option value="1">Nintendo Switch</option>
                    <option value="2">PS4</option>
                    <option value="3">Xbox One</option>
                </select>

                <input type="submit" value="Submit" />
             </div>
             </div>
        )
    }
}

export default Home;