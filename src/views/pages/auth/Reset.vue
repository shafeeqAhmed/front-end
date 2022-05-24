<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Left Text-->
      <b-col
        lg="6"
        :style="{ backgroundImage: 'url(' + backgroundImg + ')' }"
        class="d-none d-lg-flex align-items-center p-5 left-text"
      >
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img src="@/assets/images/auth/1.png" class="top-img" id="img-1" />
          <b-img src="@/assets/images/auth/2.png" class="top-img" id="img-2" />
          <b-img src="@/assets/images/auth/3.png" class="top-img" id="img-3" />
          <h1>Details create the big picture</h1>
          <b-img src="@/assets/images/auth/4.png" class="top-img" id="img-4" />
          <b-img src="@/assets/images/auth/5.png" class="top-img" id="img-5" />
          <b-img src="@/assets/images/auth/6.png" class="top-img" id="img-6" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="6"
        class="d-flex align-items-center auth-bg px-2 p-lg-5 bg-light"
      >
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-img
            src="@/assets/images/auth/company-logo.png"
            class="company-logo mb-2"
          />
          <p>
            <feather-icon
              class="cursor-pointer"
              icon="ArrowLeftIcon"
              @click="togglePasswordVisibility"
            />
            <b-link class="ml-1 text-dark"  :to="{ name: 'auth-login' }">
              <small>Back to Sign in</small>
            </b-link>
          </p>
          <div class="mt-3">
            <b-card-title title-tag="h1" class="mb-1 rs-title">
              New Password
            </b-card-title>
            <p class="text-dark">Never share your password with anyone.</p>
          </div>
          <!-- form -->
          <validation-observer ref="registerForm" #default="{ invalid }">
            <b-form class="auth-login-form mt-5" @submit.prevent="reset">
              
              <!-- Company ID -->
              <b-form-group class="mb-3">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-input-group-prepend is-text>
                      <feather-icon
                        class="cursor-pointer"
                        icon="BriefcaseIcon"
                      />
                    </b-input-group-prepend>
                    <b-form-input
                      id="email"
                      v-model="userEmail"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Password -->
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
                      type="password"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      name="password"
                      placeholder="Password"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- Re-Type Password -->
              <b-form-group>
                <validation-provider
                  #default="{ errors }"
                  name="New Password"
                  vid="confirmPassword"
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
                      id="login-newPassword"
                      v-model="password_confirmation"
                      type="password"
                       :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      name="login-password"
                      placeholder="Re-Type Password"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                class="submit-btn mt-5 text-uppercase"
                block
                :disabled="isDisabled"
              >
                Reset Password
              </b-button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
      <!-- /Login-->
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
  BButton,
  BInputGroupPrepend,
} from "bootstrap-vue";
import { required, confirmed } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import "@/assets/css/auth.css"
import { toastAlert } from "@core/mixins/ui/toast";
import {  getUserData  } from '@/auth/utils'
import useJwt from "@/auth/jwt/useJwt";


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
    BButton,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility,toastAlert],
  created() {
      const userData = getUserData()
    if(userData) {
      this.userEmail = userData.email
    }
    this.token = this.$route.query.token
    if(!this.token) {
      this.$router.push('/login')
    }
  },
  data() {
    return {
      isDisabled: false,
      token : '',
      userEmail: '',
      password: "",
      password_confirmation: '',
      backgroundImg: require("@/assets/images/auth/background.png"),
      sideImg: require("@/assets/images/pages/login-v2.svg"),
      googleImg: require("@/assets/images/auth/Group.png"),
      facebookImg: require("@/assets/images/auth/facebook.png"),
      // validation rulesimport store from '@/store/index'
      required,
      confirmed,
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
   reset() {
      this.$refs.registerForm.validate().then((success) => {
        if (success) {
          this.isDisabled = true
          useJwt
            .resetPassword({
              token: this.token,
              email: this.userEmail,
              password: this.password,
              password_confirmation: this.password_confirmation,
              })
            .then((response) => {
              this.isDisabled = false
              const { data } = response

            if(data.status) {
              this.successToast('Congratulation',data.message)
              this.$router.push("/login");
            }else {
            this.errorToast('Error',data.message)

            }
            })
            .catch((error) => {
              this.isDisabled = false
              this.$refs.registerForm.setErrors(error.response.data.errors);
            });
        }
      });
    },
  },
  
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
