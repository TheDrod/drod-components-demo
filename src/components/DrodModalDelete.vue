<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodButton, DrodModalDelete } from "drod-components";
  import { ref } from "vue";

  const deleteModal = ref(null);

  const onSubmit = (data) => {
    console.log(`DrodModalDelete ~ onSubmit`);
  };

  const onClose = (data) => {
    console.log(`DrodModalDelete ~ onClose`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodModalDelete">
    <template #example>
      <div class="dev-container">
        <DrodModalDelete
          ref="deleteModal"
          title="Lorem"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquam quo beatae"
          @submit="onSubmit"
          @close="onClose"
        />
        <DrodButton @click="deleteModal.openModal()">Open Info Modal</DrodButton>
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
