<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodTerminal } from "drod-components";

  const commands = {
    echo: (...args) => args.join(" "),
    whoami: () => "drod",
    date: () => new Date().toString(),
    hello: (name = "stranger") => `Hi, ${name}!`,
  };
</script>

<template>
  <ComponentDocumentation :component="DrodTerminal">
    <template #example>
      <div class="dev-container">
        <DrodTerminal
          prompt="❯"
          theme="dark"
          :commands="commands"
        />
        <p class="hint">Try <code>help</code>, <code>echo hi</code>, <code>hello drod</code>, or <code>clear</code>.</p>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    width: min(640px, 100%);

    .hint {
      margin-top: 0.75rem;
      font-size: 0.85rem;
      opacity: 0.7;

      code {
        padding: 0.1rem 0.35rem;
        border-radius: 4px;
        background: rgba(127, 127, 127, 0.2);
      }
    }
  }
</style>
