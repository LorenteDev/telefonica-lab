<template>
  <div class="post">
    <img
      class="post-image"
      :src="image"
      :alt="`${author}'s post`">
    <div class="post-info">
      <div class="post-top-info">
        <span class="post-date">{{ new Date(createdAt).toLocaleString() }}</span>
        <div
          class="likes-wrapper"
          @click="likePost()">
          <span><mdicon
            size="18"
            name="heart" />
            {{ postLikes }}
          </span>
        </div>
      </div>
      <h2 class="post-author">{{ author }}</h2>
      <p>{{ content }}</p>
      <span class="post-comment">
        <mdicon
          size="18"
          name="comment-outline" />
        Comments ({{ comments }})</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Post',
  props: {
    author: String,
    comments: Number,
    content: String,
    createdAt: String,
    id: String,
    image: String,
    likes: Number
  },
  data () {
    return {
      postLikes: 0
    }
  },
  mounted () {
    this.postLikes = this.likes
  },
  methods: {
    likePost () {
      // No he conseguido que esta llamada sea autorizada
      axios
        .post(`https://react-test.apps-dev.tid.es/posts/${this.id}/like`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(res => {
          this.postLikes += 1
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style scoped>
.post {
  border: 1px solid #EFEFEF;
  border-radius: 10px;
  padding-bottom: 1rem;
  overflow: hidden;
  margin: 1rem 0;
}
.post-image {
  width: 100%;
}
.post-info {
  padding: 0 0.6rem;
}
.post-top-info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.post-author {
  font-size: 1rem;
  font-weight: 600;
}
.likes-wrapper {
  background: #D72F3D;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.post-comment, .post-date {
  color: #777E85;
}
</style>
