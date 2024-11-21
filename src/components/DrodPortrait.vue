<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodPortrait } from "drod-components";

  const onClick = (id) => {
    console.log(`${id} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodPortrait">
    <template #example>
      <div class="dev-container">
        <DrodPortrait
          id="portrait1"
          title="Sol"
          subtitle="Badguy"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fightersgeneration.com%2Fnz4%2Fchar%2Fsol-badguy-ggxrd-production-art-face.jpg&f=1&nofb=1"
          @click="onClick"
        />
        <DrodPortrait
          id="portrait1"
          title="Sol"
          subtitle="Badguy"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fightersgeneration.com%2Fnz4%2Fchar%2Fsol-badguy-ggxrd-production-art-face.jpg&f=1&nofb=1"
          :blur="true"
          @click="onClick"
        />
        <DrodPortrait
          id="portrait1"
          title="Liu Kang"
          subtitle="Earth's Champion"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F88e30824-3c9a-4957-b6ab-394cb783aa20%2Fdd3vtsi-58c96a54-3b66-4b4b-abb3-7954527c4ed8.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4ZTMwODI0LTNjOWEtNDk1Ny1iNmFiLTM5NGNiNzgzYWEyMFwvZGQzdnRzaS01OGM5NmE1NC0zYjY2LTRiNGItYWJiMy03OTU0NTI3YzRlZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1Zda85Pv7Zw028joaMflt0dyZXs8u7YHSsUyvlvmElo&f=1&nofb=1"
          @click="onClick"
          :overlay="true"
          :overflow="true"
        />
        <DrodPortrait
          id="portrait1"
          title="Add Character"
          icon="add"
          :actions="[{ id: 'link', icon: 'link', name: 'Link' }]"
          @click="onClick"
          @action="onClick"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 11rem);
    grid-template-rows: 11rem;
  }
</style>
