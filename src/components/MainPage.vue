<template>
  <el-container id="main-container">
    <el-header id="main-header">
      <TheHeader />
    </el-header>
    <p>{{count}}</p>
    <p>{{ countPlusTen }}</p>
    <el-container>
      <el-aside id="lateral-menu">
        <TheLateral />
      </el-aside>
      <el-container>
        <el-main id="main-content">
          <h3>Router down here</h3>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <TheFooter />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex';

import TheHeader from './Header.vue';
import TheLateral from './Lateral.vue';
import TheFooter from './Footer.vue';

export default {
  name: 'MainPage',
  components: {
    TheHeader,
    TheLateral,
    TheFooter
  },
  /* computed: {
    count() {
      return this.$store.state.count;
    },
    countPlusTen() {
      return this.$store.getters.addTen;
    }
  }, */
  computed: mapState(['count', 'countPlusTen']),
  created() {
    this.$store.commit('increment', {amount: 10});
    setTimeout(() => this.$store.commit('increment', {amount: 10}), 5000);
  }
  
}
</script>

<style scoped lang="scss">
  @import '../element-variables';
  #main-container {
    padding: 0;
    #main-header {
      padding: 0;
      height: auto !important;
    }
    #lateral-menu {
      background-color: lightcyan;
    }

    #main-content {
      background-color: $CUSTOM_gray_background;
    }
  }

</style>
