import React, { Component, Fragment } from "react";
import './Xboxone.css'
import { apiURL } from '../App'

class Xboxone extends Component {
  constructor() {
    super();
    this.state = { xboxData: [] }
    }

    componentDidMount() {
      
      fetch(`${apiURL}/xbox_ones`, {
        headers: {
          "Content-Type":"application/json"
        }
      })
      .then(response => response.json() )
      .then(data => this.setState({xboxData: data}))
    }
  

  render() {

    let xboxData = this.state.xboxData

        return (
        <div className="Xboxone">
            <h1>Xbox One Game Collection</h1>
            <img class='xboxlogo' src='https://media.ctrl.blog/1b/5d/xbox_logo_1024/300x300.png' alt='Xbox Logo' />
       
   
   
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
      {xboxData.map(item =>
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

export default Xboxone;