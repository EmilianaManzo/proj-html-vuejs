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

<template>
  <section class="courses" id="Courses">
    <div class="container pt-5">
      <div class="row row-upper">
        <div class="col text-center ">
          <p>CHOOSE A COURSE TO GET STARTED</p>
          <h1>Latest Featured <span class="green">Courses</span></h1>
        </div>
      </div>
      <div class="row row-cols-2  row-center">
        <div class="col d-flex py-2" v-for="(course, i) in store.courses" :key="i">
          <div class="img">
            <img :src="getImagePath(course.img)" alt="">
          </div>
          <div class="text pt-2 ">
            <h3>{{ course.price }}</h3>
            <h4>{{ course.course }}</h4>
            <span class="lessons">{{ course.lesson }}</span>
            <span class="students">{{ course.students }}</span>
          </div>
        </div>
      </div>
      <div class="row row-bottom">
        <div class="col pt-5 ">
          <Btn :type="2" :text="store.btn_viewcourses" />
        </div>
        
      </div>
    </div>
  </section>
</template>

<!-- TODO: FARE HOVER DIFFERENTI CON MIXIN -->
<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.courses{
  background-color: $block-bcg;
  padding-top:95px ;
}
.container{
  .row-upper{
    margin-bottom: 70px;
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

  .row-center{
    .col{
      img{
        width: 150px;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
      }
      .text{
        padding-left: 20px;
        padding-right: 50px;
        h3{
          color: $green-text;
          font-weight: bold;
        }
        h4{
          color: $bcgc-header;
          font-weight: bold;
        }
        .lessons{
          margin-right: 10px ;
          color: $minitext-courses;
          &::before{
          font-family: 'Fontawesome';
          content: '\f15c';

          margin-right: 5px; 
          }
        }
        .students{
          color: $minitext-courses;
          &::before{
          font-family: 'Fontawesome';
          content: '\f007';
          margin-right: 5px; 
          }
        }
        
      }
      &:hover{
        background-color: white;
        border-radius: 5px;
        h4{
          color: $green-text;;
        }
      }
    } 
  }

  .row-bottom{
    padding-bottom: 70px;
    .col{
      @include centerFlex('both');
      .btn-courses{
        background-color: $bcg_button !important;
        font-size: .8rem;
        color: $white-text;
        padding: 15px 40px;
        font-weight: bold;
        margin: 50px 70px 0;

        &:hover {
          background-color:$bcgc-header !important;
          color: $white-text !important ; 
        }
      }
    }
    
  }


}

</style>