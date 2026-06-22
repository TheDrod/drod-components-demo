<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodTimelineVertical, DrodTimelineVerticalItem } from "drod-components";

  const timeline = [
    {
      title: "Project kickoff",
      subtitle: "Planning",
      description: "Defined the scope, goals and initial roadmap.",
      date: "10/01/2024",
      icon: "mdi:flag",
    },
    {
      title: "Design phase",
      subtitle: "UX / UI",
      description: "Wireframes, prototypes and the first design system draft.",
      date: "05/02/2024",
      icon: "mdi:palette",
      color: "#e67e22",
    },
    {
      title: "Development",
      subtitle: "Engineering",
      description: "Built the core features and wired up the API.",
      date: "18/03/2024",
      icon: "mdi:code-tags",
    },
    {
      title: "Testing",
      subtitle: "QA",
      description: "Ran unit, integration and end-to-end test suites.",
      date: "22/04/2024",
      icon: "mdi:bug-check",
      color: "#27ae60",
    },
    {
      title: "Beta release",
      subtitle: "Early access",
      description: "Shipped to a small group of beta testers for feedback.",
      date: "09/05/2024",
      icon: "mdi:rocket-launch",
    },
    {
      title: "Feedback round",
      subtitle: "Iteration",
      description: "Collected feedback and prioritised improvements.",
      date: "16/06/2024",
      icon: "mdi:comment-text",
    },
    {
      title: "Launch",
      subtitle: "Production",
      description: "Public launch with monitoring and on-call coverage.",
      date: "01/07/2024",
      icon: "mdi:party-popper",
      color: "#8e44ad",
    },
  ];
</script>

<template>
  <ComponentDocumentation :component="DrodTimelineVertical">
    <template #example>
      <div class="dev-container">
        <DrodTimelineVertical>
          <DrodTimelineVerticalItem
            v-for="(entry, i) in timeline"
            :key="i"
            :title="entry.title"
            :subtitle="entry.subtitle"
            :description="entry.description"
            :date="entry.date"
            :icon="entry.icon"
            :color="entry.color"
          />
        </DrodTimelineVertical>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
