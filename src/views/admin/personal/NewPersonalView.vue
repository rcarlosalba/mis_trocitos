<script setup>
import { ref } from 'vue';
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';
import { addDoc, collection } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import usePersonal from '../../../composables/usePersonal';

const { isThereImage, uploadImage } = usePersonal();
const router = useRouter();
const db = useFirestore();
const puesto = ref([
  'Seleccionar Puesto',
  'Niñera',
  'Cocinera',
  'Limpieza',
  'Maestra',
]);

const handleSubmit = async (data) => {
  const { photo, ...person } = data;
  const docRef = await addDoc(collection(db, 'personal'), {
    ...person,
    photo: isThereImage.value,
  });
  if (docRef.id) {
    router.push({ name: 'manage' });
  }
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
        validation="required"
        :validation-messages="{
          required: 'El nombre es requerido',
        }"
        validation-visibility="live"
      />
      <FormKit
        name="apellidos"
        type="text"
        label="Apellidos: "
        prefix-icon="people"
        validation="required"
        :validation-messages="{
          required: 'El apellido es requerido',
        }"
        validation-visibility="live"
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
      />
      <FormKit
        type="email"
        name="email"
        label="Correo Electrónico: "
        prefix-icon="email"
        validation="required|email"
        :validation-messages="{
          required: 'El correo electrónico es requerido',
          email: 'El correo electrónico no es válido',
        }"
        placeholder="correo@dominio.com"
        validation-visibility="live"
      />
      <FormKit
        type="tel"
        name="phoneemergency"
        label="Teléfono de Emergencias: "
        prefix-icon="telephone"
        placeholder="Ej: 5555-5555"
        validation="matches:/^[0-9]{4}-[0-9]{4}$/"
        :validation-messages="{
          matches: 'El teléfono debe tener el formato 5555-5555',
        }"
        validation-visibility="live"
      />
      <FormKit
        type="file"
        name="photo"
        label="Foto: "
        prefix-icon="people"
        accept=".jpg, .jpeg, .png"
        multiple="false"
        validation="required"
        :validation-messages="{
          required: 'La foto es requerida',
        }"
        @change="uploadImage"
      />
      <div v-if="isThereImage">
        <p>Fotografía</p>
        <img
          class="w-48 h-48 rounded-full object-cover border-spacing-6 border-2 my-4 ring-4 ring-green-300"
          :src="isThereImage"
          alt="Fotografía"
        />
      </div>
      <FormKit
        name="birthdate"
        type="date"
        label="Fecha de Nacimiento: "
        prefix-icon="tools"
        validation="required"
        :validation-messages="{
          required: 'La fecha de nacimiento es requerida',
        }"
        validation-visibility="live"
      />
      <FormKit
        name="address"
        type="text"
        label="Dirección: "
        prefix-icon="tools"
        validation="required"
        :validation-messages="{
          required: 'La dirección es requerida',
        }"
        validation-visibility="live"
      />
      <FormKit
        name="puesto"
        type="select"
        label="Puesto: "
        prefix-icon="tools"
        placeholder="Seleccionar Puesto"
        :options="puesto"
        validation="required"
        :validation-messages="{
          required: 'El puesto es requerido',
        }"
        validation-visibility="live"
      />
      <FormKit
        type="textarea"
        label="Observaciones: "
        prefix-icon="tools"
        name="observations"
      />
      <FormKit
        type="submit"
        label="Guardar Datos del Personal"
        prefix-icon="tools"
      />
    </FormKit>
  </div>
</template>
