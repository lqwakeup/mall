<template>
    <div>
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

</style>
