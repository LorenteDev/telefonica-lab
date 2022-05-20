<template>
  <Header />
  <div id="posts">
    <input
      v-model="search"
      type="text"
      placeholder="Search"
      @input="searchPosts()">
    <Post
      v-for="post in filtered"
      :key="post.id"
      :author="post.author"
      :comments="post.comments"
      :content="post.content"
      :createdAt="post.created_at"
      :id="post.id"
      :image="post.image"
      :likes="post.likes" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Post from '@/components/Post'
import axios from 'axios'

export default {
  name: 'Posts',
  components: {
    Header,
    Post
  },
  data () {
    return {
      posts: [],
      filtered: [],
      search: ''
    }
  },
  mounted() {
    axios.get('https://react-test.apps-dev.tid.es/posts', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    .then(res => {
      this.posts = res.data
      this.filtered = res.data
    })
    .catch(err => console.error(err))
  },
  methods: {
    searchPosts () {
      this.filtered = this.posts.filter(post => post.content.toLowerCase().includes(this.search.toLowerCase()) || post.author.toLowerCase().includes(this.search.toLowerCase()))
    }
  }

}
</script>

<style>
#posts {
  width: 90vw;
  max-width: 400px;
  margin: 0 auto;
}
input {
  width: 97%;
  border-radius: 4px;
  border: 1px solid #E2E6E9;
  font-size: 1rem;
  height: 1.5rem;
  padding: 5px;
}
</style>