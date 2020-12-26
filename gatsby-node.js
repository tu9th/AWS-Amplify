const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
             allContentfulHome {
              edges {
                node {
                  title
                  description
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        createPage({
          path: `/blog/test`,
          component: blogPost,
          context: {
            slug: 'test'
          },
        })
      })
    )
  })
}
