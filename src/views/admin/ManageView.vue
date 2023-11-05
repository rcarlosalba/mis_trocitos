<script setup></script>

<template>
  <main class="mt-20 container mx-auto">
    <h1 class="font-bold text-center my-4 text-2xl md:text-3xl">
      Panel de Administración
    </h1>
    <div class="w-[80%] grid gap-4 mx-auto my-8 leading-7">
      <p class="text-center mb-2">Gestión de Registros Estudiantiles</p>
      <ul>
        <li>
          <RouterLink :to="{ name: 'newstudent' }">Crear Estudiante</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'allstudents' }"
            >Listado de Todos los Estudiantes</RouterLink
          >
        </li>
      </ul>
      <p class="text-center mb-2">Gestión de Registros de Personal</p>
      <ul>
        <li>
          <RouterLink :to="{ name: 'newpersonal' }"
            >Crear Colaborador</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'allpersonal' }"
            >Listado de el Personal</RouterLink
          >
        </li>
      </ul>
    </div>
  </main>
</template>
