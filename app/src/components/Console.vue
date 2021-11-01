<template>
<v-container>

      <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row>
        <v-col>
            <v-card :style="'border: 1px solid green;'" color="rgb(0, 0, 0, 0.8)" > 
            <v-card-text class="green--text text--lighten-4">
            <ConsoleHeader />
            <ConsoleInput v-on:task_added="update_tasks"/>
            </v-card-text>

            </v-card>
        </v-col>
        <v-col>
            <v-card :style="'border: 1px solid green;'" color="rgb(0, 0, 0, 0.8)" > 
            <v-card-text class="green--text text--lighten-4">
            <ConsoleOutputHeader />
            <ConsoleOutput />
            </v-card-text>

            </v-card>
        </v-col>




    </v-row>
      </v-parallax>
</v-container>

</template>

<script>
import ConsoleHeader from './Console_Header.vue'
import ConsoleInput from './Console_Input.vue'
import ConsoleOutput from './Console_Output.vue'
import ConsoleOutputHeader from './Console_Output_Header.vue'
export default {
    name:"Console",
    components:{
        ConsoleHeader,
        ConsoleInput,
        ConsoleOutputHeader,
        ConsoleOutput
    },
    methods: {
        update_tasks(){
            console.log("update-tasks");

        }

    }
    
}
</script>