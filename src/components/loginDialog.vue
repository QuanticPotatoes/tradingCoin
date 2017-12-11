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
                                v-model="email"
                                :disabled="isLoading"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                @keydown.enter="logUser({ email, password })"
                                label="Password"
                                type="password"
                                v-model="password"
                                :disabled="isLoading"
                                required
                            >
                            </v-text-field>
                            <v-btn 
                                @click="logUser({ email, password })" 
                                :loading="isLoading"
                                primary
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
    data() {
        return {
            email: "",
            password: "",
        }
    },
    computed: {
        ...mapGetters([
            "isLoading"
        ]),
    },
    methods: {
        ...mapActions([
            "logUser"
        ])
    }
}
</script>
