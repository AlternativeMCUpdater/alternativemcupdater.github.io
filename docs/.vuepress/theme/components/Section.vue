<template>
  <section
    class="p-20 max-w-6xl mx-auto flex"
    :class="{
      'flex-row': side === 'left',
      'flex-row-reverse': side === 'right',
    }"
  >
    <div
      class="flex-1 flex flex-col"
      :class="{ 'text-right': side === 'right' }"
    >
      <h1 class="uppercase font-bold font-sans text-4xl">
        <slot name="title"></slot>
      </h1>

      <p class="text-xl text-justify">
        <slot name="content"></slot>
      </p>
    </div>
    <div class="flex-1 flex justify-center items-center">
      <slot name="second-content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    side: {
      type: String,
      default: "left",
    },
  },
};
</script>
