<template>
  <div
    class="border-2 dark:border-gray-800 rounded-lg flex flex-col github-preview overflow-hidden my-8"
    v-if="repo_data"
  >
    <div>
      <a :href="repo_data.html_url">
        <img
          v-if="repo_data.owner"
          :src="repo_data.owner.avatar_url"
          alt="Github repo url"
          class="object-cover object-center h-64 w-full"
        />
      </a>
    </div>
    <div class="p-4 bg-gray-100 dark:bg-gray-800">
      <p class="mb-1">
        <a class="font-bold" :href="repo_data.html_url">
          {{ repo_data.full_name }}
        </a>
      </p>
      <p
        class="text-sm m-0 text-gray-900 dark:text-white text-justify"
        v-if="repo_data.description"
      >
        {{ repo_data.description }}
      </p>
      <p class="text-sm m-0 text-gray-900 dark:text-white italic" v-else>
        Pas de description
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["repo"],
  data() {
    return {
      repo_data: {},
    };
  },
  mounted() {
    this.axios
      .get(`https://api.github.com/repos/${this.repo}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
      .then(({ data }) => {
        this.repo_data = data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.github-preview {
  width: 20rem;

  .mb-1 {
    @apply mb-1 #{!important};
  }

  .m-0 {
    @apply m-0 #{!important};
  }
}
</style>
