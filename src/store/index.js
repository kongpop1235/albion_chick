import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";
import numeral from "numeral";

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
const city = [
  "#FF952C",
  "#FF2626",
  "#F9F9F9",
  "#38CD00",
  "#00ADE9",
  "#C62EFF",
];

export const store = new Vuex.Store({
  state: {
    gold: [[], false],
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
  },
  getters: {
    gold: (state) => state.gold,
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
  },
  actions: {
    getGold({ commit }) {
      let y = new Date(Date.now() - 864e5);
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
          commit("SET_GOLD", gold_p.data);
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

          for (let i = 1; i < 41; i++) {
            //max loop 7694
            if (ic == 187) {
              ic = 188;
            } else if (ic == 209) {
              ic = 227;
            } else if (ic == 228) {
              ic = 410;
            } else if (ic == 2208) {
              ic = 2209;
            } else if (ic == 2259) {
              ic = 2260;
            } else if (ic == 2308) {
              ic = 2309;
            } else if (ic == 2409) {
              ic = 2427;
            } else if (ic == 2469) {
              ic = 2470;
            } else if (ic == 2476) {
              ic = 2477;
            } else if (ic == 2478) {
              ic = 2479;
            } else if (ic == 2511) {
              ic = 2512;
            } else if (ic == 7010) {
              ic = 7015;
            } else if (ic == 7129) {
              ic = 7130;
            } else if (ic == 7226) {
              ic = 7227;
            } else if (ic == 7300) {
              ic = 7302;
            } else if (ic == 7456) {
              ic = 7457;
            } else if (ic == 7458) {
              ic = 7459;
            } else if (ic == 7460) {
              ic = 7461;
            } else if (ic == 7462) {
              ic = 7463;
            } else if (ic == 7464) {
              ic = 7465;
            } else if (ic == 7466) {
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
              "?locations=" +
              "bridgewatch,caerleon,fortsterling,lymhurst,martlock,thetford" +
              "&qualities=1"
          )
          .then((items) => {
            for (let ic = item_lenght; ic < 10 + item_lenght; ic++) {
              for (let il = 0; il < 10; ) {
                let aa = il * 6;
                const item_detail = {
                  item_id: items.data[aa].item_id,
                  api_img: "https://render.albiononline.com/v1/item/" + items.data[aa].item_id + ".png",
                  details: {Bridgewatch:null, Caerleon:null, FortSterling:null, Lymhurst:null, Martlock:null, Thetford:null},
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
          item_lenght = 10;
        } else {
          item_lenght += 10;
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
      const best_sell_check = [null]; //เก็บข้อมูลโดยรวม
      const profit_check = [];
      let best_loop = 0;
      //caerleon
      let c_bh = null;
      let c_bl = Infinity;
      let c_cl = null; //เมืองที่ไปซื้อสินค้า
      const c_best_check = [null]; //เก็บข้อมูลโดยรวม
      const c_profit_check = [];
      let c_best_loop = 0;
      //thetford
      let t_bh = null;
      let t_bl = null;
      let t_cl = null;
      const t_best_check = [null];
      const t_profit_check = [];
      let t_best_loop = 0;
      //Martlock
      let m_bh = null;
      let m_bl = null;
      let m_cl = null;
      const m_best_check = [null];
      const m_profit_check = [];
      let m_best_loop = 0;
      //Lymhurst
      let l_bh = null;
      let l_bl = null;
      let l_cl = null;
      const l_best_check = [null];
      const l_profit_check = [];
      let l_best_loop = 0;
      //FortSterling
      let f_bh = null;
      let f_bl = null;
      let f_cl = null;
      const f_best_check = [null];
      const f_profit_check = [];
      let f_best_loop = 0;
      //Bridgewatch
      let b_bh = null;
      let b_bl = null;
      let b_cl = null;
      const b_best_check = [null];
      const b_profit_check = [];
      let b_best_loop = 0;

      for (
        let HL_item_lenght = 0;
        HL_item_lenght < this.getters.itemData.length;
        HL_item_lenght++
      ) {
        for (let h = 0; h < 6; h++) {
          //Best Sell
          //find best hight price
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]].sell >=
              hp &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]].sell !=
              null
          ) {
            hp = this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
              .sell;
            ch = h;
            //find best low price
            for (let hl = 0; hl < 6; hl++) {
              if (
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[hl]]
                  .sell <
                  this.getters.itemData[HL_item_lenght].item_detail.details[cd[h]]
                    .sell &&
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[hl]]
                  .sell != 0 &&
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[hl]]
                  .sell != null &&
                this.getters.itemData[HL_item_lenght].item_detail.details[cd[hl]]
                  .sell < lp
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
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]].sell >=
              c_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]].sell !=
              null
          ) {
            c_bh = this.getters.itemData[HL_item_lenght].item_detail.details[cd[1]]
              .sell;
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
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]].sell >=
              t_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]].sell !=
              null
          ) {
            t_bh = this.getters.itemData[HL_item_lenght].item_detail.details[cd[5]]
              .sell;
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
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]].sell >=
              m_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]].sell !=
              null
          ) {
            m_bh = this.getters.itemData[HL_item_lenght].item_detail.details[cd[4]]
              .sell;
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
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]].sell >=
              l_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]].sell !=
              null
          ) {
            l_bh = this.getters.itemData[HL_item_lenght].item_detail.details[cd[3]]
              .sell;
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
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]].sell >=
              f_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]].sell !=
              null
          ) {
            f_bh = this.getters.itemData[HL_item_lenght].item_detail.details[cd[2]]
              .sell;
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
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]].sell >=
              f_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]].sell !=
              null
          ) {
            b_bh = this.getters.itemData[HL_item_lenght].item_detail.details[cd[0]]
              .sell;
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
        if (hp < 200000 && lp != 0 && lp != null) {
          best_sell_check[best_loop] = {
            item: null,
            profit: null,
            city_buy: null,
            city_buy_price: null,
            city_color_buy: null,
            city_sell: null,
            city_sell_price: null,
            city_color_sell: null,
            api_img: null,
          };
          best_sell_check[best_loop].item = this.getters.item[0].name[
            HL_item_lenght
          ];
          profit_check[best_loop] = hp; //สำหรับจัดเรียงมูลค่า
          best_sell_check[best_loop].profit = hp;
          best_sell_check[best_loop].city_buy = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[cl]].city;
          best_sell_check[best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[cl]].sell;
          best_sell_check[best_loop].city_color_buy = "color : " + city[cl];
          best_sell_check[best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[ch]].sell;
          best_sell_check[best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[ch]].city;
          best_sell_check[best_loop].city_color_sell = "color : " + city[ch];
          best_sell_check[best_loop].api_img =
            "https://render.albiononline.com/v1/item/" +
            this.getters.item[0].id[HL_item_lenght] +
            ".png";
          best_loop++;
        }
        //Caerleon ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
        if (c_bh < 200000 && c_bl != Infinity && c_bl != 0 && c_bl != null) {
          c_best_check[c_best_loop] = {
            item: null,
            profit: null,
            city_buy: null,
            city_buy_price: null,
            city_color_buy: null,
            city_sell: null,
            city_sell_price: null,
            city_color_sell: null,
            api_img: null,
          };
          c_best_check[c_best_loop].item = this.getters.item[0].name[
            HL_item_lenght
          ];
          c_profit_check[c_best_loop] = c_bh; //สำหรับจัดเรียงมูลค่า
          c_best_check[c_best_loop].profit = c_bh;
          c_best_check[c_best_loop].city_buy = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[c_cl]].city;
          c_best_check[c_best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[c_cl]].sell;
          c_best_check[c_best_loop].city_color_buy = "color : " + city[c_cl];
          c_best_check[c_best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[1]].city;
          c_best_check[c_best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[1]].sell;
          c_best_check[c_best_loop].city_color_sell = "color : " + city[1];
          c_best_check[c_best_loop].api_img =
            "https://render.albiononline.com/v1/item/" +
            this.getters.item[0].id[HL_item_lenght] +
            ".png";
          //console.log("c_best : " + c_best[0].profit);
          c_best_loop++;
        }
        //Thetford ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
        if (t_bh < 200000 && t_bl != Infinity && t_bl != 0 && t_bl != null) {
          t_best_check[t_best_loop] = {
            item: null,
            profit: null,
            city_buy: null,
            city_buy_price: null,
            city_color_buy: null,
            city_sell: null,
            city_sell_price: null,
            city_color_sell: null,
            api_img: null,
          };
          t_best_check[t_best_loop].item = this.getters.item[0].name[
            HL_item_lenght
          ];
          t_profit_check[t_best_loop] = t_bh; //สำหรับจัดเรียงมูลค่า
          t_best_check[t_best_loop].profit = t_bh;
          t_best_check[t_best_loop].city_buy = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[t_cl]].city;
          t_best_check[t_best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[t_cl]].sell;
          t_best_check[t_best_loop].city_color_buy = "color : " + city[t_cl];
          t_best_check[t_best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[5]].city;
          t_best_check[t_best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[5]].sell;
          t_best_check[t_best_loop].city_color_sell = "color : " + city[5];
          t_best_check[t_best_loop].api_img =
            "https://render.albiononline.com/v1/item/" +
            this.getters.item[0].id[HL_item_lenght] +
            ".png";
          t_best_loop++;
        }
        //Martlock
        if (m_bh < 200000 && m_bl != Infinity && m_bl != 0 && m_bl != null) {
          m_best_check[m_best_loop] = {
            item: null,
            profit: null,
            city_buy: null,
            city_buy_price: null,
            city_color_buy: null,
            city_sell: null,
            city_sell_price: null,
            city_color_sell: null,
            api_img: null,
          };
          m_best_check[m_best_loop].item = this.getters.item[0].name[
            HL_item_lenght
          ];
          m_profit_check[m_best_loop] = m_bh; //สำหรับจัดเรียงมูลค่า
          m_best_check[m_best_loop].profit = m_bh;
          m_best_check[m_best_loop].city_buy = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[m_cl]].city;
          m_best_check[m_best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[m_cl]].sell;
          m_best_check[m_best_loop].city_color_buy = "color : " + city[m_cl];
          m_best_check[m_best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[4]].city;
          m_best_check[m_best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[4]].sell;
          m_best_check[m_best_loop].city_color_sell = "color : " + city[4];
          m_best_check[m_best_loop].api_img =
            "https://render.albiononline.com/v1/item/" +
            this.getters.item[0].id[HL_item_lenght] +
            ".png";
          m_best_loop++;
        }
        //Lymhurst
        if (l_bh < 200000 && l_bl != Infinity && l_bl != 0 && l_bl != null) {
          l_best_check[l_best_loop] = {
            item: null,
            profit: null,
            city_buy: null,
            city_buy_price: null,
            city_color_buy: null,
            city_sell: null,
            city_sell_price: null,
            city_color_sell: null,
            api_img: null,
          };
          l_best_check[l_best_loop].item = this.getters.item[0].name[
            HL_item_lenght
          ];
          l_profit_check[l_best_loop] = l_bh; //สำหรับจัดเรียงมูลค่า
          l_best_check[l_best_loop].profit = l_bh;
          l_best_check[l_best_loop].city_buy = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[l_cl]].city;
          l_best_check[l_best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[l_cl]].sell;
          l_best_check[l_best_loop].city_color_buy = "color : " + city[l_cl];
          l_best_check[l_best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[3]].city;
          l_best_check[l_best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[3]].sell;
          l_best_check[l_best_loop].city_color_sell = "color : " + city[3];
          l_best_check[l_best_loop].api_img =
            "https://render.albiononline.com/v1/item/" +
            this.getters.item[0].id[HL_item_lenght] +
            ".png";
          l_best_loop++;
        }
        //FortSterling
        if (f_bh < 200000 && f_bl != Infinity && f_bl != 0 && f_bl != null) {
          f_best_check[f_best_loop] = {
            item: null,
            profit: null,
            city_buy: null,
            city_buy_price: null,
            city_color_buy: null,
            city_sell: null,
            city_sell_price: null,
            city_color_sell: null,
            api_img: null,
          };
          f_best_check[f_best_loop].item = this.getters.item[0].name[
            HL_item_lenght
          ];
          f_profit_check[f_best_loop] = f_bh; //สำหรับจัดเรียงมูลค่า
          f_best_check[f_best_loop].profit = f_bh;
          f_best_check[f_best_loop].city_buy = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[f_cl]].city;
          f_best_check[f_best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[f_cl]].sell;
          f_best_check[f_best_loop].city_color_buy = "color : " + city[f_cl];
          f_best_check[f_best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[2]].city;
          f_best_check[f_best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[2]].sell;
          f_best_check[f_best_loop].city_color_sell = "color : " + city[2];
          f_best_check[f_best_loop].api_img =
            "https://render.albiononline.com/v1/item/" +
            this.getters.item[0].id[HL_item_lenght] +
            ".png";
          f_best_loop++;
        }
        //Bridgewatch
        if (b_bh < 200000 && b_bl != Infinity && b_bl != 0 && b_bl != null) {
          b_best_check[b_best_loop] = {
            item: null,
            profit: null,
            city_buy: null,
            city_buy_price: null,
            city_color_buy: null,
            city_sell: null,
            city_sell_price: null,
            city_color_sell: null,
            api_img: null,
          };
          b_best_check[b_best_loop].item = this.getters.item[0].name[
            HL_item_lenght
          ];
          b_profit_check[b_best_loop] = b_bh; //สำหรับจัดเรียงมูลค่า
          b_best_check[b_best_loop].profit = b_bh;
          b_best_check[b_best_loop].city_buy = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[b_cl]].city;
          b_best_check[b_best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[b_cl]].sell;
          b_best_check[b_best_loop].city_color_buy = "color : " + city[b_cl];
          b_best_check[b_best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[0]].city;
          b_best_check[b_best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cd[0]].sell;
          b_best_check[b_best_loop].city_color_sell = "color : " + city[0];
          b_best_check[b_best_loop].api_img =
            "https://render.albiononline.com/v1/item/" +
            this.getters.item[0].id[HL_item_lenght] +
            ".png";
          b_best_loop++;
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
      const best_sell = [];
      profit_check.sort(function(a, b) {
        return b - a;
      });
      for (let u = 0; u < profit_check.length; u++) {
        for (let i = 0; i < profit_check.length; i++) {
          if (profit_check[u] == best_sell_check[i].profit) {
            best_sell[u] = {
              item: null,
              profit: null,
              city_buy: null,
              city_buy_price: null,
              city_color_buy: null,
              city_sell: null,
              city_sell_price: null,
              city_color_sell: null,
              api_img: null,
            };

            best_sell[u].item = best_sell_check[i].item;
            best_sell[u].profit = numeral(best_sell_check[i].profit).format(
              "0,0"
            );
            best_sell[u].city_buy = best_sell_check[i].city_buy;
            best_sell[u].city_buy_price = numeral(
              best_sell_check[i].city_buy_price
            ).format("0,0");
            best_sell[u].city_color_buy = best_sell_check[i].city_color_buy;
            best_sell[u].city_sell = best_sell_check[i].city_sell;
            best_sell[u].city_sell_price = numeral(
              best_sell_check[i].city_sell_price
            ).format("0,0");
            best_sell[u].city_color_sell = best_sell_check[i].city_color_sell;
            best_sell[u].api_img = best_sell_check[i].api_img;
          }
        }
      }
      //Caerleon
      const c_best_sell = [];
      c_profit_check.sort(function(c, d) {
        return d - c;
      });
      // console.log("c_profit_check : " + c_profit_check);
      // console.log("c_best : " + c_best);
      for (let u = 0; u < c_profit_check.length; u++) {
        for (let i = 0; i < c_profit_check.length; i++) {
          if (c_profit_check[u] == c_best_check[i].profit) {
            c_best_sell[u] = {
              item: null,
              profit: null,
              city_buy: null,
              city_buy_price: null,
              city_color_buy: null,
              city_sell: null,
              city_sell_price: null,
              city_color_sell: null,
              api_img: null,
            };
            c_best_sell[u].item = c_best_check[i].item;
            c_best_sell[u].profit = numeral(c_best_check[i].profit).format(
              "0,0"
            );
            c_best_sell[u].city_buy = c_best_check[i].city_buy;
            c_best_sell[u].city_buy_price = numeral(
              c_best_check[i].city_buy_price
            ).format("0,0");
            c_best_sell[u].city_color_buy = c_best_check[i].city_color_buy;
            c_best_sell[u].city_sell = c_best_check[i].city_sell;
            c_best_sell[u].city_sell_price = numeral(
              c_best_check[i].city_sell_price
            ).format("0,0");
            c_best_sell[u].city_color_sell = c_best_check[i].city_color_sell;
            c_best_sell[u].api_img = c_best_check[i].api_img;
          }
        }
      }
      //Thetford
      const t_best_sell = [];
      t_profit_check.sort(function(e, f) {
        return f - e;
      });
      for (let u = 0; u < t_profit_check.length; u++) {
        for (let i = 0; i < t_profit_check.length; i++) {
          if (t_profit_check[u] == t_best_check[i].profit) {
            t_best_sell[u] = {
              item: null,
              profit: null,
              city_buy: null,
              city_buy_price: null,
              city_color_buy: null,
              city_sell: null,
              city_sell_price: null,
              city_color_sell: null,
              api_img: null,
            };
            t_best_sell[u].item = t_best_check[i].item;
            t_best_sell[u].profit = numeral(t_best_check[i].profit).format(
              "0,0"
            );
            t_best_sell[u].city_buy = t_best_check[i].city_buy;
            t_best_sell[u].city_buy_price = numeral(
              t_best_check[i].city_buy_price
            ).format("0,0");
            t_best_sell[u].city_color_buy = t_best_check[i].city_color_buy;
            t_best_sell[u].city_sell = t_best_check[i].city_sell;
            t_best_sell[u].city_sell_price = numeral(
              t_best_check[i].city_sell_price
            ).format("0,0");
            t_best_sell[u].city_color_sell = t_best_check[i].city_color_sell;
            t_best_sell[u].api_img = t_best_check[i].api_img;
          }
        }
      }
      //Martlock
      const m_best_sell = [];
      m_profit_check.sort(function(g, h) {
        return h - g;
      });
      for (let u = 0; u < m_profit_check.length; u++) {
        for (let i = 0; i < m_profit_check.length; i++) {
          if (m_profit_check[u] == m_best_check[i].profit) {
            m_best_sell[u] = {
              item: null,
              profit: null,
              city_buy: null,
              city_buy_price: null,
              city_color_buy: null,
              city_sell: null,
              city_sell_price: null,
              city_color_sell: null,
              api_img: null,
            };
            m_best_sell[u].item = m_best_check[i].item;
            m_best_sell[u].profit = numeral(m_best_check[i].profit).format(
              "0,0"
            );
            m_best_sell[u].city_buy = m_best_check[i].city_buy;
            m_best_sell[u].city_buy_price = numeral(
              m_best_check[i].city_buy_price
            ).format("0,0");
            m_best_sell[u].city_color_buy = m_best_check[i].city_color_buy;
            m_best_sell[u].city_sell = m_best_check[i].city_sell;
            m_best_sell[u].city_sell_price = numeral(
              m_best_check[i].city_sell_price
            ).format("0,0");
            m_best_sell[u].city_color_sell = m_best_check[i].city_color_sell;
            m_best_sell[u].api_img = m_best_check[i].api_img;
          }
        }
      }
      //Lymhurst
      const l_best_sell = [];
      l_profit_check.sort(function(i, j) {
        return j - i;
      });
      for (let u = 0; u < l_profit_check.length; u++) {
        for (let i = 0; i < l_profit_check.length; i++) {
          if (l_profit_check[u] == l_best_check[i].profit) {
            l_best_sell[u] = {
              item: null,
              profit: null,
              city_buy: null,
              city_buy_price: null,
              city_color_buy: null,
              city_sell: null,
              city_sell_price: null,
              city_color_sell: null,
              api_img: null,
            };
            l_best_sell[u].item = l_best_check[i].item;
            l_best_sell[u].profit = numeral(l_best_check[i].profit).format(
              "0,0"
            );
            l_best_sell[u].city_buy = l_best_check[i].city_buy;
            l_best_sell[u].city_buy_price = numeral(
              l_best_check[i].city_buy_price
            ).format("0,0");
            l_best_sell[u].city_color_buy = l_best_check[i].city_color_buy;
            l_best_sell[u].city_sell = l_best_check[i].city_sell;
            l_best_sell[u].city_sell_price = numeral(
              l_best_check[i].city_sell_price
            ).format("0,0");
            l_best_sell[u].city_color_sell = l_best_check[i].city_color_sell;
            l_best_sell[u].api_img = l_best_check[i].api_img;
          }
        }
      }
      //FortSterling
      const f_best_sell = [];
      f_profit_check.sort(function(i, j) {
        return j - i;
      });
      for (let u = 0; u < f_profit_check.length; u++) {
        for (let i = 0; i < f_profit_check.length; i++) {
          if (f_profit_check[u] == f_best_check[i].profit) {
            f_best_sell[u] = {
              item: null,
              profit: null,
              city_buy: null,
              city_buy_price: null,
              city_color_buy: null,
              city_sell: null,
              city_sell_price: null,
              city_color_sell: null,
              api_img: null,
            };
            f_best_sell[u].item = f_best_check[i].item;
            f_best_sell[u].profit = numeral(f_best_check[i].profit).format(
              "0,0"
            );
            f_best_sell[u].city_buy = f_best_check[i].city_buy;
            f_best_sell[u].city_buy_price = numeral(
              f_best_check[i].city_buy_price
            ).format("0,0");
            f_best_sell[u].city_color_buy = f_best_check[i].city_color_buy;
            f_best_sell[u].city_sell = f_best_check[i].city_sell;
            f_best_sell[u].city_sell_price = numeral(
              f_best_check[i].city_sell_price
            ).format("0,0");
            f_best_sell[u].city_color_sell = f_best_check[i].city_color_sell;
            f_best_sell[u].api_img = f_best_check[i].api_img;
          }
        }
      }
      //Bridgewatch
      const b_best_sell = [];
      b_profit_check.sort(function(k, l) {
        return l - k;
      });
      for (let u = 0; u < b_profit_check.length; u++) {
        for (let i = 0; i < b_profit_check.length; i++) {
          if (b_profit_check[u] == b_best_check[i].profit) {
            b_best_sell[u] = {
              item: null,
              profit: null,
              city_buy: null,
              city_buy_price: null,
              city_color_buy: null,
              city_sell: null,
              city_sell_price: null,
              city_color_sell: null,
              api_img: null,
            };
            b_best_sell[u].item = b_best_check[i].item;
            b_best_sell[u].profit = numeral(b_best_check[i].profit).format(
              "0,0"
            );
            b_best_sell[u].city_buy = b_best_check[i].city_buy;
            b_best_sell[u].city_buy_price = numeral(
              b_best_check[i].city_buy_price
            ).format("0,0");
            b_best_sell[u].city_color_buy = b_best_check[i].city_color_buy;
            b_best_sell[u].city_sell = b_best_check[i].city_sell;
            b_best_sell[u].city_sell_price = numeral(
              b_best_check[i].city_sell_price
            ).format("0,0");
            b_best_sell[u].city_color_sell = b_best_check[i].city_color_sell;
            b_best_sell[u].api_img = b_best_check[i].api_img;
          }
        }
      }
      await commit("SET_H_L_PRICE", best_sell);
      await commit("SET_H_L_PRICE_C", c_best_sell);
      await commit("SET_H_L_PRICE_T", t_best_sell);
      await commit("SET_H_L_PRICE_M", m_best_sell);
      await commit("SET_H_L_PRICE_L", l_best_sell);
      await commit("SET_H_L_PRICE_F", f_best_sell);
      await commit("SET_H_L_PRICE_B", b_best_sell);
      console.log("****************************");
      console.log(this.getters.item_profit);
      console.log(best_sell);
      console.log(this.getters.itemData[0].item_detail.api_img);
      console.log("****************************");
    },
  },
  mutations: {
    SET_GOLD(state, gold) {
      state.gold[0] = gold; //data
      state.gold[1] = true; //check
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
