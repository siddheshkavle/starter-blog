import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Nav = () => {
	return (
		<nav className="navigation">
			<ul>
				<li>Contact</li>
				<li>About</li>
			</ul>
		</nav>
	);
};
