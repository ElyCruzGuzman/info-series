<template>
  <div id="app" class="container-fluid pr-0 pl-0">
    <div class="container-fluid pr-0 pl-0">
      <pp-header></pp-header>
    </div>
    <div class="container-fluid pl-0">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {auth} from './firebase'
import Header from './components/Header.vue'

export default {
  components: {
    ppHeader: Header
  }
}

</script>
<style>
  @import url(https://fonts.googleapis.com/css?family=Varela);
  body {
  font-family: 'Varela', sans-serif;
  }
  #app {
    background-image: url(https://gallery.yopriceville.com/var/albums/Backgrounds/Yellow_and_Orange_Background.png?m=1445097813);
    background-size: cover;
    background-blend-mode: saturation;
    height: 100%;
  }
</style>