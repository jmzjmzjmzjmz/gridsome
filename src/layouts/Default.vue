<template>
  <div class="layout">
    <header class="header">
      <h1>LAZIJJ</h1>
      <h3>欢迎来到辣子雞的个人博客</h3>
      <div style="display:flex;width:210px;margin:0 auto;justify-content:space-between">
        <div style="border:1px solid #999;padding:5px">github个人主页</div>
        <div style="border:1px solid #999;padding:5px">博客源码</div>
      </div>
    </header>
    <div class="header-info">
      <div>了解博主</div>
      <div>github-jizz</div>
    </div>
    <div style="display:flex;justify-content:space-between;">
      <nav style="display:flex;flex-direction:column;padding:10px;border:1px solid #ddd;width:150px">
        <g-link class="nav__link" to="/">博客列表</g-link>
        <g-link class="nav__link" to="/circle/">社交圈</g-link>
        <g-link class="nav__link" to="/blog/">最新动态</g-link>
        <g-link class="nav__link" to="/publicproject/">开源项目</g-link>
        <g-link class="nav__link" to="/posts2/">readme.md</g-link>
        <g-link class="nav__link" to="/posts2/">license</g-link>
        <g-link class="nav__link" to="/posts2/">系统配置</g-link>
      </nav>
      <div style="width:1000px">
        <slot />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  width: 1200px;
  margin: 0 auto;
}

.header {
  width: 100%;
  height: 300px;
  background: linear-gradient(90deg, blue, red);
  text-align: center;
  color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.header-info {
  width: 1000px;
  height: 60px;
  padding:0 20px;
  margin: 0 auto;
  background: #fff;
  position: relative;
  top: -30px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__link {
  height: 40px;
  line-height: 40px;
}
.active--exact{
  color: red;
}
</style>
