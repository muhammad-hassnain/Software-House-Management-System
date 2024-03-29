import React from 'react';
import axios from 'axios';
import { Dropdown } from 'bootstrap';
import BACKEND_LINK from "./env.js";

class CreateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form_name: '',
            // form_description: '',
            assigned_to: '',
            date_start: '',
            date_end: '',
            revenue: '',
            client_id: '',
            status: '',
            options: [
                {value : "in progress", label : "in progress"},
                {value : "completed", label : "completed"},
                {value : "canceled", label : "canceled"}
            ]
        }
    }
    render() {
        return (
            <div className = "p-10 bg-sky-100 rounded-2xl myflex-container">
                <h1>Create Project</h1>
                <p>Please fill in the form below to create a project</p>
                <form onSubmit={(e) => this.validate(e)} className="form-myflex-container">
                    <label> Project Name: </label><br/>
                    <input className="bordersolid text-gray-900 block pb-2" type="text" id='form_name'></input><br/>
                    {/* <label> Project Description: </label><br/>
                    <input type="text" id='form_description'></input><br/> */}
                    <label> Assigned to PM ID: </label><br/>
                    <input className="bordersolid text-gray-900 block pb-2" type="text" id='assigned_to'></input><br/>
                    <label> Start Time : </label><br/>
                    <input className="bordersolid text-gray-900 block pb-2" type = "Date" id = "date_start" ></input><br/>
                    <label > End Time : </label><br/>
                    <input className="bordersolid text-gray-900 block pb-2" type = "Date" id = "date_end" ></input><br/>
                    <label> Revenue : </label> <br/>
                    <input className="bordersolid text-gray-900 block pb-2" type = "number" id = "revenue"></input><br/>
                    <label> Client ID : </label><br/>
                    <input className="bordersolid text-gray-900 block pb-2" type = "number" id = "client_id"></input><br/>
                    <br/><input className="custombutton bg-blue-500 text-white rounded hover:bg-blue-800" type="submit" id='submit_create_form' value = "Create Project" onClick = {(e)=>this.validate(e)}></input>
                </form>
            </div>
        );
    }
    
    
    getCurrentDate(separator=''){
        
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
    
    validate(e) {
        e.preventDefault();
        // alert("here");
        let form_name = document.getElementById('form_name').value;
        // let form_description = document.getElementById('form_description').value;
        let assigned_to = document.getElementById('assigned_to').value;
        let date_start = document.getElementById('date_start').value;
        let date_end = document.getElementById('date_end').value;
        let revenue = document.getElementById('revenue').value;
        let client_id = document.getElementById('client_id').value;
        // let status = document.getElementById('status').value;
        // console.log(date_start , date_end)
        const current_date = this.getCurrentDate('-')
        // console.log(current_date)
        // form_description === '' ||
        if (form_name === '' ||  assigned_to === '' || date_start === '' || date_end === '' || revenue === '' || client_id === '' ) {
            // console.log("Please fill all the fields");
            alert("Please fill all the fields");
        }
        else if(Date(date_end) < Date(current_date))
        {
            alert("Please select a valid date")
        }
        else if(Date(date_end) < Date(date_start))
        {
            // console.log("here")
            alert("End date must be greater than start date")
        }
        else if(revenue <= 0)
        {
            alert("revenue must be postive")
        }
        else {
            this.createProject2(e);
        }
    }
    
    createProject2(e) {
        e.preventDefault();
        let request = {
            form_name: document.getElementById('form_name').value,
            // form_description: document.getElementById('form_description').value,
            assigned_to: document.getElementById('assigned_to').value,
            date_start: document.getElementById('date_start').value,
            date_end: document.getElementById('date_end').value,
            revenue: document.getElementById('revenue').value,
            client_id: document.getElementById('client_id').value,
            // status: document.getElementById('status').value
        }
        // console.log(request)
        axios.post(BACKEND_LINK + "/createproject", request)
        .then(resp => {
            // console.log(resp);
            alert(JSON.stringify(resp.data.message, null,2));
            
        })
        .catch( err => {
            console.log(err);
        })
    }
}

export default CreateProject;
