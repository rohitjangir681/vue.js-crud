<script setup>
import LeftSidebar from './views/LeftSidebar.vue'
import Header from './views/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
  <div v-if="route.path === '/'" style="width: 100%;">
    <router-view />
  </div>

  <div v-else style="width: 100%;">
    <LeftSidebar />
    <div class="main" style="width: 85%;float: left;">
      <Header />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
