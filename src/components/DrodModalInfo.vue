<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodButton, DrodModalInfo } from "drod-components";
  import { ref } from "vue";

  const infoModal = ref(null);

  const onClose = () => {
    console.log(`DrodModalInfoView ~ onClose`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodModalInfo">
    <template #example>
      <div class="dev-container">
        <DrodModalInfo
          ref="infoModal"
          title="Lorem"
          @close="onClose"
        >
          <template #default>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquam quo beatae dolores tempora facilis
            perspiciatis magnam iste, consequuntur cum eum earum totam maiores ea velit optio ducimus debitis doloremque
            eos consectetur aliquid. Dolor tempora adipisci maxime ut expedita totam velit. Saepe libero dignissimos
            placeat tempora molestias harum repudiandae mollitia dolores perferendis, tempore sed nemo odit officiis
            quos eos dolore nulla doloremque maiores. Molestias, odit! Quasi et velit necessitatibus quod fugiat
            repellendus earum ex repudiandae. Aperiam cumque mollitia, quibusdam eius quo doloribus illo incidunt
            consequatur commodi temporibus sunt delectus eaque, voluptate laudantium facilis, earum dolore. Quae
            laboriosam assumenda exercitationem? Doloribus.
          </template>
        </DrodModalInfo>

        <DrodButton @click="infoModal.openModal()">Open Info Modal</DrodButton>
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
