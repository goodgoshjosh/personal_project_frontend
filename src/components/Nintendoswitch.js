import React, { Component, Fragment } from "react";
import './Nintendoswitch.css';
import { apiURL } from '../App'

// fetch code for using later `${apiURL}/nintendo_switches` remember to not use trailing slashes

class Nintendoswitch extends Component {
    constructor() {
      super();
      this.state = { 
        nsData: [],  //declaring the state for Nintendo Switch Data which comes as an array via SQL
        name: '',
        genre: '',
        description: '',
        rating: '',
        digital: '',
        physical: '',
        id: '',
        modalname: '',
        modalgenre: '',
        modaldescription: '',
        modalrating: '',
        modaldigital: '',
        modalphysical: '',
        modalid: '' } 
      }
    
      // handleFormChange(event) {
    //     this.setState({})
    // }
    // handleSendForm(e) {
    //     e.preventDefault(e)
    // }

    //POST CODE
    handleSubmit = async e => {
      alert("A game was submitted")
      e.preventDefault(); 
      const formData = JSON.stringify({
        name: this.state.name,
        genre: this.state.genre,
        description: this.state.description,
        rating: this.state.rating,
        digital_copy: this.state.digital,
        physical_copy: this.state.physical
      });

      await fetch(`${apiURL}/nintendo_switches`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json" //sending json instead of object. where it's going and what kind
        }
      });
    };
    
    //DELETE CODE
    handleDeleteItem = async id => {
      await fetch(`${apiURL}/nintendo_switches/` + id, {
        method: "DELETE"
      });
      // await this.componentDidMount();
    };

    //UPDATE CODE
    handleUpdate = async id => {

      const newData = JSON.stringify({
          name: this.state.modalname,
          genre: this.state.modalgenre,
          description: this.state.modaldescription,
          rating: this.state.modalrating,
          digital: this.state.modaldigital,
          physical: this.state.modalphysical
        });
      
      await fetch(`${apiURL}/nintendo_switches/` + id, {
        method: 'PUT',
        body: newData,
        headers: {
          "Content-Type": "application/json"
        }
      });
  };

      componentDidMount() {
        //below is the fetch that pulls from the apiURL via NOW
        fetch(`${apiURL}/nintendo_switches`, {
          headers: {
            "Content-Type":"application/json"
          }
        })
        .then(response => response.json() ) //When the app fetches the data, it then sets that data below via setState
        .then(data => this.setState({nsData: data}))
      }
    
    render() {

      let nsData = this.state.nsData //declaring nsData to prep for being returned below

        return (
       
      <div className="Nintendoswitch">
          <h1>Nintendo Switch Game Collection</h1>
          <img className="switchlogo" src="https://seeklogo.com/images/N/nintendo-switch-logo-38D4F5C7E7-seeklogo.com.png" alt='Nintendo Switch Logo'></img>

          <Fragment className="Form">
        <form onSubmit={this.handleSubmit}>
        <label>
          Game Name:
          <input type="text" onChange={e => this.setState({name: e.target.value})} id='name' placeholder="Game Name"/>        
          </label><br />
          <label>
          Genre:
          <input type="text" onChange={e => this.setState({genre: e.target.value})} id='genre' placeholder="RPG, Action, etc"/>        
          </label><br />
          <label>
          Description:
          <input type="text" onChange={e => this.setState({description: e.target.value})} id='description' placeholder="Brief description"/>        
          </label><br />
          <label>
          Rating:
          <input type="text" onChange={e => this.setState({rating: e.target.value})} id='rating' placeholder="Everyone, Teen, etc"/>        
          </label><br />
          <label>
          Digital Copy:
          <input type="text" onChange={e => this.setState({digital: e.target.value})} id='digital' placeholder="Yes or No"/>        
          </label><br />
          <label>
          Physical Copy:
          <input type="text" onChange={e => this.setState({physical: e.target.value})} id='physical' placeholder="Yes or No"/>        
          </label><br />
          <button type="submit" className="btn btn-primary">
         Submit
         </button>
         </form>
         </Fragment>

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
          <th scope="col">Delete</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
     
      <tbody>
        {/* //this code below then maps the data based off the unique ID which is a primary key from the database,
        and it is then mapped via item.name, .genre, etc to correspond with the table header above  */}
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
          <td><button onClick={() => this.handleDeleteItem(item.id)}>
              {" "}
              Delete{" "}
            </button></td>
          <td><button type="button"  data-toggle="modal" data-target="#exampleModal">
              Edit
            </button></td>
        </tr>
        </Fragment> //Fragments don't take up as much dedicated space as a div. This is a parent element that doesn't take up space
      )}
      </tbody>
    </table> 


    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit all information</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
 
      <form onSubmit={e => this.handleUpdate}>
        <label>
          Game Name:
          <input type="text" onChange={e => this.setState({modalname: e.target.value})} 
          id='name' 
          placeholder="Game Name"/>        
          </label><br />
          <label>
          Genre:
          <input type="text" onChange={e => this.setState({modalgenre: e.target.value})} id='genre' placeholder="RPG, Action, etc"/>        
          </label><br />
          <label>
          Description:
          <input type="text" onChange={e => this.setState({modaldescription: e.target.value})} id='description' placeholder="Brief description"/>        
          </label><br />
          <label>
          Rating:
          <input type="text" onChange={e => this.setState({modalrating: e.target.value})} id='rating' placeholder="Everyone, Teen, etc"/>        
          </label><br />
          <label>
          Digital Copy:
          <input type="text" onChange={e => this.setState({modaldigital: e.target.value})} id='digital' placeholder="Yes or No"/>        
          </label><br />
          <label>
          Physical Copy:
          <input type="text" onChange={e => this.setState({modalphysical: e.target.value})} id='physical' placeholder="Yes or No"/>        
          </label><br />
          <button type="submit" className="btn btn-primary">
         Submit
         </button>
         </form>
         </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>



    </div>
       )
    }
  }


export default Nintendoswitch;