<template>
  <div class="video-file">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvasRef = ref<HTMLCanvasElement | null>(null);

let video: HTMLVideoElement | null = null;
let rafId = 0;

let mainCtx: CanvasRenderingContext2D | null = null;

// offscreen (для чтения пикселей)
let offCanvas: HTMLCanvasElement | null = null;
let offCtx: CanvasRenderingContext2D | null = null;

const SRC = "/video/header_print_1.webm"; // WebM с альфой

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  mainCtx = canvas.getContext("2d", { alpha: true });
  if (!mainCtx) return;

  offCanvas = document.createElement("canvas");
  offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
  if (!offCtx) return;

  video = document.createElement("video");
  video.src = SRC;
  video.muted = true;
  video.loop = false;
  video.autoplay = true;
  video.playsInline = true;
  video.preload = "auto";

  video.addEventListener("loadedmetadata", () => {
    // ВАЖНО: offscreen = реальный размер видео
    offCanvas!.width = video!.videoWidth;
    offCanvas!.height = video!.videoHeight;

    // ВАЖНО: main canvas = размер контейнера
    resizeMainCanvas();
    window.addEventListener("resize", resizeMainCanvas);

    video!.play();
    draw();
  });
});

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId);
  window.removeEventListener("resize", resizeMainCanvas);
  video?.pause();
  video = null;
  mainCtx = null;
  offCanvas = null;
  offCtx = null;
});

function resizeMainCanvas() {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const parent = canvas.parentElement!;
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;
}

function draw() {
  if (!video || !offCtx || !offCanvas || !mainCtx || !canvasRef.value) return;

  // 1) рисуем текущий кадр в offscreen
  offCtx.clearRect(0, 0, offCanvas.width, offCanvas.height);
  offCtx.drawImage(video, 0, 0);

  const vw = offCanvas.width;
  const vh = offCanvas.height;

  // предполагаем: TOP = color, BOTTOM = alpha matte
  const halfH = Math.floor(vh / 2);

  // 2) читаем пиксели обеих половин
  const color = offCtx.getImageData(0, 0, vw, halfH);
  const matte = offCtx.getImageData(0, halfH, vw, halfH);

  // 3) собираем alpha: берем яркость (например, красный канал matte)
  const c = color.data;
  const m = matte.data;

  for (let i = 0; i < c.length; i += 4) {
    // matte в градациях серого, можно взять m[i] (R)
    c[i + 3] = m[i]; // alpha = R
  }

  // 4) выводим собранный кадр на видимый canvas с cover-скейлом
  // создаём временный canvas под кадр (чтобы не заморачиваться с putImageData + scale)
  const frameCanvas = document.createElement("canvas");
  frameCanvas.width = vw;
  frameCanvas.height = halfH;
  const frameCtx = frameCanvas.getContext("2d")!;
  frameCtx.putImageData(color, 0, 0);

  // cover-отрисовка
  const out = canvasRef.value;
  mainCtx.clearRect(0, 0, out.width, out.height);

  const scale = Math.min(out.width / vw, out.height / halfH);
  const dw = vw * scale;
  const dh = halfH * scale;
  const dx = (out.width - dw) / 2;
  const dy = (out.height - dh) / 2;

  mainCtx.drawImage(frameCanvas, dx, dy, dw, dh);

  rafId = requestAnimationFrame(draw);
}
</script>

<style lang="scss">
.video-file {
  padding: 100px;
  width: 1216px;
  height: 934px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  margin: 0 auto;
}
</style>