<template>
  <div id='emailInput'>
    <h1 class="emailInput__header">Accelerate with real-time project management today.</h1>
    <p class="emailInput__description">From tickets to cardwalls to planning & communication tools, Assembla makes online collaboration easy.</p>
    <div class="input--wrapper">
      <input @keypress.enter="passValue" @keyup="validate" v-model="email" class="input--long" type="text" placeholder="Your business email address">
      <button @click="passValue" class="btn btn--full btn--wide">LET'S GET STARTED</button>
    </div>
    <hr>
    <p class="text--aside-small">
      <em>or signup using: </em>
      <span class="faded--text">
        <i class="fa fa-google" aria-hidden="true"></i>
        <i class="fa fa-github" aria-hidden="true"></i>
        <i class="fa fa-slack" aria-hidden="true"></i>
      </span>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EmailInput",
  data() {
    return {
      email: "",
      valid: false
    };
  },
  computed: mapState([
    'test'
  ]),
  methods: {
    passValue() {
      if (this.valid === true) {
        // update Store
        this.$store.commit('updateEmail', this.email);
        this.$emit("accepted", "domain-input");
      }
    },
    validate() {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.valid = re.test(this.email.toLowerCase());
    }
  }
};
</script>
