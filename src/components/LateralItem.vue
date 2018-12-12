<template>
  <el-menu
    class="el-menu-vertical-demo">
    <el-menu-item
      index="0">
      <i v-bind:class="menuItem.icon"></i>
      <span> {{menuItem.text}} </span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'LateralItem',
  props: {
    menuItem: Object
  }
}
</script>

<style lang="sass" scoped>

</style>
