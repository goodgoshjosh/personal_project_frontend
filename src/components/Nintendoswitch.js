import React, { Component, Fragment } from "react";
import './Nintendoswitch.css';
import { apiURL } from '../App'

// fetch code for using later `${apiURL}/nintendo_switches` remember to not use trailing slashes

class Nintendoswitch extends Component {
    constructor() {
      super();
      this.state = { nsData: [] }
      }

      componentDidMount() {
        
        fetch(`${apiURL}/nintendo_switches`, {
          headers: {
            "Content-Type":"application/json"
          }
        })
        .then(response => response.json() )
        .then(data => this.setState({nsData: data}))
      }
    

    render() {

      let nsData = this.state.nsData

        return (
       
      <div className="Nintendoswitch">
          <h1>Nintendo Switch Game Collection</h1>
          <img class="switchlogo" src="https://seeklogo.com/images/N/nintendo-switch-logo-38D4F5C7E7-seeklogo.com.png" alt='Nintendo Switch Logo'></img>

      {/* {nsData.map(item =>
      <h4 key={item.id}>{item.name}</h4>)} */}

      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Description</th>
          <th scope="col">Rating</th>
          <th scope="col">Digital Copy</th>
          <th scope="col">Physical Copy</th>
          <th scope="col">ID #</th>
        </tr>
      </thead>
     
      <tbody>
      {nsData.map(item =>
      <Fragment key={item.id}>

         <tr class="table-success">
          <td>{item.name}</td>
          <td>{item.genre}</td>
          <td>{item.description}</td>
          <td>{item.rating}</td>
          <td>{item.digital_copy}</td>
          <td>{item.physical_copy}</td>
          <td>{item.id}</td>
        </tr>
        </Fragment> //Fragments don't take up as much dedicated space as a div. This is a parent element that doesn't take up space
      )}
      </tbody>
    </table> 
          
        </div>
       
       )
    }
  }


export default Nintendoswitch;