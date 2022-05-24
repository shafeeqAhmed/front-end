// We haven't added icon's computed property because it makes this mixin coupled with UI
import useJwt from '@/auth/jwt/useJwt'

export const togglePasswordVisibility = {
  data() {
    return {
      passwordFieldType: 'password',
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
  },
}

export const _ = null
