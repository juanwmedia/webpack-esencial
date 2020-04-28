import CSS from "../css/main.css";
import Vue from "vue";

Vue.component("cat-image", {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  template: `<div :style="backgroundImage"></div>`,
  computed: {
    backgroundImage() {
      return {
        "background-image": `url(${this.url})`,
        "background-size": "cover",
        "backgrounmd-position": "center"
      };
    }
  }
});

new Vue({
  el: "main",
  data: {
    catImages: ["https://cdn2.thecatapi.com/images/bun.jpg"]
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
});

console.log("Hi from JS!")

if (module.hot) {
  module.hot.accept();
}