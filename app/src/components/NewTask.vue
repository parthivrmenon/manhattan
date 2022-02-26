<template>
    <v-form v-on:submit.prevent="add_task">
        <v-text-field v-model="title" label="title"  outlined dense></v-text-field>
        <v-text-field v-model="category" label="category"  outlined dense></v-text-field>
        <v-text-field v-model="description" label="description"  outlined dense></v-text-field>
        <!-- <v-btn @click="clear">clear</v-btn> -->
    <v-btn class="mr-2" outlined  @click="add_task()">
        <v-icon>mdi-database-arrow-right-outline</v-icon>
        [Save]
    </v-btn>
    <v-btn class="mr-2" outlined  @click="clear()">
        <v-icon>mdi-delete</v-icon>
        [Clear]
    </v-btn>

    </v-form> 






</template>

<script>
export default {
    name:"ConsoleInput",
    data () {
        return {
            title: '',
            description : '',
        }
    },
    methods:{
        add_task() {
            // add some logic to check no of entries in quests and limit.
            console.log('Invoked addQuest',this.title,this.description);
            this.$emit('task_added',this.title,this.description);
        },
        clear () {
        this.title = ''
        this.dec= ''
      },
    }


}
</script>