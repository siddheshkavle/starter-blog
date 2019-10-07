import React from 'react';
import PropTypes from 'prop-types';

function Layout({ title, subtitle, children }) {
	return (
		<div className="appContainer">
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
