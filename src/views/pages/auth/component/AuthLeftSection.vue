<template>
        <div class="w-100 d-lg-flex aling-items-center justify-content-center px-lg-5 px-md-5 px-sm-0 mb-5">
          <div class="w-100 text-center">
            <b-img
            src="@/assets/images/auth/company-logo.png"
            class="company-logo mb-5 mx-auto"
          />
          <!-- List Group -->
        <b-list-group class="listing mx-lg-auto">
            <b-list-group-item>
              <b-link class="d-flex align-items-center" :to="{ name: 'auth-account-type' }">
                <b-avatar
                  rounded
                  class="avatar-link mr-2 float-left"
                  :class="getMenuVal('auth-account-type') ? '' : 'border-dark text-raven'"
                  :variant="getMenuVal('auth-account-type') ? 'primary' : ''"
                >
                  <feather-icon icon="UserIcon" />
                </b-avatar>
                <span class="link-title active-link">Account Type </span>
              </b-link>
            </b-list-group-item>

            <b-list-group-item>
              <b-link class="d-flex align-items-center" :to="{ name: 'auth-account-basic-info' }">
                <b-avatar
                  rounded
                  class="avatar-link mr-2 float-left"
                  :class="getMenuVal('auth-account-basic-info') ? '' : 'border-dark text-raven'"
                  :variant="getMenuVal('auth-account-basic-info') ? 'primary' : ''"
                >
                  <feather-icon icon="UsersIcon" />
                </b-avatar>
                <span 
                class="link-title"
                 :class="getMenuVal('auth-account-basic-info') ? 'active-link' : ''"
                >Basic Info</span>
              </b-link>
            </b-list-group-item>

            <b-list-group-item>
              <b-link class="d-flex align-items-center" :to="{ name: 'email-not-verified' }">
                <b-avatar
                  rounded
                  class="avatar-link mr-2 float-left"
                  :class="getMenuVal('email-not-verified') ? '' : 'border-dark text-raven'"
                  :variant="getMenuVal('email-not-verified') ? 'primary' : ''"
                >
                  <feather-icon icon="MailIcon" />
                </b-avatar>
                <span class="link-title"
                  :class="getMenuVal('email-not-verified') ? 'active-link' : ''"
                >Email Verification</span>
              </b-link>
            </b-list-group-item>

            <b-list-group-item>
              <b-link class="d-flex align-items-center" :to="{ name: 'set-2fa' }">
                <b-avatar
                  rounded
                  class="avatar-link mr-2 float-left"
                  :class="getMenuVal('set-2fa') ? '' : 'border-dark text-raven'"
                  :variant="getMenuVal('set-2fa') ? 'primary' : ''"
                >
                  <feather-icon icon="PhoneIcon" />
                </b-avatar>
                <span 
                class="link-title"
                 :class="getMenuVal('set-2fa') ? 'active-link' : ''"
                >Phone Number</span>
              </b-link>
            </b-list-group-item>
            <b-list-group-item>
              <b-link class="d-flex align-items-center" :to="{ name: 'auth-2fa' }">
                <b-avatar
                  rounded
                  class="avatar-link mr-2 float-left"
                  :class="getMenuVal('auth-2fa') ? '' : 'border-dark text-raven'"
                  :variant="getMenuVal('auth-2fa') ? 'primary' : ''"
                >
                  <feather-icon icon="LockIcon" />
                </b-avatar>
                <span 
                class="link-title"
                 :class="getMenuVal('auth-2fa') ? 'active-link' : ''"
                >OTP Verification</span>
              </b-link>
            </b-list-group-item>
            <b-list-group-item>
              <b-link class="d-flex align-items-center" :to="{ name: 'registration-completed' }">
                <b-avatar
                  rounded
                  class="avatar-link mr-2 float-left"
                  :class="getMenuVal('registration-completed') ? '' : 'border-dark text-raven'"
                  :variant="getMenuVal('registration-completed') ? 'primary' : ''"
                >
                  <feather-icon icon="CheckIcon" />
                </b-avatar>
                <span 
                :class="getMenuVal('registration-completed') ? 'active-link' : ''"
                class="link-title"
                >Registration Complete</span>
              </b-link>
            </b-list-group-item>
          </b-list-group>
          </div>
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
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import "@/assets/css/auth.css"
import "@/assets/css/signup-menu.css";
import useAuthLogic from "../useAuthLogic";
import { get,isUserLoggedIn,getHomeRouteForLoggedInUser,getUserData } from '@/auth/utils'
import router from "@/router"
import { useRouter } from '@core/utils/utils'

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
  },
  mixins: [togglePasswordVisibility],
  // created() {
  //   this.updateMenu()
  // },
  data() {
    return {
      backgroundImg: require("@/assets/images/auth/background.png"),
      sideImg: require("@/assets/images/pages/login-v2.svg"),
      googleImg: require("@/assets/images/auth/Group.png"),
      facebookImg: require("@/assets/images/auth/facebook.png"),
    };
  },
  computed: {
    path() {
      return this.$route.name
    },
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
    // getMenuVal(key) {
    //   const index = this.authMenu.findIndex(object => {
    //     return object.key === key;
    //   });
    //  return this.authMenu[index].val
    // },
    // updateMenu() {
      
    //   const MenuIndex = this.authMenu.findIndex(object => {
    //     return object.key === this.$route.name;
    //   });
    //   this.authMenu.forEach((element,index) => {
    //     if(index <= MenuIndex) {
    //       element.val = true
    //     }
    //   });
    // }
  },
  setup() {
  //   const { getMenuVal,updateMenu, getCurrentStepRoute,getCurrentRouteStep } = useAuthLogic();
  //   const isLoggedIn = isUserLoggedIn()
    
  
  //   const step = get('step')
  //   const { route } = useRouter();


  //   if(!get('role') ) {
  //     router.push({ name: 'auth-account-type'}).catch(()=>{})
  //   }

  // if(get('acountHealth') == true) {
  //   const userData = getUserData()
  //      router.push({ name: getHomeRouteForLoggedInUser(userData.role)}).catch(()=>{})
        
  //   }
    
    // if(get('role') && route.value.name != getCurrentStepRoute(step) && getCurrentRouteStep(route.value.name) >  step) {
    //   router.push({ name: getCurrentStepRoute(step) }).catch(()=>{})    
    // }

    updateMenu()
    return {
      getMenuVal,
      updateMenu,
      getCurrentStepRoute,
      getCurrentRouteStep,
      getUserData,
      isUserLoggedIn,
      getHomeRouteForLoggedInUser,
      get
    }

  }

};
</script>


