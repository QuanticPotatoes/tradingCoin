<template>
    <v-container fluid class="pa-0">
        test
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
