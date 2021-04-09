<template>
  <div style="width:800px ; margin: auto " >
    <h4 style="text-align: center">מלא פרטים על בעל העסק</h4>
    <q-input  @dblclick="search1()" v-model="textInput" placeholder="חיפוש"/>
    <q-input outlined v-model="localEditedItem.name" label="שם בעל העסק"/>
    <q-input outlined v-model="localEditedItem.email" label="איימל"/>
    <q-input outlined v-model="localEditedItem.phone" label="מספר טלפון" type="number"/>
    <q-input outlined v-model="localEditedItem.address" label="כתובת בעל העסק"/>
    <q-input outlined v-model="localEditedItem.profession" label="מקצוע"/>
    <q-file filled bottom-slots v-model="model" label="הוסף תמונה" counter max-files="12">
      <template v-slot:append>
        <q-icon v-if="model !== null" name="close" @click.stop="model = null" class="cursor-pointer"/>
        <q-icon name="create_new_folder" @click.stop/>
      </template>

    </q-file>


    <q-btn v-if="!localEditedItem.id" color="blue" text-color="black" label="הוסף" @click="insert()"/>
    <q-btn v-if="localEditedItem.id" color="yellow" text-color="black" label="עדכון" @click="update()"/>
  </div>
</template>


<script>

import {mapActions, mapState, mapMutations} from 'vuex'

export default {
  name: "Inputs",
  props: ['tableName'],
  computed: mapState('owners', ['editedOwner', 'Owners', 'textFirst']),

  data() {
    return {
      textInput: '',
      localEditedItem: {
        name: '',
        email: '',
        phone: '',
        address: '',
        profession: '',
        img: '',
      },

      model: null

    }
  },

  methods: {

    ...mapActions('owners', ['insertOwner', 'updateOwner', 'setEditOwnerById', 'searchFromWOrd' , 'searchFromWOrd' ]),
    ...mapMutations('owners', ['setEditOwner', 'setEditOwnerId', 'editOwner']),

    localSetEditedOwner() {
      this.setEditOwner(this.localEditedItem)
    },
    goToHome() {
      this.$router.push('/home');
    },

    insert() {
      this.localSetEditedOwner();
      this.insertOwner()

    },

    update() {
      this.localSetEditedOwner();
      this.updateOwner();
      this.goToHome();
    },

    search1() {
      this.searchFromWOrd(this.textInput )
    }
  },


  created() {
    if (this.$route.params.id) {
      this.setEditOwnerId(this.$route.params.id)
      this.setEditOwnerById()
          .then(() => {
            Object.assign(this.localEditedItem, this.editedOwner)
          })
    }
  }

}


</script>


<style>

</style>