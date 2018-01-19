import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Social.css';
import io from 'socket.io-client';

class Social extends Component {
	constructor(props){
		super(props);

		this.state = {
			username: '',
			message: '',
			messages: []
		};

		this.socket = io('localhost:4001');

		this.socket.on('RECEIVE_MESSAGE', function(data) {
			addMessage(data);
		});

		const addMessage = data => {
			console.log(data);
			this.setState({messages: [...this.state.messages, data]});
			console.log(this.state.messages);
		};

		this.sendMessage = ev =>  {
			ev.preventDefault();
			this.socket.emit('SEND_MESSAGE', {
				author: this.state.username,
				message: this.state.message
			})
			this.setState({message: ''});
		}
	}
	render() {
		function handleClick() {
			document.getElementById('sidebar').classList.toggle('active');
		}

		return (
			<div className="wrapper">

		        <nav id="sidebar">
		            {/*<!-- Sidebar Header --> */}
		            <div className="sidebar-header">
		                <h3>Chingu Bears 14</h3>
		                <strong>BS</strong>
		            </div>

		            {/*<!-- Sidebar Links --> */}
		            <ul className="list-unstyled components">
		                <li className="active">
		                    <a href="/">
		                        <i className="fa fa-dashboard fa-lg"></i>
		                        Dashboard
		                    </a>
		                </li>
		                <li>
		                    <a href="/events">
		                        <i className="fa fa-map-marker fa-lg"></i>
		                        Events
		                    </a>
		                </li>
		                <li>
		                    <a href="/calendar">
		                        <i className="fa fa-calendar fa-lg"></i>
		                        Calendar
		                    </a>
		                </li>
		                <li>
		                    <a href="/social">
		                        <i className="fa fa-weixin fa-lg"></i>
		                        Social Room
		                    </a>
		                </li>
		                <li>
		                    <a href="/firstaid">
		                        <i className="fa fa-book fa-lg"></i>
		                        First-Aid
		                    </a>
		                </li>
		            </ul>
		        </nav>

		        <div id="content">
		            <button onClick={handleClick} type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
		                <i className="glyphicon glyphicon-align-left"></i>
		                Toggle Sidebar
		            </button>
		            <div className="chatArea">
				        <div className="messages">
				        	{this.state.messages.map(message => {
				        		return (
				        			<div>{message.author}: {message.message}</div>
				        		)
				        	})}
				        </div>
				    </div>
				    <input className="inputMessage" placeholder="Type here..." value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
				    <button onClick={this.sendMessage} className="btn btn-primary form-control msgButton">Send</button>
				</div>

			</div>
		)
	}
}

export default Social;