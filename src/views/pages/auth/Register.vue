<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <!-- <b-link class="brand-logo">
        <vuexy-logo />

        <h2 class="brand-text text-primary ml-1">Vuexy</h2>
      </b-link> -->
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Register V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title class="mb-1"> Adventure starts here 🚀 </b-card-title>
          <b-card-text class="mb-2">
            Make your app management easy and fun!
          </b-card-text>

          <!-- form -->
          <validation-observer ref="registerForm" #default="{ invalid }">
            <b-form class="auth-register-form mt-2" @submit.prevent="register">
              <!-- First Name -->
              <b-form-group label="First Name" label-for="first_name">
                <validation-provider
                  #default="{ errors }"
                  name="First Name"
                  vid="first_name"
                  rules="required"
                >
                  <b-form-input
                    id="first_name"
                    v-model="first_name"
                    name="first_name"
                    :state="errors.length > 0 ? false : null"
                    placeholder="First Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Last Name -->
              <b-form-group label="Last Name" label-for="last_name">
                <validation-provider
                  #default="{ errors }"
                  name="Last Name"
                  vid="last_name"
                  rules="required"
                >
                  <b-form-input
                    id="last_name"
                    v-model="last_name"
                    name="last_name"
                    :state="errors.length > 0 ? false : null"
                    placeholder="Last Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- email -->
              <b-form-group label="Email" label-for="register-email">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="register-email"
                    v-model="userEmail"
                    name="register-email"
                    :state="errors.length > 0 ? false : null"
                    placeholder="Email"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

                <!-- Phone Number -->
              <b-form-group label="Phone Number" label-for="phone_no">
                <validation-provider
                  #default="{ errors }"
                  name="Phone Number"
                  vid="phone_no"
                  rules="required"
                >
                  <b-form-input
                    id="phone_no"
                    v-model="phone_no"
                    name="phone_no"
                    :state="errors.length > 0 ? false : null"
                    placeholder="Phone Number"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- password -->
              <b-form-group label-for="register-password" label="Password">
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
                    <b-form-input
                      id="register-password"
                      v-model="password"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      :state="errors.length > 0 ? false : null"
                      name="register-password"
                      placeholder="Password"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

   <!-- Confirm password -->
              <b-form-group label-for="register-confirm-password" label="Confirm Password">
                <validation-provider
                  #default="{ errors }"
                  name="Confirm Password"
                  vid="confirmPassword"
                  rules="required|confirmed:password"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="register-confirm-password"
                      v-model="password_confirmation"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      :state="errors.length > 0 ? false : null"
                      name="register-confirm-password"
                      placeholder="Confirm Password"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

             

              <b-button
                variant="primary"
                block
                type="submit"
                :disabled="invalid"
              >
                Sign up
              </b-button>
            </b-form>
          </validation-observer>

          <p class="text-center mt-2">
            <span>Already have an account?</span>
            <b-link :to="{ name: 'auth-login' }">
              <span>&nbsp;Sign in instead</span>
            </b-link>
          </p>

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
  BImg,
  BCardTitle,
  BCardText,
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import { toastAlert } from "@core/mixins/ui/toast";
import store from "@/store/index";
import useJwt from "@/auth/jwt/useJwt";

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
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility,toastAlert],
  data() {
    return {
      status: "",
      first_name: "",
      last_name: "",
      role: 'client',
      phone_no: "",
      userEmail: "",
      password: "",
      password_confirmation: '',
      sideImg: require("@/assets/images/pages/register-v2.svg"),
      // validation
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
        this.sideImg = require("@/assets/images/pages/register-v2-dark.svg");
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
              role: this.role,
              phone_no: this.phone_no
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
};
/* eslint-disable global-require */
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
