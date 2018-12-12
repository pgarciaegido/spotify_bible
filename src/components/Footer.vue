<template>
  <div id="footer">
    <p>Spotify Bible {{ year }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: 0
    }
  },

  created() {
    this.year = (new Date()).getFullYear();
    console.log(this);
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
