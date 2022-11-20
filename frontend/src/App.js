import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import {Routes, Route, Link} from "react-router-dom";
import axios from 'axios';
import Landing from './components/Landing/Landing.js'
import UpdatePassword from './components/UpdatePassword/UpdatePassword.js'
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import BACKEND_LINK from './env.js';

// function App() {
//   return (
//     <div className="App">
//       <h1>Login</h1>
//       <form onSubmit={(e) => login(e)}>
//         <label> Email: </label><br/>
//         <input type="email" id='email'></input><br/>
//         <label> Password: </label><br/>
//         <input type="password" id='password'></input><br/><br/>
//         <input type="submit" id='submit_login' ></input> 
//         {/* Please make this button move to the main page after you are done developing its page etc */}
//       </form>
//     </div>

//   );
// }
function login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value }
  axios.post('http://localhost:3000/login', request)
  .then(resp => {
    alert(resp.data.message);
  })
  .catch( err => {
    console.log(err);
  })
}

const initialState = {
  isSignedOut: false,
  employee: {
    id: '1',
    first_name: '',
    last_name: '',
    designation: ''
  },
  
}


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    const { isSignedOut } = this.state;

    if (isSignedOut) {
      return (
      <Router>
           <div className="App">
           </div>
          <Routes>
                 <Route exact path='/' element={< Landing />}></Route>
          </Routes>
       </Router>
    )
    } else {
      return (
      <Router>
           <div className="App">
           </div>
          <Routes>
                 // employee is signed in reroute to dashboard
                 <Route exact path='/updatepassword' element={< UpdatePassword employee={this.state.employee}/>}></Route>
          </Routes>
       </Router>
    )
    }
  }
}

export default App;
