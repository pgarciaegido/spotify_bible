<template>
  <div id="byGenre">
    <h1>Popular categories in Spain</h1>
    <el-row :gutter="20">
      <el-col :span="8" v-for="genre in genres" :key="genre.id">
        <el-card>
          <img :src="genre.icons[0].url" />
          <p>{{genre.name}}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '../api.js';

export default {
  name: 'ByGenre',
  computed: {
    genres() {
      return this.$store.state.ByGenre.genres;
    }
  },
  created() {
    this.$store.dispatch('StoreCredentials/GET_CREDENTIALS');

    if (!this.$store.state.StoreCredentials.token) {
      return window.location.href = api.goToSpotifyAuthorizationPage('by-genre');
    }

    this.$store.dispatch('ByGenre/FETCH_GENRES', this.$store.state.StoreCredentials.token);
  }
}
</script>

<style lang="scss" scoped>
  #byGenre {
    .el-col {
      margin-bottom: 20px;
      .el-card__body {
        img {
          width: 100%;
        }
      }
    }
  }
</style>
