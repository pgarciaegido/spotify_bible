<template>
  <h1>We are handling authorization, please hang on!</h1>
</template>

<script>
import queryString from 'query-string';

export default {
  name: 'StoreCredentials',
  data() {
    return {
      to: null
    }
  },
  created() {

    this.$store.dispatch(
      'StoreCredentials/SAVE_CREDENTIALS',
      queryString.parse(this.$route.hash));

    this.to = this.$route.query.to;
    setTimeout(() => {
      this.$router.push({path: this.to});
    }, 2000);
  }
}
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }
</style>
