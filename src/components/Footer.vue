<template>
  <div id="footer">
    <p>Spotify Bible {{ year }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    year() {
      return (new Date()).getFullYear();
    }
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
