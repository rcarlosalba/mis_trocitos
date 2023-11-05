<script setup>
import { FormKit } from '@formkit/vue';
import usePersonal from '@/composables/usePersonal';
const { personalCollection } = usePersonal();
import PersonalCard from '@/components/PersonalCard.vue';
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
      <PersonalCard
        v-for="colaborador in personalCollection"
        :key="colaborador.id"
        :colaborador="colaborador"
      />
    </div>
  </div>
</template>
