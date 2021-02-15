<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name:'GoodsList',
  props:{
      goods:{
          type:Array,
          default() {
              return []
          }
      }
  },
  components:{
      GoodsListItem
  },
  data(){
   return {

   }
  }
}
</script>

<style scoped>

</style>
