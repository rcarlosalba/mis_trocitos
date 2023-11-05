<script setup>
import { useAuthStore } from '../stores/auth';
const auth = useAuthStore();
</script>

<template>
  <nav class="nav-container">
    <ul class="flex flex-col gap-4 md:flex-row">
      <li>
        <RouterLink :to="{ name: 'manage' }"
          >Panel de Administración</RouterLink
        >
      </li>
      <span class="hidden md:block">|</span>
      <li>
        <RouterLink
          :to="{ name: 'inicio' }"
          @click="auth.logout"
          >Cerrar Sesión</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
