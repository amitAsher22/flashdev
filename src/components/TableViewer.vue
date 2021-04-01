<template>
  <div  class="q-pa-md ">
    <q-table
        :title="tableName"
        :data="rows"
        :columns="columns"
        row-key="name"
        binary-state-sort
    >
      <template v-slot:body="props" >
        <q-tr :props="props" class="changeBg">
          <q-td key="name" :props="props" >{{ props.row.name}}</q-td>
          <q-td key="email" :props="props" > {{ props.row.email }}</q-td>
          <q-td key="phone" :props="props" >{{ props.row.phone }}</q-td>
          <q-td key="address" :props="props" >{{ props.row.address }}</q-td>
          <q-td key="profession" :props="props">{{ props.row.profession }}</q-td>
          <q-td key="Action1" :props="props">
            <q-btn @click="goToItem(props.row.id)" color="blue">edit</q-btn>
            <q-btn @click="remove(props.row.id)" color="red">Delete</q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>


</template>





<script>
import api from '@/middleware/api'
import Firebasedatabase from '@/middleware/firebase/database/index'


export default {
  name: "TableViewer",
  props: ['tableName', 'isReload' ],
  data() {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'שם בעל העסק',
          align: 'center',
          field: 'name',
          sortable: true
        },
        {name: 'email', align: 'center', label: 'איימל', field: 'email', sortable: true},
        {name: 'phone', label: 'טלפון', field: 'phone'},
        {name: 'address', label: 'כתובת העסק', field: 'address'},
        {name: 'profession', label: 'מקצוע', field: 'profession'},
        {name: 'Action1', label: 'מחיקה'}


      ],
      rows: []
    }

  },
  methods: {
    read() {
      Firebasedatabase.get({entity: this.tableName})
      .then(result => {
        this.rows = result
      })

    },
    remove(id) {
      Firebasedatabase.removeId({entity: this.tableName, id})
      .then(()=> {
        this.read()
      })
    },

    goToItem(id) {
      this.$router.push(`/item/${id}`)
    },


  },

  created() {
    this.read()
  },

  watch: {
    isReload(){
      this.read()
    }
  }
}
</script>






<style scoped>
.changeBg:hover{
  background-color: #b1b0b0;
  color:white;


}


</style>