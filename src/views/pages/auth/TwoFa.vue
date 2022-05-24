<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Left Text-->
      <b-col lg="5" class="p-1 p-lg-5 p-md-5 left-text bg-white">
        <auth-left-section />
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col
        lg="7"
        class="d-flex auth-bg px-2 p-lg-5 bg-light"
      >
        <b-col sm="8" md="6" lg="10" class="py-2 px-xl-2 mx-auto">
          <login-back />
          <b-card-title title-tag="h1" class="mb-1 rs-title mt-3">
            Add Security Code
          </b-card-title>
          <p class="text-nero p-subtitle">
            A 4-digit code has been sent to your phone number ending with
            <b><i>{{ phone_no }}</i></b>. Please enter the code below.
          </p>
          <!-- form -->
          <validation-observer ref="simpleRules">
            <b-form class="auth-login-form mt-5" 
              @submit.prevent="verifyTwofaCode"
            >
              <div class="d-flex justify-content-between">
                <b-form-group>
                  <b-form-input
                    v-model="n1"
                    class="verify"
                    id="h-number"
                    type="number"
                    placeholder="0"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    v-model="n2"
                    class="verify"
                    id="h-number"
                    type="number"
                    placeholder="0"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    v-model="n3"
                    class="verify"
                    id="h-number"
                    type="number"
                    placeholder="0"
                  />
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    v-model="n4"
                    class="verify"
                    id="h-number"
                    type="number"
                    placeholder="0"
                  />
                </b-form-group>
              </div>
              <p>
                <b-img src="@/assets/images/auth/Union.png" />
                <b-link 
                  :disabled="isDisabled"
                  class="ml-1 text-dark" 
                  @click="resendOtp">
                  <small>Resend Security Code</small>
                </b-link>
              </p>
              <!-- buttons -->
              <b-row>
                <b-col lg="10" offset-lg="1" class="mt-1">
                  <!-- <b-button
                type="submit"
                variant="outline-primary"
                class="mt-3 text-uppercase"
                block
                @click="$router.push({name: 'set-2fa'})"
              >
                Change Number
              </b-button> -->
              <b-button
                :disabled="isDisabled"
                type="submit"
                variant="primary"
                class="mt-3 text-uppercase"
                block
              >
                Continue
              </b-button>
                </b-col>
              </b-row>
            </b-form>
          </validation-observer>

              <b-row>
                <b-col lg="10" offset-lg="1" class="mt-1">
                  <b-button
                type="submit"
                variant="outline-primary"
                class=" text-uppercase"
                block
                @click="$router.push({name: 'set-2fa'})"
              >
                Change Number
              </b-button>
                </b-col>
              </b-row>

        </b-col>
      </b-col>
      <!-- /Register-->
    </b-row>
    
  </div> 
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";

import {
  BRow,
  BCol,
  BLink,
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BInputGroupPrepend,
  BImg,
  BCardTitle,
  BCardText,
  BListGroup,
  BListGroupItem,
  BAvatar,
  Cleave,
} from "bootstrap-vue";
import { required } from "@validations";
import store from "@/store/index";
import useJwt from "@/auth/jwt/useJwt";
import { toastAlert } from "@core/mixins/ui/toast";
import { isUserLoggedIn, getUserData, updateRegisterStep,save } from '@/auth/utils'
import AuthLeftSection from './component/AuthLeftSection'
import LoginBack from './component/LoginBack'

import "@/assets/css/auth.css";
import "@/assets/css/signup-menu.css";
export default {
  components: {
    VuexyLogo,
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BListGroup,
    BListGroupItem,
    BAvatar,
    BInputGroupPrepend,
    // validations
    ValidationProvider,
    ValidationObserver,
    AuthLeftSection,
    LoginBack
  },
  mixins: [toastAlert],
    created() {
      const userData = getUserData()
    if(userData) {
      this.phone_no = userData.phone_no
    }
  },
  data() {
    return {
      isDisabled: false,
      n1: '',
      n2: '',
      n3: '',
      n4: '',
      phone_no: '',
      sideImg: require("@/assets/images/pages/register-v2.svg"),
      required,
    };
  },

  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/pages/register-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  methods: {
    resendOtp() {

                this.isDisabled = true
      this.$http.get('get-2fa').then(response=>{
                  this.isDisabled = false
        this.successToast('Success',response.data.message)
      }).catch(() => {
                  this.isDisabled = false

      })
    },

    verifyTwofaCode() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.isDisabled = true
          this.code = this.n1+this.n2+this.n3+this.n4
        useJwt.verifyTwofaCode({
            code: this.code,
          }).then(response => {
                      this.isDisabled =false
            localStorage.setItem('isVerified2fa', JSON.stringify(response.data.status))
            if(response.data.status){
              updateRegisterStep(6)
              const userData = getUserData();
              this.$router.push('/registration-completed').catch(() => {})
              //  this.$router.replace(getHomeRouteForLoggedInUser(userData.role))
              //   .then(() => { this.successToast('Success',response.data.message) }).catch(() => {})
            } else {
              this.errorToast('error',response.data.message)
            }
            })
            // .catch(error => {
            //   this.isDisabled = true
            //   const res = error.response
            //   if(res.status) {
            //     this.errorToast('Error',res.data.message)
            //   }
            // })
        }
      })
    },
  },
 
};
/* eslint-disable global-require */
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>

