<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodAlert } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodAlert">
    <template #example>
      <div class="dev-container">
        <DrodAlert type="info" title="Heads up">
          A new version of the app is available.
        </DrodAlert>
        <DrodAlert type="success" title="Saved" closable>
          Your changes were saved successfully.
        </DrodAlert>
        <DrodAlert type="warning" closable>
          Your subscription expires in 3 days.
        </DrodAlert>
        <DrodAlert type="error" title="Error" outlined>
          Something went wrong while uploading.
        </DrodAlert>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 460px;
    margin: 0 auto;
  }
</style>
