<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />

        <h2 class="brand-text text-primary ml-1">
          Vuexy
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Forgot password V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Forgot password-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title class="mb-1">
            2FA Verification? 🔒
          </b-card-title>
          <b-card-text class="mb-2">
            Please Enter the code that you received in your register phone number
          </b-card-text>
      <b-card-text class="mb-2">
            OTP only for testing purpose <b>{{ otp }}</b>
          </b-card-text>
      
          <!-- form -->
          <validation-observer ref="simpleRules">
            <b-form
              class="auth-forgot-password-form mt-2"
              @submit.prevent="verifyTwofaCode"
            >
              <b-form-group
                label="Code"
                label-for="code"
              >
                <validation-provider
                  #default="{ errors }"
                  name="code"
                  rules="required"
                >
                  <b-form-input
                    id="code"
                    v-model="code"
                    :state="errors.length > 0 ? false:null"
                    name="code"
                    placeholder="Enter Code"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <b-button
                type="submit"
                variant="primary"
                block
              >
                submit
              </b-button>
            </b-form>
          </validation-observer>

          <p class="text-left mt-2">
            <b-link :to="{name:'auth-login'}">
              <feather-icon icon="ChevronLeftIcon" /> Back to login
            </b-link>
          </p>
           <p class="text-right mt-2">
            <b-link @click="resendOtp">
               Resend OTP <feather-icon icon="ChevronRightIcon" />
            </b-link>
          </p>
        </b-col>
      </b-col>
      <!-- /Forgot password-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BCardTitle, BCardText, BImg, BForm, BFormGroup, BFormInput, BButton,
} from 'bootstrap-vue'
import { required } from '@validations'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'
import { toastAlert } from "@core/mixins/ui/toast";
import {  getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'


export default {
  components: {
    VuexyLogo,
    BRow,
    BCol,
    BLink,
    BImg,
    BForm,
    BButton,
    BFormGroup,
    BFormInput,
    BCardTitle,
    BCardText,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [toastAlert],
  created() {
    this.resendOtp()
  },
  data() {
    return {
      code: '',
      otp: '',
      sideImg: require('@/assets/images/pages/forgot-password-v2.svg'),
      // validation
      required,
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/forgot-password-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    resendOtp() {
      this.$http.get('get-2fa').then(response=>{
        this.otp = response.data.data.code
        this.successToast('Success',response.data.message)
      })
    },

    verifyTwofaCode() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
        useJwt.verifyTwofaCode({
            code: this.code,
          }).then(response => {
            // if(!response.data.status) {
            //         this.$refs.simpleRules.setErrors({code: [response.data.message]})
            // }
            localStorage.setItem('isVerified2fa', JSON.stringify(response.data.status))
            if(response.data.status){

              const userData = getUserData();
               this.$router.replace(getHomeRouteForLoggedInUser(userData.role))
                .then(() => { this.successToast('Success',response.data.message) }).catch(() => {})
            } else {
              this.errorToast('error',response.data.message)
            }
            })
            .catch(error => {
              this.$refs.simpleRules.setErrors(error.response.data.errors)
            })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
