export default [
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/pages/admin/Admin.vue'),
        meta: {
            pageTitle: 'Admin',
            breadcrumb: [
                {
                    text: 'Home',
                    active: true,
                },
            ],
        },
    },
]
