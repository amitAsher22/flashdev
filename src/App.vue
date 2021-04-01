<template>
  <div>
    <div class="nice2">
        <router-link class="nice" to="/home">דף הבית</router-link>
      <router-link class="nice"  to="/Profile">פרופיל</router-link>
        <router-link class="nice" to="/item/:id">עריכת פרופיל</router-link>
        <router-link class="nice" to="About">אודות</router-link>


   </div>
    <router-view></router-view>
  </div>


</template>


<script>

export default {
  name: 'LayoutDefault',
  components: {},


}


</script>


<style>
.nice {
  text-align: center;
  font-size: 30px;
  margin: 20px;
  text-decoration: none;

}

.nice2 {
  display: flex;
  justify-content: center;

}

.nice:hover{
  background: red;
  color: white;
  border-radius: 4px;
}




</style>
