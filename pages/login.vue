<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <input v-model="email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      });

      await this.$router.push('/');
    }
  }
}
</script>

