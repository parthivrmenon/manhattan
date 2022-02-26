<template>
<div min-height=500>
    <v-list>
        <v-list-item v-for="project in projects" v-bind:key="project.name">
            <v-list-item-content>
                <v-list-item-title>
                    {{project.name}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{project.desc}}
                </v-list-item-subtitle>
                <v-list-icon>
                    <v-btn  @click="delete_project(project.name)">discard</v-btn>
                    <v-btn  @click="complete_project(project.name)">done</v-btn>
                </v-list-icon>
            </v-list-item-content>
        </v-list-item>
    </v-list>




</div>
</template>


<script>
export default {
    name:'ConsoleOutput',
    props: ['projects'],
    methods: {
        complete_project(name){
            console.log("complete_project",name)
            this.$emit("complete_project",name)
            
        },
        delete_project(name){
            console.log("delete_project",name)
            this.$emit("delete_project",name)
            
        }
    }
    

}
</script>