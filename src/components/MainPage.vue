<template>
  <el-container id="main-container">
    <el-header id="header">
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px" id="lateral-menu">
        <Lateral />
      </el-aside>
      <el-container>
        <el-main id="main-content">Principal</el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header.vue';
import Lateral from './Lateral.vue';
import Footer from './Footer.vue';

export default {
  name: 'MainPage',
  components: {
    Header,
    Lateral,
    Footer
  }
}
</script>

<style scoped lang="scss">
  @import '../element-variables';
  #main-container {
    padding: 0;
    #header {
      height: 100%;
      padding: 0;
    }
    #lateral-menu {
      background-color: lightcyan;
    }

    #main-content {
      background-color: $CUSTOM_gray_background;
    }
  }

</style>
