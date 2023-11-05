<script setup>
defineProps({
  colaborador: {
    type: Object,
  },
});
import usePersonal from '@/composables/usePersonal';
const { deleteItems } = usePersonal();
</script>

<template>
  <div class="card shadow-xl mb-4 md:shadow-2xl md:mb-0">
    <img
      :src="colaborador.photo"
      alt="Fotografía"
      class="card-image mx-auto rounded-full object-cover h-48 w-48 border-spacing-6 border-2 my-4 ring-4 ring-green-300"
    />
    <div class="card-content grid gap-2 p-3">
      <h3 class="card-name text-center text-lg font-semibold mb-4">
        {{ colaborador.apellidos }}
        <br />
        {{ colaborador.nombres }}
      </h3>
      <p class="card-info font-semibold">
        Correo Electrónico:
        <span class="font-bold">
          {{ colaborador.email }}
        </span>
      </p>
      <p class="card-handle font-semibold">
        Fecha de Cumpleaños:
        <span class="font-bold">
          {{ colaborador.birthdate }}
        </span>
      </p>
      <a
        :href="`+502${colaborador.phone}`"
        class="card-info font-semibold"
        >Número de Teléfono:
        <span class="text-orange-500 my-2 text-lg text-center">
          {{ colaborador.phone }}
        </span>
      </a>
      <div class="card-buttons w-full flex justify-around text-center">
        <RouterLink
          :to="{ name: 'editpersonal', params: { id: colaborador.id } }"
          class="card-button edit-button"
          >Editar</RouterLink
        >
        <span> | </span>
        <button
          class="card-button activate-button"
          @click="deleteItems(colaborador.id, colaborador.photo)"
        >
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>
