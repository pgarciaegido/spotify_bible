<template>
  <div>
    <LateralItem v-for="item in items" :key="item.id" v-bind:menuItem="item"/>
  </div>
</template>

<script>
import LateralItem from './LateralItem';

import API from '../api.js';

export default {
  name: 'Lateral',
  components: {
    LateralItem
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.items = API.fetchMenuItems();
  }
    
}
</script>

<style lang="sass" scoped>

</style>
