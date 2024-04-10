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
        return new URL (`../../assets/svg/${img}`, import.meta.url).href
      },
    } 
  }
</script>

<template>
<section class="helptolearn">
  <div class="container">
    <div class="row">
      <div class="col text-center mb-5 ">
        <p>WANNA TRANSFORM YOUR LIFE?</p>
        <h1>Glad to <span class="green">Help You</span> Learn</h1>
      </div>
      <div class="row row-down row-cols-4  justify-content-center align-items-center ">
        <div class="col py-2" v-for="(help, i) in store.helpsection" :key="i">
          <div class="img mb-3">
            <img :src="getImagePath(help.img)" :alt="help.img ">
          </div>
          <div class="text pt-2 ">
            <h6 class="mb-2">{{ help.title }}</h6>
            <p>{{ help.description }}</p>
          </div>
        </div>
      </div>
      <div class="row row-img position-relative ">
        <div class="col col-img d-flex  justify-content-center ">
          <img src="../../assets/img/home-6-services-image-1024x411.png" alt="">
        </div>
        <div class="circle4 position-absolute ">
          <img src="../../assets/palline/green.svg" alt="">
        </div>
        <div class="circle2 position-absolute ">
          <img src="../../assets/palline/orange.svg" alt="">
        </div>
        <div class="circle7 position-absolute ">
          <img src="../../assets/palline/semigreen.svg" alt="">
        </div>
      </div>
      
    </div>
  </div>
</section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;
.helptolearn{
  background-image: linear-gradient($white-text, $block-bcg);
  padding: 95px 0;
  .container{
    .row-down{
      .col{
        width: calc(100% / 4);
        img{
          width: 50px;
        }
        h6{
          font-weight: bold;
          color: $dark-text;
        }
        p{
          color: $grey-text;
          font-size: 0.8rem;
        }
      }
    }

    .col-img{
      img{
        position: relative;
        top:120px;
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

  .circle2{
    top: 420px;
    left: 20px;
    img{
      width: 35px;
    };
  }

  .circle4{
    top: 100px;
    left: 90%;
    img{
      width: 50px;
    };
  }
  .circle7{
    top: 80px;
    left: 13%;
    img{
      width: 50px;
    };  
  }
}

</style>