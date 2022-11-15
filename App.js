import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <form href='/' action='E:\Fall 2022\Databases\Project\Development\backend\routes\users.js' method='post'>
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

export default App;
