<template>
  <el-header id="header">Header</el-header>
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
  }
</style>
