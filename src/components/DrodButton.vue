<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodButton } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodButton">
    <template #example>
      <h4>Props</h4>
      <div class="dev-container">
        <DrodButton>textonly</DrodButton>

        <DrodButton icon="arrow-down"></DrodButton>

        <DrodButton icon="arrow-down">+ text</DrodButton>
        <DrodButton :disabled="true">disabled</DrodButton>

        <DrodButton leftIcon="arrow-down">leftIcon</DrodButton>
        <DrodButton rightIcon="arrow-down">rightIcon</DrodButton>
        <DrodButton
          leftIcon="arrow-down"
          rightIcon="arrow-down"
          >leftIcon + righticon</DrodButton
        >

        <DrodButton :active="true">active</DrodButton>
        <DrodButton
          icon="arrow-down"
          :block="true"
        >
          block
        </DrodButton>
        <DrodButton
          icon="arrow-down"
          :textBlock="true"
        >
          textBlock
        </DrodButton>
        <DrodButton
          leftIcon="arrow-down"
          rightIcon="arrow-down"
          :textBlock="true"
        >
          textBlock + icons
        </DrodButton>
      </div>

      <h4>THEMES</h4>
      <div class="dev-container">
        <DrodButton theme="primary">primary</DrodButton>
        <DrodButton theme="basic">basic</DrodButton>
        <DrodButton theme="minimalist">minimalist</DrodButton>
        <DrodButton theme="negative">negative</DrodButton>
        <DrodButton theme="none">none</DrodButton>
      </div>

      <h4>LOOKS</h4>
      <div class="dev-container">
        <DrodButton look="plain">plain</DrodButton>
        <DrodButton look="outline">outline</DrodButton>
        <DrodButton look="minimalist">minimalist</DrodButton>
      </div>

      <h4>HOVER</h4>
      <div class="dev-container">
        <DrodButton hover="basic">basic</DrodButton>
        <DrodButton hover="left-right">left-right</DrodButton>
        <DrodButton hover="right-left">right-left</DrodButton>
        <DrodButton hover="top-bottom">top-bottom</DrodButton>
        <DrodButton hover="bottom-top">bottom-top</DrodButton>
        <DrodButton hover="diagonal">diagonal</DrodButton>
        <DrodButton hover="glow">glow</DrodButton>
        <DrodButton hover="negative">negative</DrodButton>
        <DrodButton hover="hclose">side-hclose</DrodButton>
      </div>

      <h4>CLICK</h4>
      <div class="dev-container">
        <DrodButton
          theme="primary"
          themeClick="none"
        >
          none
        </DrodButton>
        <DrodButton
          theme="primary"
          themeClick="basic"
        >
          basic
        </DrodButton>
        <DrodButton themeClick="enlarge">enlarge</DrodButton>
        <DrodButton
          theme="primary"
          themeClick="bubbly"
        >
          bubbly
        </DrodButton>
        <DrodButton themeClick="pulse">pulse</DrodButton>
        <DrodButton themeClick="loading">loading</DrodButton>
        <DrodButton themeClick="hold">hold</DrodButton>
      </div>

      <h4>MIX</h4>
      <div class="dev-container">
        <DrodButton
          icon="arrow-down"
          look="minimalist"
          theme="minimalist"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    gap: 1rem;

    .drod-button {
      --drod-button-width: 100%;
    }
  }
</style>
