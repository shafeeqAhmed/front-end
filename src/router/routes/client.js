export default [
    {
        path: '/client',
        name: 'client',
        component: () => import('@/views/pages/client/Client.vue'),
        meta: {
            pageTitle: 'Client',
            breadcrumb: [
                {
                    text: 'Home',
                    active: true,
                },
            ],
            action: 'all',
            resource: 'client',
        },
    },
]
