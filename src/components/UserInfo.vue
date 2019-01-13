<template>
  <div id="userInfo">
    <h1>User info</h1>
    <div v-for="(item, key, index) in userInfo" :key="index">
      <span>{{key}} -- </span> 
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  computed: {
    userInfo() {
      return this.$store.state.UserInfo.userInfo;
    }
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
  }
}
</script>

<style lang="scss" scoped>
  #userInfo {

  }
</style>
