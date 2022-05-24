<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Left Text-->
      <b-col lg="5" class="d-flex p-1 p-lg-5 p-md-5 left-text bg-white">
        <auth-left-section />
      </b-col>
      <!-- /Left Text-->

      <!-- Account Type-->
     <b-col
        lg="7"
        class="d-flex auth-bg px-1 p-lg-5 bg-light"
      >
        <b-col sm="8" md="7" lg="12" class="py-2 px-xl-2 mx-auto">
          <!-- <p>
            <img class="cursor-pointer" src="@/assets/images/icons/arrow-left.svg" @click="togglePasswordVisibility" />
            <b-link class="ml-1 text-dark-custom"  @click="logout">
              <small>Back to Sign in</small>
            </b-link>
          </p> -->
          <login-back />
          <div class="mt-3 mb-5">
            <b-card-title title-tag="h1" class="mb-2 rs-title">
              Choose Account Type
            </b-card-title>
            <p class="text-dark-custom p-subtitle">
              Thanks for choosing Cloud Rep, we're excited to get you started!
            </p>
          </div>
          <div>
            <b-link @click="assignRole('agent')">
              <b-card
                class="bg-white p-1 d-flex align-items-center signup-card mb-2"
                :class="role == 'agent' ? 'signup-card-selected' : ''"
              >
                <b-img
                  src="@/assets/images/auth/Client.png"
                  class="client-img"
                />
                <b-card-body class="pt-2 pl-2">
                  <p class="text-primary b-title">Agent</p>
                  <p class="text-nero p-subtitle">I am looking for a Home Care Provider</p>
                </b-card-body>
                <b-img src="@/assets/images/auth/arrow.png" class="arrow-img" />
              </b-card>
            </b-link>
            <b-link @click="assignRole('client')">
              <b-card
                class="bg-white p-1 d-flex align-items-center signup-card mb-2"
                :class="role == 'client' ? 'signup-card-selected' : ''"
              >
                <b-img
                  src="@/assets/images/auth/Client.png"
                  class="client-img"
                />
                <b-card-body class="pt-2 pl-2">
                  <p class="text-primary b-title">Client</p>
                  <p class="text-nero p-subtitle">I am looking for a Home Care Provider</p>
                </b-card-body>
                <b-img src="@/assets/images/auth/arrow.png" class="arrow-img" />
              </b-card>
            </b-link>
            <b-link @click="assignRole('publisher')">
              <b-card
                class="bg-white p-1 d-flex align-items-center signup-card mb-2"
                :class="role == 'publisher' ? 'signup-card-selected' : ''"
              >
                <b-img
                  src="@/assets/images/auth/Client.png"
                  class="client-img"
                />
                <b-card-body class="pt-2 pl-2">
                  <p class="text-primary b-title">Publisher</p>
                  <p class="text-nero p-subtitle">I am looking for a Home Care Provider</p>
                </b-card-body>
                <b-img src="@/assets/images/auth/arrow.png" class="arrow-img" />
              </b-card>
            </b-link>
          </div>
        </b-col>
      </b-col>
      <!-- /Account -->
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
  // BCard,
  // BCardBody
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import AuthLeftSection from './component/AuthLeftSection'
import "@/assets/css/auth.css"
import "@/assets/css/signup-menu.css";
import useAuthLogic from "./useAuthLogic";
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
    // BCard,
    // BCardBody
  },
  mixins: [togglePasswordVisibility,globalHelper],
  data() {
    return {
      status: "",
      password: "",
      companyId: "",
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
    loginBack() {
      this.$router.push("{ name: 'auth-login' }")
    }
  },
  setup() {
    const { assignRole, role } = useAuthLogic()
  return {
    assignRole,
    role
  }
  }
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
