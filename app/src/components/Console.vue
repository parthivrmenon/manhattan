<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <Stats v-bind:completed="tasks_completed" v-bind:discarded="tasks_discarded"/>
        </v-col>
        <v-col cols="12" md="6">
            <v-card> 
                <v-card-title>New Task</v-card-title>
                <v-card-text >
                    <NewTask v-on:task_added="update_tasks"/>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6">
            <v-card> 
                <v-card-title>Active Tasks</v-card-title>
                <v-card-text>
                    <ActiveTasks 
                        v-bind:projects="projects" 
                        v-on:delete_project="delete_project" 
                        v-on:complete_project="complete_project" 
                        />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>

</template>

<script>
import Stats from './Stats.vue'
import NewTask from './NewTask.vue'
import ActiveTasks from './ActiveTasks.vue'
export default {
    name:"Console",
    components:{
        Stats,
        NewTask,
        ActiveTasks
    },
    data() {
        return {
            "projects":[],
            "tasks_completed":0,
            "tasks_discarded":0
        }
    },
    methods: {
        update_tasks(name,desc){
            console.log("update-tasks",name,desc);
            if (! this.is_existing_project(name)){
                this.projects.push({name,desc});

            }
            else {
                console.log("Already existing project",name)
            }

            },
        is_existing_project(name){
            var projects_with_same_name = this.projects.filter((e) => e.name == name);
            if(projects_with_same_name.length == 0){
                return false
            }
            else{
                return true
            }
        },

        complete_project(name){
            console.log("delete_project",name)
            this.projects = this.projects.filter((e) => e.name !== name)
            ++this.tasks_completed
        },

        delete_project(name){
            console.log("delete_project",name)
            this.projects = this.projects.filter((e) => e.name !== name)
            ++this.tasks_discarded
        }

    }
    
}
</script>