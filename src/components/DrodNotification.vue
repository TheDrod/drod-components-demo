<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodButton, DrodNotification, DrodNotificationItem, createNotification } from "drod-components";

  const add = () => {
    createNotification({
      type: "info",
      title: "What is Lorem Ipsum?",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      timeout: 60 * 1000,
    });

    createNotification({
      title: "Fixed?",
      fixed: true,
    });
  };
</script>

<template>
  <ComponentDocumentation :component="DrodNotification">
    <template #example>
      <div class="dev-container">
        <DrodButton @click="add">Add Notification</DrodButton>

        <DrodNotification :timeout="120_000" />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
  }
  .app-reload-pwa {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
