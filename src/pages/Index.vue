
<template>
  <Layout>
    <div>
      <header
        style="width:100%;padding:10px;border:1px solid #ddd;display:flex;justify-content:space-between;align-items:center"
      >
        <div>
          <input type="search" v-model="searchText" />
          <span style="margin:0 20px;cursor:pointer" @click="getPosts">🔍</span>
        </div>
        <g-link to="/blog/0">写博客</g-link>
      </header>
      <div v-for="post in posts" :key="post.id" style="border:1px solid #ddd;margin-top:20px;">
        <div
          style="border-bottom:1px solid #ddd;display:flex;justify-content:space-between;align-items:center;padding:10px"
        >
          <div>{{post.title}}</div>
          <div style="display:flex">
            <g-link :to="'/blog/'+post.id" style="margin-right:10px">编辑</g-link>
            <span @click="deletePost(post.id)" style="cursor:pointer">删除</span>
          </div>
        </div>
        <div style="padding:10px">
          <div>{{ post.sumary }}</div>
        </div>
      </div>
      <div v-if="posts.length==0">没有相关数据</div>
    </div>
  </Layout>
</template>

<script>
import service from "@/api/request";
export default {
  name: "strapipost",

  data() {
    return {
      posts: [],
      searchText: ""
    };
  },
  methods: {
    getPosts() {
      console.log("request");
      service
        .request({
          url: `/api/posts?title_contains=` + this.searchText
        })
        .then(res => {
          this.posts = res;
        });
    },
    deletePost(id){
      service.request({
          url: "/api/posts/" + id,
          method: "DELETE",
        }).then(res=>{
          alert("删除成功")
          this.getPosts()
        })
    }
  },
  async created() {
    this.getPosts();
  }
};
</script>

<style>
</style>

