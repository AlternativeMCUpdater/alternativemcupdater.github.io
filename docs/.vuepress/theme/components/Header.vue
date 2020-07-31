<template>
  <header class="h-24 border-b flex flex-row items-center px-10">
    <router-link
      class="uppercase font-bold font-sans text-xl leading-none"
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
    </div>
  </header>
</template>

<script>
export default {};
</script>
