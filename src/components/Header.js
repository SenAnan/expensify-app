import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => (
	<header>
		<h1>Expensify</h1>
		<ul>
			<li>
				<NavLink to="/dashboard" activeClassName="is-active">
					Dashboard
				</NavLink>
			</li>
			<li>
				<NavLink to="/create" activeClassName="is-active">
					Add Expense
				</NavLink>
			</li>
			<li>
				<NavLink to="/help" activeClassName="is-active">
					Help
				</NavLink>
			</li>
			<button onClick={props.startLogout}>Logout</button>
		</ul>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
