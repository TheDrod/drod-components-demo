<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMultiselect, DrodButton, DrodModalInfo } from "drod-components";
  import { reactive, ref } from "vue";

  const modalElement = ref(null);

  const state = reactive({
    msValue1: [4],
    msValue2: [],
    msValue3: [],
    msValue4: [],
    msValue5: [],
    options: [
      {
        name: "option 1",
        value: 1,
      },
      {
        name: "option 2",
        value: 2,
      },
      {
        name: "option 3",
        value: 3,
      },
    ],
    options2: ["option 1", "option 2", "option 3"],
  });

  const onChange = () => {
    console.log(state.msValue);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodMultiselect">
    <template #example>
      <div class="dev-container">
        <DrodMultiselect
          v-model="state.msValue1"
          mode="tags"
          placeholder="Select tags"
          :options="state.options"
          @change="onChange"
        />

        <DrodMultiselect
          v-model="state.msValue2"
          mode="tags"
          placeholder="Select tags"
          :options="state.options"
          :createTag="true"
          @change="onChange"
        />

        <DrodMultiselect
          v-model="state.msValue3"
          mode="single"
          placeholder="Select single"
          :options="state.options2"
          :searchable="false"
          :multiple="false"
          @change="onChange"
        />

        <DrodMultiselect
          v-model="state.msValue4"
          mode="multiple"
          placeholder="Select multiple"
          :options="state.options2"
          :searchable="false"
          :multiple="false"
          @change="onChange"
        />

        <h2>Modal Test</h2>
        <DrodModalInfo ref="modalElement">
          <template #default>
            <DrodMultiselect
              v-model="state.msValue5"
              mode="tags"
              placeholder="Select tags"
              :options="state.options"
              :searchable="true"
              :taggable="true"
            />
          </template>
        </DrodModalInfo>
        <DrodButton @click="modalElement.openModal()">Open Modal</DrodButton>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
