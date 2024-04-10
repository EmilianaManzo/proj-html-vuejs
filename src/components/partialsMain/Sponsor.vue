<script>
import {store} from '../../data/store';
  export default {
    data(){
      return{
        store
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
  <section class="sponsor">
    <div class="container">
      <div class="row row-upper">
        <div class="col text-center ">
          <h1>Why People Talk About <span class="green">MaxCoach </span>?</h1>
        </div>
      </div>

      <div class="row row-center justify-content-center">
        <div class="col d-flex justify-content-center">

          <div class="position-relative img-group">
            <img class="avatar" src="../../assets/img/testimonial-avata-02.jpg" alt="">
            <img class="pattern" src="../../assets/img/maxcoach-shape-05-150x150.png" alt="">
            <img src="../../assets/svg/blob.svg" alt="" class="forma">
          </div>
          <div>
            <h2 class="mb-5">I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.</h2>
            <p class=" fw-bold mb-2 fs-6">MINA HOLLACE</p>
            <span>/ Freelancer</span>
          </div>
        </div>
      </div>

      <div class="row row-bottom">
        <div class="col d-flex justify-content-between ">
          <div class="img" v-for="(el, i) in store.sponsor" :key="i">
            <img :src="getImagePath(el.img)" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.container{
  padding-top:90px ;
}

.row-upper{
margin-bottom: 70px;
  h1{
    font-weight: bold;
    .green{
    color:$green-text;
    font-weight: normal;
    }
  }
}

.row-center{
  padding-bottom: 80px;
  .col{
    .img-group{
      margin-right: 80px;
      padding-left: 50px;
      .avatar{
        width: 200px;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
      }
      .pattern{
        position: absolute;
        top: 40%;
        left: 50%;
        z-index: -1;
  
      }
      .forma{
        position: absolute;
        top: 0;
        left: 0;
        height: 168px;
        width: 168px;
        z-index: -1;
      }
    }

    h2 {
      color:$dark-text;
      padding: 0 300px 0 30px;  
    }

    p{
      color:$dark-text ;
      font-weight: bold;
      padding-left: 30px;
    }
    span{
      font-size: .9rem;
      color: $minitext-courses;
      padding-left: 30px;
    }
  }
}

.row-bottom{
  padding-bottom: 80px
}


</style>