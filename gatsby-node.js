

const path = require(`path`)
const _= require('lodash')

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type BrandsYaml implements Node {
        filePath:File!
      }
    `
    createTypes(typeDefs)
}



exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
    query Products {
      allBrandsYaml {
          nodes {
            main {
              brandNameLogo {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
              productImages {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
            name
            tags {
              impactType
              productType
            }
            id
          }
      }
    }
    `)

    data.allBrandsYaml.nodes.forEach(node => {
        actions.createPage({
            path:'/impact-brands/' + _.kebabCase(node.name),
            component: path.resolve('./src/template/brand-template.js'),
            context:{name: node.name}
        })
    });
 
    };

