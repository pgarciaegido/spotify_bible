<template>
  <div id="header">
    <img src="/src/assets/spotify_white.png" alt="">
    <h1>Aquí va la magia del Header</h1>
  </div>
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
    h1 {
      margin: 0;
    }
  }
</style>
