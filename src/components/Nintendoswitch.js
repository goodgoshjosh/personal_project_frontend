import React, { Component } from "react";
import './Nintendoswitch.css';

class Nintendoswitch extends Component {
    render() {
        return (
       
        <div className="Nintendoswitch">
            <h1>Nintendo Switch Game Collection</h1>
            <img class="switchlogo" src="https://seeklogo.com/images/N/nintendo-switch-logo-38D4F5C7E7-seeklogo.com.png" alt='Nintendo Switch Logo'></img>
        
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Game</th>
      <th scope="col">Genre</th>
      <th scope="col">Description</th>
      <th scope="col">Rating</th>
      <th scope="col">Digital Copy</th>
      <th scope="col">Physical Copy</th>
      <th scope="col">ID #</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-success">
      <th scope="row">Success</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
  </tbody>
</table> 
        </div>
       
       )
    }
}


export default Nintendoswitch;