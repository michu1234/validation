<template>
<div id='domainInput'>
<h2 class="domainInput__header">This is your place in the Web.</h2>
<p class="domainInput__description">Your Organization's domain will be your home address.</p>

<form action="">
  <div class="input--wrapper">
    <input @keypress="validate" v-model="domain" :class="{'input--long': true, 'input--error': !valid && domain !== ''}" type="text" placeholder="organization-domain">

  <label class="input--helper">.assembla.com</label>  </div>
  <i v-if="valid && domain !== ''" class="fa fa-check" aria-hidden="true"></i>
    <i @click="refresh" v-if="!valid && domain !== ''" class="fa fa-refresh" aria-hidden="true"></i>
</form>
<p class="text--aside">Please use only letters, numbers and dashes. You CANNOT change this later.</p>
<p v-if="!valid && domain !== ''" class="text--error">Spaces are not allowed.</p>
<hr>
<button @click="passValue" class="btn btn--full btn--wide">LET'S GET STARTED</button>

</div>
</template>

<script>
export default {
  name: "DomainInput",
  data() {
    return {
      domain: "",
      valid: false
    }
  },
  methods: {
      passValue() {
        if (this.valid === true) {
          this.$emit("accepted", "name-input")
        }
      },
      validate() {
    let re = /^[a-zA-Z0-9\-_]{0,40}$/;
        this.valid = re.test(this.domain.toLowerCase());
      },
      refresh() {
        this.domain = "";
      }
  }
};
</script>

<style scoped lang='scss'>

</style>