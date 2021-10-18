const c1 = () => import(/* webpackChunkName: "page--src--pages--user--id-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/pages/user/[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--posts2-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/pages/posts2.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/templates/Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--blog--id-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/pages/blog/[id].vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--publicproject-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/pages/publicproject.vue")
const c6 = () => import(/* webpackChunkName: "page--src--templates--my-page-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/templates/MyPage.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--foo-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/pages/Foo.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--circle-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/pages/circle.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/pages/Contact.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/pages/blog.vue")
const c11 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/node_modules/gridsome/app/pages/404.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/jinmingzhu/code/lagou/my-code/my-gridsome-site/src/pages/Index.vue")

export default [
  {
    name: "__user_id",
    path: "/user/:id",
    component: c1,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/posts2/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/posts/:id/",
    component: c3
  },
  {
    name: "__blog_id",
    path: "/blog/:id",
    component: c4,
    meta: {
      dataPath: "/blog/_id.json",
      dynamic: true
    }
  },
  {
    path: "/publicproject/",
    component: c5
  },
  {
    path: "/my-page/",
    component: c6
  },
  {
    path: "/foo/",
    component: c7
  },
  {
    path: "/circle/",
    component: c8
  },
  {
    path: "/contact/",
    component: c9
  },
  {
    path: "/blog/",
    component: c10
  },
  {
    name: "404",
    path: "/404/",
    component: c11
  },
  {
    name: "home",
    path: "/",
    component: c12
  },
  {
    name: "*",
    path: "*",
    component: c11
  }
]
