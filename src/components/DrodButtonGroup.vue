<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodButtonGroup } from "drod-components";
  import { ref } from "vue";

  const single = ref("1");
  const multi = ref([0, 1]);

  const onClick = (id) => {
    console.log(`${JSON.stringify(id)} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodButtonGroup">
    <template #example>
      <div class="dev-container">
        <DrodButtonGroup
          v-model="single"
          mode="select"
          :items="[
            { id: '1', icon: 'dark-theme' },
            { id: '2', icon: 'light-theme' }
          ]"
          @change="onClick"
        ></DrodButtonGroup>
        <DrodButtonGroup
          :multiple="true"
          v-model="multi"
          :items="[
            { id: 0, title: '0' },
            { id: 2, title: '2' },
            { id: 1, title: '1' }
          ]"
          @change="onClick"
        ></DrodButtonGroup>
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
