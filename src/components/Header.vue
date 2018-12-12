<template>
  <el-row id="header">
    <el-col id="logo" :span="2">
      <img src="@/assets/spotify_white.png" alt="">
    </el-col>
    <el-col :span="20">
      <h2>Spotify Bible</h2>
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
    padding: 20px $CUSTOM_padding;

    #logo {
      text-align: left;
      img{
        width: 30px;
        height: 30px;
      }
    }
    h2 {
      margin: 0;
      text-align: left;
    }
  }
</style>
