import React from 'react';
import axios from 'axios';
import { Dropdown } from 'bootstrap';

// const options = [
//     {value : "in progress", label : "in progress"},
//     {value : "completed", label : "completed"},
//     {value : "canceled", label : "canceled"}
// ]

function CreateProject()
{
    return (
        <div className = "App">
            <h1>Create Project</h1>
            <form onSubmit={(e) => createProject(e)}>
                <label> Project Name: </label><br/>
                <input type="text" id='form_name'></input><br/>
                <label> Project Description: </label><br/>
                <input type="text" id='form_description'></input><br/>
                <label> Assigned to: </label><br/>
                <input type="text" id='assigned_to'></input><br/>
                <label> Start Time : </label><br/>
                <input type = "Date" id = "date" ></input><br/>
                <label > End Time : </label><br/>
                <input type = "Date" id = "date" ></input><br/>
                {/* <label> Status: </label><br/> */}
                {/* <select id  = "status">
                    <option value = "in progress">in progress</option>
                    <option value = "completed">completed</option>
                    <option value = "canceled">canceled</option>
                </select>
                <br/> */}
                <label> Revenue : </label> <br/>
                <input type = "number" id = "revenue"></input><br/>
                <label> Client ID : </label><br/>
                <input type = "number" id = "client_id"></input><br/>
                {/* <label >Assigned To </label> <br/>
                <input type = "text" id = "assigned_to"></input><br/> */}

                <br/><input type="submit" id='submit_create_form' ></input>
            </form>
        </div>
    );
}

function createProject(e)
{
    e.preventDefault();
    let request = {
        form_name: document.getElementById('form_name').value,
        form_description: document.getElementById('form_description').value }
    axios.post('http://localhost:3000/createProject', request)
        .then(resp => {
            alert(resp.data.message);
        })
        .catch( err => {
            console.log(err);
        })
}

export default CreateProject;
