import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
		<Router>
			<div>
				<nav className={classes.nav}>
					<ul>
						{ctx.isLoggedIn && (
							<li>
								<Link to="/">Home</Link>
							</li>
						)}
						{ctx.isLoggedIn && (
							<li>
								<Link to="/">About</Link>
							</li>
						)}
						{ctx.isLoggedIn && (
							<li>
								<button onClick={ctx.onLogout}>Logout</button>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</Router>

  );};

export default Navigation;
