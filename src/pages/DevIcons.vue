<script>
  import DrodIcon from "../components/DrodIcon/DrodIcon.vue";
  import { iconsCollection } from "../components/DrodIcon/utils/iconsCollection.js";

  export default {
    name: "DevIcons",

    components: {
      DrodIcon,
    },

    setup() {
      const icons = () => {
        return Object.keys(iconsCollection).map((icon) => ({
          name: icon,
        }));
      };

      return {
        icons,
      };
    },
  };
</script>

<template>
  <div class="dev-icons__list">
    <div
      class="dev-icons__list__item"
      v-for="icon in icons"
      :key="icon.name"
    >
      <div class="dev-icons__list__item__name">{{ icon.name }}</div>
      <div class="dev-icons__list__item__icon">
        <DrodIcon :name="icon.name" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "~@/styles/variables.scss";

  .dev-icons__list {
    display: grid;
    flex-wrap: wrap;

    > .dev-icons__list__item {
      text-align: center;
      width: 150px;
      box-shadow: 0 0 1px 0px;

      > .dev-icons__list__item__name {
        margin: 1rem 0;
      }

      > .dev-icons__list__item__icon {
        font-size: 20px;
        height: 20px;
        margin: auto;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
