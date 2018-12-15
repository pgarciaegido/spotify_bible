<template>
  <div>
    <LateralItem v-for="item in items" :key="item.id" :menuItem="item"/>
  </div>
</template>

<script>
import LateralItem from './LateralItem';

import api from '../api.js';

export default {
  name: 'TheLateral',
  components: {
    LateralItem
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.items = api.fetchMenuItems();
  }

}
</script>

<style lang="sass" scoped>

</style>
