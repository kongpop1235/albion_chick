import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";
import numeral from "numeral";
import date from "date.js";

Vue.use(Vuex);

// let a = 0;
const cd = [
  "Bridgewatch",
  "Caerleon",
  "FortSterling",
  "Lymhurst",
  "Martlock",
  "Thetford",
];
const city = ["#FF952C", "#FF2626", "#F9F9F9", "#38CD00", "#00ADE9", "#C62EFF"];

export const store = new Vuex.Store({
  state: {
    gold_price: [[], false],
    item: [{ id: null, name: null }, false],
    itemData: [
      /*{item_id : null, details: [{city : null, buy : null, buy_data : null, sell : null, sell_data : null}]}*/
    ],
    item_profit: {
      check: false,
      best_sell: null,
      Caerleon: null,
      Thetford: null,
      Martlock: null,
      Lymhurst: null,
      FortSterling: null,
      Bridgewatch: null,
    },
    Detail: [null, false],
  },
  getters: {
    gold_price: (state) => state.gold_price,
    item: (state) => state.item,
    itemData: (state) => state.itemData,
    item_profit: (state) => state.item_profit,
    best_sell: (state) => state.item_profit.best_sell,
    Bridgewatch: (state) => state.item_profit.Bridgewatch,
    Caerleon: (state) => state.item_profit.Caerleon,
    FortSterling: (state) => state.item_profit.FortSterling,
    Lymhurst: (state) => state.item_profit.Lymhurst,
    Martlock: (state) => state.item_profit.Martlock,
    Thetford: (state) => state.item_profit.Thetford,
    Detail: (state) => state.Detail,
  },
  actions: {
    getGoldPrice({ commit }) {
      let y = date("3 month ago");
      let d = new Date();
      axios
        .get(
          "https://www.albion-online-data.com/api/v2/stats/gold?date=" +
            y.toISOString().substring(0, 10) +
            "&end_date=" +
            d.toISOString().substring(0, 10)
        )
        .then((gold_p) => {
          /* console.log("------------")
          console.log(gold_p.data)
          console.log("------------") */
          commit("SET_GOLD_PRICE", gold_p.data);
        });
    },
    async getItem({ commit }) {
      //item: id,name
      let item_api_id = [];
      let item_api_name = [];

      await axios
        .get(
          "https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json"
        )
        .then((item_id) => {
          /*let authors = item_id.data; //api map
            return authors.map(function(author) {
              item_api_id[i] = author.UniqueName;
              item_api_name[i] = author.LocalizedNames["EN-US"];
              i++;
            }); */
          let ic = 1;

          for (let i = 1; i < 1000; i++) {
            //max loop 7694
            if (ic == 187) {
              ic = 188;
            } else if (ic == 209) {
              ic = 227;
            } else if (ic == 228) {
              ic = 410;
            } else if (ic == 1200) {
              ic = 1202;
            } else if (ic == 2208) {
              ic = 2210;
            } else if (ic == 2259) {
              ic = 2261;
            } else if (ic == 2308) {
              ic = 2310;
            } else if (ic == 2409) {
              ic = 2427;
            } else if (ic == 2469) {
              ic = 2471;
            } else if (ic == 2476) {
              ic = 2480;
            } else if (ic == 2511) {
              ic = 2513;
            } else if (ic == 7010) {
              ic = 7015;
            } else if (ic == 7129) {
              ic = 7131;
            } else if (ic == 7226) {
              ic = 7228;
            } else if (ic == 7300) {
              ic = 7302;
            } else if (ic == 7456) {
              ic = 7458;
            } else if (ic == 7458) {
              ic = 7467;
            } else if (ic == 7670) {
              ic = 7703;
            }
            item_api_id[i - 1] = item_id.data[ic].UniqueName;
            item_api_name[i - 1] = item_id.data[ic].LocalizedNames["EN-US"];
            ic++;
          }
        });
      await commit("SET_ITEM_ID", item_api_id);
      await commit("SET_ITEM_NAME", item_api_name);

      //itemData
      /* let item_api = '';
      console.log(this.state.item[0].id[0]);
      for (let index = 0; index < this.state.item[0].id.length-1; index++) {
        if(index < this.state.item[0].id.length - 1) {
          item_api += this.state.item[0].id[index] + ",";
        } else {
          item_api += this.state.item[0].id[index];
        }
      } */
      let item_lenght = 0;
      for (; item_lenght < this.state.item[0].id.length - 1; ) {
        // sell[item_lenght] = [];
        // sell_date[item_lenght] = [];
        // buy[item_lenght] = [];
        // buy_date[item_lenght] = [];
        // city_data[item_lenght] = [];

        //loop city
        await axios
          .get(
            "https://www.albion-online-data.com/api/v2/stats/prices/" +
              this.state.item[0].id[0 + item_lenght] +
              "," +
              this.state.item[0].id[1 + item_lenght] +
              "," +
              this.state.item[0].id[2 + item_lenght] +
              "," +
              this.state.item[0].id[3 + item_lenght] +
              "," +
              this.state.item[0].id[4 + item_lenght] +
              "," +
              this.state.item[0].id[5 + item_lenght] +
              "," +
              this.state.item[0].id[6 + item_lenght] +
              "," +
              this.state.item[0].id[7 + item_lenght] +
              "," +
              this.state.item[0].id[8 + item_lenght] +
              "," +
              this.state.item[0].id[9 + item_lenght] +
              "," +
              this.state.item[0].id[10 + item_lenght] +
              "," +
              this.state.item[0].id[11 + item_lenght] +
              "," +
              this.state.item[0].id[12 + item_lenght] +
              "," +
              this.state.item[0].id[13 + item_lenght] +
              "," +
              this.state.item[0].id[14 + item_lenght] +
              "," +
              this.state.item[0].id[15 + item_lenght] +
              "," +
              this.state.item[0].id[16 + item_lenght] +
              "," +
              this.state.item[0].id[17 + item_lenght] +
              "," +
              this.state.item[0].id[18 + item_lenght] +
              "," +
              this.state.item[0].id[19 + item_lenght] +
              "," +
              this.state.item[0].id[20 + item_lenght] +
              "," +
              this.state.item[0].id[21 + item_lenght] +
              "," +
              this.state.item[0].id[22 + item_lenght] +
              "," +
              this.state.item[0].id[23 + item_lenght] +
              "," +
              this.state.item[0].id[24 + item_lenght] +
              "," +
              this.state.item[0].id[25 + item_lenght] +
              "," +
              this.state.item[0].id[26 + item_lenght] +
              "," +
              this.state.item[0].id[27 + item_lenght] +
              "," +
              this.state.item[0].id[28 + item_lenght] +
              "," +
              this.state.item[0].id[29 + item_lenght] +
              "," +
              this.state.item[0].id[30 + item_lenght] +
              "," +
              this.state.item[0].id[31 + item_lenght] +
              "," +
              this.state.item[0].id[32 + item_lenght] +
              "," +
              this.state.item[0].id[33 + item_lenght] +
              "," +
              this.state.item[0].id[34 + item_lenght] +
              "," +
              this.state.item[0].id[35 + item_lenght] +
              "," +
              this.state.item[0].id[36 + item_lenght] +
              "," +
              this.state.item[0].id[37 + item_lenght] +
              "," +
              this.state.item[0].id[38 + item_lenght] +
              "," +
              this.state.item[0].id[39 + item_lenght] +
              "," +
              this.state.item[0].id[40 + item_lenght] +
              "," +
              this.state.item[0].id[41 + item_lenght] +
              "," +
              this.state.item[0].id[42 + item_lenght] +
              "," +
              this.state.item[0].id[43 + item_lenght] +
              "," +
              this.state.item[0].id[44 + item_lenght] +
              "," +
              this.state.item[0].id[45 + item_lenght] +
              "," +
              this.state.item[0].id[46 + item_lenght] +
              "," +
              this.state.item[0].id[47 + item_lenght] +
              "," +
              this.state.item[0].id[48 + item_lenght] +
              "," +
              this.state.item[0].id[49 + item_lenght] +
              "," +
              this.state.item[0].id[50 + item_lenght] +
              "," +
              this.state.item[0].id[51 + item_lenght] +
              "," +
              this.state.item[0].id[52 + item_lenght] +
              "," +
              this.state.item[0].id[53 + item_lenght] +
              "," +
              this.state.item[0].id[54 + item_lenght] +
              "," +
              this.state.item[0].id[55 + item_lenght] +
              "," +
              this.state.item[0].id[56 + item_lenght] +
              "," +
              this.state.item[0].id[57 + item_lenght] +
              "," +
              this.state.item[0].id[58 + item_lenght] +
              "," +
              this.state.item[0].id[59 + item_lenght] +
              "," +
              this.state.item[0].id[60 + item_lenght] +
              "," +
              this.state.item[0].id[61 + item_lenght] +
              "," +
              this.state.item[0].id[62 + item_lenght] +
              "," +
              this.state.item[0].id[63 + item_lenght] +
              "," +
              this.state.item[0].id[64 + item_lenght] +
              "," +
              this.state.item[0].id[65 + item_lenght] +
              "," +
              this.state.item[0].id[66 + item_lenght] +
              "," +
              this.state.item[0].id[67 + item_lenght] +
              "," +
              this.state.item[0].id[68 + item_lenght] +
              "," +
              this.state.item[0].id[69 + item_lenght] +
              "," +
              this.state.item[0].id[70 + item_lenght] +
              "," +
              this.state.item[0].id[71 + item_lenght] +
              "," +
              this.state.item[0].id[72 + item_lenght] +
              "," +
              this.state.item[0].id[73 + item_lenght] +
              "," +
              this.state.item[0].id[74 + item_lenght] +
              "," +
              this.state.item[0].id[75 + item_lenght] +
              "," +
              this.state.item[0].id[76 + item_lenght] +
              "," +
              this.state.item[0].id[77 + item_lenght] +
              "," +
              this.state.item[0].id[78 + item_lenght] +
              "," +
              this.state.item[0].id[79 + item_lenght] +
              "," +
              this.state.item[0].id[80 + item_lenght] +
              "," +
              this.state.item[0].id[81 + item_lenght] +
              "," +
              this.state.item[0].id[82 + item_lenght] +
              "," +
              this.state.item[0].id[83 + item_lenght] +
              "," +
              this.state.item[0].id[84 + item_lenght] +
              "," +
              this.state.item[0].id[85 + item_lenght] +
              "," +
              this.state.item[0].id[86 + item_lenght] +
              "," +
              this.state.item[0].id[87 + item_lenght] +
              "," +
              this.state.item[0].id[88 + item_lenght] +
              "," +
              this.state.item[0].id[89 + item_lenght] +
              "," +
              this.state.item[0].id[90 + item_lenght] +
              "," +
              this.state.item[0].id[91 + item_lenght] +
              "," +
              this.state.item[0].id[92 + item_lenght] +
              "," +
              this.state.item[0].id[93 + item_lenght] +
              "," +
              this.state.item[0].id[94 + item_lenght] +
              "," +
              this.state.item[0].id[95 + item_lenght] +
              "," +
              this.state.item[0].id[96 + item_lenght] +
              "," +
              this.state.item[0].id[97 + item_lenght] +
              "," +
              this.state.item[0].id[98 + item_lenght] +
              "," +
              this.state.item[0].id[99 + item_lenght] +
              "?locations=" +
              "bridgewatch,caerleon,fortsterling,lymhurst,martlock,thetford" +
              "&qualities=1"
          )
          .then((items) => {
            for (let ic = item_lenght; ic < 100 + item_lenght; ic++) {
              for (let il = 0; il < 100; ) {
                let aa = il * 6;
                const item_detail = {
                  item_id: items.data[aa].item_id,
                  api_img:
                    "https://render.albiononline.com/v1/item/" +
                    items.data[aa].item_id +
                    ".png",
                  details: {
                    Bridgewatch: null,
                    Caerleon: null,
                    FortSterling: null,
                    Lymhurst: null,
                    Martlock: null,
                    Thetford: null,
                  },
                };
                // commit("SET_ITEM_DATA_ITEM", [items.data[il*6].item_id]);

                if (items.data[aa].item_id == this.state.item[0]["id"][ic]) {
                  console.log(item_detail);
                  for (let cl = 0; cl < 6; cl++) {
                    let s = aa + cl;
                    /* console.log("item loop : " + il);
                    console.log("s = ( il * 6 ) + cl : " + s);
                    console.log("item check : " + ic);
                    console.log("city loop : " + cl); */
                    item_detail.details[cd[cl]] = {
                      city: items.data[s].city,
                      color: city[cl],
                      buy: items.data[s].buy_price_max,
                      buy_date: items.data[s].buy_price_max_date,
                      sell: items.data[s].sell_price_min,
                      sell_date: items.data[s].sell_price_min_date,
                    };
                  }
                  commit("SET_ITEM_DATA_CITY", {
                    item_detail,
                  });
                }
                il++;
              }
            }
            console.log(
              "//////////////////////----start" +
                item_lenght +
                "----//////////////////////"
            );
          });
        if (item_lenght == 0) {
          item_lenght = 100;
        } else {
          item_lenght += 100;
        }
      }
      console.log("55555555555555555555");
      console.log(this.state.item[0]["id"][item_lenght]);
      console.log("gold :");
      console.log(this.state.gold);
      console.log("item_data :");
      console.log(this.state.itemData);
      console.log("item :");
      console.log(this.state.item);
      console.log("55555555555555555555");

      //-----------------------------Find Hiht/Low price-------------------------------

      //best_sell
      let hp = null;
      let lp = Infinity;
      let ch = null; //เมืองที่ไปขายสินค้า
      let cl = null; //เมืองที่ไปซื้อสินค้า
      const best_sell = []; //เก็บข้อมูลโดยรวม
      // let best_loop = 0;
      //caerleon
      let c_bh = null;
      let c_bl = Infinity;
      let c_cl = null; //เมืองที่ไปซื้อสินค้า
      const c_best_sell = [];
      //thetford
      let t_bh = null;
      let t_bl = null;
      let t_cl = null;
      const t_best_sell = [];
      //Martlock
      let m_bh = null;
      let m_bl = null;
      let m_cl = null;
      const m_best_sell = [];
      //Lymhurst
      let l_bh = null;
      let l_bl = null;
      let l_cl = null;
      const l_best_sell = [];
      //FortSterling
      let f_bh = null;
      let f_bl = null;
      let f_cl = null;
      const f_best_sell = [];
      //Bridgewatch
      let b_bh = null;
      let b_bl = null;
      let b_cl = null;
      const b_best_sell = [];

      for (
        let HL_item_lenght = 0;
        HL_item_lenght < this.getters.itemData.length - 1;
        HL_item_lenght++
      ) {
        for (let h = 0; h < 6; h++) {
          //Best Sell
          //find best hight price
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
              .sell >= hp &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
              .sell != 0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
              .sell != null
          ) {
            hp = this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[h]
            ].sell;
            ch = h;
            //find best low price
            for (let hl = 0; hl < 6; hl++) {
              if (
                this.getters.itemData[HL_item_lenght].item_detail.details[
                  cd[hl]
                ].sell <
                  this.getters.itemData[HL_item_lenght].item_detail.details[
                    cd[h]
                  ].sell &&
                this.getters.itemData[HL_item_lenght].item_detail.details[
                  cd[hl]
                ].sell != 0 &&
                this.getters.itemData[HL_item_lenght].item_detail.details[
                  cd[hl]
                ].sell != null &&
                this.getters.itemData[HL_item_lenght].item_detail.details[
                  cd[hl]
                ].sell < lp
              ) {
                lp = this.getters.itemData[HL_item_lenght].item_detail.details[
                  cd[hl]
                ].sell;
                cl = hl;
              }
            }
          }
          //caerleon
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]]
              .sell >= c_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]]
              .sell != 0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]]
              .sell != null
          ) {
            c_bh = this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[1]
            ].sell;
            if (
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell <
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]]
                  .sell &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != 0 &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != null &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell < c_bl
            ) {
              c_bl = this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[h]
              ].sell;
              c_cl = h;
            }
          }
          //Thetford
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]]
              .sell >= t_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]]
              .sell != 0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]]
              .sell != null
          ) {
            t_bh = this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[5]
            ].sell;
            if (
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell <
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]]
                  .sell &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != 0 &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != null &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell < t_bl
            ) {
              t_bl = this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[h]
              ].sell;
              t_cl = h;
            }
          }
          //Martlock
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]]
              .sell >= m_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]]
              .sell != 0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]]
              .sell != null
          ) {
            m_bh = this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[4]
            ].sell;
            if (
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell <
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]]
                  .sell &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != 0 &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != null &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell < m_bl
            ) {
              m_bl = this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[h]
              ].sell;
              m_cl = h;
            }
          }
          //Lymhurst
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]]
              .sell >= l_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]]
              .sell != 0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]]
              .sell != null
          ) {
            l_bh = this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[3]
            ].sell;
            if (
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell <
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]]
                  .sell &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != 0 &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != null &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell < l_bl
            ) {
              l_bl = this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[h]
              ].sell;
              l_cl = h;
            }
          }
          //FortSterling
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]]
              .sell >= f_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]]
              .sell != 0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]]
              .sell != null
          ) {
            f_bh = this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[2]
            ].sell;
            if (
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell <
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]]
                  .sell &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != 0 &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != null &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell < f_bl
            ) {
              f_bl = this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[h]
              ].sell;
              f_cl = h;
            }
          }
          //Bridgewatch
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]]
              .sell >= f_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]]
              .sell != 0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]]
              .sell != null
          ) {
            b_bh = this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[0]
            ].sell;
            if (
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell <
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]]
                  .sell &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != 0 &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell != null &&
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                .sell < f_bl
            ) {
              b_bl = this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[h]
              ].sell;
              b_cl = h;
            }
          }
        }
        //ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
        //Best sell
        hp -= lp;
        //Caerleon
        c_bh -= c_bl;
        //Thetford
        t_bh -= t_bl;
        //Martlock
        m_bh -= m_bl;
        //Lymhurst
        l_bh -= l_bl;
        //FortSterling
        f_bh -= f_bl;
        //Bridgewatch
        b_bh -= b_bl;

        //best sell ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
        if (hp < 200000 && lp != 0 && lp != null && lp != Infinity) {
          best_sell.push({
            item: this.getters.item[0].name[HL_item_lenght],
            profit: numeral(hp).format("0,0"),
            profit_check: hp,
            city_buy: this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[cl]
            ].city,
            city_buy_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[cl]]
                .sell
            ).format("0,0"),
            city_buy_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[cl]].sell,
            city_color_buy: "color : " + city[cl],
            city_sell: this.getters.itemData[HL_item_lenght].item_detail
              .details[cd[ch]].city,
            city_sell_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[ch]]
                .sell
            ).format("0,0"),
            city_sell_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[ch]].sell,
            city_color_sell: "color : " + city[ch],
            api_img:
              "https://render.albiononline.com/v1/item/" +
              this.getters.item[0].id[HL_item_lenght] +
              ".png",
            percent: numeral(
              (hp /
                this.getters.itemData[HL_item_lenght].item_detail.details[
                  cd[ch]
                ].sell) *
                100
            ).format("0,0"),
          });
        }
        //Caerleon ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
        if (c_bh < 200000 && c_bl != Infinity && c_bl != 0 && c_bl != null) {
          c_best_sell.push({
            item: this.getters.item[0].name[HL_item_lenght],
            profit: numeral(c_bh).format("0,0"),
            profit_check: c_bh,
            city_buy: this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[c_cl]
            ].city,
            city_buy_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[c_cl]
              ].sell
            ).format("0,0"),
            city_buy_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[c_cl]].sell,
            city_color_buy: "color : " + city[c_cl],
            city_sell: this.getters.itemData[HL_item_lenght].item_detail
              .details[cd[1]].city,
            city_sell_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]]
                .sell
            ).format("0,0"),
            city_sell_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[1]].sell,
            city_color_sell: "color : " + city[1],
            api_img:
              "https://render.albiononline.com/v1/item/" +
              this.getters.item[0].id[HL_item_lenght] +
              ".png",
            percent: numeral(
              (hp /
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]]
                  .sell) *
                100
            ).format("0,0"),
          });
        }
        //Thetford ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
        if (t_bh < 200000 && t_bl != Infinity && t_bl != 0 && t_bl != null) {
          t_best_sell.push({
            item: this.getters.item[0].name[HL_item_lenght],
            profit: numeral(t_bh).format("0,0"),
            profit_check: t_bh,
            city_buy: this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[t_cl]
            ].city,
            city_buy_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[t_cl]
              ].sell
            ).format("0,0"),
            city_buy_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[t_cl]].sell,
            city_color_buy: "color : " + city[t_cl],
            city_sell: this.getters.itemData[HL_item_lenght].item_detail
              .details[cd[5]].city,
            city_sell_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]]
                .sell
            ).format("0,0"),
            city_sell_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[5]].sell,
            city_color_sell: "color : " + city[5],
            api_img:
              "https://render.albiononline.com/v1/item/" +
              this.getters.item[0].id[HL_item_lenght] +
              ".png",
            percent: numeral(
              (hp /
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]]
                  .sell) *
                100
            ).format("0,0"),
          });
        }
        //Martlock
        if (m_bh < 200000 && m_bl != Infinity && m_bl != 0 && m_bl != null) {
          m_best_sell.push({
            item: this.getters.item[0].name[HL_item_lenght],
            profit: numeral(m_bh).format("0,0"),
            profit_check: m_bh,
            city_buy: this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[m_cl]
            ].city,
            city_buy_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[m_cl]
              ].sell
            ).format("0,0"),
            city_buy_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[m_cl]].sell,
            city_color_buy: "color : " + city[m_cl],
            city_sell: this.getters.itemData[HL_item_lenght].item_detail
              .details[cd[4]].city,
            city_sell_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]]
                .sell
            ).format("0,0"),
            city_sell_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[4]].sell,
            city_color_sell: "color : " + city[4],
            api_img:
              "https://render.albiononline.com/v1/item/" +
              this.getters.item[0].id[HL_item_lenght] +
              ".png",
            percent: numeral(
              (hp /
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]]
                  .sell) *
                100
            ).format("0,0"),
          });
        }
        //Lymhurst
        if (l_bh < 200000 && l_bl != Infinity && l_bl != 0 && l_bl != null) {
          l_best_sell.push({
            item: this.getters.item[0].name[HL_item_lenght],
            profit: numeral(l_bh).format("0,0"),
            profit_check: l_bh,
            city_buy: this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[l_cl]
            ].city,
            city_buy_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[l_cl]
              ].sell
            ).format("0,0"),
            city_buy_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[l_cl]].sell,
            city_color_buy: "color : " + city[l_cl],
            city_sell: this.getters.itemData[HL_item_lenght].item_detail
              .details[cd[3]].city,
            city_sell_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]]
                .sell
            ).format("0,0"),
            city_sell_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[3]].sell,
            city_color_sell: "color : " + city[3],
            api_img:
              "https://render.albiononline.com/v1/item/" +
              this.getters.item[0].id[HL_item_lenght] +
              ".png",
            percent: numeral(
              (hp /
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]]
                  .sell) *
                100
            ).format("0,0"),
          });
        }
        //FortSterling
        if (f_bh < 200000 && f_bl != Infinity && f_bl != 0 && f_bl != null) {
          f_best_sell.push({
            item: this.getters.item[0].name[HL_item_lenght],
            profit: numeral(f_bh).format("0,0"),
            profit_check: f_bh,
            city_buy: this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[f_cl]
            ].city,
            city_buy_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[f_cl]
              ].sell
            ).format("0,0"),
            city_buy_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[f_cl]].sell,
            city_color_buy: "color : " + city[f_cl],
            city_sell: this.getters.itemData[HL_item_lenght].item_detail
              .details[cd[2]].city,
            city_sell_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]]
                .sell
            ).format("0,0"),
            city_sell_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[2]].sell,
            city_color_sell: "color : " + city[2],
            api_img:
              "https://render.albiononline.com/v1/item/" +
              this.getters.item[0].id[HL_item_lenght] +
              ".png",
            percent: numeral(
              (hp /
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]]
                  .sell) *
                100
            ).format("0,0"),
          });
        }
        //Bridgewatch
        if (b_bh < 200000 && b_bl != Infinity && b_bl != 0 && b_bl != null) {
          b_best_sell.push({
            item: this.getters.item[0].name[HL_item_lenght],
            profit: numeral(b_bh).format("0,0"),
            profit_check: b_bh,
            city_buy: this.getters.itemData[HL_item_lenght].item_detail.details[
              cd[b_cl]
            ].city,
            city_buy_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[
                cd[b_cl]
              ].sell
            ).format("0,0"),
            city_buy_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[b_cl]].sell,
            city_color_buy: "color : " + city[b_cl],
            city_sell: this.getters.itemData[HL_item_lenght].item_detail
              .details[cd[0]].city,
            city_sell_price: numeral(
              this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]]
                .sell
            ).format("0,0"),
            city_sell_price_check: this.getters.itemData[HL_item_lenght]
              .item_detail.details[cd[0]].sell,
            city_color_sell: "color : " + city[0],
            api_img:
              "https://render.albiononline.com/v1/item/" +
              this.getters.item[0].id[HL_item_lenght] +
              ".png",
            percent: numeral(
              (hp /
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]]
                  .sell) *
                100
            ).format("0,0"),
          });
        }
        //reset price
        //best sell
        hp = 0;
        lp = Infinity;
        //Caerleon
        c_bh = 0;
        c_bl = Infinity;
        //thetford
        t_bh = 0;
        t_bl = Infinity;
        //Martlock
        m_bh = 0;
        m_bl = Infinity;
        //Lymhurst
        l_bh = 0;
        l_bl = Infinity;
        //FortSterling
        f_bh = 0;
        f_bl = Infinity;
        //Bridgewatch
        b_bh = 0;
        b_bl = Infinity;
      }

      //best sell
      best_sell.sort(function(a, b) {
        return parseFloat(b.profit_check) - parseFloat(a.profit_check);
      });

      //Caerleon
      c_best_sell.sort(function(c, d) {
        return parseFloat(d.profit_check) - parseFloat(c.profit_check);
      });
      // console.log("c_profit_check : " + c_profit_check);
      // console.log("c_best : " + c_best);
      //Thetford
      t_best_sell.sort(function(e, f) {
        return parseFloat(f.profit_check) - parseFloat(e.profit_check);
      });
      //Martlock
      m_best_sell.sort(function(g, h) {
        return parseFloat(h.profit_check) - parseFloat(g.profit_check);
      });
      //Lymhurst
      l_best_sell.sort(function(i, j) {
        return parseFloat(j.profit_check) - parseFloat(i.profit_check);
      });
      //FortSterling
      f_best_sell.sort(function(k, l) {
        return parseFloat(l.profit_check) - parseFloat(k.profit_check);
      });
      //Bridgewatch
      b_best_sell.sort(function(m, n) {
        return parseFloat(n.profit_check) - parseFloat(m.profit_check);
      });
      await commit("SET_H_L_PRICE", best_sell);
      await commit("SET_H_L_PRICE_C", c_best_sell);
      await commit("SET_H_L_PRICE_T", t_best_sell);
      await commit("SET_H_L_PRICE_M", m_best_sell);
      await commit("SET_H_L_PRICE_L", l_best_sell);
      await commit("SET_H_L_PRICE_F", f_best_sell);
      await commit("SET_H_L_PRICE_B", b_best_sell);
      console.log("****************************");
      console.log(this.getters.item_profit);
      console.table(b_best_sell);
      console.log(this.getters.itemData[0].item_detail.api_img);
      console.log("****************************");
    },
  },
  mutations: {
    SET_GOLD_PRICE(state, gold_price) {
      state.gold_price[0] = gold_price; //data
      state.gold_price[1] = true; //check
    },
    SET_ITEM_ID(state, itemId) {
      state.item[0]["id"] = itemId;
      state.item[1] = true;
    },
    SET_ITEM_NAME(state, itemName) {
      state.item[0]["name"] = itemName;
      /* console.log("555555555555555555");
      console.log(this.state.item[0].id.length);
      console.log("555555555555555555"); */
    },
    SET_ITEM_DATA_CITY(state, setdata) {
      state.itemData.push(setdata);
    },
    SET_H_L_PRICE(state, best_sell) {
      state.item_profit["best_sell"] = best_sell;
    },
    SET_H_L_PRICE_C(state, c_best_sell) {
      state.item_profit["Caerleon"] = c_best_sell;
    },
    SET_H_L_PRICE_T(state, t_best_sell) {
      state.item_profit["Thetford"] = t_best_sell;
    },
    SET_H_L_PRICE_M(state, m_best_sell) {
      state.item_profit["Martlock"] = m_best_sell;
    },
    SET_H_L_PRICE_L(state, l_best_sell) {
      state.item_profit["Lymhurst"] = l_best_sell;
    },
    SET_H_L_PRICE_F(state, f_best_sell) {
      state.item_profit["FortSterling"] = f_best_sell;
    },
    SET_H_L_PRICE_B(state, b_best_sell) {
      state.item_profit["Bridgewatch"] = b_best_sell;
      state.item_profit["check"] = true;
    },
  },
});
