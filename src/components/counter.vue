<template>
<v-btn @click="increment">{{ state.count }}</v-btn>  
</template>

<script>
import store from '../store';

export default {
  data() {
      return {
          state: store.state,
          
      }
  },
  computed: {
      count: () => {
          return this.state.count;
      }
  },
  methods: {
      increment() {
          store.increment();
      }
  }
}
</script>