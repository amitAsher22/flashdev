<template>

  <div class="q-pa-md" style="max-width: 400px">
   <h3>הרשמה</h3>
    <q-form
        @submit="onSubmit"
        class="q-gutter-md"
    >
      <q-input
          filled
          v-model="email"
          label="your email *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'please write your email']"
      />

      <q-input
          filled
          type="Password"
          v-model="password"
          label="Your password *"
          lazy-rules
          :rules="[value => value.length > 0 || 'please write your Password']"


      />


      <div>
        <q-btn label="הירשם" type="submit" color="primary"></q-btn>
      </div>
    </q-form>

  </div>


</template>

<script>
import firebaseInstance from '../middleware/firebase/index'


export default {
  name: "Registar",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {

    onSubmit: function () {
      firebaseInstance.firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((res) => {
            // Signed in
            var user = res.user;
            this.$router.push(`/home`)
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;



            // ..
          });
    }

  }
}
</script>

<style scoped>

</style>