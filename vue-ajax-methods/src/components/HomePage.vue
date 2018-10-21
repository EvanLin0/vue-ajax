<template>
    <div class="ajax-methods-container">
      <h2> vue种 ajax的交互主要有方式有如下几种：</h2>
      <button @click="vueResource">vue-resource 方式</button>
      <button @click="axiosAjax">axios 方式</button>
      <button>fetch-jsonp 方式</button>
      <div class="content-container">
          <ul>
            <li v-for="(item,index) in ajaxContent">
              {{item.title}}
            </li>
          </ul>
      </div>


    </div>
</template>

<script>
    import Axios from 'axios';// 局部注册使用 axios;
    export default {
        name: "HomePage",
      data () {
          return {
            ajaxContent:''
          }
      },
      methods:{
        //  使用 vue-resource 来发送ajax
        vueResource () {
          // 1.安装 vue-resource 模块 cnpm install vue-resource --save;
          // 2.在 main.js中 引入 并使用 import VueResource from 'vue-resource';
          // 3.使用vue-resource;  Vue.use(VueResource);
          // 4.在组件中可以直接使用 this.$http.get/post(url)来使用
          // 备注：在 config种定义了 proxytable，豆瓣的api,可以去去看下，不然就跨域了
          this.$http.get('api/v2/movie/top250?start=25&count=25').then(res=>{
              this.ajaxContent = res.data.subjects;
          },(err)=>{
            console.log(err);
          })
        },
        axiosAjax () {
          // 使用 axios
          // 1. 安装  cnpm install axios --save;
          /*
          *  2. 局部注册，在   .vue的文件这中 import Axios from 'axios';在组件内使用
          *  Axios.get().then() 或者 Axios.post()来使用
          *  例如：Axios.get().then(res=>{}).catch(err=>{});
          *
          * */
          /*
          * 3. 全局注册，在 main.js的文件中 使用 import Axios from 'axios'; 在原型上绑定：Vue.prototype.$axios=Axios;在每个组件都能使用。
          * this.$axios.get(url).then(res=>{}).catch(err=>{})
          * */
          // 局部注册
          // Axios.get('api/v2/movie/top250?start=25&count=25')
          //   .then(res=>{
          //     this.ajaxContent = res.data.subjects;
          //   })
          //   .catch(err=>{
          //     console.log(err);
          //   })
          // 全局注册
          this.$axios.get('api/v2/movie/top250?start=25&count=25')
            .then(res=>{
              this.ajaxContent = res.data.subjects;
            })
            .catch(err=>{
              console.log(err)
            })
        }
      }
    }
</script>

<style scoped>

</style>
