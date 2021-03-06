module.exports = {
  siteMetadata: {
    title: ` SEO Website Lead Generation Optimization & Design`,
        description: 'Phuket SEO Website Optimization & Social Media Marketing using the latest SEO, Lead Generation & Web Optimization techniques to increase online inquires.',
    author: `Paul Cunliffe| PC Consulting Asia`,
    siteUrl: `https://pcconsultingasia.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-transformer-toml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'pc-consulting-asia', // (REQUIRED, replace with your own)
            linkResolver: () => post => `/${post.uid}`,
        }
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PC-Consulting-Asia`,
        short_name: `PCCA`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/PC Consulting Asia.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-101866391-1",
            head: true,
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
