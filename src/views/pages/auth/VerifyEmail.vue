<template>
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        Vuexy
      </h2>
    </b-link>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { BLink, BImg, BButton } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'
import { toastAlert } from "@core/mixins/ui/toast";
import { updateRegisterStep, save } from '@/auth/utils'

export default {
  components: {
    BLink, BImg, BButton, VuexyLogo,
  },
  mixins: [toastAlert],
  created() {
    const id = this.$route.params.id
    const hash = this.$route.params.hash
    const url = `/email/verify/${id}/${hash}`
    this.$http.post(url).then(response => {
      const { data } = response
      localStorage.setItem('userData', JSON.stringify(data.data.userData))
    
      this.successToast('Success', data.message)
      this.$router.push({name: 'home'}).catch(() => {});
    }).catch(() => {
      this.errorToast('Error',"There is some thing going wrong");
      save('linkExpired',true)
      this.$router.push("/email-not-verified").catch(() => {});
    })
  },
  data() {
    return {
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
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
