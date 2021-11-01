<template>
<v-container id="MainContainer" fluid>
    <Quests v-on:incrementCompletedCount="incrementCompletedCount()" v-on:incrementAbandonedCount="incrementAbandonedCount()"/>
</v-container> 
</template>


<script>

import Quests from './Quests';
export default {
    name: "Main",
    components : {
        Quests
    },
    methods: {
        incrementAbandonedCount(){
            console.log('InvokedAbandonedCount');
            this.$emit("incrementAbandonedCount");
        },
        incrementCompletedCount(){
            console.log('InvokedCompletedCount');
            this.$emit("incrementCompletedCount");
        }
    }
}
</script>


<style scoped>


</style>