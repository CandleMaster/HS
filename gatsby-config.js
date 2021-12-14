module.exports = {
  siteMetadata: {
    title: `Hopskotch`,
    description: `At Hopskotch, we believe that business can be a force for good. We connect you to verified impact brands and powerful ideas that drive them.`,
    author: `@dannijiang`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    // `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://hop-skotch.us20.list-manage.com/subscribe/post?u=2eecebcb912c58f974816f237&amp;id=f6550503fa', 
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
        icon: `src/images/logo/HS_logo_colored.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:300,400,400i,500,600,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
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
