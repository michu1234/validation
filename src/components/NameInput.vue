<template>
<div id='NameInput'>
<h2>Let's give it a name.</h2>
<p>Your new <span>Organization</span> needs a <span>name</span></p>
<input type="text" placeholder="Your Organization's name">
<p>You can change this later</p>
<hr>
<button>Next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
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