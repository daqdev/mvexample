<template>
    <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
        <v-app-bar scroll-behavior="hide" color="primary" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" disabled></v-app-bar-nav-icon>

            <v-toolbar-title>Noticias</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn variant="text" icon="mdi-magnify" disabled></v-btn>

            <v-btn variant="text" icon="mdi-filter" disabled></v-btn>

            <v-btn variant="text" icon="mdi-dots-vertical" disabled></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="left" temporary>
            <v-list :items="items"></v-list>
        </v-navigation-drawer>

        <v-main style="height: 500px;">
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
            
        </v-main>
    </v-layout>
</template>
<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        items: [
            {
                title: 'Foo',
                value: 'foo',
            },
            {
                title: 'Bar',
                value: 'bar',
            },
            {
                title: 'Fizz',
                value: 'fizz',
            },
            {
                title: 'Buzz',
                value: 'buzz',
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>