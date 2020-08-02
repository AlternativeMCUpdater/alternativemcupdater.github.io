<template>
  <header
    class="h-32 md:h-24 border-b flex flex-col md:flex-row items-center px-4 md:px-10"
  >
    <router-link
      class="uppercase font-bold font-sans text-xl leading-none flex-1 mt-4 md:m-0"
      to="/"
    >
      Alternative<br />MC Updater
    </router-link>

    <div class="flex-1 flex justify-end">
      <router-link
        to="/"
        class="hover:text-teal-600 dark-hover:text-teal-300 transition-colors duration-75 text-lg p-2"
      >
        Accueil
      </router-link>
      <router-link
        to="/cours"
        class="hover:text-teal-600 dark-hover:text-teal-300 transition-colors duration-75 text-lg p-2"
      >
        Cours
      </router-link>
      <router-link
        to="/librairies"
        class="hover:text-teal-600 dark-hover:text-teal-300 transition-colors duration-75 text-lg p-2"
      >
        Librairies
      </router-link>
      <a
        class="hover:text-teal-600 dark-hover:text-teal-300 transition-colors duration-75 text-lg p-2 cursor-pointer"
        @click="toggle"
      >
        <i
          class="fas"
          :class="{
            'fa-sun': !mode,
            'fa-moon': mode,
          }"
        ></i>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mode: false,
      el: null,
    };
  },
  mounted() {
    this.el = document.querySelector("body");
    if (localStorage.getItem("color-mode")) {
      this.set(localStorage.getItem("color-mode"));
    } else {
      this.set(this.getColorScheme());
    }
  },
  methods: {
    toggle() {
      this.set(this.mode ? "light" : "dark");
    },
    set(mode) {
      switch (mode) {
        case "dark":
          this.mode = true;
          this.el.classList.add("dark-mode");
          localStorage.setItem("color-mode", "dark");
          break;
        case "light":
          this.mode = false;
          this.el.classList.remove("dark-mode");
          localStorage.setItem("color-mode", "light");
      }
    },
    prefersColorScheme(suffix) {
      return window.matchMedia("(prefers-color-scheme" + suffix + ")");
    },

    getColorScheme() {
      if (
        window.matchMedia &&
        this.prefersColorScheme("").media !== "not all"
      ) {
        for (const colorScheme of ["dark", "light"]) {
          if (this.prefersColorScheme(":" + colorScheme).matches) {
            return colorScheme;
          }
        }
      }

      return "light";
    },
  },
};
</script>
