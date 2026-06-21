<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodStepper, DrodButton } from "drod-components";
  import { ref } from "vue";

  const step = ref(1);
  const steps = [
    { title: "Account", subtitle: "Your details" },
    { title: "Address", subtitle: "Shipping" },
    { title: "Payment", subtitle: "Billing" },
    { title: "Review" },
  ];

  const next = () => (step.value = Math.min(step.value + 1, steps.length - 1));
  const prev = () => (step.value = Math.max(step.value - 1, 0));
</script>

<template>
  <ComponentDocumentation :component="DrodStepper">
    <template #example>
      <div class="dev-container">
        <DrodStepper v-model="step" :steps="steps" clickable />
        <div class="controls">
          <DrodButton @click="prev">Back</DrodButton>
          <DrodButton theme="primary" @click="next">Next</DrodButton>
        </div>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .controls {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }
</style>
