/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type AuthorJson implements Node {
        futureMe: String!
        nowMe: String!
        futureUs: String!
        nowUs: String!
      }
    `
    createTypes(typeDefs)
  }