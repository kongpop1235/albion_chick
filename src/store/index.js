import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";
import numeral from "numeral";

Vue.use(Vuex);

// let a = 0;

export const store = new Vuex.Store({
  state: {
    gold: [[], false],
    item: [{ id: null, name: null }, false],
    itemData: [
      /*{item_id : null, details: [{city : null, buy : null, buy_data : null, sell : null, sell_data : null}]}*/
    ],
    item_profit: [false, null, null, null],
  },
  getters: {
    gold: (state) => state.gold,
    item: (state) => state.item,
    itemData: (state) => state.itemData,
    item_profit: (state) => state.item_profit,
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

          for (let i = 1; i < 100; i++) {
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
                  details: [],
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
                    item_detail.details[cl] = {
                      city: items.data[s].city,
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
      const city = [
        "#FF952C",
        "#FF2626",
        "#F9F9F9",
        "#38CD00",
        "#00ADE9",
        "#C62EFF",
      ];

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

      for (
        let HL_item_lenght = 0;
        HL_item_lenght < this.getters.itemData.length;
        HL_item_lenght++
      ) {
        for (let h = 0; h < 6; h++) {
          //Best Sell
          //find best hight price
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[h].sell >
              hp &&
            this.getters.itemData[HL_item_lenght].item_detail.details[h].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[h].sell !=
              null
          ) {
            hp = this.getters.itemData[HL_item_lenght].item_detail.details[h]
              .sell;
            ch = h;
          }
          //find best low price
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[h].sell <
              hp &&
            this.getters.itemData[HL_item_lenght].item_detail.details[h].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[h].sell !=
              null
          ) {
            lp = this.getters.itemData[HL_item_lenght].item_detail.details[h]
              .sell;
            cl = h;
          }
          //caerleon
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[1].sell >=
              c_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[1].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[1].sell !=
              null
          ) {
            c_bh = this.getters.itemData[HL_item_lenght].item_detail.details[1]
              .sell;
            if (
              this.getters.itemData[HL_item_lenght].item_detail.details[h]
                .sell <
                this.getters.itemData[HL_item_lenght].item_detail.details[1]
                  .sell &&
              this.getters.itemData[HL_item_lenght].item_detail.details[h]
                .sell != 0 &&
              this.getters.itemData[HL_item_lenght].item_detail.details[h]
                .sell != null &&
              this.getters.itemData[HL_item_lenght].item_detail.details[h]
                .sell < c_bl
            ) {
              c_bl = this.getters.itemData[HL_item_lenght].item_detail.details[
                h
              ].sell;
              c_cl = h;
            }
          }
          //Thetford
          if (
            this.getters.itemData[HL_item_lenght].item_detail.details[5].sell >=
              t_bh &&
            this.getters.itemData[HL_item_lenght].item_detail.details[5].sell !=
              0 &&
            this.getters.itemData[HL_item_lenght].item_detail.details[5].sell !=
              null
          ) {
            t_bh = this.getters.itemData[HL_item_lenght].item_detail.details[5]
              .sell;
            if (
              this.getters.itemData[HL_item_lenght].item_detail.details[h]
                .sell <
                this.getters.itemData[HL_item_lenght].item_detail.details[5]
                  .sell &&
              this.getters.itemData[HL_item_lenght].item_detail.details[h]
                .sell != 0 &&
              this.getters.itemData[HL_item_lenght].item_detail.details[h]
                .sell != null &&
              this.getters.itemData[HL_item_lenght].item_detail.details[h]
                .sell < t_bl
            ) {
              t_bl = this.getters.itemData[HL_item_lenght].item_detail.details[
                h
              ].sell;
              t_cl = h;
            }
          }
        }
        //ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
        //best sell
        hp -= lp;
        //Caerleon
        c_bh -= c_bl;
        //Thetford
        t_bh -= t_bl;

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
          ].item_detail.details[cl].city;
          best_sell_check[best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[cl].sell;
          best_sell_check[best_loop].city_color_buy = "color : " + city[cl];
          best_sell_check[best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[ch].sell;
          best_sell_check[best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[ch].city;
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
          ].item_detail.details[c_cl].city;
          c_best_check[c_best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[c_cl].sell;
          c_best_check[c_best_loop].city_color_buy = "color : " + city[c_cl];
          c_best_check[c_best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[1].city;
          c_best_check[c_best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[1].sell;
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
          console.log(
            "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    Thetford"
          );
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
          ].item_detail.details[t_cl].city;
          t_best_check[t_best_loop].city_buy_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[t_cl].sell;
          t_best_check[t_best_loop].city_color_buy = "color : " + city[t_cl];
          t_best_check[t_best_loop].city_sell = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[5].city;
          t_best_check[t_best_loop].city_sell_price = this.getters.itemData[
            HL_item_lenght
          ].item_detail.details[5].sell;
          t_best_check[t_best_loop].city_color_sell = "color : " + city[1];
          t_best_check[t_best_loop].api_img =
            "https://render.albiononline.com/v1/item/" +
            this.getters.item[0].id[HL_item_lenght] +
            ".png";
          t_best_loop++;
        }

        //reset price
        //best sell
        hp = 0;
        lp = 0;
        //Caerleon
        c_bh = 0;
        c_bl = Infinity;
        //thetford
        t_bh = 0;
        t_bl = Infinity;
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
      await commit("SET_H_L_PRICE", best_sell);
      await commit("SET_H_L_PRICE_C", c_best_sell);
      await commit("SET_H_L_PRICE_T", t_best_sell);
      console.log("****************************");
      console.log(this.getters.item_profit);
      console.log(best_sell);
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
      state.item_profit[1] = best_sell;
    },
    SET_H_L_PRICE_C(state, c_best_sell) {
      state.item_profit[2] = c_best_sell;
    },
    SET_H_L_PRICE_T(state, t_best_sell) {
      state.item_profit[3] = t_best_sell;
    },
  },
});
