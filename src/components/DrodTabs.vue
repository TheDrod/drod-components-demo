<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodTabs, DrodTab } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodTabs">
    <template #example>
      <div class="dev-container">
        <DrodTabs :active="2">
          <DrodTab
            :id="1"
            title="果物"
            icon="avatar"
          >
            <ul>
              <li>りんご</li>
              <li>オレンジ</li>
              <li>バナナ</li>
            </ul>
          </DrodTab>
          <DrodTab
            :id="2"
            title="野菜"
            icon="dark-theme"
          >
            <ul>
              <li>にんじん</li>
              <li>トマト</li>
            </ul>
          </DrodTab>
          <DrodTab
            :id="0"
            title="甘いもの"
            icon="info"
          >
            <ul>
              <li>甘いもの</li>
            </ul>
          </DrodTab>
        </DrodTabs>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;

    .drod-tabs {
      width: 100%;
    }
  }
</style>
