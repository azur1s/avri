<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>

  <h1 class="accentText">{{ msg }}</h1>

  <p class="text">There is nothing yet sadly</p>

  <p class="copyright">© Natapat Samutpong 2077</p>

</template>

<style scoped>

.accentText {
  color: #48bfe3;
}

.text {
  color: #f8f9fa;
}

.copyright {
  color: #6c757d;
}

</style>
