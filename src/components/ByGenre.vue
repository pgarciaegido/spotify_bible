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
    window.location.href =  api.getSpotifyAuthorizationURL();
  }
}
</script>

<style lang="sass" scoped>

</style>
