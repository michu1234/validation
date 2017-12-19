<template>

  <div id='nameInput'>
    <h2 class="nameInput__header">Let's give it a name.</h2>
    <p class="nameInput__description">Your new
      <span>Organization</span> needs a
      <span>name</span>
    </p>
    <form action="">
      <div class="input--wrapper">
        <input v-model="organization" class="input--long" type="text" placeholder="Your Organization's name">
      </div>
    </form>
    <p class="text--aside">You can change this later</p>
    <hr>
    <button @click="passValue" class="btn btn--full btn--wide">Next
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
</div>

</template>

<script>

  export default {
    name: "NameInput",
    data() {
      return {
        organization: ""
      };
    },
    methods: {
       passValue() {
          if(this.organization !== "") {
              this.$store.commit('updateOrganization', this.organization);
            this.$emit("accepted", "welcome-page")
          }
      }
    }
  };

</script>