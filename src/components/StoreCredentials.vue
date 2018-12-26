<template>
  <h1>We are handling authorization, please hang on!</h1>
</template>

<script>
import queryString from 'query-string';

const getExpirationDate = (expiresIn) => {
  return + new Date() 
  // turn to miliseconds
  + (expiresIn * 1000);
};

export default {
  name: 'StoreCredentials',
  created() {
    const credentials = queryString.parse(this.$route.hash);
    credentials.expires_in = getExpirationDate(credentials.expires_in);

    this.$store.dispatch(
      'StoreCredentials/SAVE_CREDENTIALS',
      credentials);

    this.$router.push({path: this.$route.query.to});
  }
}
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }
</style>
