import React from 'react';
import BACKEND_LINK from '../../env.js';
import './Projects.css';

class Projects extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			project: undefined,
			userId: 1,
			toAssignSWE: undefined
		}
	}

	componentWillMount() {
		fetch(BACKEND_LINK+'/projects', {
				method: 'get',
				headers: {'Content-Type': 'application/json'},
			})
			.then(response => response.json())
			.then(response => {
				if (response)
				{
					this.setState({ project: response.project, tasks: response.tasks, assigned_swes: response.assigned_swes, unassigned_swes: response.unassigned_swes})
				}
			})
	}

	markAsComplete = (task) => {
		fetch(BACKEND_LINK+'/marktaskcomplete', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ task: task })
		})
		.then(response => response.json())
		.then(response => {
			if (response) {
				this.setState({ tasks: response.tasks})
			}
		})
	}

	onAssignChange = (event) => {
		this.setState({ toAssignSWE: event.target.value })
		console.log(this.state);
	}

	onAssignSWE = () => {
		const state = this.state;
		fetch(BACKEND_LINK+'/assignSWE', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ state })
		})
		.then(response => response.json())
		.then(response => {
			if (response) {
				this.setState({ assigned_swes: response.assigned_swes})
			}
		})
	}

	render() {
		if (this.state.project)
		{
			const project = this.state.project[0]
			const tasks = this.state.tasks
			const assigned_swes = this.state.assigned_swes
			const unassigned_swes = this.state.unassigned_swes
			const userId = this.state.userId
			const markAsComplete = this.markAsComplete

			return (
				<div>
					<h1>Project</h1>
					<h3>Assigned Software Engineers</h3>
					<ul>
						{assigned_swes.map(function(assigned_swe) {
							return (
								<li key={assigned_swe.id}>
									{assigned_swe.first_name} {assigned_swe.last_name}
								</li>
							)
						})}
					</ul>

					<select value={this.state.toAssignSWE} onChange={this.onAssignChange}>
						<option value={undefined}>
						</option>
						{unassigned_swes.filter(function(unassigned_swe) {
							for (let i = 0; i < assigned_swes.length; i++) {
								if (unassigned_swe.id == assigned_swes[i].id) {
									return false
								}
							}

							return true;
						}).map(function(unassigned_swe) {
							return (
								<option value={unassigned_swe.id} key={unassigned_swe.id}>
									{unassigned_swe.first_name} {unassigned_swe.last_name}
								</option>
							)
						})}
					</select>
					<a className="markAsComplete" onClick={this.onAssignSWE}>Assign SWEs</a>
					<h3>Tasks</h3>
					{tasks.map(function(task) {
						if (userId == parseInt(task.assigned_to))
						{
							return (
								<div key={task.id} className="task">
									<h4>{task.id}. {task.task}</h4>
									<h6>Due: {task.due_date}</h6>
									<h6>{task.status}</h6>
									<a className="markAsComplete" onClick={() => { markAsComplete(task) }}>Mark as complete</a>
								</div>
							)
						}
					})}
					
				</div>
			)	
		} else {
			return (
				<div>
					<h1>Project</h1>
				</div>
		)
		}
		
	}
}

export default Projects;