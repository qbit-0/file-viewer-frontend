<template>
  <iframe
    class="fill-screen"
    width="100%"
    height="100%"
    frameborder="0"
    :src="`${fullPath}`"
  />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const fileUrl = `${import.meta.env.VITE_API_URL}/api/file?file_path=${
  route.query.path
}`;

const fullPath = computed(() => {
  return `lib/pdfjs-3.3.122-dist/web/viewer.html?file=${fileUrl}`;
});
</script>

<style>
.fill-screen {
  overflow: hidden;
}
</style>
