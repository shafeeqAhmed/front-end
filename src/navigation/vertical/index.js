export default [

  {
    title: 'Requisitions',
    icon: 'HomeIcon',
    tagVariant: 'light-warning',
    children: [
      {
        title: 'Category',
        route: 'requisition-category',
      },
      {
        title: 'Template',
        route: 'requisition-template',
      }
    ],
  },
  {
    title: 'User Management',
    icon: 'UserIcon',
    tagVariant: 'light-warning',
    children: [
      {
        title: 'Users',
        route: 'user-management-users',
      },
      {
        title: 'Roles',
        route: 'user-management-roles',
      },
      {
        title: 'Law Firm',
        route: 'user-management-law-firm',
      },

    ],
  },
  {
    title: 'Reports',
    icon: 'FileTextIcon',
    tagVariant: 'light-warning',
    children: [
      {
        title: 'Complete Requisition',
        route: 'report-complete-requisition',
      },

    ],
  },

  {
    title: 'User Subscription',
    route: 'user-management-subscription',
    icon: 'MailIcon',

  }

  // {
  //   title: 'Admin',
  //   route: 'admin',
  //   icon: 'HomeIcon',
  // },
  // {
  //   title: 'Client',
  //   route: 'client',
  //   icon: 'UserIcon',
  //   action: 'all',
  //   resource: 'client',
  // },
  // {
  //   title: 'Publisher',
  //   route: 'publisher',
  //   icon: 'HomeIcon',
  //   action: 'all',
  //   resource: 'publisher',
  // },
  // {
  //   title: 'Agent',
  //   route: 'agent',
  //   icon: 'UserIcon',
  //   action: 'all',
  //   resource: 'agent',
  // },
]
