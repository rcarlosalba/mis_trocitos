<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-full grid grid-rows-[auto_1fr_auto]">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
