<template>
  <div id="country-selector">
    <el-dialog title="Country selector" :visible.sync="dialogCountriesVisible" @close="setSelectedCountry">
      <p>Este es el country selector</p>
      <el-select v-model="dialogSelectedCountry">
        <el-option
          v-for="country in countries"
          :key="country.code"
          :label="country.name"
          :value="country.code"
        ></el-option>
      </el-select>
      <p>{{dialogSelectedCountry}}</p>
      <div>
        <el-button
          :disabled="!dialogSelectedCountry"
          @click="dialogCountriesVisible = false"
        >Select Country</el-button>
      </div>
    </el-dialog>
    <el-button class="change-country" @click="dialogCountriesVisible = true">Change country</el-button>
  </div>
</template>

<script>
export default {
  name: "CountrySelector",
  data() {
    return {
      dialogCountriesVisible: false,
      dialogSelectedCountry: this.$store.state.CountrySelector.selectedCountry.code
    }
  },
  computed: {
    countries() {
      return this.$store.state.CountrySelector.countries;
    }
  },
  created() {
    this.$store.dispatch("CountrySelector/FETCH_COUNTRIES");
  },
  methods: {
    setSelectedCountry() {
      this.$store.dispatch("CountrySelector/COUNTRY_SELECTED", this.dialogSelectedCountry)
      .then(function(res) {
        this.$emit('reload');
      }.bind(this));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
