import React from 'react';
import { Link } from 'gatsby';

// to do update with list of pages and display pages except the current page
export const Nav = () => {
	return (
		<nav className="navigation">
			<ul className="navigation__list list">
				<Link className="navigation__link navLink">
					<li className="navigation__link__listItem">Home</li>
				</Link>
			</ul>
		</nav>
	);
};
