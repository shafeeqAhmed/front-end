<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Left Text-->
      <b-col lg="5" class="d-flex p-1 p-lg-5 p-md-5 left-text bg-white">
        <auth-left-section />
      </b-col>
      <!-- /Left Text-->

      <!-- Basic Info -->
       <b-col
        lg="7"
        class="d-flex auth-bg px-1 p-lg-5 bg-light"
      >
        <b-col sm="8" md="7" lg="12" class="py-2 px-xl-2 mx-auto">
          <login-back />
          <b-card-title title-tag="h1" class="mt-3 mb-1 rs-title">
            Sign Up 
          </b-card-title>
          <p class="text-dark-custom p-subtitle mb-5">To get started, Fill this Form!</p>
          <!-- form -->
          <!--  -->
          <validation-observer ref="registerForm" #default="{ invalid }" >
            <b-form class="auth-login-form mt-2" @submit.prevent="register">
              <!-- Company ID -->
              <b-row>
                <b-col md="6">
                  <b-form-group class="mb-4">
                    <validation-provider
                      #default="{ errors }"
                      name="First Name"
                      vid="first_name"
                      rules="required"
                    >
                      <b-input-group
                        class="input-group-merge"
                        :class="errors.length > 0 ? 'is-invalid' : null"
                      >
                        <b-input-group-prepend is-text>
                          <feather-icon
                            class="cursor-pointer"
                            icon="UserIcon"
                          />
                        </b-input-group-prepend>
                        <b-form-input
                          id="first_name"
                          v-model="first_name"
                          :state="errors.length > 0 ? false : null"
                          class="form-control-merge"
                          type="text"
                          name="first_name"
                          placeholder="Enter First Name"
                        />
                      </b-input-group>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group class="mb-4">
                    <validation-provider
                      #default="{ errors }"
                      name="Last Name"
                      vid="last_name"
                      rules="required"
                    >
                      <b-input-group
                        class="input-group-merge"
                        :class="errors.length > 0 ? 'is-invalid' : null"
                      >
                        <b-input-group-prepend is-text>
                          <feather-icon
                            class="cursor-pointer"
                            icon="UserIcon"
                          />
                        </b-input-group-prepend>
                        <b-form-input
                          id="last_name"
                          v-model="last_name"
                          :state="errors.length > 0 ? false : null"
                          class="form-control-merge"
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                        />
                      </b-input-group>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- Email -->
                <b-form-group class="mb-4">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                <b-input-group class="input-group-merge"
                        :class="errors.length > 0 ? 'is-invalid' : null">
                        <b-input-group-prepend is-text>
                          <feather-icon
                            class="cursor-pointer"
                            icon="MailIcon"
                          />
                        </b-input-group-prepend>
                       
                  <b-form-input
                    id="register-email"
                    v-model="userEmail"
                    name="register-email"
                    :state="errors.length > 0 ? false : null"
                    placeholder="Email"
                    type="email"
                  />
                   </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Password -->
              <b-row>
                <b-col md="6">
                  <b-form-group>
                    <validation-provider
                      #default="{ errors }"
                      name="Password"
                      vid="password"
                      rules="required"
                    >
                      <b-input-group
                        class="input-group-merge"
                        :class="errors.length > 0 ? 'is-invalid' : null"
                      >
                        <b-input-group-prepend is-text>
                          <feather-icon
                            class="cursor-pointer"
                            icon="LockIcon"
                            @click="togglePasswordVisibility"
                          />
                        </b-input-group-prepend>
                        <b-form-input
                          id="password"
                          v-model="password"
                          :state="errors.length > 0 ? false : null"
                          class="form-control-merge"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </b-input-group>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <validation-provider
                      #default="{ errors }"
                       name="Confirm Password"
                        vid="password_confirmation"
                        rules="required|confirmed:password"
                    >
                      <b-input-group
                        class="input-group-merge"
                        :class="errors.length > 0 ? 'is-invalid' : null"
                      >
                        <b-input-group-prepend is-text>
                          <feather-icon
                            class="cursor-pointer"
                            icon="LockIcon"
                            @click="togglePasswordVisibility"
                          />
                        </b-input-group-prepend>
                        <b-form-input
                          id="confirmPassword"
                          v-model="password_confirmation"
                          :state="errors.length > 0 ? false : null"
                          class="form-control-merge"
                          :type="passwordFieldType"
                          name="confirmPassword"
                          placeholder="Re-Typed Password"
                        />
                      </b-input-group>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- submit buttons -->
              <b-row>
                <b-col lg="8" offset-lg="2">
                  <b-button
                type="submit"
                variant="primary"
                class="submit-btn mt-3 text-uppercase"
                block
                :disabled = "isDisabled"
              
              >
                Next
              </b-button>
                </b-col>
              </b-row>
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
      <!-- Basic Info -->
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
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BAvatar,
  BButton,
  BListGroup,
  BListGroupItem,
  BInputGroupPrepend,
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import AuthLeftSection from './component/AuthLeftSection'
import "@/assets/css/auth.css"
import "@/assets/css/signup-menu.css";
import useAuthLogic from "./useAuthLogic";
import useJwt from "@/auth/jwt/useJwt";
import { toastAlert } from "@core/mixins/ui/toast";
import { isUserLoggedIn, getUserData, updateRegisterStep, get } from '@/auth/utils'
import { globalHelper } from "@core/mixins/ui/global";
import LoginBack from './component/LoginBack'


export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroupPrepend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    
    BImg,
    BForm,
    BAvatar,
    BButton,
    VuexyLogo,
    BListGroup,
    BListGroupItem,
    ValidationProvider,
    ValidationObserver,
    AuthLeftSection,
    LoginBack
  },
  mixins: [togglePasswordVisibility,toastAlert,globalHelper],
  data() {
    return {
      backgroundImg: require("@/assets/images/auth/background.png"),
      sideImg: require("@/assets/images/pages/login-v2.svg"),
      googleImg: require("@/assets/images/auth/Group.png"),
      facebookImg: require("@/assets/images/auth/facebook.png"),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/pages/login-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
   methods: {
    register() {
      this.$refs.registerForm.validate().then((success) => {
        if (success) {
          this.isDisabled = true
          useJwt
            .register({
              first_name: this.first_name,
              last_name: this.last_name,
              email: this.userEmail,
              password: this.password,
              password_confirmation: this.password_confirmation,
              role: get('role'),
            })
            .then((response) => {
          this.isDisabled = false

              const { data : { data } } = response
              const { userData,accessToken, refreshToken,isVerified2fa } = data
              useJwt.setToken(accessToken)
              useJwt.setRefreshToken(refreshToken)
              localStorage.setItem('userData', JSON.stringify(userData))
              localStorage.setItem('isVerified2fa', isVerified2fa)
              this.$ability.update(userData.ability)   

              this.successToast('Success',response.data.message)
              updateRegisterStep(3)
              this.$router.push("/email-not-verified").catch(() => {});
            })
            .catch((error) => {
                        this.isDisabled = false

              if(error.response.status == 422) {
               this.errorToast('Error',error.response.data.message)

              } else {
              this.errorToast('Error',"something is going wrong ")
              }
              
              this.$refs.registerForm.setErrors(error.response.data.errors);
            });
        }
      });
    },
  },
  setup() {
    
    const {
      role,
      first_name,
      last_name,
      userEmail,
      password,
      password_confirmation,
      isDisabled
    } = useAuthLogic()

    const isUserLogin = isUserLoggedIn()
    if(isUserLogin) {
      const user = getUserData();
      console.log(user.email)
      first_name.value = user.first_name
      last_name.value = user.last_name
      userEmail.value = user.email
    }

    return {
      isUserLogin,
      role,
      first_name,
      last_name,
      userEmail,
      password,
      password_confirmation,
      isDisabled
    }
  }
  
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
