<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="0" class="bg_card rounded-lg position-relative" height="176px">
      <v-row class="ma-0 pa-0">
        <v-col cols="12" class="mb-0 pb-0">
          <v-card-title class="pt-1 pl-3 pb-3 text-h">
            Top 4 Sell at Caerleon
          </v-card-title>
        </v-col>
        <v-row class="ma-0 pb-0">
          <div class="pt-0 col-sm-12 col-md-4">
            <v-card-text class="d-flex align-center mt-0 pt-0 pb-0 pl-2">
              <v-img
                max-height="80"
                max-width="80"
                :src="c_api_img_1"
                class="mb-2 mr-4"
              ></v-img>
              <div class="text_list">
                <p class="mb-1">
                  <span class="primary--text">{{ c_item_name_1 }}</span>
                </p>
                <p class="mb-1">
                  PROFIT : <span class="green--text">{{ c_item_p_1 }}</span>
                </p>
                <p class="mb-1">
                  BUY :
                  <span :style="c_city_buy_color_1">{{ c_city_buy_1 }}</span>
                </p>
                <p class="mb-1">
                  SELL : <span :style="c_city_sell_color_1">{{ c_city_sell_1 }}</span>
                </p>
              </div>
            </v-card-text>
          </div>
          <div class="pt-0 col-sm-12 col-md-4">
            <v-card-text class="d-flex align-center mt-0 pt-0 pb-0 pl-2">
              <v-img
                max-height="80"
                max-width="80"
                :src="c_api_img_2"
                class="mb-2 mr-4"
              ></v-img>
              <div class="text_list">
                <p class="mb-1">
                  <span class="primary--text">{{ c_item_name_2 }}</span>
                </p>
                <p class="mb-1">
                  PROFIT : <span class="green--text">{{ c_item_p_2 }}</span>
                </p>
                <p class="mb-1">
                  BUY :
                  <span :style="c_city_buy_color_2">{{ c_city_buy_2 }}</span>
                </p>
                <p class="mb-1">
                  SELL : <span :style="c_city_sell_color_2">{{ c_city_sell_2 }}</span>
                </p>
              </div>
            </v-card-text>
          </div>
          <div class="pt-0 col-sm-12 col-md-4">
            <v-card-text class="d-flex align-center mt-0 pt-0 pb-0 pl-2">
              <v-img
                max-height="80"
                max-width="80"
                :src="c_api_img_3"
                class="mb-2 mr-4"
              ></v-img>
              <div class="text_list">
                <p class="mb-1">
                  <span class="primary--text">{{ c_item_name_3 }}</span>
                </p>
                <p class="mb-1">
                  PROFIT : <span class="green--text">{{ c_item_p_3 }}</span>
                </p>
                <p class="mb-1">
                  BUY :
                  <span :style="c_city_buy_color_3">{{ c_city_buy_3 }}</span>
                </p>
                <p class="mb-1">
                  SELL : <span :style="c_city_sell_color_3">{{ c_city_sell_3 }}</span>
                </p>
              </div>
            </v-card-text>
          </div>
        </v-row>
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
            <p>Details</p>
          </div>
        </router-link>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Top_5_Sell_Caerleon",
  props: [
    "c_item_name_1",
    "c_api_img_1",
    "c_item_p_1",
    "c_city_buy_1",
    "c_city_buy_color_1",
    "c_city_sell_1",
    "c_city_sell_color_1",
    "c_item_name_2",
    "c_api_img_2",
    "c_item_p_2",
    "c_city_buy_2",
    "c_city_buy_color_2",
    "c_city_sell_2",
    "c_city_sell_color_2",
    "c_item_name_3",
    "c_api_img_3",
    "c_item_p_3",
    "c_city_buy_3",
    "c_city_buy_color_3",
    "c_city_sell_3",
    "c_city_sell_color_3",
  ],
  methods: {
    action() {
      this.$store.getters.Detail[0] = "Caerleon";
      this.$store.getters.Detail[1] = true;
    },
  },
};
</script>

<style scoped></style>
