<template>
  <el-container id="main-container">
    <Header />
    <el-container>
      <el-aside width="200px" id="lateral-menu">Barra lateral</el-aside>
      <el-container>
        <el-main id="main-content">Principal</el-main>
        <el-footer>Pie de página</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'MainPage',
  components: {
    Header
  }
}
console.log(process.env);
</script>

<style scoped lang="scss">
  #main-container {
    background-color: lightgreen;

    #lateral-menu {
      background-color: lightcyan;
    }

    #main-content {
      background-color: lightpink;
    }
  }

</style>
