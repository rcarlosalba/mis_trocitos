<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Gallery from '../components/Gallery.vue';
const route = useRoute();

const isHome = computed(() => route.name === 'inicio');
</script>

<template>
  <div
    v-if="isHome"
    class="mt-3"
  >
    <Gallery />
  </div>
  <main class="md:mt-5 container mx-auto">
    <h1 class="font-bold text-center my-4 text-2xl md:text-3xl">
      ¡Bienvenidos a nuestro centro de cuidado infantil y preescolar!
    </h1>
    <div class="w-[80%] grid gap-4 mx-auto my-8 leading-7">
      <p>
        En nuestro espacio dedicado a la educación preescolar y la estimulación
        temprana, nos enorgullece cuidar y nutrir a los pequeños desde los 2
        meses hasta los 5 años de edad. Somos mucho más que una simple
        guardería; somos un refugio seguro y estimulante donde cada niño
        florece.
      </p>
      <p>
        Sabemos que mientras tú trabajas, tus hijos son tu mayor preocupación, y
        es por eso que nosotros asumimos esa responsabilidad con pasión y
        dedicación. Nuestro compromiso es proporcionar un ambiente enriquecedor
        donde los pequeños puedan crecer, aprender y explorar en un entorno
        lleno de amor y cuidado.
      </p>
      <p>
        En nuestro centro, la educación integral es la base de todo lo que
        hacemos. A través de programas diseñados específicamente para cada grupo
        de edad, fomentamos el desarrollo cognitivo, emocional, social y físico
        de los niños. Nuestro enfoque en la estimulación temprana les brinda las
        herramientas necesarias para un futuro brillante.
      </p>
      <p>
        Te invitamos a explorar nuestra página web y descubrir todo lo que
        ofrecemos para tus pequeños. Encontrarás información detallada sobre
        nuestros programas, instalaciones de vanguardia y nuestro equipo de
        profesionales apasionados. Tu confianza en nosotros es el motor que
        impulsa nuestro trabajo, y estamos listos para cuidar y educar a tus
        hijos con el cariño y la excelencia que merecen.
      </p>
      <p>
        En el Centro de Cuidado Infantil y Preescolar, mientras tú trabajas,
        nosotros nos encargamos de los más pequeños de la casa. ¡Únete a nuestra
        comunidad y permite que tus hijos comiencen su viaje hacia un futuro
        brillante en un entorno que se preocupa por su crecimiento y bienestar
        en cada paso del camino.
      </p>
    </div>
  </main>
</template>
