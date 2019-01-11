import React, { Component, Fragment } from "react";
import './Ps4.css'
import { apiURL } from '../App'

class Ps4 extends Component {
  constructor() {
    super();
    this.state = { ps4Data: [] }
    }

    componentDidMount() {
      
      fetch(`${apiURL}/ps4s`, {
        headers: {
          "Content-Type":"application/json"
        }
      })
      .then(response => response.json() )
      .then(data => this.setState({ps4Data: data}))
    }
  

  render() {

    let ps4Data = this.state.ps4Data

      return (
        <div className="Ps4">
            <h1>PS4 Game Collection</h1>
            <img class="ps4logo" src="https://vignette.wikia.nocookie.net/destinypedia/images/1/13/Ps4.png/revision/latest?cb=20141023020943" alt='PS4 Logo'></img>
        
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
      {ps4Data.map(item =>
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
export default Ps4;