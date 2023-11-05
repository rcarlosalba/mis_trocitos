<script setup>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';
import useStudents from '../../../composables/useStudents';

const grado = ref(['Nursery', 'Kinder', 'Prepa']);
const sede = ref(['Zona 7', 'Zona 10']);
const db = useFirestore();
const router = useRouter();
const { isThereImage, uploadImage } = useStudents();

const handleSubmit = async (data) => {
  const { photostudent, ...student } = data;

  const docRef = await addDoc(collection(db, 'students'), {
    ...student,
    photostudent: isThereImage.value,
  });
  if (docRef.id) {
    router.push({ name: 'manage' });
  }
};
</script>

<template>
  <div class="header-container container mx-auto">
    <h1 class="text-lg md:text-3xl font-bold uppercase text-center my-4">
      Formulario de Registro de Estudiantes
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
        name="mothername"
        type="text"
        label="Nombre Completo de la Madre: "
        prefix-icon="avatarWoman"
        validation="required"
        :validation-messages="{
          required: 'El nombre es requerido',
        }"
        validation-visibility="live"
      />
      <FormKit
        name="phonemother"
        type="tel"
        label="Teléfono de la Madre: "
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
        label="Correo Electrónico de la Madre: "
        name="emailmother"
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
        name="fathername"
        type="text"
        label="Nombre Completo del Padre: "
        prefix-icon="avatarMan"
        validation="required"
        :validation-messages="{
          required: 'El nombre es requerido',
        }"
        validation-visibility="live"
      />
      <FormKit
        name="phonefather"
        type="tel"
        label="Teléfono del Padre: "
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
        label="Correo Electrónico del Padre: "
        name="emailfather"
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
        name="handlename"
        type="text"
        label="Nombre Completo de la persona encagada: "
        prefix-icon="star"
        validation="required"
        :validation-messages="{
          required: 'El nombre es requerido',
        }"
        validation-visibility="live"
      />
      <FormKit
        type="tel"
        name="phonehandle"
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
        label="Foto del Estudiante: "
        prefix-icon="people"
        accept=".jpg, .jpeg, .png"
        multiple="false"
        validation="required"
        name="photostudent"
        file-size="2MB"
        :validation-messages="{
          required: 'La foto del estudiante es obligatoria',
        }"
        validation-visibility="submit"
        @change="uploadImage"
      />
      <div v-if="isThereImage">
        <p>Fotografía Actual:</p>
        <img
          class="w-48 h-48 rounded-full object-cover border-spacing-6 border-2 my-4 ring-4 ring-green-300"
          :src="isThereImage"
          alt="Fotografía Actual"
        />
      </div>
      <FormKit
        name="namestudent"
        type="text"
        label="Nombres: "
        prefix-icon="tools"
        validation="required"
        :validation-messages="{
          required: 'El nombre es requerido',
        }"
        validation-visibility="live"
      />
      <FormKit
        name="lastnamestudent"
        type="text"
        label="Apellidos: "
        prefix-icon="tools"
        validation="required"
        :validation-messages="{
          required: 'El apellido es requerido',
        }"
        validation-visibility="live"
      />
      <FormKit
        name="birthdatestudent"
        type="date"
        label="Fecha de Nacimiento: "
        prefix-icon="tools"
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
        type="select"
        label="Grado: "
        prefix-icon="tools"
        placeholder="Selecciona un Grado"
        name="grade"
        :options="grado"
        validation="required"
        :validation-messages="{
          required: 'El grado es requerido',
        }"
        validation-visibility="live"
      />
      <FormKit
        type="select"
        name="location"
        label="Sede:"
        prefix-icon="tools"
        placeholder="Selecciona una Sede"
        :options="sede"
        validation="required"
        :validation-messages="{
          required: 'La sede es requerida',
        }"
        validation-visibility="live"
      />
      <FormKit
        type="textarea"
        label="Observaciones: "
        prefix-icon="tools"
        placeholder="Ej: Observaciones sobre el estudiante"
        name="observations"
      />
      <FormKit
        type="submit"
        label="Guardar Datos del Estudiante"
        prefix-icon="tools"
      />
    </FormKit>
  </div>
</template>
