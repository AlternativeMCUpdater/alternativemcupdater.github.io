<template>
  <aside class="border-r w-64 py-4 my-4">
    <nav>
      <div v-for="(sublinks, group) in sortedLinks" :key="`link-${group}`">
        <h3
          class="uppercase text-lg font-bold text-teal-600 dark:text-teal-300"
        >
          {{ group === "undefined" ? "" : group }}
        </h3>
        <ul class="pb-3 pl-4">
          <li v-for="(link, index) in sublinks" :key="index" class="py-2">
            <router-link
              :to="link.path"
              class="hover:text-teal-600 dark-hover:text-teal-300 duration-75 transition-colors"
              exact-active-class="text-teal-600 dark:text-teal-300"
            >
              {{ link.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
import groupBy from "lodash/groupBy";
import sortBy from "lodash/orderBy";
export default {
  props: ["items", "links"],
  computed: {
    sortedLinks() {
      let groups = groupBy(this.items, "frontmatter.category");
      for (let group in groups) {
        groups[group] = sortBy(groups[group], "frontmatter.position");
      }

      return groups;
    },
  },
};
</script>

<style></style>
