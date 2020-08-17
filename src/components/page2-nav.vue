<template>
    <div id='styler'>
        <router-link class="page2-nav" v-for="all in par" :to="{name: 'PageParam', params: {id: all.id} }" :key="all">{{ all.content }}</router-link>
        <router-view/>
    </div>
</template>

<script>
const par = [
    {
        id: 1,
        content: 'Content #1'
    },
    {
        id: 2,
        content: 'Content #2'
    },
    {
        id: 3,
        content: 'Content #3'
    },
    {
        id: 4,
        content: 'Content #4'
    }
];

export default {
    data(){
        return {
            par: par
        }
    },
    watch: {
        $route(to, from){
            if (this.$route.params.id === 2){
                alert(from);
            }
        }   
    }
}
</script>

<style scoped>

#styler{
    margin: 20px;
}

.page2-nav{
    padding: 10px;
    margin: 10px;
}

</style>