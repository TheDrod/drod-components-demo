<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodDropFile } from "drod-components";
  import { ref } from "vue";

  const files = ref([]);

  const onChange = (selected) => {
    console.log("files changed", selected);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodDropFile">
    <template #example>
      <div class="dev-container">
        <DrodDropFile
          v-model="files"
          @change="onChange"
        />
        <p class="hint">{{ files.length }} file(s) selected</p>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: min(520px, 100%);

    .hint {
      margin: 0;
      font-size: 0.85rem;
      opacity: 0.7;
    }
  }
</style>
