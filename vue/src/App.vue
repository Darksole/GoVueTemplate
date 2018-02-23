<template lang='pug'>
    #app
        v-app
</template>

<script>

export default {
  components: {

  },
  name: 'app',
  data () {
    return {

    }
  },
  beforeCreate(){
      if (location.protocol !== "https:" && window.location.hostname !== 'localhost'){
          location.protocol = "https:";
      }
  },
  watch: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}
a {
  color: #42b983;
}
.notification.n-light {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;
  border: 1px solid;
  .notification-title {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 10px;
  }
}
</style>