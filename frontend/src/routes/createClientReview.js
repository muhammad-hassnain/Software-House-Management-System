import React from 'react';
import axios from 'axios';
import { Dropdown } from 'bootstrap';

class CreateClientReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client_id: '',
            content: '',
            project_id: '',
            submitted_by:''
            // created_at:''
        }
    }
    render() {
        return (
            <div className = "App">
                <h1>Create Client Review</h1>
                <p>Please fill in the form below to create a client review</p>
                <form onSubmit={(e) => this.validate(e)}>
                    <label> Client ID: </label><br/>
                    <input type="text" id='client_id'></input><br/>
                    <label> Project ID: </label><br/>
                    <input type="text" id='project_id'></input><br/>
                    <label> Content: </label><br/>
                    <input type="text" id='content'></input><br/>
                    <label> Submitted By (ID) : </label><br/>
                    <input type = "text" id = "submitted_by"></input><br/>
                    <br/><input type="submit" id='submit_create_form' value = "Create Client Review" onClick = {(e)=>this.validate(e)}></input>
                </form>
            </div>
        );
    }
    getTimestamp(){
        
        let newDate = new Date()
        let timestamp = newDate.getTime()
        return `${timestamp}`
    }
    
    validate(e) {
        e.preventDefault();
        let client_id = document.getElementById('client_id').value;
        let project_id = document.getElementById('project_id').value;
        let content = document.getElementById('content').value;
        let submitted_by = document.getElementById('submitted_by').value;

        if (client_id === '' ||  project_id === '' || content === '' || submitted_by === '' ) {
            alert("Please fill all the fields");
        }
        else {
            this.createClientReview2(e);
        }
    }
    
    createClientReview2(e) {
        e.preventDefault();
        let request = {
            client_id : document.getElementById('client_id').value,
            project_id : document.getElementById('project_id').value,
            content : document.getElementById('content').value,
            submitted_by : document.getElementById('submitted_by').value
            // created_at : this.getTimestamp()
        }
        // console.log(request)
        axios.post('http://localhost:8080/createClientReview', request)
        .then(resp => {
            alert(JSON.stringify(resp.data, null,2));
        })
        .catch( err => {
            console.log(err);
        })
    }
}

export default CreateClientReview;
