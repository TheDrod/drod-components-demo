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
      <div class="example-surface">
        <slot name="example" />
      </div>
    </section>

    <section
      class="props-container"
      v-if="merged.props"
    >
      <h2>Props</h2>
      <div class="props-table-wrapper">
        <table class="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(propInfo, propName) in merged.props"
              :key="propName"
            >
              <td class="prop-name">{{ propName }}</td>
              <td class="prop-type">{{ propInfo.type }}</td>
              <td class="prop-default">{{ propInfo.default }}</td>
              <td class="prop-required">
                <span
                  v-if="propInfo.required"
                  class="badge badge--required"
                >required</span>
                <span
                  v-else
                  class="badge badge--optional"
                >optional</span>
              </td>
              <td class="prop-note">{{ propInfo.note }}</td>
            </tr>
          </tbody>
        </table>
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
    max-width: 920px;
    margin: 0 auto;
    padding: 1rem;
    color: var(--font-color-500, #000);

    > .title {
      margin: 0;
      font-size: 2.25rem;
    }

    > .content {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.4em;
    }

    // Section labels (Example / Props / Emits) read as smaller headings under
    // the component title rather than competing with it at the global h2 size.
    .example-container > h2,
    .props-container > h2,
    .emits-container > h2 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      opacity: 0.65;
      padding-bottom: 0.4rem;
      border-bottom: 1px solid var(--border-color-500, rgba(127, 127, 127, 0.25));
    }

    .example-container {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .props-table-wrapper {
      overflow-x: auto;
    }

    .props-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;

      th {
        text-align: left;
        padding: 0.5rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        opacity: 0.6;
        border-bottom: 1px solid var(--border-color-500, rgba(127, 127, 127, 0.25));
        white-space: nowrap;
      }

      td {
        padding: 0.55rem 0.75rem;
        border-bottom: 1px solid var(--border-color-500, rgba(127, 127, 127, 0.1));
        vertical-align: middle;
      }

      tbody tr:last-child td {
        border-bottom: none;
      }

      tbody tr:hover td {
        background: hsl(0 0% 50% / 0.05);
      }

      .prop-name,
      .prop-type,
      .prop-default {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
        font-size: 0.85rem;
      }

      .prop-name {
        font-weight: 600;
        white-space: nowrap;
      }

      .prop-type {
        color: var(--primary-color-500);
        white-space: nowrap;
      }

      .prop-default {
        opacity: 0.75;
      }

      .prop-note {
        opacity: 0.75;
        min-width: 8rem;
      }
    }

    .badge {
      display: inline-block;
      padding: 0.2rem 0.5rem;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      white-space: nowrap;

      &--required {
        background: rgba(61, 179, 122, 0.18);
        color: var(--primary-color-500, #3db37a);
      }

      &--optional {
        background: hsl(0 0% 50% / 0.12);
        opacity: 0.65;
      }
    }

    // Shared, consistent surface for every demo's example so they all look uniform
    // instead of each demo file styling its own ad-hoc container.
    .example-surface {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      min-height: 200px;
      padding: 2rem;
      border: 1px solid rgba(127, 127, 127, 0.18);
      border-radius: 14px;
      background: rgba(127, 127, 127, 0.06);
    }
  }
</style>
