import mock from '@/@fake-db/mock'
import { paginateArray, sortCompare } from '@/@fake-db/utils'
//  total partners, total lawyer, total paralegals, total clerks)

/* eslint-disable global-require */
const data = {
  users: [
    {
      id: 1,
      name: 'Law Firm A',
      partner: 5,
      lawer: 21,
      paralegals: 11,
      clerk: 17,
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
      name: 'Law Firm B',
      partner: 11,
      lawer: 3,
      paralegals: 21,
      clerk: 9,
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
      name: 'Law Firm C',
      partner: 13,
      lawer: 7,
      paralegals: 6,
      clerk: 3,
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
      name: 'Law Firm D',
      partner: 2,
      lawer: 1,
      paralegals: 1,
      clerk: 0,
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
mock.onGet('/apps/lawFirm/users').reply(config => {
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
mock.onPost('/apps/lawFirm/users').reply(config => {
  // Get event from post data
  const { user } = JSON.parse(config.data)


  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1
  user.partner = 0
  user.lawer = 0
  user.paralegals = 0
  user.clerk = 0

  data.users.push(user)

  return [201, { user }]
})

// ------------------------------------------------
// GET: Return Single User
// ------------------------------------------------
mock.onGet(/\/apps\/lawFirm\/users\/\d+/).reply(config => {
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
mock.onDelete(/\/apps\/lawFirm\/users\/\d+/).reply(config => {
  // Get event id from URL
  let userId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(e => e.id === userId)
  if (userIndex > -1) data.users.splice(userIndex, 1)

  return [200]
})



