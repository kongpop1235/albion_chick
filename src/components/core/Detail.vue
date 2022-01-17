<template>
  <v-card
    class="rounded-0 bg_main px-0 mx-10 my-6 grey--text text--lighten-1"
    elevation="0"
    rounded-0
  >
    <v-card-title class="mx-0 px-4 mb-5 pl-0">
      <h1 class="text-uppercase text-h">{{ hd }}</h1>
    </v-card-title>
    <v-card-text class="mx-0 px-0">
      <v-row>
        <v-col cols="1">
          <div class="segmented-control">
            <v-spacer></v-spacer>
            <input type="radio" name="radio2" value="3" id="tab-1" @click="sorthigh" />
            <label for="tab-1" class="segmented-control__1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 172 172"
                style="fill: #000000"
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
                  <g fill="#9155fd">
                    <path
                      d="M6.235,24.08c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h79.12c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-79.12c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM136.8475,27.4125c-3.5475,0.38969 -6.20812,3.42656 -6.1275,6.9875v84.925l-15.3725,-15.3725c-1.29,-1.35719 -3.07719,-2.13656 -4.945,-2.15c-2.80844,-0.02687 -5.36156,1.66625 -6.42312,4.27313c-1.06156,2.60687 -0.43,5.59 1.58562,7.55187l32.035,32.035l32.035,-32.035c1.78719,-1.73344 2.49938,-4.3 1.85438,-6.70531c-0.645,-2.40531 -2.53969,-4.27312 -4.945,-4.89125c-2.41875,-0.61812 -4.97188,0.12094 -6.69188,1.92156l-15.3725,15.3725v-84.925c0.02688,-1.86781 -0.69875,-3.655 -2.01562,-4.97187c-1.31688,-1.31688 -3.10406,-2.0425 -4.97188,-2.01563c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM6.235,51.6c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h55.04c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-55.04c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM6.235,79.12c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h41.28c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-41.28c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM6.235,106.64c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h27.52c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-27.52c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM6.235,134.16c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h13.76c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-13.76c-0.215,-0.01344 -0.43,-0.01344 -0.645,0z"
                    ></path>
                  </g>
                </g>
              </svg>
            </label>
            <v-spacer></v-spacer>
            <input type="radio" name="radio2" value="4" id="tab-2" @click="sortlow" />
            <label for="tab-2" class="segmented-control__2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 172 172"
                style="fill: #000000"
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
                  <g fill="#9155fd">
                    <path
                      d="M6.235,24.08c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h13.76c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-13.76c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM136.8475,27.4125c-3.5475,0.38969 -6.20812,3.42656 -6.1275,6.9875v84.925l-15.3725,-15.3725c-1.29,-1.35719 -3.07719,-2.13656 -4.945,-2.15c-2.80844,-0.02687 -5.36156,1.66625 -6.42312,4.27313c-1.06156,2.60687 -0.43,5.59 1.58562,7.55187l32.035,32.035l32.035,-32.035c1.78719,-1.73344 2.49938,-4.3 1.85438,-6.70531c-0.645,-2.40531 -2.53969,-4.27312 -4.945,-4.89125c-2.41875,-0.61812 -4.97188,0.12094 -6.69188,1.92156l-15.3725,15.3725v-84.925c0.02688,-1.86781 -0.69875,-3.655 -2.01562,-4.97187c-1.31688,-1.31688 -3.10406,-2.0425 -4.97188,-2.01563c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM6.235,51.6c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h27.52c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-27.52c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM6.235,79.12c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h41.28c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-41.28c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM6.235,106.64c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h55.04c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-55.04c-0.215,-0.01344 -0.43,-0.01344 -0.645,0zM6.235,134.16c-3.80281,0.17469 -6.73219,3.39969 -6.5575,7.2025c0.17469,3.80281 3.39969,6.73219 7.2025,6.5575h79.12c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-79.12c-0.215,-0.01344 -0.43,-0.01344 -0.645,0z"
                    ></path>
                  </g>
                </g>
              </svg>
            </label>
            <v-spacer></v-spacer>
            <div class="segmented-control__color"></div>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="5">
          <v-row class="mx-0">
            <v-col cols="2" class="d-flex align-center">
              <p class="text-uppercase text-h6 text-detail my-auto">PROFIT :</p>
            </v-col>
            <v-col cols="5">
              <div class="form">
                <input type="text" class="form__input" placeholder="Max" v-model="maxp" />
              </div>
            </v-col>
            <v-col cols="5">
              <div class="form">
                <input type="text" class="form__input" placeholder="Min" v-model="minp" />
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1">
          <div class="btn btn__secondary d-flex align-center" x-large @click="rangprofit">
            <p class="my-auto">SEE</p>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
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
      low: false,
      high: true,
    };
  },
  mounted() {
    if (this.$store.getters.Detail[1] == true) {
      if (this.$store.getters.Detail[0] == "best_sell") {
        this.hd = "best sell";
      } else if (this.$store.getters.Detail[0] == "Caerleon") {
        this.hd = "best sell caerleon";
      } else if (this.$store.getters.Detail[0] == "Thetford") {
        this.hd = "best sell thetford";
      } else if (this.$store.getters.Detail[0] == "Martlock") {
        this.hd = "best sell martlock";
      } else if (this.$store.getters.Detail[0] == "Lymhurst") {
        this.hd = "best sell lymhurst";
      } else if (this.$store.getters.Detail[0] == "FortSterling") {
        this.hd = "best sell fort sterling";
      } else if (this.$store.getters.Detail[0] == "Bridgewatch") {
        this.hd = "best sell bridwatch";
      }
      this.hds = this.$store.getters.Detail[0];
      for (let x = 0; x < this.$store.getters[this.hds].length; x++) {
        this.main.push(this.$store.getters[this.hds][x]);
      }
      this.$store.getters.Detail[1] = false;
    }
  },
  methods: {
    sortlow() {
      const low = this.main;
      low.sort(function (a, b) {
        return parseFloat(b.profit) - parseFloat(a.profit);
      });
      this.main = [];
      for (let sl = low.length - 1; sl >= 0; sl--) {
        this.main.push(low[sl]);
      }
      this.low = true;
      this.high = false;
    },
    sorthigh() {
      const high = this.main;
      high.sort(function (c, d) {
        return parseFloat(d.profit) - parseFloat(c.profit);
      });
      this.main = [];
      for (let sh = 0; sh < high.length; sh++) {
        this.main.push(high[sh]);
      }

      this.low = false;
      this.high = true;
    },
    rangprofit() {
      const maxp = this.maxp;
      const minp = this.minp;
      if (maxp == null && minp == null) {
        alert("input profit min / max [**number only**]");
      } else if (
        maxp != null &&
        maxp != undefined &&
        maxp != "" &&
        minp != null &&
        minp != undefined &&
        minp != ""
      ) {
        alert("max || min");
        console.log("minp :");
        console.log(minp);
        if (this.low == true) {
          this.main = [];
          for (let sls = this.$store.getters[this.hds].length - 1; sls >= 0; sls--) {
            if (
              this.$store.getters[this.hds][sls].profit > minp &&
              this.$store.getters[this.hds][sls].profit < maxp
            ) {
              this.main.push(this.$store.getters[this.hds][sls]);
            }
          }
        } else if (this.high == true) {
          this.main = [];
          for (let shs = 0; shs < this.$store.getters[this.hds].length; shs++) {
            if (
              this.$store.getters[this.hds][shs].profit > minp &&
              this.$store.getters[this.hds][shs].profit < maxp
            ) {
              this.main.push(this.$store.getters[this.hds][shs]);
            }
          }
        }
      } else if (
        (maxp != null && maxp != undefined && maxp != "" && minp == null) ||
        minp == undefined ||
        minp == ""
      ) {
        if (this.low == true) {
          alert("max low");
          const highm = this.main;
          this.main = [];
          for (let sls = highm.length - 1; sls >= 0; sls--) {
            if (highm[sls].profit < maxp) {
              this.main.push(highm[sls]);
            }
          }
        } else if (this.high == true) {
          alert("max high");
          this.main = [];
          for (let shs = 0; shs < this.$store.getters[this.hds].length; shs++) {
            if (this.$store.getters[this.hds][shs].profit < maxp) {
              this.main.push(this.$store.getters[this.hds][shs]);
            }
          }
        }
      } else if (
        maxp == null ||
        maxp == undefined ||
        (maxp == "" && minp != null && minp != undefined && minp != "")
      ) {
        if (this.low == true) {
          alert("min low");
          const lowm = this.main;
          lowm.sort(function (a, b) {
            return parseFloat(a.profit) - parseFloat(b.profit);
          });
          this.main = [];
          for (let sls = 0; sls < lowm.length; sls++) {
            if (lowm[sls].profit > minp) {
              this.main.push(lowm[sls]);
            }
          }
        } else if (this.high == true) {
          alert("min high");
          this.main = [];
          for (let shs = 0; shs < this.$store.getters[this.hds].length; shs++) {
            if (this.$store.getters[this.hds][shs].profit > minp) {
              this.main.push(this.$store.getters[this.hds][shs]);
            }
          }
        }
      }
    },
  },
};
</script>

<style></style>
