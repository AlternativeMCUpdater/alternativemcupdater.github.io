<template>
  <aside class="border-r w-64 py-4 my-4">
    <nav>
      <div v-for="(sublinks, group) in links" :key="`link-${group}`">
        <h3
          class="uppercase text-lg font-bold text-teal-600 dark:text-teal-300"
        >
          {{ group }}
        </h3>
        <ul class="pb-3 pl-4">
          <li v-for="(link, index) in sublinks" :key="index" class="py-2">
            <nuxt-link
              :to="toLink(link)"
              class="hover:text-teal-600 dark-hover:text-teal-300 duration-75 transition-colors"
            >
              <template v-if="link.menu">
                {{ link.menu }}
              </template>
              <template v-else>
                {{ link.title }}
              </template>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  props: ["links"],
};
</script>

<style></style>
