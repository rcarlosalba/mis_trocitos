<script setup>
import { useAuthStore } from '../stores/auth';
const auth = useAuthStore();
</script>

<template>
  <footer
    class="md:mx-auto md:container md:flex md:justify-center md:items-center"
  >
    <div class="footer-logo">
      <img
        src=""
        alt=""
      />
    </div>
    <nav class="nav-container">
      <ul
        class="flex flex-col gap-4 text-right mr-4 mb-4 md:container md:mx-auto md:gap-2 md:flex-row"
      >
        <li><RouterLink :to="{ name: 'inicio' }">Inicio</RouterLink></li>
        <li>
          <RouterLink :to="{ name: 'acercade' }">Acerca de Nosotros</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'sedes' }">Nuestras Sedes</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'servicios' }"
            >Nuestros Servicios</RouterLink
          >
        </li>
        <li><RouterLink :to="{ name: 'blog' }">Blog</RouterLink></li>
        <li>
          <RouterLink :to="{ name: 'contacto' }">Contáctanos</RouterLink>
        </li>
        <span class="hidden md:block">|</span>
        <li v-if="auth.isAuth">
          <RouterLink
            :to="{ name: 'inicio' }"
            @click="auth.logout"
            >Cerrar Sesión</RouterLink
          >
        </li>
        <li v-else>
          <RouterLink :to="{ name: 'login' }">Iniciar Sesión</RouterLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
