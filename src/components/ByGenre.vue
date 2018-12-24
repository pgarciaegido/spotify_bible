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
    if (!this.$store.state.StoreCredentials.token) {
      window.location.href = api.goToSpotifyAuthorizationPage('by-genre');
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
