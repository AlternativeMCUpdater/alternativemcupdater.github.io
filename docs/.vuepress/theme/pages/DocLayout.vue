<template>
  <div class="px-4 lg:flex">
    <aside-sidebar :items="sidebarItems" class="hidden lg:block" />
    <div class="w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
      <article class="p-10">
        <Content />
      </article>
    </div>
  </div>
</template>

<script>
import AsideSidebar from "../components/AsideSidebar";
import { resolveSidebarItems } from "../util";

export default {
  components: {
    AsideSidebar,
  },
  data() {
    return {
      isSidebarOpen: true,
    };
  },
  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },
  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },
  },
};
</script>

<style></style>
