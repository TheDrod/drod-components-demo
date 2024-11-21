<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodInput } from "drod-components";
  import { ref } from "vue";

  const modelValue = ref("");
  const onFocus = () => {
    console.log(`onFocus`);
  };
  const onBlur = () => {
    console.log(`onBlur`);
  };
  const onSubmit = () => {
    console.log(`onSubmit`, modelValue.value);
  };
  const onChange = (value) => {
    console.log(`onChange`, value);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodInput">
    <template #example>
      <div class="dev-container">
        <DrodInput
          v-model="modelValue"
          @focus="onFocus"
          @blur="onBlur"
          @submit="onSubmit"
          @change="onChange"
          v-focus
        />
        <DrodInput
          placeholder="Number only"
          inputMode="numeric"
          inputType="number"
          @focus="onFocus"
          @blur="onBlur"
          @submit="onSubmit"
          @change="onChange"
        />
        <DrodInput
          icon="add"
          placeholder="Password"
          :censor="true"
          @focus="onFocus"
          @blur="onBlur"
          @submit="onSubmit"
          @change="onChange"
        />
        <DrodInput
          icon="add"
          :placeholder="`Disabled input`"
          :disabled="true"
          :block="true"
          @focus="onFocus"
          @blur="onBlur"
          @submit="onSubmit"
          @change="onChange"
        />
        <DrodInput
          icon="search"
          :placeholder="`Autocomplete Input`"
          :block="true"
          :autocomplete="['Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Peach', 'Grape', 'Tangerine', 'Pineapple']"
          @focus="onFocus"
          @blur="onBlur"
          @submit="onSubmit"
          @change="onChange"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
</style>
