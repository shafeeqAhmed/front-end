export default [
    {
        path: '/requisition/category',
        name: 'requisition-category',
        component: () => import('@/views/pages/category/users-list/UsersList.vue'),
        meta: {
            pageTitle: 'Category',
            breadcrumb: [
                {
                    text: 'Requisition',
                },
                {
                    text: 'Category',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/requisition/template',
        name: 'requisition-template',
        component: () => import('@/views/pages/template/users-list/UsersList.vue'),
        meta: {
            pageTitle: 'Template',
            breadcrumb: [
                {
                    text: 'Requisition',
                },
                {
                    text: 'Template',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/user-management/roles',
        name: 'user-management-roles',
        component: () => import('@/views/pages/roles/users-list/UsersList.vue'),
        meta: {
            pageTitle: 'Roles',
            breadcrumb: [
                {
                    text: 'User Management',
                },
                {
                    text: 'Roles',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/user-management/law-firm',
        name: 'user-management-law-firm',
        component: () => import('@/views/pages/lawFirm/users-list/UsersList.vue'),
        meta: {
            pageTitle: 'Law Firm',
            breadcrumb: [
                {
                    text: 'User Management',
                },
                {
                    text: 'Law Firm',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/user-management/users',
        name: 'user-management-users',
        component: () => import('@/views/pages/users/users-list/UsersList.vue'),
        meta: {
            pageTitle: 'Users',
            breadcrumb: [
                {
                    text: 'User Management',
                },
                {
                    text: 'Users',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/user-management/subscription',
        name: 'user-management-subscription',
        component: () => import('@/views/pages/subscription/users-list/UsersList.vue'),
        meta: {
            pageTitle: 'Subscription',
            breadcrumb: [
                {
                    text: 'User Management',
                },
                {
                    text: 'subscription',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/reports/complete-requisition',
        name: 'report-complete-requisition',
        component: () => import('@/views/pages/completeRequisition/users-list/UsersList.vue'),
        meta: {
            pageTitle: 'Report',
            breadcrumb: [
                {
                    text: 'Reports',
                },
                {
                    text: 'Complete Requisition',
                    active: true,
                },
            ],
        },
    },



]
