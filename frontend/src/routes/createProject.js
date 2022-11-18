import { Routes, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

function CreateProject()
{
    return (
        <div className = "App">
            <h1>Create Form</h1>
            <form onSubmit={(e) => createProject(e)}>
                <label> Form Name: </label><br/>
                <input type="text" id='form_name'></input><br/>
                <label> Form Description: </label><br/>
                <input type="text" id='form_description'></input><br/><br/>
                <input type="submit" id='submit_create_form' ></input>
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
