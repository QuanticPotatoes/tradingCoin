<template>
    <v-app id="example-1">
        <transition>
        <div v-if="!showLogin">
            <main>
                <v-toolbar
                    class="elevation-0 transparent"
                    style="z-index: 1;"
                    absolute
                    scroll-off-screen
                    scroll-target=".scrolling-techniques"
                    >
                    <v-toolbar-title style="color: white;">
                        <h6><v-icon style="color: white;">equalizer</v-icon> {{ $t('title') }}</h6>
                        </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <div v-if="!isAuth">
                        <v-btn flat @click.stop="toogleLogin">
                                {{ $t('login') }}
                        </v-btn>
                        <v-btn outline round>
                            {{ $t('signup') }}
                        </v-btn>
                    </div>
                    <div v-else>
                        <v-btn outline round>
                            {{ $t('disconnect') }}
                        </v-btn>
                    </div>
                </v-toolbar>
            <transition>
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
            "showLogin",
            "isAuth"
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
