<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        <!-- <img src="../../assets/img/tabbar/home.png" alt="">
        <div>首页</div> -->
    </div>
</template>

<script>
export default {
  name:'TabBatItem',
  props:{
       path: String,
       activeColor:{
           type:String,
           default:'red'
       }
  },
  data(){
   return {
    //    isActive:true,
   }
  },
  computed:{
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
          return this.isActive?{color:this.activeColor}:{}
      }
  },
  methods: {
      itemClick() {
          this.$router.push(this.path)
      }
  },
}

</script>

<style scoped>
    
    .tab-bar-item{
        flex:1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item img{
        width: 28px;
        height: 28px;
        vertical-align: middle;
    }

    .active{
        color:red;
    }
</style>
