<template>
  <Header />
  <div id="login">
    <div
      v-if="warning"
      id="warning">
      <span>{{ warning }}</span>
    </div>
    <form @submit.prevent="submit()">
      <label for="email">Email</label>
      <input
        id="email"
        v-model="credentials.username"
        type="email">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="credentials.password"
        type="password">
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import Header from '@/components/Header'
import axios from 'axios'

export default {
  name: 'Login',
  components: {
    Header
  },
  beforeMount () {
    if (localStorage.getItem('access_token')) {
      this.$router.push('/posts')
    }
  },
  data() {
    return {
      credentials: {
        username: '', // lorentedev@gmail.com
        password: '', // bG9yZW50ZWRldkBnbWFpbC5jb20=
      },
      warning: ''
    }
  },
  methods: {
    submit () {
      this.warning = null
      axios
        .post('https://react-test.apps-dev.tid.es/auth',
          this.credentials,
          { headers: { 'Content-Type': 'application/json' } })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          this.$router.push('/posts')
        })
        .catch(err => this.warning = 'Invalid email or password') // Debería tener una tabla con distintos casos de código de error para escribir en la alerta (err.code)
    }
  }
}
</script>

<style scoped>
#login {
  width: 90vw;
  max-width: 400px;
  margin: 0 auto;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  font-weight: 600;
}
input,
button {
  border-radius: 4px;
  border: 1px solid #E2E6E9;
  font-size: 1rem;
}
input {
  height: 1.5rem;
  padding: 5px;
  margin: 5px 0 20px;
}
button {
  color: white;
  background-color: #1063FD;
  border: none;
  padding: 6px 0;
}
#warning {
  background-color: #F7D1D6;
  border-radius: 4px;
  border: 1px solid #F5C2C7;
  color: #7A1E25;
  padding: 20px 6px;
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>
