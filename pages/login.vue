<template>
    <v-container fluid class="pa-0">
        <img style="position: absolute; height: 100%; width: 100%" src="~/assets/img/bg.svg" alt="">
        <v-layout row wrap>
            <v-flex xs10 sm8 md5 lg3 class="mt-5" style="margin: auto">
                <v-card>
                    <v-card-media class="pt-3">
                        <img src="~/assets/img/user.svg" alt="">
                    </v-card-media>
                    <v-card-title>
                        <h1>Connexion à {{ $t('title')}}</h1>
                    </v-card-title>
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
    layout: 'styleless',
    data() {
        return {
            email: "",
            password: "",
            isLoading: false,
        }
    },
    computed: {
    },
    methods: {
        ...mapActions([
            "logUser"
        ])
    }
}
</script>

<style>
h1 {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin: auto;
}
</style>

