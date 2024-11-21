<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodWYSIWYG } from "drod-components-wysiwyg";
  import { reactive } from "@vue/reactivity";

  const state = reactive({
    value: `<h1>I’m running Tiptap with Vue.js. 🎉</h1><p style="text-align: center"><strong>I’m running Tiptap with Vue.js.</strong></p><p style="text-align: center"></p><table class="tiptap-table"><tbody><tr><th colspan="1" rowspan="1"><p>12321321</p></th><th colspan="1" rowspan="1"><p>123213</p></th><th colspan="1" rowspan="1" colwidth="303"><p>123213</p></th></tr><tr><th colspan="1" rowspan="1"><p>123213</p></th><td colspan="1" rowspan="1" style="background-color: null"><ul><li><p>asdsad</p></li></ul></td><td colspan="1" rowspan="1" colwidth="303" style="background-color: null"><ol><li><p>1232133</p></li></ol></td></tr><tr><td colspan="1" rowspan="1" style="background-color: null"><p></p></td><td colspan="1" rowspan="1" style="background-color: null"><p></p></td><td colspan="1" rowspan="1" colwidth="303" style="background-color: null"><p></p></td></tr></tbody></table><p></p><div data-youtube-video=""><iframe width="640" height="480" allowfullscreen="false" src="https://www.youtube-nocookie.com/embed/UceKhLHZfqc?controls=0" start="0"></iframe></div>`,
  });

  const onSave = (value) => {
    console.log(value);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodWYSIWYG">
    <template #example>
      <div class="dev-container">
        <DrodWYSIWYG
          v-model="state.value"
          :allowEdit="true"
          @save="onSave"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .drod-rtext {
      --drod-rtext-height: 100%;
    }
  }
</style>
