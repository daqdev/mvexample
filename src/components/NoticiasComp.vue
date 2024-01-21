<template>
    <div
    style="display: flex;
    flex-direction: column;
    gap: 3%;
    row-gap:3vh;
    padding-top:3vh">
        <v-card
        v-for="(item, index) in noticias" :key="index" 
        >
        <!-- width="400" -->
            <template v-slot:title>
                {{ item.title }}
            </template>
            
            <template v-slot:subtitle>
                <a :href="item.link.value" target="_blank">{{ item.link.name }}</a>
    
            </template>
    
            <template v-slot:text>
                {{ item.description }}
            </template>
        </v-card>
    </div>
</template>

<script>
export default {
    setup() {
        return{
            noticias:[
            {
                    title:"Choque y vuelco en Caballito",
                    link:{name:"cronica.com.ar", value:"https://www.cronica.com.ar"},

                    description:"El accidente ocurrio a las 7am y fue protagonizado por un conductor borracho."
                },{
                    title:"Nuevas medidas recesivas",
                    link:{name:"imf.org", value:"https://imf.org"},
                    description:"Siguen los ajustes a la casta lorem. Consectetur et in nisi magna ea ullamco."
                },{
                    title:"Gano 10 a 1",
                    link:{name:"futbol.com", value:"https://ole.com.ar"},
                    description:"Nisi ex pariatur incididunt qui irure voluptate. Lorem consectetur aute excepteur sit elit esse aute velit quis exercitation id pariatur velit fugiat."
                },{
                    title:"Choque y vuelco en Caballito",
                    link:{name:"cronica.com.ar", value:"https://www.cronica.com.ar"},

                    description:"El accidente ocurrio a las 7am y fue protagonizado por un conductor borracho."
                },{
                    title:"Nuevas medidas recesivas",
                    link:{name:"imf.org", value:"https://imf.org"},
                    description:"Siguen los ajustes a la casta lorem. Consectetur et in nisi magna ea ullamco."
                },{
                    title:"Gano 10 a 1",
                    link:{name:"futbol.com", value:"https://ole.com.ar"},
                    description:"Nisi ex pariatur incididunt qui irure voluptate. Lorem consectetur aute excepteur sit elit esse aute velit quis exercitation id pariatur velit fugiat."
                },{
                    title:"Choque y vuelco en Caballito",
                    link:{name:"cronica.com.ar", value:"https://www.cronica.com.ar"},

                    description:"El accidente ocurrio a las 7am y fue protagonizado por un conductor borracho."
                },{
                    title:"Nuevas medidas recesivas",
                    link:{name:"imf.org", value:"https://imf.org"},
                    description:"Siguen los ajustes a la casta lorem. Consectetur et in nisi magna ea ullamco."
                },{
                    title:"Gano 10 a 1",
                    link:{name:"futbol.com", value:"https://ole.com.ar"},
                    description:"Nisi ex pariatur incididunt qui irure voluptate. Lorem consectetur aute excepteur sit elit esse aute velit quis exercitation id pariatur velit fugiat."
                },



            ],
        }
    },
}
</script>

<style scoped>
@media only screen and (min-width: 768px) and (max-width:1500px) {

    v-card {
        width: 900;
    }
  /* Medium screen styles here */

}

</style>