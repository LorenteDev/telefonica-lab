<template>
  <header>
    <div id="header-content">
      <router-link
        id="brand"
        to="/posts">
        <h1><mdicon name="lightning-bolt" /> three pics</h1>
      </router-link>
      <router-link
        v-if="isUserLogged"
        id="profile-link"
        to="/profile">
        <mdicon name="account-circle" /> 
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isUserLogged: false
    }
  },
  mounted () {
      this.isUserLogged = localStorage.getItem('access_token')
  }
}
</script>

<style scoped>
header {
  align-items: center;
  background: #F7F8F9;
  color: #2C2C2D;
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 1rem;
}
#header-content {
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
}
#brand > h1 {
  font-size: 1.6rem;
  margin: 0;
}
#brand,
#brand:visited,
#profile-link,
#profile-link:visited {
  color: #2C2C2D;
  text-decoration: none !important;
}
</style>
