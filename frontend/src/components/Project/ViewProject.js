import React from 'react';
import { useParams } from 'react-router-dom';
import BACKEND_LINK from '../../env.js';
import './ViewProject.css';
// import lock from "./lock.png";

const ViewProject = () => {
	const { id } = useParams();

	fetch(BACKEND_LINK+`/projects/${id}`, {
		method: 'get',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify("")
	})
	.then(response => response.json())
	.then(response => {
		console.log(response);
		if (response.success) {
			this.setState({ message: "Success!"})
		} else {
			this.setState({ message: response.errormessage })
		}
	})

	return (
		<div>
			<h1 className="welcome">Welcome</h1>	
		</div>
	)
}

export default ViewProject;