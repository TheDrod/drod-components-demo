<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodBackgroundImage, DrodTextGradient } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodBackgroundImage">
    <template #example>
      <div class="dev-container">
        <DrodBackgroundImage
          class="background-container"
          name="image"
          src="https://cdn1.dotesports.com/wp-content/uploads/2020/04/09083856/3645338-guilty-gear-2020.png"
          effect="opacity"
        >
          <DrodTextGradient
            from="#000"
            to="#0f0"
            ><h1>Opacity Effect</h1></DrodTextGradient
          >
        </DrodBackgroundImage>

        <DrodBackgroundImage
          class="background-container"
          name="image"
          src="https://cdn1.dotesports.com/wp-content/uploads/2020/04/09083856/3645338-guilty-gear-2020.png"
          effect="blur"
          :effectValue="3"
        >
          <DrodTextGradient
            from="#000"
            to="#0f0"
            ><h1>Blur Effect</h1></DrodTextGradient
          >
        </DrodBackgroundImage>

        <DrodBackgroundImage
          class="background-container"
          name="image"
          src="https://cdn1.dotesports.com/wp-content/uploads/2020/04/09083856/3645338-guilty-gear-2020.png"
          effect="mix-blend"
        >
          <DrodTextGradient
            from="#000"
            to="#0f0"
            ><h1>Blur Effect</h1></DrodTextGradient
          >
        </DrodBackgroundImage>
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

    .background-container {
      height: 150px;
      .title {
        font-size: 3rem;
      }
    }
  }
</style>
