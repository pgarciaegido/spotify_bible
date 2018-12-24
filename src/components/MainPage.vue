<template>
  <el-container id="main-container">
    <el-header id="main-header">
      <TheHeader />
    </el-header>
    <el-container>
      <el-aside
        id="lateral-menu"
        v-loading="lateralLoaderActive">
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
  computed: {
    lateralLoaderActive() {
      return this.$store.state.LateralStore.activeLoader;
    }
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
