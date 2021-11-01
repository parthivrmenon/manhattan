<template>
<v-container>

    <v-row>
    <v-col cols="4" class="text-center"> 
    <h3>:add task_</h3>


    </v-col>
    <v-col>
    <v-form v-on:submit.prevent="add_task">


        <v-text-field v-model="title" label="title" dark color="green" outlined dense></v-text-field>
        <v-text-field v-model="desc" label="desc" dark color="white" outlined dense></v-text-field>
        <!-- <v-btn @click="clear">clear</v-btn> -->
    <v-btn class="mr-2" color="green"  outlined  @click="add_task()">
        <v-icon dark>mdi-database-arrow-right-outline</v-icon>
        [Save]
    </v-btn>
    <v-btn class="mr-2" color="green" outlined  @click="clear()">
        <v-icon dark>mdi-delete</v-icon>
        [Clear]
    </v-btn>

    </v-form> 

</v-col>

    </v-row>

</v-container>

</template>

<script>
export default {
    name:"ConsoleInput",
    data () {
        return {
            title: '',
            desc : '',
        }
    },
    methods:{
        add_task() {
            // add some logic to check no of entries in quests and limit.
            console.log('Invoked addQuest',this.title,this.desc);
            this.$emit('task_added',this.name,this.desc);
        },
        clear () {
        this.title = ''
        this.dec= ''
      },
    }


}
</script>