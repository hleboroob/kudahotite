<template>
  <div class="col xl3 l3 m6 s12">
    <div class="card hoverable" @mouseenter="hover = true" @mouseleave="hover = false" href="#!">
      <div class="card-image">
        <img :src="product_data.img_front" v-if="hover" />
        <img :src="product_data.img_back" v-else />
      </div>
      <div class="card-content center" v-if="hover">
        <span class="card-title">{{product_data.title}}</span>
        <p>{{product_data.price}} рублей</p>
        <button class="btn-small">Добавить в корзину</button>
      </div>
      <div class="card-content center" v-else>
        <span class="card-title">{{product_data.title}}</span>
        <p>{{product_data.price}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "catalog-item",
  data() {
    return {
      hover: false
    };
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {}
};
</script>   

<style>

/* img{
    object-fit: cover;
    width: 200px;
    height: 100px;
} */

.card .card-content{
    height: 110px;
    padding: 0;
}
/* .card{
    padding: 0;
} */

</style>