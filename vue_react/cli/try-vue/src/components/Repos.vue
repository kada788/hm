<template>
    <ul>
           
        <li v-for="(repos,index) in repos" :key="index">{{repos.name}}</li>
           
    </ul>
</template>

<script setup>
const repos = [
    {
        id: 1,
        name: "Repos 1"
    },
    {
        id: 2,
        name: "Repos 2"
    }

]

</script>

<style scoped>

</style>