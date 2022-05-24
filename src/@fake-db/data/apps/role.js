import mock from '@/@fake-db/mock'
import { paginateArray, sortCompare } from '@/@fake-db/utils'

/* eslint-disable global-require */
const data = {
  users: [
    {
      id: 1,
      name: 'Owner',
      company: 'Yotz PVT LTD',
      role: 'editor',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: '',
    },
    {
      id: 2,
      name: 'Partners',
      company: 'Skinder PVT LTD',
      role: 'author',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: require('@/assets/images/avatars/10.png'),
    },
    {
      id: 3,
      name: 'paralegals',
      company: 'Oozz PVT LTD',
      role: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: require('@/assets/images/avatars/1.png'),
    },
    {
      id: 4,
      name: 'clerk',
      company: 'Oozz PVT LTD',
      role: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: require('@/assets/images/avatars/1.png'),
    },

  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return Users
// ------------------------------------------------
mock.onGet('/apps/role/users').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const {
    q = '',
    perPage = 10,
    page = 1,
    sortBy = 'id',
    sortDesc = false,
    role = null,
    plan = null,
    status = null,
  } = config.params
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.users.filter(
    user =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      (user.username.toLowerCase().includes(queryLowered) || user.name.toLowerCase().includes(queryLowered)) &&
      user.role === (role || user.role) &&
      user.currentPlan === (plan || user.currentPlan) &&
      user.status === (status || user.status),
  )
  /* eslint-enable  */

  const sortedData = filteredData.sort(sortCompare(sortBy))
  if (sortDesc) sortedData.reverse()

  return [
    200,
    {
      users: paginateArray(sortedData, perPage, page),
      total: filteredData.length,
    },
  ]
})

// ------------------------------------------------
// POST: Add new user
// ------------------------------------------------
mock.onPost('/apps/role/users').reply(config => {
  // Get event from post data
  const { user } = JSON.parse(config.data)


  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1
  data.users.push(user)

  return [201, { user }]
})

// ------------------------------------------------
// GET: Return Single User
// ------------------------------------------------
mock.onGet(/\/apps\/role\/users\/\d+/).reply(config => {
  // Get event id from URL
  let userId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  userId = Number(userId)
  alert('this is ')
  // const userIndex = data.users.findIndex(e => e.id === userId)

  if (user) return [200, user]
  return [404]
})


// ------------------------------------------------
// DELETE: Remove Item from users
// ------------------------------------------------
mock.onDelete(/\/apps\/category\/users\/\d+/).reply(config => {
  // Get event id from URL
  let userId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(e => e.id === userId)
  if (userIndex > -1) data.users.splice(userIndex, 1)

  return [200]
})



