<!-- src/components/widgets/hero-section-video/HeroSectionVideo.vue -->
<template>
  <div class="hero-section-video">
    <div class="js-video-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(async () => {
  await import('@/libs/transparent-video.js'); // создаёт window.instance

  const loopStart = 4;   // секунда, с которой циклить
  const loopEnd   = 5;

  window.instance?.setSources('/video/header_print_1.webm', '/video/header_print_4.mp4', (video) => {
    let loopStarted = false;

    const startLoop = () => {
      if (loopStarted) return;
      loopStarted = true;
      const onTimeUpdate = () => {
        if (video.currentTime >= loopEnd) video.currentTime = loopStart;
      };
      video.currentTime = loopStart;
      video.addEventListener('timeupdate', onTimeUpdate);
      video.play();
    };

    video.addEventListener('ended', startLoop); // после первого полного просмотра
    video.play(); // запустить первый прогон
  });
});

</script>


<style lang="scss">
.hero-section-video {
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
  z-index: 3;
}

</style>