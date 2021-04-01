<template>
  <div class="q-pa-md">
    <Inputs tableName="Owners" @itemAdded="reloadTable"  />
    <TableViewer :isReload="isReload" tableName="Owners" />


  </div>


</template>


<script>
import Inputs from "@/components/Inputs";
import TableViewer from "@/components/TableViewer";



export default {
  name: 'Home',
  components: {
    Inputs, TableViewer
  },
  data: () => ({
    isReload: false,

  }),

  methods: {

    reloadTable() {
      this.isReload = !this.isReload

    },



  },



}

</script>


<style>
Inputs {
  background: #027BE3;
}
</style>