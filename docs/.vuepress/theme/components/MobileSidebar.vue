<template>
  <aside class="border-b w-full">
    <nav>
      <span
        class="flex flex-row justify-between cursor-pointer p-4"
        @click="toggleMenu"
      >
        <span class="uppercase font-bold">Menu</span>
        <span>
          <i
            class="fas"
            :class="{ 'fa-caret-down': !menuOpened, 'fa-caret-up': menuOpened }"
          />
        </span>
      </span>
      <div v-if="menuOpened" class="p-4 pt-2">
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
      </div>
    </nav>
  </aside>
</template>

<script>
import groupBy from "lodash/groupBy";
import sortBy from "lodash/orderBy";
export default {
  props: ["items", "links"],
  data() {
    return {
      menuOpened: false,
    };
  },
  computed: {
    sortedLinks() {
      let groups = groupBy(this.items, "frontmatter.category");
      for (let group in groups) {
        groups[group] = sortBy(groups[group], "frontmatter.position");
      }

      return groups;
    },
  },

  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
    },
  },
};
</script>

<style></style>
