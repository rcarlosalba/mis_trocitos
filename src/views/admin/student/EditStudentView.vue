<script setup>
import { ref, reactive, watch } from 'vue';
import { FormKit } from '@formkit/vue';
import { useRouter, useRoute } from 'vue-router';
import { useFirestore, useDocument } from 'vuefire';
import { doc, updateDoc } from 'firebase/firestore';
import useStudents from '../../../composables/useStudents';

const grado = ref(['--Seleccione--', 'Nursery', 'Kinder', 'Prepa']);
const sede = ref(['---Seleccione---', 'Zona 7', 'Zona 10']);

const route = useRoute();
const router = useRouter();

const db = useFirestore();
const docRef = doc(db, 'students', route.params.id);
const studentToEdit = useDocument(docRef);
const { uploadImage, isThereImage } = useStudents();

const formData = reactive({});

watch(studentToEdit, (studentToEdit) => {
  Object.assign(formData, studentToEdit);
});

const handleSubmit = async (data) => {
  const { photostudent, ...student } = data;
  if (isThereImage.value) {
    const data = {
      ...student,
      photostudent: isThereImage.value,
    };
    await updateDoc(docRef, data);
  } else {
    const data = {
      ...student,
    };
    await updateDoc(docRef, data);
  }
  router.push({ name: 'manage' });
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
        v-model="formData.mothername"
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
        validation-visibility="dirty"
        v-model="formData.phonemother"
      />
      <FormKit
        type="email"
        label="Correo Electrónico de la Madre: "
        name="emailmother"
        prefix-icon="email"
        validation="email"
        :validation-messages="{
          email: 'El correo electrónico no es válido',
        }"
        placeholder="correo@dominio.com"
        validation-visibility="live"
        v-model="formData.emailmother"
      />
      <FormKit
        name="fathername"
        type="text"
        label="Nombre Completo del Padre: "
        prefix-icon="avatarMan"
        v-model="formData.fathername"
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
        validation-visibility="dirty"
        v-model="formData.phonefather"
      />
      <FormKit
        type="email"
        label="Correo Electrónico del Padre: "
        name="emailfather"
        prefix-icon="email"
        validation="email"
        :validation-messages="{
          email: 'El correo electrónico no es válido',
        }"
        placeholder="correo@dominio.com"
        validation-visibility="live"
        v-model="formData.emailfather"
      />
      <FormKit
        name="handlename"
        type="text"
        label="Nombre Completo de la persona encagada: "
        prefix-icon="star"
        validation-visibility="dirty"
        v-model="formData.handlename"
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
        validation-visibility="dirty"
        v-model="formData.phonehandle"
      />
      <FormKit
        type="file"
        label="Foto del Estudiante: "
        prefix-icon="people"
        accept=".jpg, .jpeg, .png"
        multiple="false"
        name="photostudent"
        placeholder="Puedes actualizar la foto del estudiante"
        file-size="2MB"
        @change="uploadImage"
      />
      <div class="my-5">
        <p>Fotografía Actual:</p>
        <img
          v-if="isThereImage"
          :src="isThereImage"
          alt="Fotografía Actual"
          class="max-w-xs w-[280]"
        />
        <img
          v-else
          :src="studentToEdit?.photostudent"
          alt="Fotografía Actual"
          class="max-w-xs w-[280]"
        />
      </div>
      <FormKit
        name="namestudent"
        type="text"
        label="Nombres: "
        prefix-icon="tools"
        v-model="formData.namestudent"
      />
      <FormKit
        name="lastnamestudent"
        type="text"
        label="Apellidos: "
        prefix-icon="tools"
        v-model="formData.lastnamestudent"
      />
      <FormKit
        name="birthdatestudent"
        type="date"
        label="Fecha de Nacimiento: "
        prefix-icon="tools"
        v-model="formData.birthdatestudent"
      />
      <FormKit
        name="address"
        type="text"
        label="Dirección: "
        prefix-icon="tools"
        v-model="formData.address"
      />
      <FormKit
        type="select"
        label="Grado: "
        prefix-icon="tools"
        placeholder="Ej: Kinder"
        name="grade"
        :options="grado"
        v-model="formData.grade"
      />
      <FormKit
        type="select"
        label="Sede:"
        name="location"
        prefix-icon="tools"
        placeholder="Zona 7"
        :options="sede"
        v-model="formData.location"
      />
      <FormKit
        type="textarea"
        label="Observaciones: "
        prefix-icon="tools"
        placeholder="Ej: Observaciones sobre el estudiante"
        name="observations"
        v-model="formData.observations"
      />
      <FormKit
        type="submit"
        label="Guardar Datos del Estudiante"
        prefix-icon="tools"
      />
    </FormKit>
  </div>
</template>
