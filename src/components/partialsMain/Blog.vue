<script>
import {store} from '../../data/store';
  export default {
    data(){
      return{
        store,
      }
    }, 
    methods:{
      getImagePath(img){
        return new URL (`../../assets/img/${img}`, import.meta.url).href
      },
    } 
  }
</script>

<template>
<section class="blog">
  <div class="container">
    <div class="row">
      <div class="col text-center ">
        <p>ENJOY READING ON MAXCOACH</p>
        <h1>Latest on <span class="green">Our Blog</span></h1>
      </div>
      <div class="row row-down row-cols-3 justify-content-center  align-items-center ">
        <div class="col py-2" v-for="(blog, i) in store.blogs" :key="i">
          <div class="img">
            <img :src="getImagePath(blog.img)" :alt="blog.work ">
          </div>
          <div class="text pt-2 ">
            <p>{{ blog.work }}</p>
            <h4 class="mb-3">{{ blog.title }}</h4>
            <span class="date">{{ blog.date }}</span>
            <span class="views">{{ blog.views }}</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.blog{
  background-color: $block-bcg ;
  padding: 95px 0;
  .container{
    .row-down{
      .col{
        width: calc(100% / 3);
        img{
          width: 100%;
        }
        h4{
          font-weight: bold;
          color: $dark-text;
        }

        .date{
          margin-right: 10px ;
          color: $minitext-courses;
          font-size: .8rem;
          &::before{
            font-family: 'Fontawesome';
            content: '\f133';
            
            margin-right: 5px; 
          }
        }
        .views{
          color: $minitext-courses;
          font-size: .8rem;
          &::before{
          font-family: 'Fontawesome';
          content: '\f06e';
          margin-right: 5px; 
          }
        }
      }
    }

    h1{
      font-weight: bold;
      .green{
        color:$green-text;
        font-weight: normal;
      }
    }
    p{
      color: $grey-text;
      font-weight: bold;
    }
  }
}

</style>