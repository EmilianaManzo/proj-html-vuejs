<script>
import {store} from '../../data/store';
import Btn from '../partialsBtn/Btn.vue';
  export default {
    components:{
      Btn
    },
    data(){
      return{
        store,
      }
    },  
  }
</script>

<template>
<section class="recap">
  <div class="container position-relative ">
    <div class="circle3 position-absolute ">
      <img src="../../assets/palline/senape.svg" alt="">
    </div>
    <div class="circle5 position-absolute ">
      <img src="../../assets/palline/blu.svg" alt="">
    </div>
    <div class="circle6 position-absolute ">
      <img src="../../assets/palline/red.svg" alt="">
    </div>
    <div class="row">
      <div class="col text-center">
        <h6>Start today for getting <span class="green">Online Certification</span></h6>
        <h4 class="mb-5">You can be your own guiding star with our help!</h4>
        <Btn :type="2" :text="store.btn_getstarted" />
      </div>
    </div>
  </div>
</section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.container{
  padding: 95px 0;


    h6{
      font-weight: bold;
      color: $dark-text;
      .green{
        color:$green-text;
        font-weight: normal;
      }
    }
    h4{
      color: $dark-text;
      font-weight: bold;
    }

    .circle3{
    top: 50%;
    left: 20px;
    img{
      width: 55px;
    };
  }
  .circle5{
    top: 50%;
    left: 90%;
    img{
      width: 35px;
    }; 
  }
  .circle6{
    top: 0px;
    left: 80%;
    img{
      width: 45px;
    };  
  }
}

</style>