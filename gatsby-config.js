module.exports = {
  pathPrefix: "/sacri-lapides-aegypti",
  siteMetadata: {
    siteUrl: "https://paths-erc.eu",
    title: "Sacri lapides Aegypti",
    menuLinks: [
      { link: "/", title: "home", subMenu: null },
      {
        link: " ",
        title: "places",
        subMenu: [
          { link: "/alexandria", title: "alexandria" },
          { link: "/aswan", title: "aswan" },
          { link: "/dendera", title: "dendera" },
          { link: "/east-canopus", title: "esat-canopus" },
          { link: "/elephantine", title: "elephantine" },
          { link: "/marea", title: "marea" },
          { link: "/marina-el-alamein", title: "marina-el-alamein" },
          { link: "/taposiris", title: "taposiris" },
        ],
      },
      { link: "/team/", title: "team", subMenu: null },
      { link: "/news/", title: "news", subMenu: null },
    ],
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `babel-plugin-styled-components`,
    'gatsby-plugin-react-leaflet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:0,300;0,400;0,500;0,600;1,400;1,500`,
          `open sans\:0,300;0,400;0,500;1,300;1,400`,
          `source sans pro\:300,400,400i,700`,
          `lora\:400,400i,600,600i,700,700i`,
          `roboto condensed\:0,300;0,400;0,700;1,300;1,400;1,700`,
        ],
        display: "swap",
      },
    },
  ],
};
