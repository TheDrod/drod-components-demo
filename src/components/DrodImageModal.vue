<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodImageModal } from "drod-components";
  import { ref } from "vue";

  const open = ref(false);
  const image = "https://picsum.photos/seed/drod/1200/800";
</script>

<template>
  <ComponentDocumentation :component="DrodImageModal">
    <template #example>
      <div class="dev-container">
        <img
          class="thumb"
          :src="image"
          alt="Open preview"
          @click="open = true"
        />
        <p class="hint">Click the thumbnail to open the modal.</p>

        <DrodImageModal
          v-model="open"
          :image="image"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    .thumb {
      width: 220px;
      height: 150px;
      object-fit: cover;
      border-radius: 12px;
      cursor: zoom-in;
    }

    .hint {
      margin: 0;
      font-size: 0.85rem;
      opacity: 0.7;
    }
  }
</style>
