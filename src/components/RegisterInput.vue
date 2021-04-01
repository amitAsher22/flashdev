<template>

  <div class="q-pa-md" style="max-width: 400px">
    <q-form

        class="q-gutter-md"
    >
      <q-input
          filled
          type="email"
          v-model="email"
          label="Your email *"
          lazy-rules
          :rules="[value =>  value.length > 0 || 'please write your email']"
      />

      <q-input
          filled
          type="Password"
          v-model="password"
          label="Your password *"
          lazy-rules
          :rules="[value => value.length > 0 || 'please write your password']"
      />

      <div>
        <q-btn label="התחבר" @click="onSubmit" color="primary"/>
      </div>
    </q-form>

  </div>

</template>

<script>

import firebaseInstance from '../middleware/firebase'

export default {

name: "RegisterInput",

    data () {
      return {
        email: "",
        password: "",


      }
    },

    methods: {
      onSubmit () {
        console.log(this.email, "email" , this.password)
        firebaseInstance.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
              var user = userCredential.user;
             window.user = user.uid
              console.log('sucsses')
              this.$router.push('/home')

            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
             alert('this is wrong password')

            });
      },

    }
  }


</script>

<style scoped>

</style>