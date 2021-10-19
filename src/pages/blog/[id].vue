<template>
  <Layout>
    <div style="display:flex;align-items:center;margin-bottom:20px">
      <span style="width:50px">标题:</span>
      <input type="text" v-model="blog.title" />
    </div>
    <div style="display:flex;align-items:center;margin-bottom:20px">
      <span style="width:50px">内容:</span>
      <textarea cols="30" rows="10" v-model="blog.sumary"></textarea>
    </div>
    <button style="margin-left:50px" @click="saveBlog">保存</button>
  </Layout>
</template>

<script>
import service from "@/api/request";
export default {
  name: "UserPage",
  data() {
    return {
      id: 0,
      blog: {}
    };
  },
  methods: {
    saveBlog() {
      if (this.id == 0) {
        // 新增
        service
          .request({
            url: "/api/posts",
            method: "POST",
            data: { ...this.blog }
          })
          .then(res => {
            alert("添加成功");
            history.back();
          });
      } else {
        // 编辑
        service
          .request({
            url: "/api/posts/" + this.id,
            method: "PUT",
            data: { ...this.blog }
          })
          .then(res => {
            alert("编辑成功");
            history.back();
          });
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id != 0) {
      // 获取详情
      service
        .request({
          url: "http://106.75.45.108:1337/posts/" + this.id
        })
        .then(res => {
          this.blog = res;
        });
    }
  }
};
</script>

<style>
</style>
