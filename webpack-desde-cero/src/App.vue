<template>
  <main>
    <a @click="getCat" href="#">Cat's please 🙀</a>
    <cat-image v-for="(image, $index) in catImages" :url="image" :key="$index">
    </cat-image>
  </main>
</template>

<script>
import CatImage from './components/CatImage.vue';
export default {
  name: "App",
  data() {
      return {
          catImages: ["https://cdn2.thecatapi.com/images/bun.jpg"]
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
  },
  components: {
      CatImage
  }
};
</script>

<style>
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
  background-color: gray;
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
