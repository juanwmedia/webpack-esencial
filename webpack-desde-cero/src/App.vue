<template>
  <main>
    <AppOptin v-if="showOptin" />
    <a
      href="#"
      @click.prevent="showOptin = !showOptin"
    >Join to our news</a>
    <a
      href="#"
      @click="getCat"
    >Cat's please 🙀</a>
    <cat-image
      v-for="(image, $index) in catImages"
      :key="$index"
      :url="image"
    />
  </main>
</template>

<script>
// import CatImage from './components/CatImage.vue';
export default {
  name: "App",
  components: {
      CatImage: () => import(/* webpackChunkName: "CatImage" , webpackPrefetch: true */ './components/CatImage.vue'),
      AppOptin: () => import(/* webpackChunkName: "AppOptin" */ './components/AppOptin.vue'),
  },
  data() {
      return {
          catImages: [],
          showOptin: false,
      }
  },
  methods: {
    async getCat() {
      try {
        const request = await fetch(
          "https://api.thecatapi.com/v1/images/search"
        );
        const cat = await request.json();
        this.catImages.push(cat[0].url);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss">
/* General */
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
}

header {
  text-align: center;
  background-image: url("./img/black-cat.jpg");
  background-size: cover;
  background-position: center;
}

h1 {
  padding: 4rem;
  margin: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
}

/* GRID */
main {
  padding: 0.5rem;
  min-height: 100vh;
  background-color: $corporate;
  display: grid;
  grid-gap: 0.5rem;
  grid:
    repeat(auto-fill, minmax(10rem, 1fr))
    / repeat(auto-fill, minmax(10rem, 1fr));
  grid-auto-rows: minmax(10rem, 1fr);
  grid-auto-flow: dense;
}

a {
  display: block;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
}

a:hover {
  background-color: white;
  color: black;
}

div:nth-child(3n) {
  grid-row-end: span 2;
  grid-column-end: span 2;
}

div:nth-child(7n) {
  grid-row-end: span 3;
  grid-column-end: span 2;
}

div:nth-child(10n) {
  grid-row-end: span 3;
  grid-column-end: span 3;
}
</style>
