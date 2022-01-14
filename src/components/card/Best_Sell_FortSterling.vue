<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="0" class="bg_card rounded-lg position-relative" height="308px">
      <v-row class="ma-0">
        <v-col cols="12" class="pb-0">
          <v-card-title class="pt-1 pl-3 text-h grey--text text--lighten-1">
            Fort Sterling
          </v-card-title>
        </v-col>
        <v-col cols="12" class="py-a">
          <v-card-text class="d-flex align-center my-0 py-0 pl-2">
            <v-img
              max-height="80"
              max-width="80"
              :src="f_api_img_1"
              class="mb-2 mr-4"
            ></v-img>
            <div class="text_list">
              <p class="primary--text mb-1">
                <span class="primary--text">{{ f_item_name_1 }}</span>
              </p>
              <p class="mb-1">
                BUY : <span :style="f_city_buy_color_1">{{ f_city_buy_1 }}</span>
              </p>
              <p class="mb-1">
                SELL : <span :style="f_city_sell_color_1">{{ f_city_sell_1 }}</span>
              </p>
            </div>
            <v-spacer></v-spacer>
            <div class="green--text mb-2 mr-2 text-right">
              <p class="mb-2">+ {{ f_percen_1 }}%</p>
              <p class="mr-3 text-h6 d-inline">+{{ f_item_p_1 }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 172 172"
                style="fill: #000000"
                class="d-inline"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#4caf50">
                    <path d="M5.8738,152.65l80.1262,-138.7825l80.1262,138.7825z"></path>
                    <path
                      d="M86,18.1675l76.4024,132.3325h-152.8048l76.4024,-132.3325M86,9.5675l-83.85,145.2325h167.7l-83.85,-145.2325z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </v-card-text>
        </v-col>
        <v-col cols="12" class="py-a">
          <v-card-text class="d-flex align-center my-0 py-0 pl-2">
            <v-img
              max-height="80"
              max-width="80"
              :src="f_api_img_2"
              class="mb-2 mr-4"
            ></v-img>
            <div class="text_list">
              <p class="primary--text mb-1">
                <span class="primary--text">{{ f_item_name_2 }}</span>
              </p>
              <p class="mb-1">
                BUY : <span :style="f_city_buy_color_2">{{ f_city_buy_2 }}</span>
              </p>
              <p class="mb-1">
                SELL : <span :style="f_city_sell_color_2">{{ f_city_sell_2 }}</span>
              </p>
            </div>
            <v-spacer></v-spacer>
            <div class="green--text mb-2 mr-2 text-right">
              <p class="mb-2">+ {{ f_percen_2 }}%</p>
              <p class="mr-3 text-h6 d-inline">+{{ f_item_p_2 }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 172 172"
                style="fill: #000000"
                class="d-inline"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#4caf50">
                    <path d="M5.8738,152.65l80.1262,-138.7825l80.1262,138.7825z"></path>
                    <path
                      d="M86,18.1675l76.4024,132.3325h-152.8048l76.4024,-132.3325M86,9.5675l-83.85,145.2325h167.7l-83.85,-145.2325z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <v-expand-transition>
        <router-link
          to="/Detail"
          v-if="hover"
          class="d-flex transition-fast-in-fast-out pa darken-2 v-card--reveal white--text text-h text-uppercase font-weight-bold rounded-lg text-decoration-none"
          style="height: 100%"
        >
          <div
            @click="action"
            class="d-flex justify-center align-center"
            style="height: 100%; width: 100%"
          >
            Details
          </div>
        </router-link>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "fortsterling",
  props: [
    "f_item_name_1",
    "f_api_img_1",
    "f_item_p_1",
    "f_percen_1",
    "f_city_buy_1",
    "f_city_buy_color_1",
    "f_city_sell_1",
    "f_city_sell_color_1",
    "f_item_name_2",
    "f_api_img_2",
    "f_item_p_2",
    "f_percen_2",
    "f_city_buy_2",
    "f_city_buy_color_2",
    "f_city_sell_2",
    "f_city_sell_color_2",
  ],
  methods: {
    action() {
      this.$store.getters.Detail[0] = "FortSterling";
      this.$store.getters.Detail[1] = true;
    },
  },
};
</script>

<style scopde></style>
