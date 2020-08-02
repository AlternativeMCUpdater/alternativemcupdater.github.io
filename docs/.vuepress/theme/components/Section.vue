<template>
  <section
    class="px-5 py-10 md:p-20 max-w-6xl mx-auto flex flex-col-reverse"
    :class="{
      'md:flex-row': side === 'left',
      'md:flex-row-reverse': side === 'right',
    }"
  >
    <div
      class="flex-1 flex flex-col text-center"
      :class="{
        'md:text-right': side === 'right',
        'md:text-left': side === 'left',
      }"
    >
      <h1 class="uppercase font-bold font-sans text-2xl md:text-4xl">
        <slot name="title"></slot>
      </h1>

      <p class="text-xl text-justify">
        <slot name="content"></slot>
      </p>
    </div>
    <div class="flex-1 flex justify-center items-center p-8 md:p-0">
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
