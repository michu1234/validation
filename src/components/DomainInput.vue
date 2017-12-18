<template>
<div id='domainInput'>
<h2 class="domainInput__header">This is your place in the Web.</h2>
<p class="domainInput__description">Your Organization's domain will be your home address.</p>

<form action="">
  <div class="input--wrapper">
    <input class="input--long" type="text" placeholder="organization-domain">

  <label class="domainInput__helper">.assembla.com</label>  </div>
  <i v-if="true" class="fa fa-check" aria-hidden="true"></i>
</form>
<p class="text--aside">Please use only letters, numbers and dashes. You CANNOT change this later.</p>
<p v-if="true" class="text--error">Spaces are not allowed.</p>
<hr>
<button class="btn btn--full btn--wide">LET'S GET STARTED</button>

</div>
</template>

<script>
export default {
  name: "DomainInput",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style scoped lang='scss'>

</style>