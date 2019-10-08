import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// to do update with list of pages and display pages except the current page
export const SocialMediaLinks = () => {
	const { twitterIcon, linkedinIcon, githubIcon } = useStaticQuery(
		graphql`
			query {
				twitterIcon: file(relativePath: { regex: "/twitter.png/" }) {
					childImageSharp {
						fixed(width: 36, height: 36) {
							...GatsbyImageSharpFixed
						}
					}
				}
				linkedinIcon: file(relativePath: { regex: "/linkedin.png/" }) {
					childImageSharp {
						fixed(width: 36, height: 36) {
							...GatsbyImageSharpFixed
						}
					}
				}
				githubIcon: file(relativePath: { regex: "/github.png/" }) {
					childImageSharp {
						fixed(width: 36, height: 36) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`
	);

	const twitter = twitterIcon.childImageSharp.fixed;
	const linkedIn = linkedinIcon.childImageSharp.fixed;
	const github = githubIcon.childImageSharp.fixed;

	return (
		<div className="socialMedia">
			<a href="https://twitter.com/coding_love" className="socialMedia__link link" target="__blank">
				<Img className="socialMedian__link__img" fixed={twitter} alt="Twitter" />
			</a>
			<a
				href="https://www.linkedin.com/in/rachelle-rathbone/"
				className="socialMedia__link link"
				target="__blank"
			>
				<Img className="socialMedian__link__img" fixed={linkedIn} alt="LinkedIn" />
			</a>
			<a href="https://github.com/rrathbone" className="socialMedia__link link" target="__blank">
				<Img className="socialMedian__link__img" fixed={github} alt="Github" />
			</a>
		</div>
	);
};
