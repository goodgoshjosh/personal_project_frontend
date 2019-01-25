import React, { Component } from "react";
import './Nintendoswitch.css';
import { apiURL } from '../App'

// fetch code for using later `${apiURL}/nintendo_switches` remember to not use trailing slashes

class puttest extends Component {
    constructor(props) {
      super(props);
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
        modalid: '',
        fromNS: this.props.location.state.fromNs.editFormId}
      }
    
      // handleFormChange(event) {
    //     this.setState({})
    // }
    // handleSendForm(e) {
    //     e.preventDefault(e)
    // }

    //POST CODE
    // handleSubmit = async e => {
    //   alert("A game was submitted. Please refresh")
    //   e.preventDefault(); 
    //   const formData = JSON.stringify({
    //     name: this.state.name,
    //     genre: this.state.genre,
    //     description: this.state.description,
    //     rating: this.state.rating,
    //     digital_copy: this.state.digital,
    //     physical_copy: this.state.physical
    //   });

    //   await fetch(`${apiURL}/nintendo_switches`, {
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //       "Content-Type": "application/json" //sending json instead of object. where it's going and what kind
    //     }
    //   });
    // };
    
    // //DELETE CODE
    // handleDeleteItem = async id => {
    //   alert("This game was deleted. Please refresh")
    //   await fetch(`${apiURL}/nintendo_switches/` + id, {
    //     method: "DELETE"
    //   });
    // };

    //PUT (update) CODE
    handleUpdate = async id => {

      const newData = JSON.stringify({
          name: this.state.modalname,
          genre: this.state.modalgenre,
          description: this.state.modaldescription,
          rating: this.state.modalrating,
          digital_copy: this.state.modaldigital,
          physical_copy: this.state.modalphysical
        });
      
      await fetch(`${apiURL}/nintendo_switches/` + id, {
        method: 'PUT',
        body: newData,
        headers: {
          "Content-Type": "application/json"
        }
      });
  };

      componentDidMount(id) {
        //below is the fetch that pulls from the apiURL via NOW
        fetch(`${apiURL}/nintendo_switches/` + this.state.fromNS, {
          headers: {
            "Content-Type":"application/json"
          }
        })
        .then(response => response.json() ) //When the app fetches the data, it then sets that data below via setState
        .then(data => this.setState({
            modalname: data.name,
            modalgenre: data.genre,
            modaldescription: data.description,
            modalrating: data.rating,
            modaldigital: data.digital_copy,
            modalphysical: data.physical_copy,
            id: data.id
        }))
      }
    
    render() {

      let nsData = this.state.nsData //declaring nsData to prep for being returned below

        return (
    
      <div>
      <form onSubmit={() => this.handleUpdate(this.state.id)}>
        <label>
          Game Name:
          <input type="text" onChange={e => this.setState({ modalname: e.target.value })} 
          id='name' 
          value = {this.state.modalname} />        
          </label><br />
          <label>
          Genre:
          <input type="text" onChange={e => this.setState({modalgenre: e.target.value})} 
          id='genre' 
          value = {this.state.modalgenre}/>        
          </label><br />
          <label>
          Description:
          <input type="text" onChange={e => this.setState({modaldescription: e.target.value})} 
          id='description' 
          value = {this.state.modaldescription}/>        
          </label><br />
          <label>
          Rating:
          <input type="text" onChange={e => this.setState({modalrating: e.target.value})} 
          id='rating' 
          value = {this.state.modalrating}/>        
          </label><br />
          <label>
          Digital Copy:
          <input type="text" onChange={e => this.setState({modaldigital: e.target.value})} 
          id='digital' 
          value = {this.state.modaldigtal}/>        
          </label><br />
          <label>
          Physical Copy:
          <input type="text" onChange={e => this.setState({modalphysical: e.target.value})} 
          id='physical' 
          value = {this.state.modalphysical}/>        
          </label><br /> 
        <button type="submit" className="btn btn-primary">
         Edit
         </button>
         </form>
      
         </div>
     

      )
    }
}
        
      
export default puttest;