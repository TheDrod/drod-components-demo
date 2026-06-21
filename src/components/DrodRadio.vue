<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodRadio, DrodRadioGroup } from "drod-components";
  import { ref } from "vue";

  const plan = ref("pro");
  const inline = ref("b");
</script>

<template>
  <ComponentDocumentation :component="DrodRadioGroup">
    <template #example>
      <div class="dev-container">
        <DrodRadioGroup v-model="plan">
          <DrodRadio value="free" label="Free" />
          <DrodRadio value="pro" label="Pro" />
          <DrodRadio value="team" label="Team" />
          <DrodRadio value="enterprise" label="Enterprise" disabled />
        </DrodRadioGroup>
        <p class="hint">Selected: {{ plan }}</p>

        <DrodRadioGroup v-model="inline" :inline="true">
          <DrodRadio value="a" label="Option A" />
          <DrodRadio value="b" label="Option B" />
          <DrodRadio value="c" label="Option C" />
        </DrodRadioGroup>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .hint {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.7;
  }
</style>
