export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dfce1afedcfadc85a81cb76',
                  title: 'Sanity Studio',
                  name: 'sapper2-studio',
                  apiId: '9ef5153e-b3d3-4a0d-90b8-c4ec1c1ab52f'
                },
                {
                  buildHookId: '5dfce1afc739e9326741e259',
                  title: 'Blog Website',
                  name: 'sapper2',
                  apiId: '0d9212e0-d029-4e7a-88b2-71d83af722b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cocokiri/sapper2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sapper2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
