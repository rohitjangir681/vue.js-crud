<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();

const classActive = ref('');


</script>


<template>
    <div class="sidebar" style="width: 15%;float: left;height: 100%;">
        <h2>My Dashboard</h2>
        <router-link to="/" :class-active>Dashboard</router-link>
        <router-link to="/users" :class="route.path.startsWith('/users') ? 'active' : ''">Users</router-link>
        <a href="#">Posts</a>
        <a href="#">Pages</a>
        <a href="#">Media</a>
        <a href="#">Comments</a>
        <a href="#">Appearance</a>
        <a href="#">Plugins</a>
        <a href="#">Settings</a>
    </div>
</template>
