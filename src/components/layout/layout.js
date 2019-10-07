import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Layout({ title, subtitle, children }) {
	const { home, site } = useStaticQuery(
		graphql`
			query {
				home: file(absolutePath: { regex: "/home.png/" }) {
					childImageSharp {
						fluid(maxWidth: 10, maxHeight: 10) {
							...GatsbyImageSharpFluid
						}
					}
				}
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);

	const homeIcon = home.childImageSharp.fluid;

	return (
		<div className="appContainer">
			<div className="appContainer__homeLinkContainer">
				{title !== site.siteMetadata.title && (
					<Link to="/">
						<Img fluid={homeIcon} alt="Link to go to home page" />
					</Link>
				)}
			</div>
			<header className="appContainer__header container">
				<h1 className="appContainer__header__title">{title}</h1>
				<p className="appContainer__header__subtitle">{subtitle}</p>
			</header>
			<main className="appContainer__main">{children}</main>
			<footer className="appContainer__footer">© {new Date().getFullYear()}, Rachelle Rathbone</footer>
		</div>
	);
}

Layout.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default Layout;
