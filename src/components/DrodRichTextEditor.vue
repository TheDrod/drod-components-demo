<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodWYSIWYGEditor } from "drod-components-wysiwyg";
  import { reactive } from "@vue/reactivity";

  const state = reactive({
    value: `<h1>Hello World</h1>`,
    extensions: ["heading"],
    value2: ``,
    extensions2: ["heading", "list", "text", "color", "align", "wrapper", "task", "file", "table", "youtube"],
  });

  const onSave = (value) => {
    console.log(value);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodWYSIWYGEditor">
    <template #example>
      <div class="dev-container">
        <DrodWYSIWYGEditor
          v-model="state.value"
          :extensions="state.extensions"
          :showActions="true"
          @save="onSave"
        />
        <DrodWYSIWYGEditor
          v-model="state.value2"
          :extensions="state.extensions2"
          :showActions="true"
          @save="onSave"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .drod-rtext {
      --drod-rtext-height: 100%;
    }
  }
</style>
