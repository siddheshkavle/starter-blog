require('dotenv').config();

const contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
};

module.exports = {
	siteMetadata: {
		title: `Coding Love`,
		subtitle: `Everybody needs a little code love in their life.`,
		author: `Rachelle Rathbone`,
		description: `A blog that shows you the awesome power of gatsby.`,
		bio: `Teacher turned engineer, Rachelle is a software engineer and mother of one, with a killer Australian accent.`,
		social: {
			twitter: `coding_love`
		},
		siteUrl: `https://dazzling-thompson-cbfe48.netlify.com`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					`gatsby-remark-responsive-iframe`,
					`gatsby-remark-prismjs`,
					`gatsby-remark-smartypants`,
					`gatsby-remark-copy-linked-files`
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Starter Blog`,
				short_name: `Blog`,
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				display: `standalone`,
				icon: `content/assets/R.png`
			}
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-140917292-1`,
				head: true
			}
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: `GTM-NJ3SJD6`,
				includeInDevelopment: true
			}
		},
		{
			resolve: `gatsby-remark-social-cards`,
			options: {
				title: {
					field: 'title',
					font: 'DejaVuSansCondensed',
					color: 'black', // black|white
					size: 48, // 16|24|32|48|64
					style: 'bold', // normal|bold|italic
					x: null, // Will default to xMargin
					y: null // Will default to yMargin
				},
				meta: {
					parts: [ '- ', { field: 'author' }, ' » ', { field: 'date', format: 'mmmm dS' } ],
					font: 'DejaVuSansCondensed',
					color: 'black', // black|white
					size: 24, // 16|24|32|48|64
					style: 'normal', // normal|bold|italic
					x: null, // Will default to xMargin
					y: null // Will default to cardHeight - yMargin - size
				},
				background: '#FFFFFF', // Background color for the card
				xMargin: 24, // Edge margin used when x value is not set
				yMargin: 24 // Edge margin used when y value is not set
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: contentfulConfig
		}
	]
};
