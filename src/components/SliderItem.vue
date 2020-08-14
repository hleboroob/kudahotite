<template>
   <div class="carousel-item black-text" href="#one!">
      <img :src=" require('@/assets/' + product_data.image) ">
      <h2>{{product_data.image}}</h2>
      <p class="white-text">This is your first panel</p>
      <button class="btn">Купить</button>
    </div>
</template>


<script>
export default {
    name:"slider-item",
    props:{
        product_data:{
            type: Object,
            default(){
                return{}
            }
        }
    }
}
</script>   

<style >
.btn {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 70%;
}
</style>