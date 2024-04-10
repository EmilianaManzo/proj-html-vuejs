<script>
import {store} from '../../data/store';
export default {
  props:{
    address: Array,
    icons: Array,
  },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
    <h6>Address</h6>
    <p v-for="(item, i) in address" :key="`a-${i}`">{{ item}}</p>
    <div class="social">
      <span v-for="(item, i) in icons" :key="`i-${i}`"> 
        <a :href="item.href" target="_blank"><i :class="item.name"></i></a>
      </span>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;
i{
  font-size: 1.3rem;
  margin-right: 20px;
  color: $grey-text;
}

.col{

  h6{
    font-weight: bold;
    color: $dark-text;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  p{
    color: $grey-text;
    font-weight: bold;
    font-size: 0.8rem;
  }
}
</style>