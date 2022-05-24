export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/pages/dashboard/analytics/Analytics.vue'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Home',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/login',
        name: 'auth-login',
        component: () => import('@/views/pages/auth/Login.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: true,

        },
    },
    {
        path: '/register',
        name: 'auth-register',
        component: () => import('@/views/pages/auth/Register.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: true,
        },
    },
    {
        path: '/account-type',
        name: 'auth-account-type',
        component: () => import('@/views/pages/auth/AccountType.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },
    {
        path: '/acount-basic-info',
        name: 'auth-account-basic-info',
        component: () => import('@/views/pages/auth/BasicInfo.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },
    {
        path: '/forgot-password',
        name: 'auth-forgot-password',
        component: () => import('@/views/pages/auth/ForgotPassword.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: true,
        },
    },

    {
        path: '/set-2fa',
        name: 'set-2fa',
        component: () => import('@/views/pages/auth/SetTwoFa.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },
    {
        path: '/auth-2fa',
        name: 'auth-2fa',
        component: () => import('@/views/pages/auth/TwoFa.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },
    {
        path: '/verify-otp',
        name: 'verify-otp',
        component: () => import('@/views/pages/auth/verifyOtp.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },
    {
        path: '/reset',
        name: 'auth-reset',
        component: () => import('@/views/pages/auth/Reset.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: false,
        },
    },
    {
        path: '/email-not-verified',
        name: 'email-not-verified',
        component: () => import('@/views/pages/auth/EmailNotVerified.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },
    {
        path: '/email/verify/:id/:hash',
        name: 'verify-email',
        component: () => import('@/views/pages/auth/VerifyEmail.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },
    {
        path: '/registration-completed',
        name: 'registration-completed',
        component: () => import('@/views/pages/auth/RegistrationCompleted.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },
    {
        path: '/error-404',
        name: 'error-404',
        component: () => import('@/views/error/Error404.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            action: 'read',
        },
    },
    {
        path: '/not-authorized',
        name: 'misc-not-authorized',
        component: () => import('@/views/miscellaneous/NotAuthorized.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
        },
    },
    // {
    //     path: '/pages/miscellaneous/under-maintenance',
    //     name: 'misc-under-maintenance',
    //     component: () => import('@/views/pages/miscellaneous/UnderMaintenance.vue'),
    //     meta: {
    //         layout: 'full',
    //     },
    // },
    // {
    //     path: '/pages/miscellaneous/error',
    //     name: 'misc-error',
    //     component: () => import('@/views/pages/miscellaneous/Error.vue'),
    //     meta: {
    //         layout: 'full',
    //     },
    // },
    // {
    //     path: '/pages/account-setting',
    //     name: 'pages-account-setting',
    //     component: () => import('@/views/pages/account-setting/AccountSetting.vue'),
    //     meta: {
    //         pageTitle: 'Account Settings',
    //         breadcrumb: [
    //             {
    //                 text: 'Pages',
    //             },
    //             {
    //                 text: 'Account Settings',
    //                 active: true,
    //             },
    //         ],
    //     },
    // },
    // {
    //     path: '/pages/profile',
    //     name: 'pages-profile',
    //     component: () => import('@/views/pages/profile/Profile.vue'),
    //     meta: {
    //         pageTitle: 'Profile',
    //         breadcrumb: [
    //             {
    //                 text: 'Pages',
    //             },
    //             {
    //                 text: 'Profile',
    //                 active: true,
    //             },
    //         ],
    //     },
    // },
]
