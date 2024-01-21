<template>
    <v-layout>
        <v-app-bar scroll-behavior="hide" color="primary" prominent>
            <v-app-bar-nav-icon disabled variant="text" @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>

            <v-toolbar-title>Noticias</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn variant="text" icon="mdi-magnify" disabled></v-btn>

            <v-btn variant="text" icon="mdi-filter" disabled></v-btn>

            <v-btn variant="text" icon="mdi-dots-vertical" disabled></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="left" temporary>
            <v-list :items="items"></v-list>
        </v-navigation-drawer>

        <v-main class="main">
            <noticias-comp/>
        </v-main>

    </v-layout>
</template>
<script>
import NoticiasComp from '../components/NoticiasComp.vue'
import {ref} from 'vue'
export default {
    components:{
        NoticiasComp,
    },
    watch:{
        group() {
            this.drawer = false
        },
    },
    setup() {

        const drawer=ref(false)
        const group=ref(null)

        return{
            drawer,
            group,
            items:[
            {
                title: 'Foo',
                value: 'foo',
            },
            {
                title: 'Bar',
                value: 'bar',
            },
        ]
        }
    },
}




// export default {
//     data: () => ({
//         drawer: false,
//         group: null,
//         items: [
//             {
//                 title: 'Foo',
//                 value: 'foo',
//             },
//             {
//                 title: 'Bar',
//                 value: 'bar',
//             },
//             {
//                 title: 'Fizz',
//                 value: 'fizz',
//             },
//             {
//                 title: 'Buzz',
//                 value: 'buzz',
//             },
//         ],
//     }),

//     watch: {
//         group() {
//             this.drawer = false
//         },
//     },
// }
</script>
<style scoped>
</style>