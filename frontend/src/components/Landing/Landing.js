import React from 'react';
import './Landing.css';
import lock from "./lock.png";

const Landing = () => {
	return (
		<div>
			<h1 className="welcome">Welcome</h1>
				<a className="login_button" href="/login"><img className="lock_img" src={lock} alt="lock" />Login</a>
		</div>
	)
}

export default Landing;