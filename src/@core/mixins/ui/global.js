// We haven't added icon's computed property because it makes this mixin coupled with UI
import useJwt from '@/auth/jwt/useJwt'
import { isUserLoggedIn } from '@/auth/utils'

export const globalHelper = {
    data() {
        return {
        }
    },
    methods: {
        logout() {
            const isLoggedIn = isUserLoggedIn()
            if (isLoggedIn) {
                useJwt.logout()
                    .then(() => {
                        useJwt.logoutFromLocal()
                    }).catch(() => {
                        useJwt.logoutFromLocal()
                    });
            } else {
                useJwt.logoutFromLocal()

            }

        }
    },
}

export const _ = null
