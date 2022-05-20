<template>
  <div id="profile">
    <img
      id="profile-avatar"
      :src="avatar"
      :alt="`${username}'s avatar`">
    <h1 id="profile-username">{{ username }}</h1>
    <p id="profile-bio">{{ bio }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Profile',
  data () {
    return {
      avatar: '',
      username: '',
      bio: ''
    }
  },
  mounted () {
    axios
      .get('https://react-test.apps-dev.tid.es/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(res => {
        this.avatar = res.data.avatar
        this.username = res.data.username
        this.bio = res.data.bio
      })
      .catch(err => console.error(err))
  }
}
</script>

<style>
#profile {
  margin: 0 auto;
  width: 80%;
  max-width: 400px;
  text-align: center;
  padding-top: 2rem;
}
#profile-avatar {
  height: 200px;
  width: 200px;
  border-radius: 100%;
}
#profile-username {
  font-size: 1.5rem;
}
</style>