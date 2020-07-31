<template>
  <div class="overflow-auto min-h-screen flex flex-col">
    <Header />
    <div class="flex-1 flex justify-center items-center">
      <section class="text-center text-gray-700 ">
        <span class="text-gray-600">
          <i class="fas fa-map-signs big-icons"></i>
        </span>
        <div class="leading-none mb-4">
          <h1 class="font-bold text-6xl">404</h1>
          <h2 class="text-3xl">Page non trouvée</h2>
        </div>
        <ul>
          <li
            class="hover:text-teal-600 dark-hover:text-teal-300 transition-colors duration-75"
          >
            <router-link to="/">
              Retourner à la page d'accueil
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "../styles/theme.scss";

.big-icons {
  font-size: 8rem !important;
}
</style>
