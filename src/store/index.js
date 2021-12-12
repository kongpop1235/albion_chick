import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

let y = new Date(Date.now() - 864e5);
let d = new Date();
// let a = 0;

export const store = new Vuex.Store({
  state: {
    gold: [[], false],
    item: [{ id: null, name: null }, false],
    itemData: [
      // { city: null, buy: null, buy_date: null, sell: null, sell_date: null }
    ],
  },
  getters: {
    gold: (state) => state.gold,
    item: (state) => state.item,
    itemData: (state) => state.itemData,
  },
  actions: {
    getGold({ commit }) {
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

          for (let i = 1; i <= 21; i++) {
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
      const city = [
        "Bridgewatch",
        "Caerleon",
        "Fort Sterling",
        "Lymhurst",
        "Martlock",
        "Thetford",
        "Black Market",
      ];
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
            console.log("XXXXXXXXXXXXXXXXXXXXXXXX");
            console.log(items.data[6].item_id);
            console.log("XXXXXXXXXXXXXXXXXXXXXXXX");
            for (let z = item_lenght; z < 10 + item_lenght; ) {
              for (let x = 0; x < 10; ) {
                const item_test = [];
                console.log(x * 6);
                console.log(items.data[x * 6].item_id);
                console.log(this.state.item[0]["id"][z]);
                // commit("SET_ITEM_DATA_ITEM", [items.data[x*6].item_id]);

                if (items.data[x * 6].item_id == this.state.item[0]["id"][z]) {
                  item_test.push({
                    item_id: items.data[x].item_id,
                    details: null,
                  });
                  for (let y = 0; y < 6; y++) {
                    let s = x * 6 + y;
                    console.log("item : true" + x * 6);
                    if (city[y] == items.data[s].city) {
                      console.log("city : true" + s);
                      item_test[x].details[y] = {
                        city: items.data[s].city,
                        history: [],
                      };
                      item_test[x].details[y].history.push({
                        buy: items.data[s].buy_price_max,
                        buy_date: items.data[s].buy_price_max_date,
                        sell: items.data[s].sell_price_min,
                        sell_date: items.data[s].sell_price_min_date,
                      });
                      console.log("999999999999999999999999999999999");
                      console.log(item_test);
                      console.log("999999999999999999999999999999999");
                    }
                  }
                  commit("SET_ITEM_DATA_CITY", {
                    item_test,
                  });
                }
                x++;
              }
              z++;
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
  },
});
