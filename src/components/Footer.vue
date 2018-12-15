<template>
  <div id="footer">
    <p>Spotify Bible {{ year }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      year: 0
    }
  },

  created() {
    this.year = (new Date()).getFullYear();
  }
}
</script>

<style scoped lang="scss">
  #footer {
    p {
      color: black;
    }
  }

</style>
