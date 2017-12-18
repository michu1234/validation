<template>
  <div id="App">
    <button @click="comp1">1</button>
    <button @click="comp2">2</button>
    <button @click="comp3">3</button>
    <button @click="comp4">4</button>
    <header>
      <img class="app__logo" src="./assets/assembla.svg" alt="Assembla">
      <login-signup v-if="display"></login-signup>
      <question-bar v-else></question-bar>
    </header>
<main>
    <transition name="pop">
  <keep-alive>
    <component :is="currentView"> </component>
  </keep-alive>
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

export default {
  name: "App",
  components: {
    "email-input": EmailInput,
    "domain-input": DomainINput,
    "name-input": NameInput,
    "welcome-page": WelcomePage,
    "login-signup": LoginSignup,
    "question-bar": QuestionBar
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
    comp2() {
      this.currentView = "domain-input";
    },
    comp3() {
      this.currentView = "name-input";
    },
    comp4() {
      this.currentView = "welcome-page";
    },
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
$input_placeholder: #aeafae;

// 2. Font Faces

// 3. Base
#app {
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

h2 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0;
  font-family: "Source Sans Pro", sans-serif;
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

a:link {
}

a:visited {
}

a:hover {
}

a:active {
}

hr {
  border: 1px solid $divider_color;
  max-width: 800px;
  margin: 30px 0 0 0;
  margin-bottom: 30px;
}

input[type="text"] {
  height: 59px;
  color: $input_placeholder;
  font-size: 1.8rem;
  padding-left: 2rem;
  border: 2px solid $input_active;
}

::placeholder {
  color: $input_placeholder;
}

form {
  position: relative;
  display: flex;
  flex-direction: column;
}

i {
  cursor: pointer;
  margin: 0 4px 0 4px;
}

// 4. Layout

header {
  display: flex;
  margin: 0 20px 0 20px;
}

main {
  padding: 10px 0 0 50px;
}

#LoginSignup {
  display: inline-block;
  margin-left: auto;
  padding-top: 10px;
}

#QuestionBar {
  position: absolute;
  bottom: 10px;
  left: 20px;
}

#domainInput {
  display: flex;
  flex-direction: column;
}

// 5. Block + element

.app__logo {
  max-width: 160px;
}

.emailinput__header {
  font-size: 3.4rem;
}

.emailinput__header,
.emailinput__description {
  max-width: 555px;
}

.btn {
  display: inline-block;
  font-size: 2rem;
  line-height: 2rem;
  height: 59px;
  margin-right: 10px;
  cursor: pointer;
  vertical-align: top;
}

.welcomePage__helper {
  margin-top: 20px;
}

.welcomePage__helper:first-of-type {
  margin-top: 50px;
}

.welcomePage__info {
  color: $faded_gray_color;
}

//  6. Modifier

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
  font-size: 2rem;
  right: 10px;
  color: $input_active;
}

.text--aside {
  color: $font_light;
  font-size: 1.5rem;
  font-style: italic;
}

.text--error {
  color: $input_error;
}

.input--wrapper {
   max-width: 850px;
   display: flex;
   justify-content: space-between;
   position: relative;
}

.input--password {
  flex: 0 1 590px;
}

.input--error {
  border: 2px solid $input_error;
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
  right: -50px;
}

// 8. Animations

.pop-enter,
.pop-leave-to {
  opacity: 0;
}
.pop-enter-to,
.pop-leave {
  opacity: 1;
}
.pop-enter-active,
.pop-leave-active {
  transition: all 0.6s;
}
</style>
