<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMarkdownViewer } from "drod-components";

  const value = "# MarkdownViewer<br>***Italic Bold***";
</script>

<template>
  <ComponentDocumentation :component="DrodMarkdownViewer">
    <template #example>
      <div class="dev-container">
        <DrodMarkdownViewer :value="value" />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
  }
</style>
