<template>
    <v-container id="Profile">
        <v-row> 
            <v-col v-for="stat in stats" :key="stat.statId" cols="12"> 
                
                {{stat.statName}}
                {{stat.statValue}}



            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    name: "Profile",
    props: ['stats'],
    
    data(){
        return {


        }
    }
}
</script>

<style  scoped>
#Profile{
    font: 1.3rem Inconsolata, monospace;



}

</style>


