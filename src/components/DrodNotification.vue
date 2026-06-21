<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodButton, DrodNotification, DrodNotificationItem, createNotification } from "drod-components";

  const add = () => {
    createNotification({
      type: "info",
      title: "What is Lorem Ipsum?",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      duration: 6000,
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
