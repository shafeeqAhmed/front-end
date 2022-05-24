export default [
    {
        path: '/publisher',
        name: 'publisher',
        component: () => import('@/views/pages/publisher/Publisher.vue'),
        meta: {
            pageTitle: 'Publisher',
            breadcrumb: [
                {
                    text: 'Home',
                    active: true,
                },
            ],
            action: 'all',
            resource: 'publisher',
        },
    },
]
