<script>
  export default {
    
  }
</script>

<template>
  <div class="utilities">
    <div class="row h-100 flex-column align-items-center justify-content-between ">
      <div class="col"><i class="fa-solid fa-ruler-combined"></i></div>
      <div class="col">
        <img src="../../assets/svg/salvagente.svg" alt="">
      </div>
      <div class="col"><i class="fa-solid fa-book"></i></div>
      <div class="col"><i class="fa-solid fa-cart-shopping"></i></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.utilities{
  position: fixed;
  top: 200px;
  right: 0;
  z-index: 99999;
  background-color: white;
  width: 40px;
  height: 160px;
  border-top-left-radius: 5px ;
  border-bottom-left-radius: 5px ;
  .col{
    text-align: center;
    padding: 7px  0;
  
    img{
      width: 1rem;
    }
  }
}
</style>