<template>
        <v-row>
            <v-col id="TerminalContainer">
                <v-row dense class="full-height"> 
                    <v-col cols="12" class="green--text text--lighten-4">
                        Instructions: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae, sint laborum labore tempore dolores velit libero fuga minima illo, neque et illum voluptatum ullam eum rerum omnis sequi quia.
                    </v-col>
                    <v-col v-for="stat in stats" :key="stat.statId" cols="12" class="green--text text--lighten-4"> 
                        <span>
                            {{stat.statName}}
                            {{stat.statValue}}
                        </span>
                    </v-col>


                    <v-col id="AddQuest" cols="12">
                        <AddQuest v-on:add-quest="addQuest"/>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider dark vertical   ></v-divider>
            <v-col id="QuestContainer">

                <v-row dense class="full-height">  
                    <v-col  v-for="quest in quests" :key="quest.id" cols="12" align-self="end">
                        <!-- <v-card hover class="mx-auto"  elevation="10" tile color="rgb(0,0,0,0.2)" id="QuestDisplayCard"> -->
                        <v-row no-gutters>
                            <v-col cols="12">
                                <!-- <v-card-text  class="font-weight-regular white--text text--darken-5"> -->
                                    <v-expansion-panels focusable inset>
                                        <v-expansion-panel id="QuestDisplayCard">
                                            <v-expansion-panel-header disable-icon-rotate>
                                                <span>  
                                                    {{ quest.name }}    
                                                </span>
                                                <template v-slot:actions>
                                                    <v-icon color="grey">
                                                        mdi-folder
                                                    </v-icon>
                                                </template>

                                            </v-expansion-panel-header>

                                            <v-expansion-panel-content>
                                                <v-row>
                                                    <v-col cols="12">
                                                        <span> {{ quest.desc }}</span>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <v-btn color="grey" block  @click="abandonQuest(quest.id)">
                                                            <v-icon small color="white darken-2">mdi-close</v-icon>
                                                            <span>Discard</span>

                                                        </v-btn>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <v-btn color="grey"  block @click="completeQuest(quest.id)">
                                                            <v-icon small color="white darken-2">mdi-check</v-icon>
                                                            <span>Complete</span>
                                                        </v-btn>
                                                    </v-col>

                                                </v-row>
                                            </v-expansion-panel-content>



                                        </v-expansion-panel>

                                    </v-expansion-panels>
                                <!-- </v-card-text> -->
                            </v-col>
                            <!-- <v-col cols="1" class="ma-0 pa-0">
                                <v-row no-gutters>
                                    <v-col  class="ma-0 pa-0">
                                        <v-btn color="red" icon @click="abandonQuest(quest.id)">
                                            <v-icon small color="white darken-2">mdi-close</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="1" class="ma-0 pa-0">
                                <v-btn color="orange" icon @click="completeQuest(quest.id)">
                                    <v-icon small color="white darken-2">mdi-check</v-icon>
                                </v-btn>
                            </v-col> -->
                        </v-row>
                        <!-- </v-card> -->

                    </v-col>
                </v-row>
            </v-col>
        </v-row>


    
</template>

<script>
import AddQuest from './AddQuest';

import { uuid } from 'vue-uuid'
export default {
    name: "Quests",
    components: {
        AddQuest,
    },
    methods: {
        addQuest(name, desc){
            console.log('Invoked addQuest');
            const quest = {
                "id": uuid.v4(),
                "name": name,
                "desc": desc,
                "isActive":false
            }
            this.quests = [...this.quests,quest];

        },
        abandonQuest(id){
            console.log('Invoked abandonQuest', id);
            const newQuests = this.quests.filter(q => q.id !== id);
            this.quests = newQuests;
            // this.$emit('incrementAbandonedCount');

            this.stats.forEach(s => {
                if (s.statId === 1 || s.statId === 3){
                    ++s.statValue;
                }
            })
        },

        completeQuest(id){
            console.log('Invoked completeQuest', id);
            const newQuests = this.quests.filter(q => q.id !== id);
            this.quests = newQuests;
            // this.$emit('incrementCompletedCount');
            this.stats.forEach(s => {
                if (s.statId ==1 || s.statId ==2){
                    ++s.statValue;
                }
            })
        }
    },
    data() {
        return{
            quests: [],
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
    },
}
</script>

<style scoped>

#TerminalContainer{
    background-color: rgba(1,1,1,0.8);
    font: 1.0rem Inconsolata, monospace;
    color : white;


    
    
}

#QuestContainer{
    background-color: rgba(1,1,1,0.8);
    font: 1.0rem Inconsolata, monospace;
    color : grey;
}

#QuestDisplayCard{
    background-color: rgba(1,1,1,0.4);
    font: 1.0rem Inconsolata, monospace;
    color : grey;
}

</style>