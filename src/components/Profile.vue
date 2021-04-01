<template>

  <div>
    <q-card v-for="detail of Details" class="designDiv">
      <img :src="detail.img" alt="" class="img">
      <q-card-section class="mainCard">
        <q-item-label>Name - {{ detail.name }}</q-item-label>
        <q-item-label> phone - {{ detail.phone }}</q-item-label>
        <q-item-label> address - {{ detail.address }}</q-item-label>
        <q-item-label> profession - {{ detail.profession }}</q-item-label>
        <q-item-label> Email - {{ detail.email }}</q-item-label>
      </q-card-section>
    </q-card>




  </div>


</template>

<script>

import Firebasedatabase from '../middleware/firebase/database/index'
import Inputs from "@/components/Inputs";

export default {

  name: "Profile",
  components: {Inputs},
  data() {
    return {
      tableName: 'Owners',
      Details: {},



    }
  },
  methods: {

    readData() {
      Firebasedatabase.get({entity: this.tableName})
          .then(result => {
            this.Details = result
          })
    },


  },
  created() {
    this.readData()
  }


}
</script>

<style scoped>
.img {
  height: 300px;
  width: 300px;
  margin: 0 auto;
  padding-bottom: 30px;
  padding-top: 10px;
}

.mainCard {
  text-align: center;
}

.designDiv {
  border: 2px solid black;
  margin: 100px;

}


</style>

