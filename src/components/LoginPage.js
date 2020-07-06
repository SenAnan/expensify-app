import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends Component {
	render() {
		return (
			<div className="LoginPage">
				<div className="LoginPage__container">
					<h1 className="LoginPage__title">Expensify</h1>
					<p className="LoginPage__text">It's time to get your expenses under control</p>
					<button className="LoginPage__button button" onClick={this.props.startLogin}>
						Login with Google
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
