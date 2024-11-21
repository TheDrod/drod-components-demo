<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodCarouselSlider, generateRandomNumber } from "drod-components";
  import { ref } from "vue";

  let images = ref([]);

  images.value.push({
    name: `mov_bbb`,
    src: `/assets/mov_bbb.mp4`,
  });

  for (let i = 0; i < 20; i++) {
    images.value.push({
      name: `image #${i}`,
      src: `https://picsum.photos/id/${generateRandomNumber(0, 1084)}/536/354`,
    });
  }

  const onClick = (item) => {
    console.log(`onClick ~ item`, item);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodCarouselSlider">
    <template #example>
      <div class="dev-container">
        <DrodCarouselSlider
          title="DrodCarousel"
          :items="images"
          @select="onClick"
        />
        <br />
        <br />
        <br />
        <DrodCarouselSlider
          title="DrodCarousel"
          :items="images"
          :showGallery="false"
          :wrapAround="false"
        />
        <br />
        <br />
        <br />
        <DrodCarouselSlider
          title="DrodCarousel"
          :items="images"
          :showGallery="false"
          :wrapAround="false"
          :singleImageModal="false"
          :itemsPerPageModal="1"
          :showNavigationModal="true"
          :showPaginationModal="true"
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
  }
</style>
