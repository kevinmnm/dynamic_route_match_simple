<template>
    <div class='nav'>
        <router-link v-for="page in pages" :key="page.name + page" :to="{name: page.name}">{{ page.title }}</router-link>
    </div>
</template>

<script>

let jsonObj = [
    {
        title: 'Home',
        name: 'Home'
    },
    {
        title: 'Page #1',
        name: 'PageOne'
    },
    {
        title: 'Page #2',
        name: 'PageTwo'
    },
    {
        title: 'Page #3',
        name: 'PageThree'
    },
    {
        title: 'Page #4',
        name: 'PageFour'
    }
];

export default {
    data(){
        return {
            pages: jsonObj
        }
    }
}
</script>

<style>
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>