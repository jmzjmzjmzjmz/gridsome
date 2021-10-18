<template>
  <Layout>
    开源项目
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts1',
  data () {
    return {
      posts: []
    }
  },
  async created () {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.posts = data
  }
}
</script>

<style>

</style>
