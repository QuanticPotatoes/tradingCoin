<template>
    <v-container fluid class="pa-0">
        <v-layout row wrap>
            <v-flex xs10 sm8 md5 lg3 class="mt-5" style="margin: auto">
                <v-card>
                    <v-card-media class="pt-3">
                        <img src="public/user.svg" alt="">
                    </v-card-media>
                    <v-card-text>
                        <v-form class="pa-3">
                            <v-text-field
                                label="E-mail"
                                type="email"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                label="Password"
                                type="password"
                                required
                            >
                            </v-text-field>
                            <v-btn 
                                @click="submit" 
                                primary="blue darken-1"
                                class="ma-0"
                                style="width: 100%"
                                >{{ $t('login') }}</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

import store from '../store';
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            "showLogin"
        ])
    },   
}
</script>
