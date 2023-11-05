<script setup>
import { ref, watchEffect } from 'vue';

const slides = ref([
  { src: '../img/ps1.jpg', alt: 'Imagen de un niño jugando' },
  { src: '../img/ps2.jpg', alt: 'Imagen de un niño jugando' },
  { src: '../img/ps3.jpg', alt: 'Imagen de un niño jugando' },
]);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const showSlides = () => {
  setInterval(nextSlide, 3000);
};

watchEffect(() => {
  showSlides();
});
</script>
<template>
  <div class="slideshow-container h-32 md:h-44 lg:h-80">
    <transition
      enter-active-class="transition-opacity duration-1000"
      leave-active-class="transition-opacity duration-1000"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        :key="currentIndex"
        class="slide"
      >
        <img
          :src="slides[currentIndex].src"
          :alt="slides[currentIndex].alt"
        />
      </div>
    </transition>
  </div>
</template>
<style scoped>
.slideshow-container {
  position: relative;
  max-width: 100%;
  overflow: hidden;
}

.slide {
  position: absolute;
  width: 100%;
}

img {
  width: 100%;
  object-position: center;
  object-fit: cover;
}
</style>
