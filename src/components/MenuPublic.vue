<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="nav-container">
    <ul class="flex flex-col gap-4 md:flex-row">
      <li><RouterLink :to="{ name: 'inicio' }">Inicio</RouterLink></li>
      <li>
        <RouterLink :to="{ name: 'acercade' }">Acerca de Nosotros</RouterLink>
      </li>
      <li><RouterLink :to="{ name: 'sedes' }">Nuestras Sedes</RouterLink></li>
      <li>
        <RouterLink :to="{ name: 'servicios' }">Nuestros Servicios</RouterLink>
      </li>
      <!-- <li><RouterLink :to="{ name: 'blog' }">Blog</RouterLink></li> -->
      <li><RouterLink :to="{ name: 'contacto' }">Contáctanos</RouterLink></li>
    </ul>
  </nav>
</template>
