<template>
  <div id="footer">
    <p>Spotify Bible {{ propertyComputed }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: 0
    }
  },

  computed: {
    propertyComputed() {
      console.log('COMPUTING')
      this.year = 2020;
      return this.year;
    }
  },

  created() {
    console.log('CREATED');
    this.year = (new Date()).getFullYear();
    console.log(this);
  }
}
</script>

<style scoped lang="scss">
  #footer {
    p {
      color: white;
    }
  }

</style>

