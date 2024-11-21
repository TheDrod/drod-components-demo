<script>
  import { marked } from "marked";

  export default {
    name: "ComponentDocumentation",

    props: {
      component: {
        type: Object,
        required: true,
        validator: (value) => {
          if (!value.name) {
            console.warn("Missing name prop from Component");
            return false;
          }

          return true;
        },
      },
    },

    data() {
      return { merged: this.process(this.component, this.documentation) };
    },

    getDoc(component, documentation) {
      return this.methods.process(component, documentation);
    },

    methods: {
      process(component, documentation) {
        let m = this.merge(component, documentation);
        if (m.token) m.token = this.sanitize(m.token);
        if (m.description) m.description = marked(m.description);
        if (m.props) m.props = this.processProps(m.props);
        return m;
      },

      sanitize(text) {
        text = text.trim();
        const match = text.match(/^[ \t]*(?=\S)/gm);
        if (!match) return text;
        const indent = Math.min.apply(
          Math,
          match.map((x) => x.length),
        );
        const re = new RegExp(`^[ \\t]{${indent}}`, "gm");
        return indent > 0 ? text.replace(re, "") : text;
      },

      processProps(props) {
        let keys = Array.isArray(props) ? props : Object.keys(props);
        return keys.reduce((map, k) => {
          let v = new Proxy(props[k] || {}, this.basicArrayProxy);
          map[k] = {
            type: this.getType(v.type),
            required: v.required || false,
            default: this.getDefault(v.default),
            note: v.note || "",
          };
          return map;
        }, {});
      },

      basicArrayProxy(target, name) {
        return name in target ? target[name] : undefined;
      },

      getDefault(d) {
        if (typeof d !== "undefined") {
          if (typeof d === "function") return JSON.stringify(d());
          return JSON.stringify(d);
        }
        return "undefined";
      },

      isTypeArray(t) {
        return typeof t() === "object" && Array.isArray(t());
      },

      getType(t) {
        if (typeof t === "undefined") return "any";
        if (Array.isArray(t)) {
          return t.map((type) => (this.isTypeArray(type) ? "array" : typeof type())).join("|");
        }
        let type = typeof t();
        if (this.isTypeArray(t)) return "array";
        return type;
      },

      merge(a, b) {
        return Object.assign({}, a, b);
      },
    },
  };
</script>

<template>
  <article
    class="drod-doc-container"
    v-if="merged && merged.name"
  >
    <h2 class="title">{{ merged.name }}</h2>

    <h3
      class="subtitle"
      v-if="merged.introduction"
    >
      {{ merged.introduction }}
    </h3>

    <div
      class="description"
      v-html="merged.description"
      v-if="merged.description"
    />

    <div
      class="token"
      v-if="merged.token"
    >
      <pre><code data-lang="vue">{{ merged.token }}</code></pre>
    </div>

    <section class="example-container">
      <h2>Example</h2>
      <slot name="example" />
    </section>

    <section
      class="props-container"
      v-if="merged.props"
    >
      <h2>Props</h2>
      <div
        class="prop"
        v-for="(propInfo, propName) in merged.props"
        :key="propName"
      >
        <h4 class="name required">{{ propName }}</h4>
        <div class="content">
          <div class="labels">
            <div class="type">Type</div>
            <div class="default">Default</div>
            <div class="required">Required</div>
            <div class="description">Description</div>
          </div>
          <div class="proprow">
            <div class="type">{{ propInfo.type }}</div>
            <div class="default">{{ propInfo.default }}</div>
            <div class="required">{{ propInfo.required }}</div>
            <div class="description">{{ propInfo.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="emits-container"
      v-if="merged.emit"
    >
      <h2>Emits</h2>
      <div
        class="emit"
        v-for="name in merged.emit"
        :key="name"
      >
        <h4 class="name required">{{ name }}</h4>
      </div>
    </section>
  </article>
</template>

<style lang="scss">
  .drod-doc-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--font-color-500, #000);

    > .content {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.4em;
    }
  }
</style>
