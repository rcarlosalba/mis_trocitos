<script setup>
import { FormKit } from '@formkit/vue';
import useStudents from '../../composables/useStudents';
const { studentsCollection } = useStudents();
import StudentCard from '../../components/StudentCard.vue';
</script>

<template>
  <div class="container mx-auto w-[90%] mb-12">
    <div class="check-container">
      <FormKit
        type="form"
        :actions="false"
      >
        <FormKit
          type="checkbox"
          name="check"
          label="Mostrar Todos"
        />
      </FormKit>
    </div>
    <div
      class="cards-container mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8"
    >
      <StudentCard
        v-for="student in studentsCollection"
        :key="student.id"
        :student="student"
      />
    </div>
  </div>
</template>
