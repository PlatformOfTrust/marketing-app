module.exports = {
  siteMetadata: {
    title: `Platform of Trust `,
    siteUrl: 'https://www.platformoftrust.net',
    description: `Platform of trust helps to create better built environments by providing ​data one can trust on.​`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-social-cards`,
          // ...
        ],
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121413138-1",
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // path: `${__dirname}/src/content`,
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-image`,
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
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-source-hubspot',
    //   options: {
    //     key: '5c1263ec-7b42-44b0-b511-d4677ab3d08c'
    //   }
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `oftrust`
      }
    },
  ],
}
