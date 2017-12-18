<template>
  <div id='welcomePage'>


    <h2 class="welcomePage__header">Welcome!</h2>
    <p class="welcomePage__description">Create your username and password for the
      <span>ABC Company</span> organization.
    </p>

    <form action="">
      <p class="welcomePage__helper">Your
        <span>name</span> is how you will be known in Assembla.
      </p>
      <div class="input--wrapper">
        <input class="input--short" type="text" placeholder="First name">
        <input class="input--short" type="text" placeholder="Last name">
      </div>
      <p class="welcomePage__helper">Password</p>
      <div class="input--wrapper">
        <input class="input--password" type="text" placeholder="Password">
      
      <i v-if="true" class="fa fa-check" aria-hidden="true"></i></div>
    </form>
    <p class="text--aside">Please use at least 8 characters.</p>
    <h3>Email address</h3>
    <p class="welcomePage__info">Your email address is
      <span>{{}}</span>Use this email address to log into Assembla.</p>
    <hr>
    <button class="btn btn--full btn--wide">JOIN ORGANIZATION
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </button>


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
