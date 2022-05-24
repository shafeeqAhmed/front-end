<template>
  <div>
    <b-card :title="title">
      <b-card-text >
       Welcome Mr/Mrs <b>{{ userData.name }} </b> as Role <b>{{ userData.role }}</b>  on Cloud Rep work.
         <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel.
     </b-card-text>
    </b-card>

   
  </div>
</template>

<script>
import { BCard, BCardText, BLink } from 'bootstrap-vue'
import { getUserData } from '@/auth/utils'
export default {
  components: {
    BCard,
    BCardText,
    BLink,
  },
  data() {
    return {
      userData: {}
    }
  },
   computed: {
     title () {
       if(this.userData) {
            return  `Dashboard for Role 🚀 ${this.userData.role} 🚀`
        }
        return ''
    },
    description() {
      if(this.userData) {
        return `Welcome Mr/Mrs ${this.userData.name} as Role ${this.userData.role}  on Cloud Rep work.`
      }
      return ''
    },
   },
    created() {
      this.userData = getUserData()
    }
 
}
</script>

<style>

</style>
