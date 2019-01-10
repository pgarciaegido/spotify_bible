<template>
  <div id="byGenre">
    <!-- CHANGE COUNTRY DIALOG -->
    <el-dialog
      title="Country selector"
      :visible.sync="dialogCountriesVisible"
      @close="fetchGenres">
      <p>Este es el country selector</p>
      <el-select 
        v-model="dialogSelectedCountry">
        <el-option
          v-for="country in countries"
          :key="country.code"
          :label="country.name"
          :value="country.code">
        </el-option>
      </el-select>
      <p>{{dialogSelectedCountry}}</p>
      <div>
        <el-button
          :disabled="!dialogSelectedCountry"
          @click="dialogCountriesVisible = false">Select Country</el-button>
      </div>
    </el-dialog>
    <!-- / CHANGE COUNTRY DIALOG -->
    <h1>
      Popular categories in {{ selectedCountryName }}
      <span class="change-country" @click="dialogCountriesVisible = true">Change country</span>
    </h1>

    <el-row :gutter="20">
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

export default {
  name: "ByGenre",
  data() {
    return {
      dialogCountriesVisible: false,
      dialogSelectedCountry: 'ES'
    }
  },
  computed: {
    genres() {
      return this.$store.state.ByGenre.genres;
    },
    countries() {
      return this.$store.state.ByGenre.countries;
    },
    selectedCountryName() {
      return this.countries.find((c) => this.dialogSelectedCountry === c.code).name;
    }
  },
  created() {
    this.$store.dispatch("StoreCredentials/GET_CREDENTIALS");

    if (!this.$store.state.StoreCredentials.token) {
      return (window.location.href = api.goToSpotifyAuthorizationPage(
        "by-genre"
      ));
    }

    this.$store.dispatch("ByGenre/FETCH_COUNTRIES");

    this.$store.dispatch(
      "ByGenre/FETCH_GENRES",
      { token: this.$store.state.StoreCredentials.token, countryCode: this.dialogSelectedCountry }
    );
  },
  methods: {
    goToCategory(url) {
      console.log(url);
    },
    fetchGenres() {
      this.$store.dispatch(
        "ByGenre/FETCH_GENRES",
        { token: this.$store.state.StoreCredentials.token, countryCode: this.dialogSelectedCountry }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#byGenre {
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
