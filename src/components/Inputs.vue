<template>
  <div style="width:800px ; margin: auto ">


    <h4 style="text-align: center">מלא פרטים על בעל העסק</h4>
    <q-input outlined v-model="editedItem.name" label="שם בעל העסק"  />
    <q-input outlined v-model="editedItem.email" label="איימל"/>
    <q-input outlined v-model="editedItem.phone" label="מספר טלפון" type="number"/>
    <q-input outlined v-model="editedItem.address" label="כתובת בעל העסק"/>
    <q-input outlined v-model="editedItem.profession" label="מקצוע"/>

    <q-file filled bottom-slots v-model="model" label="הוסף תמונה" counter max-files="12">
      <template v-slot:append>
        <q-icon v-if="model !== null" name="close" @click.stop="model = null" class="cursor-pointer" />
        <q-icon name="create_new_folder" @click.stop />
      </template>

      <template v-slot:after>
        <q-btn round dense flat icon="send" />
      </template>
    </q-file>



    <q-btn v-if="editedItem" color="blue" text-color="black" label="הוסף" @click="Add()"/>
    <q-btn v-if="!editedItem" color="yellow" text-color="black" label="עדכון" @click="update()"/>
  </div>
</template>






<script>

// import localStorageDriver from '@/middleware/localStorage/profile-items_xx'
// import api from '@/middleware/api'
import Firebasedatabase from '../middleware/firebase/database/index'
import firebaseInstance from '../middleware/firebase'

export default {
  name: "Inputs",
  props: ['tableName', 'item','ownerId' ],

  data() {
    return {
      editedItem: {
        name: '',
        email:'',
        phone: '',
        address: '',
        profession: '',
        img:'',

      },
      condition:false,
      model: null

    }
  },
  methods: {
    Add() {
      firebaseInstance.firebase.storage().ref(`Owners/${window.user.uid}/Images/${this.model.name}`).put(this.model)
         .then((storageRef)=> {
           storageRef.ref.getDownloadURL()
               .then((url) => {
               this.editedItem.img = url
               })
           .then(()=>{
             Firebasedatabase.create({entity: this.tableName, Owner: this.editedItem})
                 .then(() => {
                   this.$emit('itemAdded');
                 })
           })

         })

    },

    update() {
      Firebasedatabase.update({entity: this.tableName,  id: this.ownerId,  Owner: this.editedItem})
      .then(()=>{
        this.$router.push('/home');
      })
    }
  },

  created() {
    if (this.item) {
      this.condition = true
      this.editedItem = this.item;
    }
  }
}

</script>






<style>

</style>