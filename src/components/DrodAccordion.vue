<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodAccordion } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodAccordion">
    <template #example>
      <div class="dev-container">
        <DrodAccordion title="Title 1"> DrodAccordion 1 Content </DrodAccordion>
        <DrodAccordion
          title="Title 2"
          :open="false"
        >
          DrodAccordion 2 Content <br /><br /><br />
          DrodAccordion 2 Content <br /><br /><br />
          DrodAccordion 2 Content <br /><br /><br />
          DrodAccordion 2 Content <br /><br /><br />
          DrodAccordion 2 Content <br /><br /><br />
        </DrodAccordion>
      </div>
    </template>
  </ComponentDocumentation>
</template>
