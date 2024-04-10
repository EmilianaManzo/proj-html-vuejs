<script>
import {store} from '../../data/store';
import Btn from '../partialsBtn/Btn.vue';

  export default {
    components:{
      Btn
    },
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
<!-- TODO: FARE PALLINE -->
<template>
  <section class="services">
    <div class="container">
      <div class="row row-upper flex-column position-relative">
        <div class="col col-upper text-center px-4 ">
          <h2>Let passion and determination be the guide along the way and develop at your own pace that's comfortable</h2>
          <p class=" fw-bold mb-2 fs-6">FANNIE MORENO</p>
          <span>/ Founder & CEO</span>
        </div>
        <div class="col col-bottom text-center">
          <div class="row">
            <div class="col" v-for="(item,i) in store.service.statisticNumber" :key="i">
              <h2>{{ item.number }}</h2>
              <p class=" text-uppercase ">{{ item.type }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-bottom">

        <div class="col col-upper">
          <div class="row sottorow">
            <div class="col sottocol">
              <div class="row row-cols-2 rowcard" >
                  <div class="col colcard" v-for="(item,index) in store.service.services" :key="index" :class="index == 1 ? 'pt-5' : ''">
                    <div class="card position-relative mb-3 p-0   "
                    v-for="(elem,i) in item" :key="i"  >
                      <div class="w-100" :class=" i == 0  ? 'order-1' : ''">
                        <img :src="getImagePath(elem.img)"  alt="">
                      </div>
                      <h5 class="mx-4 my-4 ">{{ elem.service }}</h5>
                      <p class="mx-4">{{ elem.description }}</p>
                    </div>

                    
                  </div>
              </div>
              
            </div>
            
            <div class="col  col-together" >
              <p>TOGETHER WE CAN CREATE</p>
              <h2>Services We <span class="green">Can Provide</span> For My Clients.</h2>
              <p class="service-info" v-for="(item,i) in store.service.services_info" :key="i">{{ item }}</p>
              <Btn :type="2" :text="store.btn_getstarted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.container{
  background-image: url(../../assets/img/background-pattern-grid-line.png);
  background-repeat: repeat;
  background-position: center;
  padding-bottom: 95px;
  .row-upper{
    .col-upper{
      padding-top:300px; 
      margin-bottom: 140px;
      h2 {
        padding: 0 318px;
        margin-bottom: 55px;
        font-weight:bolder;
      }
      span{
        font-size: .9rem;
        color: $minitext-courses;
      }
    }
    .col-bottom{
      
      h2{
        color: $green-text;
        font-weight: bold;
      }

      p{
        color: $grey-text;
        font-weight: bold;
      }

    }

    
  }

  .row-bottom{
    margin-top: 100px;
    .card{
      padding: 0 0 20px;
      border: none;
      box-shadow: 0px 0px 20px 0px grey ;
    }
    p{
      color: $grey-text;
    }
    
    .service-info{
        color: $grey-text;
        &::before{
          font-family: 'Fontawesome';
          content: '\f00c';
          color: $green-text;
          margin-right: 5px; 
        }
        
      }
      .green{
        color:$green-text;
      }
    .col-together{
      padding-top: 150px;
      margin-left: 50px;
    } 
  }
}

</style>
