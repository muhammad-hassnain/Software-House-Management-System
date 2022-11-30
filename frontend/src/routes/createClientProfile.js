import React from 'react';
import axios from 'axios';
import { Dropdown } from 'bootstrap';

class CreateClientProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client_name: ''}
    }
    render() {
        return (
            <div className = "App">
                <h1>Create Client Profile</h1>
                <p>Please fill in the form below to create a client Profile</p>
                <form onSubmit={(e) => this.validate(e)}>
                    <label> Client Name: </label><br/>
                    <input type="text" id='client_name'></input><br/>
                    <br/><input type="submit" id='submit_create_form' value = "Create Client Profile" onClick = {(e)=>this.validate(e)}></input>
                </form>
            </div>
        );
    }
    
    validate(e) {
        e.preventDefault();
        let client_name = document.getElementById('client_name').value;
        
        if (client_name === '') {
            alert("Please input client name");
        }
        else {
            this.CreateClientProfile2(e);
        }
    }
    
    CreateClientProfile2(e) {
        e.preventDefault();
        let request = {
            client_name : document.getElementById('client_name').value,
           
        }
        // console.log(request)
        axios.post('http://localhost:8080/createclientprofile', request)
        .then(resp => {
            alert(JSON.stringify(resp.data, null,2));
        })
        .catch( err => {
            console.log(err);
        })
    }
}

export default CreateClientProfile;
