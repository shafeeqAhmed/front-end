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
          .get('/apps/template/users', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/category/users/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/apps/category/users/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/category/users', { user: userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
