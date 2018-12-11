<template>
  <el-row id="header">
    <el-col :span="4">
      <img src="@/assets/spotify_white.png" alt="">
    </el-col>
    <el-col :span="20">
      <h2>Aquí va la magia del Header</h2>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  @import '../element-variables';
  #header {
    background-color: $CUSTOM_green;
    color: white;

    img{
      width: 30px;
      height: 30px;
    }
    h2 {
      margin: 0;
      text-align: left;
    }
  }
</style>
