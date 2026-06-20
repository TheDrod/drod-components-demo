<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodCombobox } from "drod-components";
  import { ref } from "vue";

  const items = [
    { id: 1, title: "Armbar" },
    { id: 2, title: "Triangle" },
    { id: 3, title: "Omoplata" },
    { id: 4, title: "Kimura" },
    { id: 5, title: "Guillotine" },
    { id: 6, title: "Rear Naked Choke" },
  ];

  const single = ref([]);
  const multiple = ref([]);
</script>

<template>
  <ComponentDocumentation :component="DrodCombobox">
    <template #example>
      <div class="dev-container">
        <label>
          Single
          <DrodCombobox
            v-model="single"
            :items="items"
            placeholder="Pick a technique"
            clearable
          />
        </label>

        <label>
          Multiple (chips)
          <DrodCombobox
            v-model="multiple"
            :items="items"
            placeholder="Pick techniques"
            multiple
            chips
            closableChips
            clearable
          />
        </label>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: min(420px, 100%);

    label {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      font-size: 0.85rem;
    }
  }
</style>
