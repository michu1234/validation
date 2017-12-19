<template>

  <div id='finalData'>
    <h2>
      User Data:
    </h2>
    <ul>
      <li v-for="(d, index) in returnKeys" :key="index">
        <h3>
          {{d}}
        </h3>
      </li>
    </ul>
  </div>
  
</template>

<script>

  import {mapGetters} from "vuex";

  export default {
    name: "FinalData",
    computed: {
      ...mapGetters(["returnKeys"])
    }
  };

</script>
