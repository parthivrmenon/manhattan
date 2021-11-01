<template>
<v-app>

  <!-- <v-navigation-drawer app
    permanent
    dark
    id="NavigationDrawer"
  >
  <Profile v-bind:stats="stats"/>
  </v-navigation-drawer> -->

  <v-app-bar
      absolute
      color="black"
      app
    >
    <span id="MainTitle">
      <v-btn color="green lighten-4" outlined>
        <v-icon class="mr-2">mdi-console</v-icon>
        <h4>admin_</h4>
      </v-btn>
    </span>

  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>


    <!-- Provides the application the proper gutter -->
    <!-- <v-container fluid> -->
      <!-- <v-row> -->
        <!-- <v-col cols="4">
          <Profile v-bind:stats="stats"/>
        </v-col> -->
        <!-- <v-col cols="12"> -->
          <!-- <Main v-on:incrementCompletedCount="incValue(2)" v-on:incrementAbandonedCount="incValue(3)"/> -->
          <Console />
        <!-- </v-col> -->
      <!-- </v-row> -->
    <!-- </v-container> -->

  </v-main>

  <v-footer app color="black">
    <v-col class="green--text text--lighten-4 text-center pa-0 ma-0">
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
    // Profile
  },
  methods:{
    incValue(id){
      console.log('Invoked incValue');
      this.stats.forEach(s => {
        if (s.statId === 1 || s.statId === id){
          console.log('Entered IF');
          ++s.statValue;
        }
      })
    }
  },

  data()  {
    return {
      stats: [
                {
                    "statId": 1,
                    "statName":"Utilization",
                    "statValue":0
                },
                {
                    "statId":2,
                    "statName":"Completed",
                    "statValue":0,
                },
                {
                    "statId":3,
                    "statName":"Abandoned",
                    "statValue":0,
                }
            ],

    }
  }
  
}
</script>


<style scoped>
#app {
  background-image: url('./assets/bgBudapest.jpg');
  background-size: 100%;
  font-family: 'Courier New', Courier, monospace;
  line-height: 3rem;
  background-repeat: no-repeat;
  background-size: 100%;
  /* background-color: black; */
  
  /* background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('./assets/back.jpg'); */


}


.v-navigation-drawer {
  background: transparent!important;
  border-radius: 150px!important;
}
</style>
