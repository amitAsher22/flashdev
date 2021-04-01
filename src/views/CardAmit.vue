<template>
  <div class="flex" >
    <profile  :profiles="profiles" @relodCards="read" />
  </div>
</template>






<script>

import localStorageDriver from "@/middleware/localStorage/profile-items_xx";
import api from '@/middleware/api'
import FirebaseDatabase from '@/middleware/firebase/database/index'
import Profile from "@/components/profile";




export default {
  name: "CardAmit",

  components: {
    Profile,

  },
  data() {
    return {
      profiles: {},
      tableName: 'Owners',
      change: false



    }
  },
  methods: {
    read() {
      FirebaseDatabase.get({entity: this.tableName})
          .then(result => {
            this.profiles = result

          })
    }
  },
  created() {
    this.read()
  }


}
</script>





<style scoped>

</style>