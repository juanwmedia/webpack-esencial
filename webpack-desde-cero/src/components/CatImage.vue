<template>
  <div :style="backgroundImage"></div>
</template>

<script>
export default {
  name: "CatGrid",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    backgroundImage() {
      return {
        "background-image": `url(${this.url})`,
        "background-size": "cover",
        "backgrounmd-position": "center",
      };
    },
  },
};
</script>
