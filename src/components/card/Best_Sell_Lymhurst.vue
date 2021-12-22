<template>
  <v-card
    :elevation="0"
    class="bg_card rounded-lg position-relative"
    height="308px"
  >
    <v-row class="ma-0">
      <v-col cols="12" class="pb-0">
        <v-card-title class="pt-1 pl-3 text-h grey--text text--lighten-1">
          Lymhurst
        </v-card-title>
      </v-col>
      <v-col cols="12" class="py-a">
        <v-card-text class="d-flex align-center my-0 py-0 pl-2">
          <v-img
            max-height="80"
            max-width="80"
            :src="l_api_img_1"
            class="mb-2 mr-4"
          ></v-img>
          <div class="text_list">
            <p class="primary--text mb-1">
              <span class="primary--text">{{ l_item_name_1 }}</span>
            </p>
            <p class="mb-1">
              BUY : <span :style="l_city_buy_color_1">{{ l_city_buy_1 }}</span>
            </p>
            <p class="mb-1">
              SELL : <span :style="l_city_sell_color_1">{{ l_city_sell_1 }}</span>
            </p>
          </div>
          <v-spacer></v-spacer>
          <div class="green--text mb-2 mr-2 text-right">
            <p class="mb-2">+{{ l_percen_1 }}%</p>
            <p class="mr-3 text-h6 d-inline">+{{ l_item_p_1 }}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 172 172"
              style=" fill:#000000;"
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
                  <path
                    d="M5.8738,152.65l80.1262,-138.7825l80.1262,138.7825z"
                  ></path>
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
            :src="l_api_img_2"
            class="mb-2 mr-4"
          ></v-img>
          <div class="text_list">
            <p class="primary--text mb-1">
              <span class="primary--text">{{ l_item_name_2 }}</span>
            </p>
            <p class="mb-1">
              BUY : <span :style="l_city_buy_color_2">{{ l_city_buy_2 }}</span>
            </p>
            <p class="mb-1">
              SELL : <span :style="l_city_sell_color_1">{{ l_city_sell_2 }}</span>
            </p>
          </div>
          <v-spacer></v-spacer>
          <div class="green--text mb-2 mr-2 text-right">
            <p class="mb-2">+{{l_percen_2}}%</p>
            <p class="mr-3 text-h6 d-inline">+{{ l_item_p_2 }}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 172 172"
              style=" fill:#000000;"
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
                  <path
                    d="M5.8738,152.65l80.1262,-138.7825l80.1262,138.7825z"
                  ></path>
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
  </v-card>
</template>

<script>
export default {
  name: "thetford",
  props: [
    "l_item_name_1",
    "l_api_img_1",
    "l_item_p_1",
    "l_percen_1",
    "l_city_buy_1",
    "l_city_buy_color_1",
    "l_city_sell_1",
    "l_city_sell_color_1",
    "l_item_name_2",
    "l_api_img_2",
    "l_item_p_2",
    "l_percen_2",
    "l_city_buy_2",
    "l_city_buy_color_2",
    "l_city_sell_2",
    "l_city_sell_color_2"
  ],
};
</script>

<style scoped>
</style>
