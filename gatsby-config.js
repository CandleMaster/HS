module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
 `gatsby-plugin-styled-components`,
 `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Yaml`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://hotmail.us1.list-manage.com/subscribe/post?u=ce0af335cc3e31349fac52f6a&amp;id=11cda25583', 
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: '', 
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:300,400,400i,700`,
  
        ],
        display: 'swap'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: 'gatsby-plugin-local-search',
    //   options: {
    //     name: 'page',
    //     engine: 'lunr',
    //     engineOptions: 'speed',
    //     query: `
    //      {
    //       allBrandsYaml {
    //           nodes {
    //             id
    //             name
    //             slug
    //             tags {
    //               impactType
    //               productType
    //             }
    //             main {
    //               brandNameLogo {
    //                 childrenImageSharp {
    //                   gatsbyImageData
    //                 }
    //               }
    //               productImages {
    //                 childrenImageSharp {
    //                   gatsbyImageData
    //                 }
    //               }
    //           }
    //       }
    //     }
    //     `,

    //     // Field used as the reference value for each document.
    //     // Default: 'id'.
    //     ref: 'id',

    //     // List of keys to index. The values of the keys are taken from the
    //     // normalizer function below.
    //     // Default: all fields
    //     index: ['productType','name'],

    //     // List of keys to store and make available in your UI. The values of
    //     // the keys are taken from the normalizer function below.
    //     // Default: all fields
    //     store: ['id', 'slug', 'brandNameLogo','productImages'],

    //     // Function used to map the result from the GraphQL query. This should
    //     // return an array of items to index in the form of flat objects
    //     // containing properties to index. The objects must contain the `ref`
    //     // field above (default: 'id'). This is required.
    //     normalizer: ({ data }) =>
    //       data.allBrandsYaml.nodes.map(node => ({
    //         id: node.id,
    //         name: node.name,
    //         slug: node.slug,
    //         productType: node.tags.productType,
    //         brandNameLogo: node.main.brandNameLogo,
    //         productImages: node.main.productImages,
    //       })),
    //   },
    // }
  ],
}
