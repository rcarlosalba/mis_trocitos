<script setup>
defineProps({
  student: {
    type: Object,
  },
});
import useStudents from '../composables/useStudents';
const { deleteItems } = useStudents();
</script>

<template>
  <div class="card shadow-xl mb-4 md:shadow-2xl md:mb-0">
    <img
      :src="student.photostudent"
      alt="Fotografía"
      class="card-image mx-auto rounded-full object-cover h-48 w-48 border-spacing-6 border-2 my-4 ring-4 ring-green-300"
    />
    <div class="card-content grid gap-2 p-3">
      <h3 class="card-name text-center text-lg font-semibold mb-4">
        {{ student.lastnamestudent }}
        <br />
        {{ student.namestudent }}
      </h3>
      <p class="card-info font-semibold">
        Grado:
        <span class="font-bold">
          {{ student.grade }}
        </span>
      </p>
      <p class="card-info font-semibold">
        Sede:
        <span class="font-bold">
          {{ student.location }}
        </span>
      </p>
      <p class="card-handle font-semibold">
        Encargado en Emergencias:
        <br />
        <span class="font-bold">
          {{ student.handlename }}
        </span>
      </p>
      <a
        :href="`+502${student.phonehandle}`"
        class="card-info font-semibold"
        >Teléfono de Emergencia:
        <br />
        <span class="text-orange-500 block my-2 text-lg text-center">
          {{ student.phonehandle }}
        </span>
      </a>
      <div class="card-buttons w-full flex justify-around text-center">
        <RouterLink
          :to="{ name: 'editstudent', params: { id: student.id } }"
          class="card-button edit-button"
          >Editar</RouterLink
        >
        <span> | </span>
        <button
          class="card-button activate-button"
          @click="deleteItems(student.id, student.photostudent)"
        >
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>
