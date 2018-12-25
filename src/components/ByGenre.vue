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
      return window.location.href = api.goToSpotifyAuthorizationPage('by-genre');
    }

    api.getGenresByCountry({countryCode: 'ES', token: this.$store.state.StoreCredentials.token})
    .then(res => res.json())
    .then(genres => console.log(genres))
    .catch(err => console.log(err));

  }
}
</script>

<style lang="sass" scoped>

</style>
