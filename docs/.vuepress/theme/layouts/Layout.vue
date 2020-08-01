<template>
  <div
    class="overflow-auto min-h-screen flex flex-col dark:bg-gray-900 dark:text-white"
  >
    <Header />
    <component :is="layout" class="flex-1"></component>
  </div>
</template>

<script>
import Header from "../components/Header";
import HomeLayout from "../pages/HomeLayout";
import DocLayout from "../pages/DocLayout";

export default {
  components: {
    Header,
    HomeLayout,
    DocLayout,
  },
  computed: {
    layout() {
      switch (this.$page.frontmatter.type) {
        case "home":
          return "HomeLayout";
        default:
          return "DocLayout";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/theme.scss";

.big-icons {
  font-size: 10rem !important;
}
</style>
