<template>
  <div id="app">
      <nav-comp></nav-comp>
    <router-view/>
  </div>
</template>
<script>
import nav_comp from "@/components/nav-comp.vue"

export default {
    components: {
        "nav-comp": nav_comp
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
