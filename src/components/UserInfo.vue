<template>
  <div id="userInfo">
    <h1>User info</h1>
    <h2>{{userInfo.display_name}}</h2>
    <h3>How many followers I have: 
      <span>{{userInfo.followers.total}}</span>
    </h3>

    <h2>My playlists</h2>
    <div >
      <el-row :gutter="20">
        <el-col :span="8" v-for="playlist in playlists" :key="playlist.id">
          <el-card @click.native="goToPlaylist(playlist.id)">
            <img :src="playlist.images[0].url">
            <p>{{playlist.name}}</p>
          </el-card> 
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import api from '../api';

export default {
  name: 'userInfo',
  computed: {
    ...mapState('UserInfo', ['userInfo', 'playlists'])
  },
  created() {
    this.$store.dispatch("StoreCredentials/GET_CREDENTIALS");

    if (!this.$store.state.StoreCredentials.token) {
      return (window.location.href = api.goToSpotifyAuthorizationPage(
        "user-info"
      ));
    }

    this.$store.dispatch(
      "UserInfo/FETCH_USER_INFO",
      { token: this.$store.state.StoreCredentials.token }
    );
  },
  methods: {
    goToPlaylist(playlistId) {
      console.log('hahaha');
      return this.$router.push(`/playlist/${playlistId}`);
    }
  }
}
</script>

<style lang="scss" scoped>
  #userInfo {
    h2, h3 {
      text-align: left;
    }

    .el-card__body {
      img{
        max-width: 100%;
      }
    }
  }
</style>
