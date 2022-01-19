<template>
  <v-card
    class="rounded-0 bg_main px-0 mx-10 my-6 grey--text text--lighten-1"
    elevation="0"
    rounded-0
  >
    <v-card-title class="mx-0 px-4 mb-5">
      <h1 class="text-uppercase text-h">caravan</h1>
    </v-card-title>
    <v-card-text>
      <v-row class="mb-0">
        <v-col cols="5" class="pl-0 pb-0">
          <v-select
            class="btn btn__secondary"
            v-model="select_buy"
            dark
            label="BUY"
            outlined
            :items="[
              'Caerleon',
              'Thetford',
              'Martlock',
              'Lymhurst',
              'Fort Sterling',
              'Bridgewatch',
            ]"
            color="red"
            item-color="red"
          ></v-select>
        </v-col>
        <v-col cols="5" class="pb-0">
          <v-select
            class="btn btn__secondary"
            v-model="select_sell"
            dark
            label="SELL"
            outlined
            :items="[
              'Caerleon',
              'Thetford',
              'Martlock',
              'Lymhurst',
              'FortSterling',
              'Bridgewatch',
            ]"
            color="green"
            item-color="green"
          ></v-select>
        </v-col>
        <v-col cols="2" class="pr-0 pb-0">
          <div class="btn btn__secondary d-flex align-center" @click="check_item" x-large>
            <p class="my-auto">SEE</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mb-3">
        <v-col cols="1" class="px-0">
          <div class="segmented-control-market">
            <v-spacer></v-spacer>
            <input type="radio" name="radio2" value="3" id="tab-1-market"  />
            <label for="tab-1-market" class="segmented-control-market__1">
              <svg
                class="ml-1"
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
            <input type="radio" name="radio2" value="4" id="tab-2-market"  />
            <label for="tab-2-market" class="segmented-control-market__2">
              <svg
                class="ml-2"
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
            <div class="segmented-control-market__color"></div>
          </div>
        </v-col>
        <v-col cols="1" class="px-0">
          <div class="segmented-control-market-mode">
            <v-spacer></v-spacer>
            <input type="radio" name="radio3" value="5" id="tab-1-market-mode" />
            <label for="tab-1-market-mode" class="segmented-control-market-mode__1">
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
                      d="M98.52767,14.33333c-4.773,0 -7.1548,5.7648 -3.7793,9.1403l7.48861,7.48861l-9.07031,9.07031l-16.43294,-16.43294c-2.7988,-2.79764 -7.33532,-2.79764 -10.13411,0l-21.5,21.5c-1.87218,1.79753 -2.62633,4.46674 -1.9716,6.97821c0.65473,2.51148 2.61603,4.47278 5.12751,5.12751c2.51148,0.65473 5.18068,-0.09942 6.97821,-1.9716l16.43294,-16.43294l16.43294,16.43294c2.7988,2.79764 7.33531,2.79764 10.13411,0l14.13738,-14.13737l7.4746,7.48861c3.38267,3.38267 9.1543,0.9937 9.1543,-3.7793v-23.23568c0,-3.99183 -3.24482,-7.23665 -7.23666,-7.23665zM21.5,71.66667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v71.66667c0,3.956 3.21067,7.16667 7.16667,7.16667h129c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-71.66667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667zM35.20345,86h101.5931c1.08296,3.05239 3.48439,5.45382 6.53678,6.53678v44.25977c-3.05239,1.08296 -5.45382,3.48439 -6.53678,6.53678h-101.5931c-1.08296,-3.05239 -3.4844,-5.45382 -6.53678,-6.53678v-44.25977c3.05239,-1.08296 5.45383,-3.48439 6.53678,-6.53678zM86,93.16667c-11.87412,0 -21.5,9.62588 -21.5,21.5c0,11.87412 9.62588,21.5 21.5,21.5c11.87412,0 21.5,-9.62588 21.5,-21.5c0,-11.87412 -9.62588,-21.5 -21.5,-21.5zM50.16667,107.5c-3.956,0 -7.16667,3.2035 -7.16667,7.16667c0,3.96317 3.21067,7.16667 7.16667,7.16667c3.956,0 7.16667,-3.2035 7.16667,-7.16667c0,-3.96317 -3.21067,-7.16667 -7.16667,-7.16667zM121.83333,107.5c-3.956,0 -7.16667,3.2035 -7.16667,7.16667c0,3.96317 3.21067,7.16667 7.16667,7.16667c3.956,0 7.16667,-3.2035 7.16667,-7.16667c0,-3.96317 -3.21067,-7.16667 -7.16667,-7.16667z"
                    ></path>
                  </g>
                </g>
              </svg>
            </label>
            <v-spacer></v-spacer>
            <input type="radio" name="radio3" value="6" id="tab-2-market-mode" />
            <label for="tab-2-market-mode" class="segmented-control-market-mode__2">
              <svg
                class="ml-1"
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
                      d="M22.93333,22.93333v114.66667c0,6.33533 5.13133,11.46667 11.46667,11.46667h48.86771c-1.90921,-5.38933 -3.00104,-11.15707 -3.00104,-17.2c0,-28.5004 23.0996,-51.6 51.6,-51.6c6.04293,0 11.81067,1.09184 17.2,3.00104v-60.33438zM68.8,34.4h34.4c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333h-34.4c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333zM131.86667,91.73333c-22.16507,0 -40.13333,17.96827 -40.13333,40.13333c0,22.16507 17.96827,40.13333 40.13333,40.13333c22.16507,0 40.13333,-17.96827 40.13333,-40.13333c0,-22.16507 -17.96827,-40.13333 -40.13333,-40.13333zM126.13333,103.2h11.46667v8.14089c6.23787,1.65693 10.271,6.01113 10.40286,11.8362h-9.48464c-0.2236,-2.8552 -2.93878,-4.8487 -6.55078,-4.8487c-3.612,0 -5.99089,1.71185 -5.99089,4.40078c0,2.21307 1.78701,3.49079 6.04688,4.33359l5.20703,1.01901c7.9808,1.54227 11.55625,5.14065 11.55625,11.55625c0,6.71947 -4.15192,11.27281 -11.18672,12.85521v8.04011h-11.46667v-7.99531c-6.86853,-1.48493 -11.04912,-5.75564 -11.18672,-11.97058h9.79817c0.25227,2.9412 3.19249,4.81511 7.44662,4.81511c3.8356,0 6.4612,-1.8525 6.4612,-4.51276c0,-2.24173 -1.76748,-3.44412 -6.38282,-4.36718l-5.31901,-1.0638c-7.39027,-1.39893 -11.19792,-5.43314 -11.19792,-11.79141c0,-6.21493 3.95914,-10.7001 10.38047,-12.3513z"
                    ></path>
                  </g>
                </g>
              </svg>
            </label>
            <v-spacer></v-spacer>
            <div class="segmented-control-market-mode__color"></div>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="2" class="d-flex align-center">
              <p class="text-uppercase text-h6 text-detail my-auto mx-auto">cost</p>
            </v-col>
            <v-col cols="5">
              <div class="form">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Max"
                  v-model="maxc"
                />
              </div>
            </v-col>
            <v-col cols="5">
              <div class="form">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Min"
                  v-model="minc"
                />
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="pr-0">
          <v-row>
            <v-col cols="2" class="d-flex align-center">
              <p class="text-uppercase text-h6 text-detail my-auto mx-auto">profit</p>
            </v-col>
            <v-col cols="5">
              <div class="form">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Max"
                  v-model="maxp"
                />
              </div>
            </v-col>
            <v-col cols="5">
              <div class="form">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Min"
                  v-model="minp"
                />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row id="row_main" v-for="(item, index) in main" :key="index">
        <v-col cols="12" class="grey--text text--lighten-1" :class="display">
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
  name: "market",
  data() {
    return {
      main: [],
      display: "d-none",
    };
  },
  methods: {
    async check_item() {
      this.main = [];
      const buy_s = this.select_buy;
      const sell_s = this.select_sell;
      if (buy_s == sell_s && buy_s != undefined && sell_s != undefined) {
        alert("same forbidden!!");
      } else if (
        (await buy_s) != undefined &&
        buy_s != null &&
        sell_s != undefined &&
        sell_s != null
      ) {
        console.log(this.$store.getters[sell_s].length);
        for (let x = 0; x < this.$store.getters[sell_s].length; x++) {
          // const check_buy = this.$store.getters[sell_s][x].city_buy;
          if (buy_s == this.$store.getters[sell_s][x].city_buy) {
            console.log(this.$store.getters[sell_s][x]);
            this.main.push(this.$store.getters[sell_s][x]);
          } else {
            console.log("not true");
          }
        }
        if (this.main.length == 0) {
          alert("No profitable item found." + "\n" + "Please change to a new city.");
        }
        this.display = "d-flex bg_card rounded-lg position-relative mb-6";
        console.log("this main");
        console.log(this.main);
      } else if (
        buy_s == undefined &&
        buy_s == null &&
        sell_s != undefined &&
        sell_s != null
      ) {
        alert("Select city to buy item");
      } else if (
        buy_s != undefined &&
        buy_s != null &&
        sell_s == undefined &&
        sell_s == null
      ) {
        alert("Select city to sell item");
      } else {
        alert("Select city to buy item and city to sell item");
      }
      //ทำเรื่องกำไรแบบเป็น percen ใน data index.vue
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
