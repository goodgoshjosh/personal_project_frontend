import React, { Component } from "react";
import './Xboxone.css'

class Xboxone extends Component {
    render() {
        return (
        <div className="Xboxone">
            <h1>Xbox One Game Collection</h1>
            <img class='xboxlogo' src='https://media.ctrl.blog/1b/5d/xbox_logo_1024/300x300.png' alt='Xbox Logo' />
       
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

export default Xboxone;