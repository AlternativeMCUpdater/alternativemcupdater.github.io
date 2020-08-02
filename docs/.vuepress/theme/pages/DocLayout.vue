<template>
  <div class="lg:flex">
    <aside-sidebar :items="sidebarItems" class="hidden lg:block" />
    <mobile-sidebar
      :items="sidebarItems"
      class="block lg:hidden"
    ></mobile-sidebar>
    <div
      class="w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 px-4"
    >
      <article class="py-10 md:px-10">
        <h1 class="uppercase text-3xl md:text-4xl font-bold mb-6">
          {{ $page.title }}

          <Badge
            v-if="badge"
            :type="badge.type"
            :text="badge.text"
            vertical="middle"
          />
        </h1>
        <Content class="markdown-content" />
      </article>
    </div>
  </div>
</template>

<script>
import AsideSidebar from "../components/AsideSidebar";
import MobileSidebar from "../components/MobileSidebar";
import { resolveSidebarItems } from "../util";

export default {
  components: {
    AsideSidebar,
    MobileSidebar,
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
    badge() {
      if (this.$page.frontmatter.badge) {
        const [type, text] = this.$page.frontmatter.badge.split(":");
        return {
          type,
          text,
        };
      }
      return null;
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
