<template>
    <v-container fluid class="pa-0">

    </v-container>
</template>

<script>
  export default {
    data() {
      return {
          icon: true
      };
    },
    methods: {
        click() {
            this.icon = !this.icon
        }
    },
    mounted() {
    },
  };
</script>
