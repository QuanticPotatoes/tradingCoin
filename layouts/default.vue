<template>
  <v-app>
    <v-toolbar
      class="elevation-0 transparent"
      style="z-index: 1;"
      absolute
    >
      <v-toolbar-title style="color: white;">
        <h6><v-icon style="color: white;">equalizer</v-icon> {{ $t('title') }}</h6>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="!isAuth">
          <v-btn
              flat
              to="/login"
              class="gradiant-btn"
              style="color: white"  
          >
                  {{ $t('login') }}
          </v-btn>
          <v-btn
              outline
              round
              to="/signup"
              style="color: white"
              id="signup"
          >
              {{ $t('signup') }}
          </v-btn>
      </div>
      <div v-else>
          <v-btn outline round>
              {{ $t('disconnect') }}
          </v-btn>
      </div>
    </v-toolbar>
    <nuxt/>
    <my-footer/>
  </v-app>
</template>

<script>
import MyFooter from '../components/Footer.vue'
import { mapState } from 'vuex'

export default {
  components: {
    MyFooter
  },
  computed: {
    ...mapState([
      'isAuth'
    ])
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
}

.button, .button:visited
{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #3B8070;
}

.title
{
  color: #505153;
  font-weight: 300;
  /* font-size: 2.5em; */
  margin: 0;
}


</style>
