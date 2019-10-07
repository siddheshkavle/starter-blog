import React from 'react';

// to do update with list of pages and display pages except the current page
export const Nav = () => {
	return (
		<nav className="navigation">
			<ul className="navigation__list list">
				<li className="navigation__listItem navLink">Home</li>
				<li className="navigation__listItem navLink">Contact</li>
				<li className="navigation__listItem navLink">About</li>
			</ul>
		</nav>
	);
};
