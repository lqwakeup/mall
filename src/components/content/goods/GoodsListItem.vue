<template>
    <div class="goods-item">
        <img :src="goodsItem.show.img" alt="">
        <div>
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>

</template>

<script>
export default {
  name:'',
  props:{
      goodsItem:{
          type:Object,
          default() {
              return {}
          }
      }
  },
  data(){
   return {

   }
  }
}
</script>

<style scoped>
    .goods-item{
       width: 50%; 
    }

    .goods-item img{
        width: 100%;
        padding: 10px 10px;
    }
</style>
