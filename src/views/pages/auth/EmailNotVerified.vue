<template>
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        Vuexy
      </h2>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Your Email Is not Verified Please check your inbox! 🔐
        </h2>
        <p class="mb-2">
          Verified linked is send on your <b>{{ userEmail }} </b> Address
        </p>
        <b-button
          variant="primary"
          class="mb-1 btn-sm-block"
          @click="resendEmail()"
          :disabled="isDisabled"
        >Resend Verification Mail</b-button>
        <b-img
          fluid
          :src="imgUrl"
          alt="Not authorized page"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { BLink, BImg, BButton } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'
import useJwt from "@/auth/jwt/useJwt";
import { toastAlert } from "@core/mixins/ui/toast";
import { isUserLoggedIn, getUserData, get,save } from '@/auth/utils'

export default {
  components: {
    BLink, BImg, BButton, VuexyLogo,
  },
  mixins: [toastAlert],
  created() {
    
    const isLoggedIn = isUserLoggedIn()
    if(isLoggedIn) {
      const userData = getUserData()
      this.userEmail = userData.email
    }
  },
  data() {
    return {
      userEmail:"",
      isDisabled: false,
      downImg: require('@/assets/images/pages/not-authorized.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/not-authorized-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
  methods: {
      resendEmail() {
      this.isDisabled = true
       useJwt.resendEmailVerification()
       .then(response=>{

        const {data} = response
        console.log(data)
        this.successToast('Message',data.message)
        this.isDisabled = false
       
       }).catch(error => {
        this.isDisabled = false
        this.errorToast('Message','There is something going wrong please try again!')
       })
     
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
