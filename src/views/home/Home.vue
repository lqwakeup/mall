<template>
    <div id="home">
        <nav-bar class="nav">
          <div slot="center">购物街</div>
        </nav-bar>

        <scroll class="content" ref="scroll" :probe-type='3' @scroll="contentScroll">
          <home-swiper :banners='banners'/>
          <recommend-view :recommends = 'recommends'/>
          <feature-view/>
          <tab-control class='tab-con' 
                      :titles = "['流行','新款','精选']"
                      @tabclick="tabclick"/>
          <goods-list :goods = "showGoods"/>
        </scroll>

        <back-top @click.native="backTop" v-show="isShow"/>
    </div>
</template>

<script>
 import HomeSwiper from './childComps/HomeSwiper'
 import RecommendView from './childComps/RecommendView'
 import FeatureView from './childComps/FeatureView'

 import NavBar from '../../components/common/navbar/Navbar';
 import Scroll from '../../components/common/scroll/Scroll';
 import TabControl from '../../components/content/tabControl/TabControl'
 import GoodsList from '../../components/content/goods/GoodsList'
 import BackTop from '../../components/content/backTop/BackTop'

 import {
   getHomeData,
   getHomeGoods
  } from '../../network/home';

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShow:false
    }
  },
  computed:{
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    this.handleGetHomeData();
    
    this.handleGetHomeGoods('pop');
    this.handleGetHomeGoods('new');
    this.handleGetHomeGoods('sell');
  },
  methods: {
    /**
     * 事件监听
     */
    tabclick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },

    backTop() {
      this.$refs.scroll.scroll.scrollTo(0,0,500);
    },

    contentScroll(position) {
      this.isShow = -position.y>1000?true:false;
    },
    /**
     * 网络请求
     */
    handleGetHomeData() {
      getHomeData().then(res=>{
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },

    handleGetHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      })
    },
    
    
  },
  
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .nav{
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }

  #home .tab-control{
    position: sticky;
    top: 44px;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /* background-color: red; */
  }
</style>
