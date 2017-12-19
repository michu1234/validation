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
      <div class="input--wrapper input--wrapper-responsive">
        <input v-model="name" class="input--short" type="text" placeholder="First name">
        <input v-model="lastname" class="input--short" type="text" placeholder="Last name">
      </div>
      <p class="welcomePage__helper">Password</p>
      <div class="input--wrapper">
        <input v-model="password" class="input--password" type="password" placeholder="Password">
      
      <i v-if="valid" class="fa fa-check" aria-hidden="true"></i></div>
    </form>
    <p class="text--aside">Please use at least 8 characters.</p>
    <h3>Email address</h3>
    <p class="text--aside">Your email address is
      <span>{{returnEmail}}</span>. Use this email address to log into Assembla.</p>
    <hr>
    <button @click="passValue" class="btn btn--full btn--wide">JOIN ORGANIZATION
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
  </div>

</template>

<script>

import {mapGetters} from 'vuex'

  export default {
    name: "WelcomePage",
    data() {
      return {
        name: "",
        lastname: "",
        password: "",
        valid: false
      };
    },
    computed: {
      ...mapGetters([
        'returnEmail'
      ])
    },
    methods: {
        passValue() {
          if(this.name !== "" && this.lastname !== "" && this.password !== "") {
            this.$store.commit('updateForm', {
              name: this.name,
              lastname: this.lastname,
              password: this.password
            });
            this.$emit("accepted", "final-data");
          }
      }
    },
    watch: {
      password() {
         if(this.password.length >= 8){
           this.valid = true;
         }else {
           this.valid = false;
         }
      }
    }
  };

</script>