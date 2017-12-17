<template>
<div id='domainInput'>
<h2 class="domainInput__header">This is your place in the Web.</h2>
<p class="domainInput__description">Your Organization's domain will be your home address.</p>
<input type="text" placeholder="organization-domain">
<p>Please use only letters, numbers and dashes. You CANNOT change this later.</p>
<p>Spaces are not allowed.</p>
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