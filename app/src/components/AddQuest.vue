<template>
    <v-container id="AddQuestContainer">
    <v-row>
        <v-col cols="12">
            <v-form id="AddQuestForm" v-on:submit.prevent="addQuest">
                <v-row dense>
                    <!-- <v-col cols="12">
                        <div class="pa-2 white--text text--darken-4">@Terminal [Enter your tasks here.]</div>
                    </v-col> -->
                    <v-col cols="10">
                    <div class="input-field">
                        <input id="AddQuestTextField"  type="text" v-model="name"  placeholder="title">
                        <!-- <v-text-field id="AddQuestTextField"   color="white" dark  placeholder="_" dense outlined counter="80" v-model="name"  height="2.5rem" class="pt-2 white--text"  prepend-inner-icon="mdi-map-marker"></v-text-field> -->
                    </div>
                    </v-col>
                    <v-col cols="10">
                    <div class="input-field">
                        <input id="AddQuestTextField"  type="text" v-model="desc"  placeholder="description">
                        <!-- <v-text-field id="AddQuestTextField"   color="white" dark  placeholder="_" dense outlined counter="80" v-model="name"  height="2.5rem" class="pt-2 white--text"  prepend-inner-icon="mdi-map-marker"></v-text-field> -->
                    </div>
                    </v-col>

                    <v-col cols="10">
                    <div class="input-field">
                        <input id="AddQuestNumberField"  type="number" v-model="points"  placeholder="points (1 .. 5)" min="1" max="5">
                        <!-- <v-text-field id="AddQuestTextField"   color="white" dark  placeholder="_" dense outlined counter="80" v-model="name"  height="2.5rem" class="pt-2 white--text"  prepend-inner-icon="mdi-map-marker"></v-text-field> -->
                    </div>
                    </v-col>
                    <v-col>
                    <v-btn id="AddQuestSubmitButton" fab rounded dark elevation="4" icon type="submit">      
                        <v-icon dark dense x-large color="white">
                            mdi-content-save
                        </v-icon>
                    </v-btn>
                    </v-col>
                </v-row>
            </v-form> 
        </v-col>
    </v-row>
    </v-container>   
</template>
<script>

export default {
    name: "AddQuest",
    data () {
        return {
            name: '',
            desc : '',
            points : 0
        }
    },
    methods: {
        addQuest() {
            // add some logic to check no of entries in quests and limit.
            console.log('Invoked addQuest');
            this.$emit('add-quest',this.name,this.desc,this.points);
            this.name = '';
            this.desc = '';
        }

    }
    
}
</script>

<style scoped>
#AddQuestForm{
    font: 1.0rem Inconsolata, monospace;



}
#AddQuestTextField  { 
    padding: 20px;
    color : white;
    width: 100%;
}

#AddQuestTextField:focus {
    outline: none;

}
#AddQuestNumberField  { 
    padding: 20px;
    color : white;
    width: 100%;

}

#AddQuestNumberField:focus {
    outline: none;

}



</style>

