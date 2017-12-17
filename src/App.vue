<template>
  <div id="App">
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

import EmailInput from './components/EmailInput'
import DomainINput from './components/DomainInput'
import NameInput from './components/NameInput'
import WelcomePage from './components/WelcomePage'
import LoginSignup from './components/LoginSignup'
import QuestionBar from './components/QuestionBar'


export default {
  name: 'App',
  components: {
    "email-input": EmailInput,    
    "domain-input": DomainINput,    
    "name-input": NameInput,    
    "welcome-page": WelcomePage,
    "login-signup": LoginSignup,    
    "question-bar": QuestionBar
  },
  data () {
    return {
      currentView: 'email-input',
      display: true
    }
  },
  methods: {
  
    }
  }
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

$faded_bluish_color: #77b8bc;
$faded_gray_color: #b4b5b4;

$btn_color: #55bc7a;
$btn_font_color: #929192;

$font_color: #363b44;
$font_login: #929192;

$input_active: #6cbeea;
$input_error: #ea3839;
$input_correct: #89c869;

// 2. Font Faces


// 3. Base
#app {
}
  html, body {
    background-color: $background_color;
    font-size: 62.5%;
    font-family: "Montserrat", sans-serif;
    width: 100%;
    height: 100vh;
  }

  p {
    font-size: 1.8rem;
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

// 4. Layout 

header {
  display: flex;
  margin: 0 20px 0 20px;
}

main {
  padding: 120px 0 0 40px;
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

// 5. Block + element 

.app__logo {
  max-width: 160px;
}

.emailinput__header {
  font-size: 3.4rem;
}

.emailinput__header, .emailinput__description {
  max-width: 555px;
}

.btn {
  display: inline-block;
  font-size: 2rem;
  line-height: 2rem;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
} 

//  6. Modifier 

.btn--login {
  color: $faded_gray_color;
  background: transparent;
  border: none;
  transition: all .4s;
  &:hover {
    outline: 1px solid $faded_bluish_color;
    color: $faded_bluish_color;
    transition: all .4s;
    box-shadow: 3px 5px 10px $faded_bluish_color;
  }
}

.btn--wide {
  width: 260px;
  height: 50px;
}

.btn--small {
  width: 130px;
  height: 50px;
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

// 8. Animations

.pop-enter, .pop-leave-to {
  opacity: 0;
}
.pop-enter-to, .pop-leave {
  opacity: 1;
}
.pop-enter-active, .pop-leave-active {
  transition: all .3s;
}

</style>
