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
      <v-row>
        <v-col cols="5">
          <v-select
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
            item-color="purple darken-4"
          ></v-select>
        </v-col>
        <v-col cols="5">
          <v-select
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
            item-color="purple darken-4"
          ></v-select>
        </v-col>
        <v-col cols="2">
          <v-btn block color="success" class="me-3" x-large v-on:click="check_item"
            >SEE</v-btn
          >
        </v-col>
      </v-row>
      <MarketRender :market_data="this.main" :data_check="this.testc"/>
      <v-row id="row_main">
        <v-col cols="6">
          <v-card-text class="d-flex align-center mt-0 pb-0 pl-2">
            <!--<v-img max-height="80" max-width="80" :src="bs_img" class="mb-2 mr-4"></v-img>-->
            <div class="text_list">
              <p class="mb-1">
                <span class="primary--text"></span>
              </p>
              <p class="mb-1">PROFIT : <span class="green--text"></span></p>
              <p class="mb-1">BUY : <span></span></p>
              <p class="mb-1">SELL : <span></span></p>
            </div>
          </v-card-text>
        </v-col>
        <div v-if="this.testc == true">
          <v-col cols="6">{{ index }} + {{ this.main[0].show_name }}</v-col>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import MarketRender from "@/components/market_card/market_render.vue";
export default {
  name: "market",
  components: { MarketRender },
  data() {
    return {
      main: {"check": false, "data": []},
      testc: false,
    };
  },
  methods: {
    check_item: async function () {
      this.main = {"check": false, "data": []};
      const buy_s = this.select_buy;
      const sell_s = this.select_sell;
      if (await buy_s != undefined && buy_s != null && sell_s != undefined && sell_s != null) {
        console.log(this.$store.getters[sell_s].length);
        for (let x = 0; x < this.$store.getters[sell_s].length; x++) {
          // const check_buy = this.$store.getters[sell_s][x].city_buy;
          if (buy_s == this.$store.getters[sell_s][x].city_buy) {
            console.log(this.$store.getters[sell_s][x]);
            this.main["data"].push(this.$store.getters[sell_s][x]);
          }else{
            console.log("not true");
          }
        }
        this.main.check = true;
        console.log(this.main.check);
        console.log("this main");
        console.log(this.main);
      } else if (buy_s == undefined && buy_s == null && sell_s != undefined && sell_s != null) {
        alert("Select city to buy item");
      } else if (buy_s != undefined && buy_s != null && sell_s == undefined && sell_s == null) {
        alert("Select city to sell item")
      } else {
        alert("Select city to buy item and city to sell item")
      }
      /*
      this.testc = true;
      for (let x = 0; x < this.$store.getters.itemData.length; x++) {
        console.log(x);
        this.main[x] = {
          show_img: this.$store.getters.itemData[x].item_detail.api_img,
          show_name: this.$store.getters.itemData[x].item_detail.item_id,
          show_profit: 1000,
          show_buy: this.$store.getters.itemData[x].item_detail.details[buy_s].buy,
          show_buy_color: this.$store.getters.itemData[x].item_detail.details[buy_s]
            .color,
          show_sell: this.$store.getters.itemData[x].item_detail.details[sell_s].sell,
          show_sell_color: this.$store.getters.itemData[x].item_detail.details[sell_s]
            .color,
        };
      } */
    },
    /* check_item: function () {
      const buy_s = this.select_buy
      document.getElementById("test1").innerHTML = this.$store.getters.itemData[0].item_detail.details[buy_s].city;

      var vrows = document.createElement("vrow");
      vrows.innerHTML = '<v-row><v-col cols="12" lg="6">'+'<v-img max-height="80" max-width="80" :src="this.$store.getters.itemData[0].item_detail.api_img" class="mb-2 mr-4">'+'segggggggggg'+'</v-col><v-col cols="12" lg="6">'+'</v-col></v-row>';
      document.getElementById("vrow").appendChild(vrows);
    }, */
  },
//แผนการทำงาน
/* ทำการคำนวนหามูลค่าสินค้าใน Market แล้วค่อย prop ข้อมูลไปยัง market_render แล้ววนลูป run ออกมา */
  mounted() {},
};
</script>

<style scoped></style>
