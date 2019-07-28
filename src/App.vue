<template>
  <div id="app">
    
    <router-view/>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from './components/BottomNavigation/Tabbar'
export default {
  components:{
    Tabbar
  }
}
</script>

<style lang="stylus" scoped>
.app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

</style>
