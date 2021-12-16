<template>
  <v-app>
    <v-card tile class="bg_main" height="100%">
      <Menu id="h-show" />
      <div id="h-overlay"></div>
      <Content />
      <Footer />
    </v-card>
  </v-app>
</template>

<script>
import Menu from "@/components/core/Menu.vue";
import Content from "@/components/core/Content.vue";
import Footer from "@/components/core/footer.vue";
import { store } from "@/store/index.js";

export default {
  name: "App",
  store,
  components: {
    Menu,
    Content,
    Footer,
  },
  data: () => ({
    overlay: false,
  }),
  mounted() {
    this.$store.dispatch("getGold");
    this.$store.dispatch("getItem");
  },
};
</script>

<style>
.text-h {
  font-size: 23px;
  letter-spacing: 2px;
}
.text_list {
  font-size: 0.9rem;
  letter-spacing: 1.05px;
  font-weight: 500;
  text-transform: uppercase;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
#h-overlay {
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
#h-show:hover + #h-overlay {
  display: block;
}
</style>
