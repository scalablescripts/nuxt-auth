<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <input v-model="name" class="form-control" placeholder="Name" required>

    <input v-model="email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password
        })
      });

      await this.$router.push('/login');
    }
  }
}
</script>

