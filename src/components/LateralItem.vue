<template>
  <el-menu
    class="el-menu-vertical-demo">
    <router-link :to="menuItem.route">
      <el-menu-item
        index="0">
        <i v-bind:class="menuItem.icon"></i>
        <span> {{menuItem.text}} </span>
      </el-menu-item>
    </router-link>
    
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
