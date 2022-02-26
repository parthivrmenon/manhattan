<template>
<v-card >
    <v-card-title>
        Your stats
    </v-card-title>
    <v-card-text>
        {{completed}}
        {{discarded}}
    </v-card-text>
</v-card>
    
</template>

<script>
export default {
    name:'Stats',
    props: ['completed','discarded'],
    methods: {
        delete_project(name){
            console.log("delete_project",name)
            this.$emit("delete_project",name)
            
        }
    }
    

}
</script>