// We haven't added icon's computed property because it makes this mixin coupled with UI
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'


export const toastAlert = {
  data() {
    return {
      passwordFieldType: 'password',
    }
  },
  methods: {
    successToast(title, text) {
      this.$toast({
        component: ToastificationContent,
        position: 'top-right',
        props: {
          title: title,
          icon: 'CoffeeIcon',
          variant: 'success',
          text: text,
        },
      })
    },
    errorToast(title, text) {
      this.$toast({
        component: ToastificationContent,
        position: 'top-right',
        props: {
          title: title,
          icon: 'CoffeeIcon',
          variant: 'danger',
          text: text,
        },
      })
    },
    customToast(type, title, text) {
      this.$toast({
        component: ToastificationContent,
        position: 'top-right',
        props: {
          title: title,
          icon: 'CoffeeIcon',
          variant: type,
          text: text,
        },
      })
    }
  },
}

export const _ = null
