<template>
<div class="sign-up">
  <h3>Welcome, Let's Sign Up</h3>
  <input type="text" v-model="email" placeholder="email" />
  <input type="password" v-model="password" placeholder="password"/>
  <button v-on:click="signUp">Sign Up</button>
  <p>
    Go back to <router-link to="/login">Login</router-link>
  </p>
</div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.5.7/firebase.js"></script>
<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => { //arrow function could be written like function(user) instead
          this.$router.replace('hello')
        },
        (error) => {
            alert('Opps.' + error.message)
        }
      );
    }
  }
}
</script>
<style scoped>
.sign-up {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
  padding: 15px;
}

p {

  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
