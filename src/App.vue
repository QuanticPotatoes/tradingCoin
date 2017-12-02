<template>
    <v-app id="example-1">
        <transition name="fade">
        <div v-if="!showLogin">
            <main>
                <v-toolbar>
                    <v-toolbar-title>{{ $t('title') }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                        <v-btn flat @click.stop="toogleLogin">
                            {{ $t('login') }}
                        </v-btn>
                    <v-btn flat>
                        {{ $t('signup') }}
                    </v-btn>
                </v-toolbar>
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </main>
        </div>
        <loginDialog v-else></loginDialog>
        </transition>
    </v-app>
</template>

<script type="text/babel">
  import { mapActions, mapGetters } from 'vuex';
  import store from './store';
  import loginDialog from './components/loginDialog.vue';
  export default {
    store,
    components: {
        loginDialog,
    },
    data() {
        return {
            drawer: true,
        }
    },
    computed: {
        ...mapGetters([
            "showLogin"
        ])
    },
    methods: {
        ...mapActions([
            "toogleLogin"
        ])
    },
  };
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import 'css/main.css';
</style>
