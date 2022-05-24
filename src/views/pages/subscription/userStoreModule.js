import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/subscription/users', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/subscription/users/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/apps/subscription/users/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/subscription/users', { user: userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
