<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodTable } from "drod-components";
  import { computed, ref } from "vue";

  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "role", label: "Role", sortable: true },
    { key: "age", label: "Age", sortable: true, align: "right" },
    { key: "salary", label: "Salary", sortable: true, align: "right", formatter: (v) => `$${v.toLocaleString()}` },
  ];

  const rows = [
    { id: 1, name: "Ada Lovelace", role: "Engineer", age: 36, salary: 92000, bio: "First programmer." },
    { id: 2, name: "Alan Turing", role: "Researcher", age: 41, salary: 105000, bio: "Father of computer science." },
    { id: 3, name: "Grace Hopper", role: "Admiral", age: 60, salary: 110000, bio: "Invented the compiler." },
    { id: 4, name: "Linus Torvalds", role: "Engineer", age: 54, salary: 130000, bio: "Created Linux & Git." },
    { id: 5, name: "Margaret Hamilton", role: "Director", age: 49, salary: 121000, bio: "Apollo flight software." },
    { id: 6, name: "Dennis Ritchie", role: "Researcher", age: 70, salary: 99000, bio: "Created C & Unix." },
    { id: 7, name: "Barbara Liskov", role: "Professor", age: 84, salary: 95000, bio: "Liskov substitution." },
    { id: 8, name: "Ken Thompson", role: "Engineer", age: 81, salary: 118000, bio: "Co-created Unix." },
    { id: 9, name: "Donald Knuth", role: "Professor", age: 86, salary: 97000, bio: "The Art of Programming." },
    { id: 10, name: "Tim Berners-Lee", role: "Director", age: 69, salary: 140000, bio: "Invented the Web." },
    { id: 11, name: "Guido van Rossum", role: "Engineer", age: 68, salary: 125000, bio: "Created Python." },
    { id: 12, name: "Brendan Eich", role: "Engineer", age: 63, salary: 124000, bio: "Created JavaScript." },
  ];

  // ----- basic / pagination -----
  const page = ref(1);
  const pageSize = ref(5);

  // ----- selection -----
  const selPage = ref(1);
  const selPageSize = ref(5);
  const selected = ref([]);

  // ----- expandable -----
  const expPage = ref(1);
  const expPageSize = ref(5);

  // ----- server-side mock -----
  const serverPage = ref(1);
  const serverPageSize = ref(5);
  const serverSort = ref(null);
  const serverRows = computed(() => {
    let data = [...rows];
    if (serverSort.value && serverSort.value.direction) {
      const { key, direction } = serverSort.value;
      data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      if (direction === "desc") data.reverse();
    }
    const start = (serverPage.value - 1) * serverPageSize.value;
    return data.slice(start, start + serverPageSize.value);
  });
  const onServerPageChange = ({ page: p, pageSize: ps }) => {
    serverPage.value = p;
    serverPageSize.value = ps;
  };
  const onServerSort = (payload) => {
    serverSort.value = payload;
  };
</script>

<template>
  <ComponentDocumentation :component="DrodTable">
    <template #example>
      <h4>Basic + client-side pagination + sorting</h4>
      <DrodTable
        :columns="columns"
        :rows="rows"
        v-model:page="page"
        v-model:page-size="pageSize"
      />

      <h4>Row selection (v-model:selected)</h4>
      <p>Selected ids: {{ selected }}</p>
      <DrodTable
        :columns="columns"
        :rows="rows"
        selectable
        v-model:selected="selected"
        v-model:page="selPage"
        v-model:page-size="selPageSize"
      />

      <h4>Expandable sub-rows + custom cell slot</h4>
      <DrodTable
        :columns="columns"
        :rows="rows"
        expandable
        v-model:page="expPage"
        v-model:page-size="expPageSize"
      >
        <template #cell-role="{ value }">
          <strong>{{ value }}</strong>
        </template>
        <template #expanded-row="{ row }">
          <em>{{ row.name }}</em> — {{ row.bio }}
        </template>
      </DrodTable>

      <h4>Server-side mode (controlled)</h4>
      <DrodTable
        :columns="columns"
        :rows="serverRows"
        server-side
        :total="rows.length"
        v-model:page="serverPage"
        v-model:page-size="serverPageSize"
        @page-change="onServerPageChange"
        @sort="onServerSort"
      />

      <h4>Loading state</h4>
      <DrodTable
        :columns="columns"
        :rows="rows.slice(0, 3)"
        :loading="true"
        :pagination="false"
      />

      <h4>Empty state</h4>
      <DrodTable
        :columns="columns"
        :rows="[]"
        :pagination="false"
      />

      <h4>Striped + sticky header + compact density</h4>
      <DrodTable
        :columns="columns"
        :rows="rows"
        striped
        sticky-header
        density="compact"
        :pagination="false"
      />
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  h4 {
    margin-top: 2rem;
  }
</style>
