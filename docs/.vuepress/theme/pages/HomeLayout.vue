<template>
  <div>
    <div>
      <section class="p-20 max-w-6xl mx-auto text-center">
        <h1 class="uppercase font-sans text-4xl mb-12">
          Projet <br />
          <span class="font-bold">Alternative MC Updater</span>
        </h1>
        <router-link
          to="/librairies/"
          class="p-4 bg-teal-500 dark:bg-teal-600 text-white rounded"
        >
          <i class="fa fa-arrow-right mr-2"></i>
          <span>
            Commencer
          </span>
        </router-link>
      </section>
    </div>
    <div class="border-b border-t shadow-inner bg-teal-500 dark:bg-teal-600">
      <Section side="left" class="text-white">
        <template slot="title">Qui somme nous ?</template>
        <template slot="content">
          Nous somme une petite équipe de développeurs indépendants qui avons
          décidé de regrouper nos différents projets afin d'aider les gens à
          créer leur propres launcher pour Minecraft.
        </template>
        <template slot="second-content">
          <i class="text-gray-200 fas fa-users big-icons"></i>
        </template>
      </Section>
    </div>
    <div>
      <Section side="right">
        <template slot="title">A quoi sert ce site ?</template>
        <template slot="content">
          Sur ce site vous allez trouver des redirections vers des cours, des
          documentations et une liste plus ou moins exhaustive de librairies
          pour créer des launchers Minecraft.
        </template>
        <template slot="second-content">
          <i class="text-gray-400 fas fa-question-circle big-icons"></i>
        </template>
      </Section>
    </div>
    <div class="border-b border-t shadow-inner bg-teal-500">
      <Section side="left" class="text-white">
        <template slot="title">Retrouvez nous</template>
        <template slot="content">
          Vous pouvez nous retrouver sur Github afin d'échanger avec nous.
        </template>
        <template slot="second-content">
          <a
            href="https://github.com/AlternativeMCUpdater"
            class="bg-black dark:bg-white p-4 text-white dark:text-black rounded-lg"
          >
            <span class="mr-2">
              <i class="fab fa-github"></i>
            </span>
            <span>
              Github
            </span>
          </a>
        </template>
      </Section>
    </div>
  </div>
</template>

<script>
import Section from "../components/Section";
export default {
  components: {
    Section,
  },
};
</script>
