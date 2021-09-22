export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '614b400def59b1df30430404',
                  title: 'Sanity Studio',
                  name: 'obis-studio',
                  apiId: 'abb94ef2-5705-40e0-8cd1-75270ce1647c'
                },
                {
                  buildHookId: '614b400d7db188f893910439',
                  title: 'Blog Website',
                  name: 'obis',
                  apiId: '16019c31-4f16-4766-af9d-4645291285c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adham-ta/Obis',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://obis.netlify.app', category: 'apps'}
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
