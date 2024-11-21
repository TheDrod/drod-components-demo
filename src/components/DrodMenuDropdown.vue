<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMenuDropdown, DrodDropdownItem } from "drod-components";

  const onClick = (id) => {
    console.log(`${id} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodMenuDropdown">
    <template #example>
      <div class="dev-container">
        <DrodMenuDropdown>
          <DrodDropdownItem
            leftIcon="add"
            @click="onClick('1')"
            >Option 1</DrodDropdownItem
          >
          <DrodDropdownItem
            rightIcon="add"
            @click="onClick('2')"
            >Option 2</DrodDropdownItem
          >
          <DrodDropdownItem @click="onClick('3')">Option 3</DrodDropdownItem>
        </DrodMenuDropdown>
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
