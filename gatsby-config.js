module.exports = {
  siteMetadata: {
    title: `Diversivo agencia de Desarrollo de Software, Branding y Marketing Digital`,
    description: `Ayudamos a marcas y negocios a ganar ventaja competitiva en un mundo conectado.`,
    author: `@diversivo.cl`,
        menuLinks:[
            {
               name:'QUE HACEMOS',
               link:'/que-hacemos'
            },
            {
              name:'TRABAJOS',
              link:'/trabajos'
            },
            {
              name:'SOMOS',
              link:'/somos'
            },
            {
              name:'CONTACTO',
              link:'/contacto'
            }
          ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#1c1c1c`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg/`, // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src/assets/scss/"],
      },
    }
    // this (optional) plugin enables Progressive Web App  Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
