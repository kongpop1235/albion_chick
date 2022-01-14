<template>
  <v-card
    class="rounded-0 bg_main px-0 mx-10 my-6 grey--text text--lighten-1"
    elevation="0"
    rounded-0
  >
    <v-card-title class="mx-0 px-4 mb-5">
      <h1 class="text-uppercase text-h">{{ hd }}</h1>
    </v-card-title>

    <v-card-text>
      <v-row id="row_main" v-for="(item, index) in main" :key="index">
        <v-col
          cols="12"
          class="grey--text text--lighten-1 d-flex bg_card rounded-lg position-relative mb-6"
        >
          <v-card-text class="d-flex align-center my-0 py-0 pl-2">
            <v-img
              max-height="90"
              max-width="90"
              :src="item.api_img"
              class="mr-4"
            ></v-img>
            <div class="text_list">
              <p class="primary--text mb-1">
                <span class="text-h6">{{ item.item }}</span>
              </p>
              <p class="mb-1">
                BUY : <span :style="item.city_color_buy">{{ item.city_buy_price }}</span>
              </p>
              <p class="mb-1">
                SELL :
                <span :style="item.city_color_sell">{{ item.city_sell_price }}</span>
              </p>
            </div>
            <v-spacer></v-spacer>
            <div class="green--text mb-2 mr-2 text-right">
              <p class="mb-2">+ {{ item.percent }}%</p>
              <p class="mr-3 text-h4 d-inline">+{{ item.profit }}</p>
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
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Best_Sell_Detail",
  props: ["head"],
  data() {
    return {
      hd: null,
      hds: null,
      main: [],
    };
  },
  mounted() {
    if (this.$store.getters.Detail[1] == true) {
      alert("Start");
      if (this.$store.getters.Detail[0] == "best_sell") {
        this.hd = "best sell";
      } else if (this.$store.getters.Detail[0] == "Caerleon") {
        this.hd = "best sell caerleon";
      } else if (this.$store.getters.Detail[0] == "best_sell_t") {
        this.hd = "best sell thetford"
      } else if (this.$store.getters.Detail[0] == "best_sell_m") {
        this.hd = "best sell martlock"
      } else if (this.$store.getters.Detail[0] == "best_sell_l") {
        this.hd = "best sell lymhurst"
      } else if (this.$store.getters.Detail[0] == "best_sell_f") {
        this.hd = "best sell fort sterling"
      } else if (this.$store.getters.Detail[0] == "best_sell_b") {
        this.hd = "best sell bridwatch"
      }
      this.hds = this.$store.getters.Detail[0];
      for (let x = 0; x < this.$store.getters[this.hds].length; x++) {
        this.main.push(this.$store.getters[this.hds][x]);
      }
    }
  },
};
</script>

<style></style>
