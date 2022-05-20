<template>
  <router-view/>
</template>

<script>

export default {
  beforeMount () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push('/')
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
body {
  margin: 0;
}
</style>
