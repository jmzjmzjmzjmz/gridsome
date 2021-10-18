// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '拉勾教育',
  siteDescription: '大前端',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://106.75.45.108:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['posts'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    Post: [
      {
        path: '/posts/:id',
        component: './src/templates/Post.vue'
      }
    ]
  }
}
