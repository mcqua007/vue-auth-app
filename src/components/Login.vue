<template>
<div class="login">
  <h3>Sign In</h3>
  <input type="text" placeholder="email" />
  <input type="password" placeholder="password" />
  <button>connection</button>
  <p>
    No, Account? Create one!
  </p>
</div>
</template>
<script>
export default {
  name: 'login',
  data: function() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
.login{
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
