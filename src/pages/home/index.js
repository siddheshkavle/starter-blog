import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../../components/layout/layout';
import { Nav } from '../../components/nav/nav';
import SEO from '../../components/seo/seo';

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;
		const { title, subtitle, author, bio } = data.site.siteMetadata;
		const posts = data.allContentfulPosts.edges;
		const profilePic = data.profilePic.childImageSharp.fluid;

		return (
			<Layout title={title} subtitle={subtitle}>
				<base href="/post/" />
				<SEO title="All posts" />
				<Nav />
				<div className="blogContainer">
					<section className="blogContainer__section container">
						{posts.map(
							(post) =>
								post.node.content && (
									<div className="blogContainer__section__postSummary" key={post.node.title}>
										<p className="blogContainer__section__date">{post.node.date}</p>
										<h2 className="blogContainer__section__header">{post.node.title}</h2>
										<p className="blogContainer__section__paragraph">{post.node.description}</p>

										<Link to={post.node.slug} className="link blogContainer__section__link">
											<button
												className="button blogContainer__section__button"
												data-gtm="read-more"
												id={`data::${post.node.slug}`}
											>
												Read more
											</button>
										</Link>
									</div>
								)
						)}
					</section>
					<aside className="blogContainer__aside">
						<Img fluid={profilePic} alt={`Author ${author}`} />
						<h3 className="blogContainer__aside__header">{author}</h3>
						<p>{bio}</p>
					</aside>
				</div>
			</Layout>
		);
	}
}

export default BlogIndex;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				subtitle
				author
				bio
			}
		}
		profilePic: file(absolutePath: { regex: "/profile-pic.png/" }) {
			childImageSharp {
				fluid(maxWidth: 400, maxHeight: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
		allContentfulPosts(sort: { fields: [date], order: DESC }) {
			edges {
				node {
					title
					description
					date(formatString: "MMMM DD, YYYY")
					slug
					content {
						json
					}
				}
			}
		}
	}
`;
