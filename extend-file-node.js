const { GraphQLString } = require(`graphql`)
const fs = require(`fs-extra`)
const path = require(`path`)

module.exports = ({ type, getNodeAndSavePathDependency, pathPrefix = `` }) => {
  if (type.name !== `File`) {
    return {}
  }

  return {
    publicURL: {
      type: GraphQLString,
      args: {},
      resolve: (file, fieldArgs, context) => {
        const details = getNodeAndSavePathDependency(file.name, context.path)
        const fileName = `${file.id}-${file.internal.contentDigest}${
          details.ext
        }`

        const publicPath = path.join(
          process.cwd(),
          `public`,
          `static`,
          fileName
        )

        if (!fs.existsSync(publicPath)) {
          fs.copy(details.absolutePath, publicPath, err => {
            if (err) {
              console.error(
                `error copying file from ${
                  details.absolutePath
                } to ${publicPath}`,
                err
              )
            }
          })
        }

        return `${pathPrefix}/static/${fileName}`
      },
    },
  }
}