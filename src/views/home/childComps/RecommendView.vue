<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
      recommends:{
          type:Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        
        padding: 15px 0 30px;
        border-bottom: 8px solid #eee;
    }
    .item{
        flex:1;
    }

    .item img{
        width: 85%;
        margin-top: 3px;
        margin-bottom: 3px;
    }
</style>
