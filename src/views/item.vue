<template>
  <div>
    <Inputs  v-if="condition" :item="item" :tableName="tableName" :ownerId ="$route.params.id"></Inputs>

  </div>
</template>





<script>

import Inputs from "@/components/Inputs";
import api from '@/middleware/api'
import Firebasedatabase from '@/middleware/firebase/database/index'


export default {
  name: "item",
  components: {
    Inputs
  },
  data() {
    return {
      item: {},
      tableName: 'Owners',
      condition:false,




    }
  },
  methods: {
    getItemById() {
      Firebasedatabase.get({entity : this.tableName , id: this.$route.params.id})
      .then((result)=>{
        this.item =result[0]
        this.condition = true


      })

    }
  },
  created() {
    this.getItemById()
  }
}
</script>





<style scoped>

</style>