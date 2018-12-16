<template>
  <h1>We are handling authorization, please hang on!</h1>
</template>

<script>
export default {
  name: 'StoreCredentials',
  created() {
    console.log(this.$route);
  }
}
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }
</style>
