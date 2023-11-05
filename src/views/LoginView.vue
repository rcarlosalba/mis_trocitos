<script setup>
import { FormKit } from '@formkit/vue';
import { useAuthStore } from '@/stores/auth';
import Alerta from '@/components/Alerta.vue';

const auth = useAuthStore();

const handleSubmit = (data) => {
  auth.login(data.email, data.password);
};
</script>

<template>
  <main class="mt-20 container mx-auto">
    <h1 class="font-bold text-center my-4 text-2xl md:text-3xl">
      Ingresa con tus credenciales de Acceso:
    </h1>
    <div class="w-[80%] grid gap-4 mx-auto my-8 leading-7">
      <Alerta
        v-if="auth.hasError"
        v-on="auth.clearError()"
      >
        {{ auth.errorMsg }}
      </Alerta>
      <FormKit
        type="form"
        :actions="false"
        incomplete-message="Parece que el formulario no tiene los datos esperados, revisa todos los campos"
        @submit="handleSubmit"
      >
        <FormKit
          name="email"
          type="email"
          label="Correo Electrónico: "
          prefix-icon="email"
          validation="required|email"
          :validation-messages="{
            required: 'El correo electrónico es requerido',
            email: 'El correo electrónico no es válido',
          }"
        />
        <FormKit
          name="password"
          type="password"
          label="Contraseña: "
          prefix-icon="password"
          validation="required"
          :validation-messages="{
            required: 'La contraseña es requerida',
          }"
        />
        <FormKit type="submit"> Iniciar Sesión </FormKit>
      </FormKit>
    </div>
  </main>
</template>
