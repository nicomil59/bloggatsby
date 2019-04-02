module.exports = {
  siteMetadata: {
    title: `Pif le chien`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Nick Miller`,
    bio: `Développeur web en devenir. Maîtrise les langages HTML5, CSS3 et JavaScript.`,
    authorImage: `https://pbs.twimg.com/profile_images/1065290055227457541/oJpQqXgS_400x400.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `blog`, path: `${__dirname}/blog/`},
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        modifyVars: require("./src/theme/antd.js"),
        //Needed to load antdesign less files.
        javascriptEnabled: true,
      }, 
    },
    {
      resolve: `gatsby-plugin-antd`,
      options: {
        // Activate less files
        style: true,
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
