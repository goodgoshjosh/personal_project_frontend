import React, { Component } from "react";
import './Ps4.css'

class Ps4 extends Component {
    render() {
        return (
        <div className="Ps4">
            <h1>PS4 Game Collection</h1>
            <img class="ps4logo" src="https://vignette.wikia.nocookie.net/destinypedia/images/1/13/Ps4.png/revision/latest?cb=20141023020943" alt='PS4 Logo'></img>
        
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
export default Ps4;