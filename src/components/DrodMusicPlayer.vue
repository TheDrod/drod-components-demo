<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMusicPlayer } from "drod-components";

  const onClick = (id) => {
    console.log(`${id} emited`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodMusicPlayer">
    <template #example>
      <div class="dev-container">
        <DrodMusicPlayer
          :playlist="[
            {
              title: 'Dreamy Night',
              artist: 'Us the Duo',
              cover:
                'https://raw.githubusercontent.com/anniedotexe/music-player/main/img/dreamy-nights-album-cover.jpg',
              audio: 'https://github.com/anniedotexe/music-player/blob/main/audio/dreamynight.mp3?raw=true',
            },
            {
              title: 'Let\'s make this a song',
              artist: 'Balkan Jingles',
              cover:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mobipicker.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fbest-free-music-streaming-websites.jpg',
              audio: 'https://www.freemusicarchive.org/track/lets-make-this-a-song/download',
            },
            {
              title: 'Future Is Now',
              artist: 'joystock',
              cover: 'https://www.joystock.org/track-images/future-is-now.jpg',
              audio: 'https://drive.google.com/uc?authuser=0&id=19H7-FHwm5sV8T08XSByFmzrn-RquQ4ur&export=download',
            },
          ]"
          @back="onClick('back')"
          @favorite="onClick('favorite')"
          @repeat="onClick('repeat')"
          @shuffle="onClick('shuffle')"
          @play="onClick('play')"
          @pause="onClick('pause')"
          @previous="onClick('previous')"
          @next="onClick('next')"
        />
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
