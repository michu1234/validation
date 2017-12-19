<template>

  <div id="App">
    <header>
      <img @click="comp1" class="app__logo" src="./assets/assembla.svg" alt="Assembla">
      <login-signup v-show="display"></login-signup>
      <question-bar style="display: block; position: absolute; top: 27px; right: 20px; text-align: right; pointer-events: none;"
        v-if="!display"></question-bar>
    </header>
    <main>
      <transition name="pop">

        <component @accepted="nextComp($event)" :is="currentView"> </component>

      </transition>
    </main>
    <footer>
      <question-bar v-if="display"></question-bar>
    </footer>
  </div>

</template>

<script>
  import EmailInput from "./components/EmailInput";
  import DomainINput from "./components/DomainInput";
  import NameInput from "./components/NameInput";
  import WelcomePage from "./components/WelcomePage";
  import LoginSignup from "./components/LoginSignup";
  import QuestionBar from "./components/QuestionBar";
  import FinalData from "./components/FinalData";

  export default {
    name: "App",
    components: {
      "email-input": EmailInput,
      "domain-input": DomainINput,
      "name-input": NameInput,
      "welcome-page": WelcomePage,
      "login-signup": LoginSignup,
      "question-bar": QuestionBar,
      "final-data": FinalData
    },
    data() {
      return {
        currentView: "email-input",
        display: true
      };
    },
    methods: {
      comp1() {
        this.currentView = "email-input";
      },
      nextComp(entry) {
        this.currentView = entry;
        this.display = false;
      }
    }
  };

</script>

<style lang="scss">
  /* 
Table of contents
=====================
// 1. Variables
// 2. Font Faces
// 3. Base
// 4. Layout
// 5. Block + element
// 6. Modifier
// 7. State
// 8. Animations
// 9. Media Queries
 
=====================
*/

  // 1. Variables
  $background_color: #ebf2f2;

  $divider_color: #dbe1e0;

  $faded_bluish_color: #77b8bc;
  $faded_gray_color: #b4b5b4;

  $btn_color: #55bc7a;
  $btn_font_color: #929192;

  $font_color: #363b44;
  $font_login: #929192;
  $font_light: #b4b4b4;

  $input_active: #6cbeea;
  $input_error: #ea3839;
  $input_correct: #89c869;
  $input_placeholder: #aeafae; // 2. Font Faces
  // 3. Base
  #app {
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: $background_color;
    font-size: 62.5%;
    font-family: "Montserrat", sans-serif;
    width: 100%;
    height: 100vh;
    color: $font_color;
  }

  body {
    overflow-y: scroll;
  }

  h1,
  h2 {
    font-family: "Source Sans Pro", sans-serif;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  p {
    font-size: 1.8rem;
    margin: 5px 0 5px 0;
  }

  a {
    text-decoration: none;
    color: $faded_bluish_color;
    font-weight: bold;
    cursor: pointer;
  }

  a:link {}

  a:visited {}

  a:hover {}

  a:active {}

  hr {
    border: 1px solid $divider_color;
    max-width: 700px;
    margin: 30px 2% 0 0;
    margin-bottom: 20px;
  }

  input[type="text"],
  input[type="password"] {
    height: 59px;
    color: $input_placeholder;
    font-size: 1.8rem;
    padding-left: 2%;
    border: 2px solid $input_active;
  }

   ::placeholder {
    color: $input_placeholder;
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-right: 2%;
    max-width: 550px;
  }

  i {
    cursor: pointer;
    margin: 0 4px 0 4px;
  }

  span {
    font-weight: 700;
  } // 4. Layout
  header {
    display: flex;
    margin: 0 20px 0 20px;
  }

  main {
    padding: 10px 0 0 4%;
  }

  #emailInput {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    max-width: 940px;
  }

  #loginSignup {
    display: none;
  }

  #questionBar {
    display: none;
  }

  #domainInput {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
  }

  #nameInput {
    padding-top: 30px;
  } // 5. Block + element
  .app__logo {
    max-width: 160px;
    cursor: pointer;
  }

  .emailInput__header {
    font-size: 3.4rem;
    max-width: 500px;
  }

  .emailInput__description {
    margin: 0 0 40px 0;
    max-width: 550px;
  }

  .btn {
    display: inline-block;
    font-size: 2rem;
    line-height: 2rem;
    height: 59px;
    margin: 0 10px 0 10px;
    cursor: pointer;
    vertical-align: top;
  }

  .domainInput__description {
    margin: 40px 0 10px 0;
  }

  .nameInput__description {
    margin-top: 50px;
  }

  .welcomePage__helper {
    margin-top: 10px;
  }

  .welcomePage__helper:first-of-type {
    margin-top: 40px;
  }

  .welcomePage__info {
    color: $faded_gray_color;
  } //  6. Modifier
  .btn--login {
    color: $faded_gray_color;
    background: transparent;
    border: none;
    transition: all 0.4s;
    &:hover {
      outline: 1px solid $faded_bluish_color;
      color: $faded_bluish_color;
      transition: all 0.4s;
      box-shadow: 3px 5px 10px $faded_bluish_color;
    }
  }

  .btn--wide {
    width: 260px;
  }

  .btn--small {
    width: 130px;
  }

  .btn--outline {
    color: $faded_bluish_color;
    background: $background_color;
    border: 1px solid $faded_bluish_color;
  }

  .btn--full {
    background: $btn_color;
    color: #ffffff;
    border: none;
  }

  .input--long {
    flex: 0 1 590px;
  }

  .input--short {
    flex-basis: 48%;
  }

  .input--helper {
    margin-left: -180px;
    margin-top: 18px;
    font-size: 1.9rem;
    right: 10px;
    color: $input_active;
  }

  .text--aside {
    font-size: 1.4rem;
    color: $font_light;
    font-style: italic;
    margin-top: 14px;
  }

  .text--aside-small {
    color: $font_light;
    font-size: 1.9rem;
    font-style: italic;
    margin-top: 14px;
  }

  .text--size {
    max-width: 550px;
  }

  .text--error {
    color: $input_error;
    margin-top: 26px;
  }

  .input--wrapper {
    max-width: 750px;
    margin-right: 8%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .input--password {
    flex: 0 1 590px;
  }

  .input--error {
    outline: 3px solid $input_error;
  }

  .faded--text {
    color: $faded_bluish_color;
  }

  .fa-check {
    color: $input_correct;
    font-size: 2rem;
    margin-left: 40px;
    margin-top: 18px;
    position: absolute;
    right: -40px;
  }

  .fa-refresh {
    color: $faded_gray_color;
    font-size: 2rem;
    margin-left: 40px;
    margin-top: 18px;
    position: absolute;
    right: -40px;
  } // 8. Animations
  .pop-enter,
  .pop-leave {
    opacity: 0; // transform: rotateY(180deg);
    // transform-origin: 23%;
  }

  .pop-enter-to,
  .pop-leave-to {
    opacity: 1;
  }

  .pop-enter-active,
  .pop-leave-active {
    transition: all 0.7s;
  } // 9. Media Queries 
  @media screen and (min-width: 765px) {

    #loginSignup {
      display: inline-block;
      margin-left: auto;
      padding-top: 10px;
    }

    #questionBar {
      display: block;
      position: absolute;
      bottom: 10px;
      left: 20px;
    }
  }

  @media screen and (max-width: 995px) {

    #questionBar {
      visibility: hidden;
    }
  }

  @media screen and (max-width: 700px) {
    .input--wrapper-responsive {
      flex-direction: column;
      & input {
        margin-bottom: 10px;
      }
    }
  }

</style>
