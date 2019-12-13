export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5df3dc2e96dfb201876d64b0',
                  title: 'Sanity Studio',
                  name: 'sanity-winetest-studio',
                  apiId: '4e492616-646a-4d07-a995-3367a38f5880'
                },
                {
                  buildHookId: '5df3dc2ef85a8f018b5d6517',
                  title: 'Landing pages Website',
                  name: 'sanity-winetest',
                  apiId: '9a897b0a-0994-41eb-99b2-cc8653d740a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/james1b/sanity-winetest',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-winetest.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
