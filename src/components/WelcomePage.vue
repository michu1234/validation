<template>
<div id='welcomePage'>
<h2>Welcome!</h2>
<p>Create your username and password for the <span>ABC Company</span> organization.</p>
<p>Your <span>name</span></p>
<input type="text" placeholder="First name">
<input type="text" placeholder="Last name">
<p>Password</p>
<input type="text" placeholder="Password">
<p>
  Please use at least 8 characters.
</p>

<h3>Email address</h3>
<p>Your email address is <span>{{}}</span>Use this email address to log into Assembla.</p>
<hr>
<button>JOIN ORGANIZATION</button>
</div>
</template>

<script>
export default {
  name: "WelcomePage",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style scoped lang='scss'>

</style>