<template>
  <div id="playlist">
    <h1>Playlist</h1>
    <img :src="playlist.images[0].url" alt="">

    <div v-for="track in playlist.tracks.items" :key="track.id">
      <p>{{track.track.name}} - {{track.track.album.name }} - {{ track.track.album.artists[0].name }}</p>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Playlist',
  computed: {
    playlist() {
      return this.$store.state.Playlist.playlist;
    }
  },
  created() {
    this.$store.dispatch('Playlist/FETCH_PLAYLIST', { playlistId: this.$route.params.playlistId, token: this.$store.state.StoreCredentials.token});
  }
}
</script>

<style lang="scss" scoped>
  #playlist {
    background-color: lightcyan;
  }
</style>
