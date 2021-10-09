const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "content" });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        nodes {
          fileAbsolutePath
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.nodes.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/SitesLayout.js"),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
