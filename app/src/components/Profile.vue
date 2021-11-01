<template>
    <v-container id="Profile"   class="pa-4 ma-4">
        <v-row no-gutters>
            <v-col cols="12">
                <v-card dark class="white--text"  id="ProfileMainCard">
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">APRIL</div>
                            <v-list-item-title class="headline mb-1 red--text">Monday</v-list-item-title>
                            <v-list-item-subtitle  class="subheading-2 white--text text--darken-4">Parthiv's Daily Planner</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar tile size="80" color="green"></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                     <v-btn outlined rounded text>Log out</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col v-for="stat in stats" :key="stat.statId" cols="12">
                <v-card dark class="white--text">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <div class="overline mb-4 white--text">{{stat.statName}}</div>
                        </v-list-item-content>
                    </v-list-item>
                
                    <v-card-actions class="pa-0">
                        <!-- <v-btn height="40px" right width="40px"> -->
                            <v-progress-circular  v-model="stat.statValue"  color="white" size="100" :value="stat.statValue">
                                <v-list-item>
                                    <v-list-item-content>
                                        <div class="overline  white--text">{{stat.statValue}}%</div>
                                        <!-- <v-btn height="40px" right width="40px">{{stat.statValue}}</v-btn> -->

                                    </v-list-item-content>
                                </v-list-item>
                            </v-progress-circular>

                            <!-- {{stat.statValue}}</v-btn> -->
                    </v-card-actions>
                </v-card>
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
#Profile {
    /* background:transparent; */
    border-radius: 150px;
    
}
.v-card{
    background-color: rgba(1,1,1,0.2);
    width: 50%;

}
</style>


