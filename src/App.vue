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
    this.$store.dispatch("getGoldPrice");
    this.$store.dispatch("getItem");
  },
};
</script>

<style>
.text-h {
  font-size: 23px;
  letter-spacing: 2px;
}
.text-menu {
  letter-spacing: 5px;
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
.pa {
  background-color : #9155fd;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.85;
  position: absolute;
  width: 100%;
}
.text-detail{
  color: var(--greyDark);
}


:root {
  --primary: #6d5dfc; /*สีตัวอักษรตอนกด*/
  --white: #3d3658; /*แสงเข้า*/
  --greyLight-2: #181529; /*เงาด้านใต้*/
  --greyDark: #9baacf; /*สีตัวอะกษรก่อนกด*/
  --greyDark-05: #9baacf80;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  overflow-y: scroll;
  background: var(--greyLight-1);
}
@media screen and (min-width: 900px) {
  html {
    font-size: 95%;
  }
}

/*  SEGMENTED-CONTROL */
.segmented-control {
  grid-column: 3/4;
  grid-row: 1/2;
  width: 7.5rem;
  height: 3.6rem;
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  position: relative;
}
.segmented-control input {
  display: none;
}
.segmented-control > input:checked + label {
  transition: all 0.5s ease;
  color: var(--primary);
}
.segmented-control__1,
.segmented-control__2,
.segmented-control__3 {
  width: 3.1rem;
  height: 3.1rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--greyDark-05);
  transition: all 0.5s ease;
}
.segmented-control__1:hover,
.segmented-control__2:hover,
.segmented-control__3:hover {
  color: var(--primary);
}
.segmented-control__color {
  position: absolute;
  width: 2.9rem;
  height: 2.9rem;
  margin-left: 0.3rem;
  border-radius: 0.3rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
    inset -0.2rem -0.2rem 0.5rem var(--white);
  pointer-events: none;
}

#tab-1:checked ~ .segmented-control__color {
  transform: translateX(0.2rem);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

#tab-2:checked ~ .segmented-control__color {
  transform: translateX(3.75rem);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
/*  FORM  */
.form {
  grid-column: 3/4;
  grid-row: 3/4;
}
.form__input {
  width: 15.9rem;
  height: 3.6rem;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.4rem;
  padding-left: 1.4rem;
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);
  background: none;
  font-family: inherit;
  color: var(--greyDark-05);
}
.form__input::-moz-placeholder {
  color: var(--greyLight-3);
}
.form__input:-ms-input-placeholder {
  color: var(--greyLight-3);
}
.form__input::placeholder {
  color: var(--greyLight-3);
}
.form__input:focus {
  outline: none;
  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
    inset -0.2rem -0.2rem 0.5rem var(--white);
}

/*  BUTTONS  */
.btn {
  width: 100%;
  height: 3.7rem;
  border-radius: 0.3rem;
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
}
.btn__secondary {
  grid-column: 1/2;
  grid-row: 5/6;
  color: var(--greyDark);
}
.btn__secondary:hover {
  color: var(--primary);
}
.btn__secondary:active {
  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2), inset -0.2rem -0.2rem 0.5rem var(--white);
}
.btn p {
  font-size: 1.6rem;
}
</style>
