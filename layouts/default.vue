<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand">Home</NuxtLink>

        <div>
          <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
            <li class="nav-item">
              <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/register" class="nav-link">Register</NuxtLink>
            </li>
          </ul>

          <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
            <li class="nav-item">
              <a href="#" class="nav-link" @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="form-signin">
      <Nuxt/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      auth: false
    }
  },
  mounted() {
    this.$nuxt.$on('auth', auth => {
      this.auth = auth;
    })
  },
  methods: {
    async logout() {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });

      await this.$router.push('/login');
    }
  }
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
