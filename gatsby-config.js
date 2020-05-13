module.exports = {
  siteMetadata: {
    title: 'Diversivo agencia de Desarrollo de Software, Branding y Marketing Digital',
    description: 'Ayudamos a marcas y negocios a ganar ventaja competitiva en un mundo conectado.',
    author: '@diversivocl',
    menuLinks: [
      {
        name: 'QUE HACEMOS',
        link: '/our-work',
      },
      {
        name: 'TRABAJOS',
        link: '/portfolio',
      },
      {
        name: 'SOMOS',
        link: '/about-us',
      },
      {
        name: 'CONTACTO',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'diversivo-website',
        short_name: 'starter',
        start_url: '/',
        background_color: '#1c1c1c',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg/inline/`, // See below to configure properly
        },
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdn.diversivo.cl/fluid/fluid-init.js',
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'diversivo-website',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
