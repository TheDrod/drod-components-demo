<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodInputPassword } from "drod-components";
  import { ref } from "vue";

  const passwordValue = ref("");

  const submit = (id) => {
    console.log(`${id} submit`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodInputPassword">
    <template #example>
      <div class="dev-container">
        <DrodInputPassword
          id="password"
          :extraClass="['login__field']"
          :value="passwordValue"
          :placeholder="`Insert Password`"
          :clear="true"
          :showGeneratePassword="true"
          :showPasswordRequirements="true"
          @submit="submit"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: grid;
    justify-content: center;
  }
</style>
