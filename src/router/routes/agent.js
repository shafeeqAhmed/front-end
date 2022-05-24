export default [
    {
        path: '/agent',
        name: 'agent',
        component: () => import('@/views/pages/agent/Agent.vue'),
        meta: {
            pageTitle: 'Agent',
            breadcrumb: [
                {
                    text: 'Home',
                    active: true,
                },
            ],
            action: 'all',
            resource: 'agent',
        },
    },
]
