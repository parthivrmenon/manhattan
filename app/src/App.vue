<template>
<v-app>
  <v-app-bar
      absolute
      app
    >
    <v-app-bar-title>
      Manhattan
    </v-app-bar-title>
  </v-app-bar>
  <v-main>
    <Console />
  </v-main>
  <v-footer app>
    <v-col class="text-center">
    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>

  </v-footer>
</v-app>



</template>

<script>
import Console from './components/Console.vue';

// import Profile from './components/Profile';
export default {
  name: 'App',

  components: {
    Console
  },

  
}
</script>


<style scoped>
#app {
  /* background-image: url('./assets/tron_bg.jpeg'); */
  /* background-size: 100%; */
  font-family: 'Courier New', Courier, monospace;
  line-height: 3rem;
  /* background-repeat: no-repeat; */
  /* background-size: 100%; */
  /* background-color: black; */
  /* background-color: black; */
  
  /* background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('./assets/back.jpg'); */


}



</style>
