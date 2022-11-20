import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import axios from 'axios';

function DoLogin() {
  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={(e) => validatesForm(e)}>
        <label> Email: </label><br/>
        <input type="email" id='email'></input><br/>
        <label> Password: </label><br/>
        <input type="password" id='password'></input><br/><br/>
        <input type="submit" id='submit_login' ></input> 
        {/* Please make this button move to the main page after you are done developing its page etc */}
      </form>
    </div>

  );
}

function validatesForm(e) {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (email == "" || password == "") {
    alert("Please fill in all fields");
  }
  else if(email.includes("@")) {
    console.log("here")
    alert("Please enter a valid email address");
  }
  else {
    alert("here2");
    // login(e);
  }
}


function login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value }
  axios.post('http://localhost:8080/login', request)
  .then(resp => {
    alert(JSON.stringify(resp.data, null,2));
  })
  .catch( err => {
    console.log(err);
  })
}

export default DoLogin;
