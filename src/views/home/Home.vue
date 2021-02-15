<template>
    <div id="home">
        <nav-bar class="nav">
          <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners='banners'/>
        <recommend-view :recommends = 'recommends'/>
        <feature-view/>
        <tab-control class='tab-con' :titles = "['流行','新款','精选']"/>
        <goods-list :goods = "goods['pop'].list"/>

        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
    </div>
</template>

<script>
 import HomeSwiper from './childComps/HomeSwiper'
 import RecommendView from './childComps/RecommendView'
 import FeatureView from './childComps/FeatureView'

 import NavBar from '../../components/common/navbar/Navbar';
 import TabControl from '../../components/content/tabControl/TabControl'
 import GoodsList from '../../components/content/goods/GoodsList'

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
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }

    }
  },
  created() {
    this.handleGetHomeData();
    
    this.handleGetHomeGoods('pop');
    this.handleGetHomeGoods('new');
    this.handleGetHomeGoods('sell');
  },
  methods: {
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
    }
    
  },
  
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
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
</style>
