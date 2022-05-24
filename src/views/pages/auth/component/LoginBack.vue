<template>
        
        <div>
            <img class="cursor-pointer" src="@/assets/images/icons/arrow-left.svg"/>
            <b-link class="ml-1 text-dark-custom"  @click="logout">
              <small>Back to Sign in +</small>
            </b-link>
          </div>
</template>

<script>
/* eslint-disable global-require */
import { globalHelper } from "@core/mixins/ui/global";

import {
  BLink,
} from "bootstrap-vue";

export default {
  components: {
    BLink,
  },
  mixins: [globalHelper],
};
</script>


