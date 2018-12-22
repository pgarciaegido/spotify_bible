<template>
  <div>
    <h1>By genre niño</h1>
  </div>
</template>

<script>
import api from '../api.js';

export default {
  name: 'ByGenre',
  created() {
    if (Object.keys(this.$route.query).length === 0) {
      window.location.href =  api.goToSpotifyAuthorizationPage('by-genre');
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
