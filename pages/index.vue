<template>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      message: ''
    }
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:8000/api/user', {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      })

      const content = await response.json();

      this.message = 'Hi ' + content.name;
      this.$nuxt.$emit('auth', true);
    } catch (e) {
      this.message = 'You are not logged in';
      this.$nuxt.$emit('auth', false);
    }
  }
})
</script>
