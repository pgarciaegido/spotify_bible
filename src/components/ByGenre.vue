<template>
  <div id="byGenre">
    <h1>
      Popular categories in {{ selectedCountryName }}
    </h1>

    <CountrySelector @reload="fetchGenresHelper"/>

    <el-row :gutter="20" class="list">
      <el-col :span="8" v-for="genre in genres" :key="genre.id">
        <el-card @click.native="goToCategory(genre.href)">
          <img :src="genre.icons[0].url">
          <p>{{genre.name}}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "../api.js";
import CountrySelector from './CountrySelector.vue';

const fetchGenresHelper = function() {
  this.$store.dispatch(
    "ByGenre/FETCH_GENRES",
    { token: this.$store.state.StoreCredentials.token, countryCode: this.$store.state.CountrySelector.selectedCountry.code }
  );
};

const mixin = {
  methods: {
    fetchGenresHelper
  }
}

export default {
  name: "ByGenre",
  components: {
    CountrySelector
  },
  computed: {
    genres() {
      return this.$store.state.ByGenre.genres;
    },
    selectedCountryName() {
      return this.$store.state.CountrySelector.selectedCountry.name;
    }
  },
  created() {
    this.$store.dispatch("StoreCredentials/GET_CREDENTIALS");

    if (!this.$store.state.StoreCredentials.token) {
      return (window.location.href = api.goToSpotifyAuthorizationPage(
        "by-genre"
      ));
    }
    this.fetchGenresHelper();
  },
  methods: {
    goToCategory(url) {
      console.log(url);
    },
  },
  mixins: [mixin]
};
</script>

<style lang="scss" scoped>
#byGenre {
  .list {
    margin-top: 20px;
  }
  .el-col {
    margin-bottom: 20px;
    cursor: pointer;
    .el-card__body {
      img {
        width: 100%;
      }
    }
  }

  .change-country {
    color: lightblue;
    margin-left: 10px;
    font-size: 0.8em;
    cursor: pointer;
  }
}
</style>
