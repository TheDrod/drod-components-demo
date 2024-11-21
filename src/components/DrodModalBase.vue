<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodModalBase, DrodButton } from "drod-components";
  import { ref } from "vue";

  const modal1 = ref(null);
  const modal2 = ref(null);
</script>

<template>
  <ComponentDocumentation :component="DrodModalBase">
    <template #example>
      <div class="dev-container">
        <DrodModalBase ref="modal1">
          <template #header>
            <h1>Title</h1>
          </template>

          <template #body>
            <span>Hello I'm Modal!</span>
          </template>

          <template #footer>
            <DrodButton @click="modal1.closeModal()">Close</DrodButton>
          </template>
        </DrodModalBase>
        <DrodModalBase ref="modal2">
          <template #header>
            <h1>Title</h1>
          </template>

          <template #body>
            <span>Hello I'm Other Modal!</span>
          </template>

          <template #footer>
            <DrodButton @click="modal2.closeModal()">Close</DrodButton>
          </template>
        </DrodModalBase>

        <DrodButton @click="modal1.openModal()">Open Modal</DrodButton>
        <DrodButton @click="modal2.openModal()">Open Other Modal</DrodButton>
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
