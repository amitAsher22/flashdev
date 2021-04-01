<template>
  <div>
    <h3>התחבר</h3>
   <RegisterInput />
    <q-btn @click="login()"> התחבר דרך גוגל</q-btn>
    <q-btn @click="register()"> הרשמה</q-btn>
  </div>

</template>

<script>
import firebaseInstance from '../middleware/firebase';
import RegisterInput from "@/components/RegisterInput";



export default {
  name: "Login",
  components:{ RegisterInput},
  methods: {
    login() {
      const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      firebaseInstance.firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            window.user = result.user
            this.$router.push('/home')
            // ...
          })
          .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    },
    register(){
      this.$router.push('/register')

    },
    created(){
      if(window.user){
        this.$router.push('/home')
      }
    }

  },

}
</script>

<style scoped>

</style>