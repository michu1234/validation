<template>
  <div id='NameInput'>

    <h2 class="domainInput__header">Let's give it a name.</h2>
    <p class="domainInput__description">Your new
      <span>Organization</span> needs a
      <span>name</span>
    </p>

    <form action="">
      <input class="input--long" type="text" placeholder="Your Organization's name">
      <label class="domainInput__helper">.assembla.com</label>
      <i v-if="true" class="fa fa-check" aria-hidden="true"></i>
    </form>
    <p class="text--aside">You can change this later</p>
    <hr>
    <button class="btn btn--full btn--wide">Next
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
</div>
</template>

<script>
  export default {
    name: "NameInput",
    data() {
      return {
        msg: ""
      };
    }
  };

</script>

<style scoped lang='scss'>


</style>
