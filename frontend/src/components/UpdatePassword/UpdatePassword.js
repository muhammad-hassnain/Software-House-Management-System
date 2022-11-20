import React from 'react';
import './UpdatePassword.css';
import BACKEND_LINK from '../../env.js';

class UpdatePassword extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			oldpassword: '',
			newpassword: '',
			newpasswordconfirmation: '',
			message: ''
		}
	}

	componentDidMount() {
		this.setState({ employee: this.props.employee})
	}

	onOldPasswordChange = (event) => {
        this.setState({ oldpassword: event.target.value })
        console.log(this.state)
    }

    onNewPasswordChange = (event) => {
        this.setState({ newpassword: event.target.value })
        console.log(this.state)
    }

    onNewPasswordConfirmationChange = (event) => {
        this.setState({ newpasswordconfirmation: event.target.value })
        console.log(this.state)
    }

    onUpdatePassword = (event) => {
    	event.preventDefault();

    	if (this.state.oldpassword == '' || this.state.newpassword == '' || this.state.newpasswordconfirmation == '')
    	{
    		console.log('error')
    	} else {
    		fetch(BACKEND_LINK+'/updatepassword', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(this.state)
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
    	}
    }

    render() {
    	// this.setState({ employee: this.props.employee});

		return (
			<div>
				<h1>Update Password</h1>
				<div>
                    <div>
                        <form onSubmit={ this.onUpdatePassword }>
                            <input placeholder="Old Password" type="text" onChange={this.onOldPasswordChange} />
                            <input placeholder="New Password" type="text" onChange={this.onNewPasswordChange} />
                            <input placeholder="New Password Confirmation" type="text" onChange={this.onNewPasswordConfirmationChange} />
                            <input type="submit" value="Update Password"/>
                            <div>{this.state.message}</div>
                        </form>
                    </div>
                </div>
			</div>
		)
	}
}


export default UpdatePassword;