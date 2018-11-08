<template>
<div class="sign-up">
  <h3>Welcome, Let's Sign Up</h3>
  <input type="text" placeholder="email" />
  <input type="password" placeholder="password" />
  <button>Sign Up</button>
  <p>
    Go back to Login 
  </p>
</div>
</template>
<script>
export default {
  name: 'signUp',
  data: function() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
.sign-up{
  margin-top:40px;
}
input{
  margin:10px 0;
  width:20%;
  padding:15px;
}
button{
  margin-top:20px;
  width:10%;
  cursor: pointer;
  padding:15px;
}
p{

  margin-top:40px;
  font-size:13px;
}
p a{
  text-decoration:underline;
  cursor:pointer;
}

</style>
