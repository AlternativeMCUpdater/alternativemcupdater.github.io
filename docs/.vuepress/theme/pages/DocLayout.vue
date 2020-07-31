<template>
  <div class="px-4 lg:flex">
    <aside-sidebar :links="links" class="hidden lg:block"></aside-sidebar>
    <div class="w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
      <article class="p-10">
        <Content />
      </article>
    </div>
  </div>
</template>

<script>
import AsideSidebar from "../components/AsideSidebar";

export default {
  components: {
    AsideSidebar,
  },
  computed: {
    links() {
      return [];
    },
  },
};
</script>

<style></style>
