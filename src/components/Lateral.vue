<template>
  <div>
    <LateralItem v-for="item in items" :key="item.id" :menuItem="item"/>
  </div>
</template>

<script>
import LateralItem from './LateralItem';

export default {
  name: 'TheLateral',
  components: {
    LateralItem
  },
  computed: {
    items() {
      return this.$store.state.LateralStore.items;
    }
  },
  created(){
    this.$store.dispatch('LateralStore/FETCH_MENU_ITEMS');    
  }
}
</script>

<style lang="sass" scoped>

</style>
