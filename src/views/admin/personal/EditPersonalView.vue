<script setup>
import { ref, reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { FormKit } from '@formkit/vue';
import useImage from '../../../composables/useImages';
import { useFirestore, useDocument } from 'vuefire';
import { doc, updateDoc } from 'firebase/firestore';

const { uploadImage, isThereImage } = useImage();
const route = useRoute();
const router = useRouter();
const db = useFirestore();
const docRef = doc(db, 'teachers', route.params.id);
const teacherToEdit = useDocument(docRef);
const formData = reactive({});
const puesto = ref([
  'Seleccionar Puesto',
  'Niñera',
  'Cocinera',
  'Limpieza',
  'Maestra',
]);

watch(teacherToEdit, (teacherToEdit) => {
  Object.assign(formData, teacherToEdit);
});

const handleSubmit = async (data) => {
  const { photo, ...teacher } = data;
  if (isThereImage.value) {
    const data = {
      ...teacher,
      photo: isThereImage.value,
    };
    await updateDoc(docRef, data);
  } else {
    const data = {
      ...teacher,
    };
    await updateDoc(docRef, data);
  }
  router.push({ name: 'manage' });
};
</script>

<template>
  <div class="header-container container mx-auto">
    <h1 class="text-lg md:text-3xl font-bold uppercase text-center my-4">
      Formulario de Registro de Personal
    </h1>
    <p class="text-center mb-2">Ingresa la información en el formulario</p>
  </div>
  <div class="form w-[90%] container mx-auto">
    <FormKit
      type="form"
      :actions="false"
      incomplete-message="Parece que el formulario no tiene los datos esperados, revisa todos los campos"
      @submit="handleSubmit"
    >
      <FormKit
        name="nombres"
        type="text"
        label="Nombres: "
        prefix-icon="people"
        v-model="formData.nombres"
      />
      <FormKit
        name="apellidos"
        type="text"
        label="Apellidos: "
        prefix-icon="people"
        v-model="formData.apellidos"
      />
      <FormKit
        name="phone"
        type="tel"
        label="Teléfono: "
        prefix-icon="telephone"
        placeholder="Ej: 5555-5555"
        validation="matches:/^[0-9]{4}-[0-9]{4}$/"
        :validation-messages="{
          matches: 'El teléfono debe tener el formato 5555-5555',
        }"
        validation-visibility="live"
        v-model="formData.phone"
      />
      <FormKit
        type="email"
        name="email"
        label="Correo Electrónico de la Madre: "
        prefix-icon="email"
        validation="email"
        :validation-messages="{
          email: 'El correo electrónico no es válido',
        }"
        placeholder="correo@dominio.com"
        validation-visibility="live"
        v-model="formData.email"
      />
      <FormKit
        type="tel"
        name="phone"
        label="Teléfono de Emergencias: "
        prefix-icon="telephone"
        placeholder="Ej: 5555-5555"
        validation="matches:/^[0-9]{4}-[0-9]{4}$/"
        :validation-messages="{
          matches: 'El teléfono debe tener el formato 5555-5555',
        }"
        validation-visibility="live"
        v-model="formData.phone"
      />
      <FormKit
        type="file"
        name="photo"
        label="Foto: "
        prefix-icon="people"
        accept=".jpg, .jpeg, .png"
        multiple="false"
        @change="uploadImage"
        v-model="formData.photo"
      />
      <div>
        <div v-if="isThereImage">
          <p>Fotografía Actual:</p>
          <img
            :src="isThereImage"
            alt="Fotografía Actual"
            class="w-48 h-48 rounded-full object-cover border-2 border-green-300 my-4"
          />
        </div>
        <div v-else>
          <p>Fotografía Actual</p>
          <img
            :src="teacherToEdit?.photo"
            alt="Nueva Fotografía"
            class="w-48 h-48 rounded-full object-cover border-2 border-green-300 my-4"
          />
        </div>
      </div>
      <FormKit
        name="birthdate"
        type="date"
        label="Fecha de Nacimiento: "
        prefix-icon="tools"
        v-model="formData.birthdate"
      />
      <FormKit
        name="address"
        type="text"
        label="Dirección: "
        prefix-icon="tools"
        v-model="formData.address"
      />
      <FormKit
        name="puesto"
        type="select"
        label="Puesto: "
        prefix-icon="tools"
        :options="puesto"
        v-model="formData.puesto"
      />
      <FormKit
        type="textarea"
        label="Observaciones: "
        prefix-icon="tools"
        name="observations"
        v-model="formData.observations"
      />
      <FormKit
        type="submit"
        label="Guardar Datos del Personal"
        prefix-icon="tools"
      />
    </FormKit>
  </div>
</template>
