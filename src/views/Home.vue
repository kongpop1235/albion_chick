<template>
  <v-card class="rounded-0 bg_main px-0 mx-10 my-6" elevation="0" rounded-0>
    <v-row>
      <v-col cols="12" lg="4">
        <BestSell
          class="grey--text text--lighten-1"
          :bs_in="item_n"
          :bs_ip="item_p"
          :bs_cb="city_buy"
          :bs_cs="city_sell"
          :bs_img="api_img_link_f"
          :bs_cb_c="city_buy_color"
          :bs_cs_c="city_sell_color"
        />
      </v-col>
      <v-col cols="12" lg="8">
        <Top5SellCaerleon
          class="grey--text text--lighten-1"
          :c_api_img_1="c_api_img[0]"
          :c_item_name_1="c_item_n[0]"
          :c_item_p_1="c_item_p[0]"
          :c_city_buy_1="c_city_buy[0]"
          :c_city_buy_color_1="c_city_buy_color[0]"
          :c_city_sell_1="c_city_sell[0]"
          :c_api_img_2="c_api_img[1]"
          :c_item_name_2="c_item_n[1]"
          :c_item_p_2="c_item_p[1]"
          :c_city_buy_2="c_city_buy[1]"
          :c_city_buy_color_2="c_city_buy_color[1]"
          :c_city_sell_2="c_city_sell[1]"
          :c_api_img_3="c_api_img[2]"
          :c_item_name_3="c_item_n[2]"
          :c_item_p_3="c_item_p[2]"
          :c_city_buy_3="c_city_buy[2]"
          :c_city_buy_color_3="c_city_buy_color[2]"
          :c_city_sell_3="c_city_sell[2]"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <GoldPrice class="grey--text text--lighten-1" />
      </v-col>
      <v-col cols="12" lg="4">
        <Thetford
          class="grey--text text--lighten-1"
          :t_api_img_1="t_api_img[0]"
          :t_item_name_1="t_item_n[0]"
          :t_item_p_1="t_item_p[0]"
          :t_percen_1="t_percen[0]"
          :t_city_buy_1="t_city_buy[0]"
          :t_city_buy_color_1="t_city_buy_color[0]"
          :t_city_sell_1="t_city_sell[0]"
          :t_api_img_2="t_api_img[1]"
          :t_item_name_2="t_item_n[1]"
          :t_item_p_2="t_item_p[1]"
          :t_percen_2="t_percen[1]"
          :t_city_buy_2="t_city_buy[1]"
          :t_city_buy_color_2="t_city_buy_color[1]"
          :t_city_sell_2="t_city_sell[1]"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <Martlock
          class="grey--text text--lighten-1"
          :m_api_img_1="m_api_img[0]"
          :m_item_name_1="m_item_n[0]"
          :m_item_p_1="m_item_p[0]"
          :m_percen_1="m_percen[0]"
          :m_city_buy_1="m_city_buy[0]"
          :m_city_buy_color_1="m_city_buy_color[0]"
          :m_city_sell_1="m_city_sell[0]"
          :m_api_img_2="m_api_img[1]"
          :m_item_name_2="m_item_n[1]"
          :m_item_p_2="m_item_p[1]"
          :m_percen_2="m_percen[1]"
          :m_city_buy_2="m_city_buy[1]"
          :m_city_buy_color_2="m_city_buy_color[1]"
          :m_city_sell_2="m_city_sell[1]"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <Lymhurst
          class="grey--text text--lighten-1"
          :l_api_img_1="l_api_img[0]"
          :l_item_name_1="l_item_n[0]"
          :l_item_p_1="l_item_p[0]"
          :l_percen_1="l_percen[0]"
          :l_city_buy_1="l_city_buy[0]"
          :l_city_buy_color_1="l_city_buy_color[0]"
          :l_city_sell_1="l_city_sell[0]"
          :l_api_img_2="l_api_img[1]"
          :l_item_name_2="l_item_n[1]"
          :l_item_p_2="l_item_p[1]"
          :l_percen_2="l_percen[1]"
          :l_city_buy_2="l_city_buy[1]"
          :l_city_buy_color_2="l_city_buy_color[1]"
          :l_city_sell_2="l_city_sell[1]"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <FortSterling
          class="grey--text text--lighten-1"
          :f_api_img_1="f_api_img[0]"
          :f_item_name_1="f_item_n[0]"
          :f_item_p_1="f_item_p[0]"
          :f_percen_1="f_percen[0]"
          :f_city_buy_1="f_city_buy[0]"
          :f_city_buy_color_1="f_city_buy_color[0]"
          :f_city_sell_1="f_city_sell[0]"
          :f_api_img_2="f_api_img[1]"
          :f_item_name_2="f_item_n[1]"
          :f_item_p_2="f_item_p[1]"
          :f_percen_2="f_percen[1]"
          :f_city_buy_2="f_city_buy[1]"
          :f_city_buy_color_2="f_city_buy_color[1]"
          :f_city_sell_2="f_city_sell[1]"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <Bridgewatch
          class="grey--text text--lighten-1"
          :b_api_img_1="b_api_img[0]"
          :b_item_name_1="b_item_n[0]"
          :b_item_p_1="b_item_p[0]"
          :b_percen_1="b_percen[0]"
          :b_city_buy_1="b_city_buy[0]"
          :b_city_buy_color_1="b_city_buy_color[0]"
          :b_city_sell_1="b_city_sell[0]"
          :b_api_img_2="b_api_img[1]"
          :b_item_name_2="b_item_n[1]"
          :b_item_p_2="b_item_p[1]"
          :b_percen_2="b_percen[1]"
          :b_city_buy_2="b_city_buy[1]"
          :b_city_buy_color_2="b_city_buy_color[1]"
          :b_city_sell_2="b_city_sell[1]"
        />
      </v-col>
    </v-row>
  </v-card>
</template>
<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
<script>
import axios from "axios";
import axiosRetry from "axios-retry";
import numeral from "numeral";

import BestSell from "../components/card/Best_Sell.vue";
import Top5SellCaerleon from "../components/card/Top_5_Sell_Caerleon.vue";
import GoldPrice from "../components/card/Gold_price.vue";
import Thetford from "../components/card/Best_Sell_Thetford.vue";
import Martlock from "../components/card/Best_Sell_Martlock.vue";
import Lymhurst from "../components/card/Best_Sell_Lymhurst.vue";
import FortSterling from "../components/card/Best_Sell_FortSterling.vue";
import Bridgewatch from "../components/card/Best_Sell_Bridgewatch.vue";

export default {
  components: {
    BestSell,
    Top5SellCaerleon,
    GoldPrice,
    Thetford,
    Martlock,
    Lymhurst,
    FortSterling,
    Bridgewatch,
  },
  name: "Home",
  data: () => {
    return {
      //best sell
      item_n: null,
      item_p: null,
      city_buy: null,
      city_buy_color: null,
      city_sell: null,
      city_sell_color: null,
      api_img_link_f: null,

      //Caerleon
      c_item_n: [],
      c_api_img: [],
      c_item_p: [],
      c_city_buy: [],
      c_city_buy_color: [],
      c_city_sell: [],

      //Thetford
      t_item_n: [],
      t_api_img: [],
      t_item_p: [],
      t_percen: [],
      t_city_buy: [],
      t_city_buy_color: [],
      t_city_sell: [],

      //Martlock
      m_item_n: [],
      m_api_img: [],
      m_item_p: [],
      m_percen: [],
      m_city_buy: [],
      m_city_buy_color: [],
      m_city_sell: [],

      //Lymhurst
      l_item_n: [],
      l_api_img: [],
      l_item_p: [],
      l_percen: [],
      l_city_buy: [],
      l_city_buy_color: [],
      l_city_sell: [],

      //FortSterling
      f_item_n: [],
      f_api_img: [],
      f_item_p: [],
      f_percen: [],
      f_city_buy: [],
      f_city_buy_color: [],
      f_city_sell: [],

      //Bridgewatch
      b_item_n: [],
      b_api_img: [],
      b_item_p: [],
      b_percen: [],
      b_city_buy: [],
      b_city_buy_color: [],
      b_city_sell: [],
    };
  },
  async mounted() {
    var string = numeral(1000).format("0,0");
    console.log(string);

    const item_name = [];
    const item_code = [];
    const profit = [];
    const city = [
      [
        " Bridgewatch ",
        " Caerleon ",
        " Fort Sterling ",
        " Lymhurst ",
        " Martlock ",
        " Thetford ",
        " Black Market ",
      ],
      ["#FF952C", "#FF2626", "#F9F9F9", "#38CD00", "#00ADE9", "#C62EFF"],
    ];
    let hp = null;
    let lp = null;
    let cnh1 = null;
    let cnh1_p = null;
    let cnl1 = null;
    let cnl1_p = null;
    let cnh2 = null; //cite name hight price
    let cnl2 = null; //cite name low price
    let bs_best = null; //best price
    let item_id_bp = null; //item name best price
    let item_lenght = 0;
    let o = 1; //band item id
    let api_name_link = null;

    //Caerleon
    let c_bh = null;
    let c_bl = Infinity;
    let c_cl = null; //เมืองที่ไปซื้อสินค้า
    const c_best = [null]; //เก็บข้อมูลโดยรวม
    const c_profit_check = [];
    let c_best_loop = 0;

    //thetford
    let t_bh = null;
    let t_bl = null;
    let t_cl = null;
    const t_best = [null];
    const t_profit_check = [];
    let t_best_loop = 0;

    //Martlock
    let m_bh = null;
    let m_bl = null;
    let m_cl = null;
    const m_best = [null];
    const m_profit_check = [];
    let m_best_loop = 0;

    //Lymhurst
    let l_bh = null;
    let l_bl = null;
    let l_cl = null;
    const l_best = [null];
    const l_profit_check = [];
    let l_best_loop = 0;

    //FortSterling
    let f_bh = null;
    let f_bl = null;
    let f_cl = null;
    const f_best = [null];
    const f_profit_check = [];
    let f_best_loop = 0;

    //Bridgewatch
    let b_bh = null;
    let b_bl = null;
    let b_cl = null;
    const b_best = [null];
    const b_profit_check = [];
    let b_best_loop = 0;

    await axios
      .get(
        "https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json"
      )
      .then((item_id) => {
        console.log("++++++++++++++++++++");
        console.log(item_id.data);
        console.log("++++++++++++++++++++");
        for (let x = 1; x <= 5; x++) {
          //max 7810
          item_code[x - 1] = item_id.data[o].UniqueName;
          item_name[x - 1] = item_id.data[o].LocalizedNames["EN-US"];
          if (o == 17) {
            o = 91;
          } else if (o == 98) {
            o = 99;
          } else if (o == 166) {
            o = 188;
          } else if (o == 208) {
            o = 410;
          } else if (o == 2187) {
            o = 2189;
          } else if (o == 2238) {
            o = 2240;
          } else if (o == 2287) {
            o = 2289;
          } else if (o == 2388) {
            o = 2406;
          } else if (o == 2448) {
            o = 2449;
          } else if (o == 2455) {
            o = 2458;
          } else if (o == 2490) {
            o = 2492;
          } else if (o == 6828) {
            o = 6833;
          } else if (o == 6947) {
            o = 6949;
          } else if (o == 7038) {
            o = 7040;
          } else if (o == 7112) {
            o = 7116;
          } else if (o == 7268) {
            o = 7271;
          } else if (o == 7272) {
            o = 7275;
          } else if (o == 7276) {
            o = 7279;
          } else if (o == 7482) {
            o = 7545;
          }
          o++;
          /*for (let y = 0; y < 6; y++) {
            axios
              .get(
                "https://www.albion-online-data.com/api/v2/stats/prices/" +
                  item[x] +
                  "?locations=" +
                  city[y] +
                  "&qualities=1"
              )
              .then((items) => {
                console.log(item_name.data[x].UniqueName);
                console.log("city : " + city[y]);
                console.log(items.data[0].sell_price_min);
              });
          }*/
        }
      });
    //loop item name

    for (; item_lenght < item_code.length; item_lenght++) {
      profit[item_lenght] = [];

      //loop city
      axiosRetry(axios, {
        retries: 2,
        retryDelay: (retryCount) => {
          return retryCount * 50000;
        },
      });

      await axios
        .get(
          "https://www.albion-online-data.com/api/v2/stats/prices/" +
          item_code[item_lenght] +
          "?locations=" +
          "bridgewatch,caerleon,fortsterling,lymhurst,martlock,thetford" +
          "&qualities=1"
        )
        .then((items) => {
          // console.log(items);
          // console.log(item_lenght);
          /*
            for (let yi = 0; yi < 10; yi++){
              console.log('888888888888');
              console.log(item_name[item_lenght]);
              console.log('888888888888');
              for (let yc = 0; yc < 6; yc++){
              yitem = yi*6;
              console.log('5555555555');

              console.log(item_code[item_lenght+yi]);

              if (yi==0){
                console.log(city[yc]);
                console.log(items.data[yc].sell_price_min);
              }
              else {
                console.log(city[yc]);
                console.log(items.data[yitem+yc].sell_price_min);
              }
              */
          //profit[item_lenght+y][0] = items.data[item_lenght+y].sell_price_min;
          //profit[item_lenght+y][1] = items.data[item_lenght+y+1].sell_price_min;

          //this.price_c[item_lenght] = items.data[0].sell_price_min;
          console.log(item_name[item_lenght]);
          profit[item_lenght][0] = items.data[0].sell_price_min;
          console.log(profit[item_lenght][0]);
          console.log("city :" + "bridgewatch");

          //this.price_t[item_lenght] = items.data[0].sell_price_min;
          profit[item_lenght][1] = items.data[1].sell_price_min;
          console.log(profit[item_lenght][1]);
          console.log("city :" + "caerleon");

          //this.price_m[item_lenght] = items.data[0].sell_price_min;
          profit[item_lenght][2] = items.data[2].sell_price_min;
          console.log(profit[item_lenght][2]);
          console.log("city :" + "fortsterling");

          //this.price_l[item_lenght] = items.data[0].sell_price_min;
          profit[item_lenght][3] = items.data[3].sell_price_min;
          console.log(profit[item_lenght][3]);
          console.log("city :" + "lymhurst");

          //this.price_f[item_lenght] = items.data[0].sell_price_min;
          profit[item_lenght][4] = items.data[4].sell_price_min;
          console.log(profit[item_lenght][4]);
          console.log("city :" + "martlock");

          //this.price_m[item_lenght] = items.data[0].sell_price_min;
          profit[item_lenght][5] = items.data[5].sell_price_min;
          console.log(profit[item_lenght][5]);
          console.log("city :" + "thetford");
          //}
          //}
        });

      // สำหรับวนลูป เมือง
      for (let h = 0; h < 6; h++) {
        //Best Sell
        if (
          profit[item_lenght][h] > hp &&
          profit[item_lenght][h] != 0 &&
          profit[item_lenght][h] != null
        ) {
          hp = profit[item_lenght][h];
          // console.log("this hp :" + hp);
          lp = hp;
          cnh1 = h;
        }
        if (
          profit[item_lenght][h] < lp &&
          profit[item_lenght][h] != 0 &&
          profit[item_lenght][h] != null
        ) {
          lp = profit[item_lenght][h];
          // console.log("this lp :" + lp);
          cnl1 = h;
        }

        //Caerleon
        if (
          profit[item_lenght][1] >= c_bh &&
          profit[item_lenght][1] != 0 &&
          profit[item_lenght][1] != null
        ) {
          c_bh = profit[item_lenght][1];
          // console.log("++this c_bh :" + c_bh);
          if (
            profit[item_lenght][h] < profit[item_lenght][1] &&
            profit[item_lenght][h] != 0 &&
            profit[item_lenght][h] != null &&
            profit[item_lenght][h] < c_bl
          ) {
            c_bl = profit[item_lenght][h];
            // console.log("--this c_bl :" + c_bl);
            c_cl = h;
          }
        }
        //Thetford
        if (
          profit[item_lenght][5] >= t_bh &&
          profit[item_lenght][5] != 0 &&
          profit[item_lenght][5] != null
        ) {
          t_bh = profit[item_lenght][5];
          //console.log("++this t_bh :" + t_bh);
          if (
            profit[item_lenght][h] < profit[item_lenght][5] &&
            profit[item_lenght][h] != 0 &&
            profit[item_lenght][h] != null &&
            profit[item_lenght][h] < t_bl
          ) {
            t_bl = profit[item_lenght][h];
            // console.log("--this t_bl :" + t_bl);
            t_cl = h;
          }
        }
        //Martlock
        if (
          profit[item_lenght][4] >= m_bh &&
          profit[item_lenght][4] != 0 &&
          profit[item_lenght][4] != null
        ) {
          m_bh = profit[item_lenght][4];
          // console.log("++this m_bh :" + m_bh);
          if (
            profit[item_lenght][h] < profit[item_lenght][4] &&
            profit[item_lenght][h] != 0 &&
            profit[item_lenght][h] != null &&
            profit[item_lenght][h] < m_bl
          ) {
            m_bl = profit[item_lenght][h];
            // console.log("--this m_bl :" + m_bl);
            m_cl = h;
          }
        }
        //Lymhurst
        if (
          profit[item_lenght][3] >= l_bh &&
          profit[item_lenght][3] != 0 &&
          profit[item_lenght][3] != null
        ) {
          l_bh = profit[item_lenght][3];
          // console.log("++this l_bh :" + l_bh);
          if (
            profit[item_lenght][h] < profit[item_lenght][3] &&
            profit[item_lenght][h] != 0 &&
            profit[item_lenght][h] != null &&
            profit[item_lenght][h] < l_bl
          ) {
            l_bl = profit[item_lenght][h];
            // console.log("--this l_bl :" + l_bl);
            l_cl = h;
          }
        }
        //FortSterling
        if (
          profit[item_lenght][2] >= f_bh &&
          profit[item_lenght][2] != 0 &&
          profit[item_lenght][2] != null
        ) {
          f_bh = profit[item_lenght][2];
          // console.log("++this f_bh :" + f_bh);
          if (
            profit[item_lenght][h] < profit[item_lenght][2] &&
            profit[item_lenght][h] != 0 &&
            profit[item_lenght][h] != null &&
            profit[item_lenght][h] < f_bl
          ) {
            f_bl = profit[item_lenght][h];
            // console.log("--this f_bl :" + f_bl);
            f_cl = h;
          }
        }
        //Bridgewatch
        if (
          profit[item_lenght][0] >= b_bh &&
          profit[item_lenght][0] != 0 &&
          profit[item_lenght][0] != null
        ) {
          b_bh = profit[item_lenght][0];
          // console.log("++this b_bh :" + b_bh);
          if (
            profit[item_lenght][h] < profit[item_lenght][0] &&
            profit[item_lenght][h] != 0 &&
            profit[item_lenght][h] != null &&
            profit[item_lenght][h] < b_bl
          ) {
            b_bl = profit[item_lenght][h];
            // console.log("--this b_bl :" + b_bl);
            b_cl = h;
          }
        }
      }

      /******************************************ต้องหาว่าไอเทมไหนกำไรมากสุดแล้วค่อยส่งข้อมูลเข้า data********************************************/
      //ต้องมีตัวแปรเก็บกำไรของไอเท็มแต่ละชิ้น => best

      //ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
      //best sell
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
      if (hp < 200000 && hp > bs_best) {
        bs_best = hp; //กำไรต่อชิ้น
        cnh2 = cnh1; //เมืองที่ไปซื้อ
        cnh1_p = profit[item_lenght][cnh1];
        cnl2 = cnl1; //เมืองที่ไปขาย
        cnl1_p = profit[item_lenght][cnl1];
        item_id_bp = item_lenght;
        api_name_link =
          "https://render.albiononline.com/v1/item/" +
          item_code[item_lenght] +
          ".png";
      }
      //Caerleon ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
      if (c_bh < 200000 && c_bl != Infinity && c_bl != 0 && c_bl != null) {
        /*c_api_img =
            "https://render.albiononline.com/v1/item/" +
            item_code[item_lenght] +
            ".png";*/
        c_best[c_best_loop] = {
          item: null,
          profit: null,
          city_buy: null,
          city_color: null,
          city_sell: null,
          api_img: null,
        };
        c_best[c_best_loop].item = item_name[item_lenght];
        c_profit_check[c_best_loop] = c_bh; //สำหรับจัดเรียงมูลค่า
        c_best[c_best_loop].profit = c_bh;
        c_best[c_best_loop].city_buy = profit[item_lenght][c_cl];
        c_best[c_best_loop].city_color = "color : " + city[1][c_cl];
        c_best[c_best_loop].city_sell = profit[item_lenght][1];
        c_best[c_best_loop].api_img =
          "https://render.albiononline.com/v1/item/" +
          item_code[item_lenght] +
          ".png";
        //console.log("c_best : " + c_best[0].profit);
        c_best_loop++;
      }
      //Thetford ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
      if (t_bh < 200000 && t_bl != Infinity && t_bl != 0 && t_bl != null) {
        /*c_api_img =
            "https://render.albiononline.com/v1/item/" +
            item_code[item_lenght] +
            ".png";*/
        //console.log("print t_bh a : " + t_bh);
        t_best[t_best_loop] = {
          item: null,
          profit: null,
          city_buy: null,
          city_color: null,
          city_sell: null,
          api_img: null,
        };
        t_best[t_best_loop].item = item_name[item_lenght];
        t_profit_check[t_best_loop] = t_bh; //สำหรับจัดเรียงมูลค่า
        t_best[t_best_loop].profit = t_bh;
        t_best[t_best_loop].city_buy = profit[item_lenght][t_cl];
        t_best[t_best_loop].city_color = "color : " + city[1][t_cl];
        t_best[t_best_loop].city_sell = profit[item_lenght][5];
        t_best[t_best_loop].api_img =
          "https://render.albiononline.com/v1/item/" +
          item_code[item_lenght] +
          ".png";
        // console.log(t_best);
        t_best_loop++;
      }
      //Martlock ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
      if (m_bh < 200000 && m_bl != Infinity && m_bl != 0 && m_bl != null) {
        /*c_api_img =
            "https://render.albiononline.com/v1/item/" +
            item_code[item_lenght] +
            ".png";*/
        m_best[m_best_loop] = {
          item: null,
          profit: null,
          city_buy: null,
          city_color: null,
          city_sell: null,
          api_img: null,
        };
        m_best[m_best_loop].item = item_name[item_lenght];
        m_profit_check[m_best_loop] = m_bh; //สำหรับจัดเรียงมูลค่า
        m_best[m_best_loop].profit = m_bh;
        m_best[m_best_loop].city_buy = profit[item_lenght][m_cl];
        m_best[m_best_loop].city_color = "color : " + city[1][m_cl];
        m_best[m_best_loop].city_sell = profit[item_lenght][4];
        m_best[m_best_loop].api_img =
          "https://render.albiononline.com/v1/item/" +
          item_code[item_lenght] +
          ".png";
        // console.log(m_best);
        m_best_loop++;
      }
      //Lymhurst ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
      if (l_bh < 200000 && l_bl != Infinity && l_bl != 0 && l_bl != null) {
        /*c_api_img =
            "https://render.albiononline.com/v1/item/" +
            item_code[item_lenght] +
            ".png";*/
        l_best[l_best_loop] = {
          item: null,
          profit: null,
          city_buy: null,
          city_color: null,
          city_sell: null,
          api_img: null,
        };
        l_best[l_best_loop].item = item_name[item_lenght];
        l_profit_check[l_best_loop] = l_bh; //สำหรับจัดเรียงมูลค่า
        l_best[l_best_loop].profit = l_bh;
        l_best[l_best_loop].city_buy = profit[item_lenght][l_cl];
        l_best[l_best_loop].city_color = "color : " + city[1][l_cl];
        l_best[l_best_loop].city_sell = profit[item_lenght][3];
        l_best[l_best_loop].api_img =
          "https://render.albiononline.com/v1/item/" +
          item_code[item_lenght] +
          ".png";
        // console.log(l_best);
        l_best_loop++;
      }
      //FortSterling ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
      if (f_bh < 200000 && f_bl != Infinity && f_bl != 0 && f_bl != null) {
        /*c_api_img =
            "https://render.albiononline.com/v1/item/" +
            item_code[item_lenght] +
            ".png";*/
        f_best[f_best_loop] = {
          item: null,
          profit: null,
          city_buy: null,
          city_color: null,
          city_sell: null,
          api_img: null,
        };
        f_best[f_best_loop].item = item_name[item_lenght];
        f_profit_check[f_best_loop] = f_bh; //สำหรับจัดเรียงมูลค่า
        f_best[f_best_loop].profit = f_bh;
        f_best[f_best_loop].city_buy = profit[item_lenght][f_cl];
        f_best[f_best_loop].city_color = "color : " + city[1][f_cl];
        f_best[f_best_loop].city_sell = profit[item_lenght][2];
        f_best[f_best_loop].api_img =
          "https://render.albiononline.com/v1/item/" +
          item_code[item_lenght] +
          ".png";
        // console.log(f_best);
        f_best_loop++;
      }
      //Bridgewatch ส่วนบันทึกราคาไอเท็มต่อชิ้นก่อนขึ้นชิ้นใหม่
      if (b_bh < 200000 && b_bl != Infinity && b_bl != 0 && b_bl != null) {
        /*c_api_img =
            "https://render.albiononline.com/v1/item/" +
            item_code[item_lenght] +
            ".png";*/
        b_best[b_best_loop] = {
          item: null,
          profit: null,
          city_buy: null,
          city_color: null,
          city_sell: null,
          api_img: null,
        };
        b_best[b_best_loop].item = item_name[item_lenght];
        b_profit_check[b_best_loop] = b_bh; //สำหรับจัดเรียงมูลค่า
        b_best[b_best_loop].profit = b_bh;
        b_best[b_best_loop].city_buy = profit[item_lenght][b_cl];
        b_best[b_best_loop].city_color = "color : " + city[1][b_cl];
        b_best[b_best_loop].city_sell = profit[item_lenght][0];
        b_best[b_best_loop].api_img =
          "https://render.albiononline.com/v1/item/" +
          item_code[item_lenght] +
          ".png";
        // console.log(b_best);
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

      // console.log("xxxxxxxxxxxxxxxxx");
      // console.log("Id_Item : " + api_name_link);
      // console.log(item_name[item_id_bp]);
      // console.log(item_id_bp); //เบอร์ไอเทม
      // console.log(bs_best); //กำไรต่อชิ้น
      // console.log(cnh2); //เมืองที่ไปซื้อ
      // console.log(cnl2); //เมืองที่ไปขาย
      // console.log("xxxxxxxxxxxxxxxxx");
    }
    
    //best_sell
    this.item_n = item_name[item_id_bp];
    this.api_img_link_f = api_name_link;
    this.item_p = numeral(bs_best).format("0,0");
    this.city_buy = numeral(cnl1_p).format("0,0");
    this.city_buy_color = "color : " + city[1][cnl2];
    this.city_sell = numeral(cnh1_p).format("0,0");
    this.city_sell_color = "color : " + city[1][cnh2];
    // console.log(hp + "/" + lp);

    //Caerleon
    c_profit_check.sort(function(a, b) {
      return b - a;
    });
    // console.log("c_profit_check : " + c_profit_check);
    // console.log("c_best : " + c_best);
    for (let u = 0; u < c_profit_check.length; u++) {
      for (let i = 0; i < c_profit_check.length; i++) {
        if (c_profit_check[u] == c_best[i].profit) {
          this.c_item_n[u] = c_best[i].item;
          this.c_item_p[u] = numeral(c_best[i].profit).format("0,0");
          this.c_city_buy[u] = numeral(c_best[i].city_buy).format("0,0");
          this.c_city_buy_color[u] = c_best[i].city_color;
          this.c_api_img[u] = c_best[i].api_img;
          this.c_city_sell[u] = numeral(c_best[i].city_sell).format("0,0");
        }
      }
    }
    // console.log(this.c_item_n);
    // console.log(this.c_item_p);

    //Thetford
    t_profit_check.sort(function(c, d) {
      return d - c;
    });
    // console.log(t_profit_check);
    // console.log(t_best);
    for (let u = 0; u < t_profit_check.length; u++) {
      for (let i = 0; i < t_profit_check.length; i++) {
        if (t_profit_check[u] == t_best[i].profit) {
          this.t_item_n[u] = t_best[i].item;
          this.t_item_p[u] = numeral(t_best[i].profit).format("0,0");
          this.t_city_buy[u] = numeral(t_best[i].city_buy).format("0,0");
          this.t_city_buy_color[u] = t_best[i].city_color;
          this.t_api_img[u] = t_best[i].api_img;
          this.t_city_sell[u] = numeral(t_best[i].city_sell).format("0,0");
          this.t_percen[u] = numeral(
            (100 * t_best[i].profit) / t_best[i].city_buy
          ).format("0,0");
        }
      }
    }
    //Martlock
    m_profit_check.sort(function(c, d) {
      return d - c;
    });
    // console.log(m_profit_check);
    // console.log(m_best);
    for (let u = 0; u < m_profit_check.length; u++) {
      for (let i = 0; i < m_profit_check.length; i++) {
        if (m_profit_check[u] == m_best[i].profit) {
          this.m_item_n[u] = m_best[i].item;
          this.m_item_p[u] = numeral(m_best[i].profit).format("0,0");
          this.m_city_buy[u] = numeral(m_best[i].city_buy).format("0,0");
          this.m_city_buy_color[u] = m_best[i].city_color;
          this.m_api_img[u] = m_best[i].api_img;
          this.m_city_sell[u] = numeral(m_best[i].city_sell).format("0,0");
          this.m_percen[u] = numeral(
            (100 * m_best[i].profit) / m_best[i].city_buy
          ).format("0,0");
        }
      }
    }
    //Lymhurst
    l_profit_check.sort(function(c, d) {
      return d - c;
    });
    // console.log(l_profit_check);
    // console.log(l_best);
    for (let u = 0; u < l_profit_check.length; u++) {
      for (let i = 0; i < l_profit_check.length; i++) {
        if (l_profit_check[u] == l_best[i].profit) {
          this.l_item_n[u] = l_best[i].item;
          this.l_item_p[u] = numeral(l_best[i].profit).format("0,0");
          this.l_city_buy[u] = numeral(l_best[i].city_buy).format("0,0");
          this.l_city_buy_color[u] = l_best[i].city_color;
          this.l_api_img[u] = l_best[i].api_img;
          this.l_city_sell[u] = numeral(l_best[i].city_sell).format("0,0");
          this.l_percen[u] = numeral(
            (100 * l_best[i].profit) / l_best[i].city_buy
          ).format("0,0");
        }
      }
    }
    //FortSterling
    f_profit_check.sort(function(c, d) {
      return d - c;
    });
    // console.log(f_profit_check);
    // console.log(f_best);
    for (let u = 0; u < f_profit_check.length; u++) {
      for (let i = 0; i < f_profit_check.length; i++) {
        if (f_profit_check[u] == f_best[i].profit) {
          this.f_item_n[u] = f_best[i].item;
          this.f_item_p[u] = numeral(f_best[i].profit).format("0,0");
          this.f_city_buy[u] = numeral(f_best[i].city_buy).format("0,0");
          this.f_city_buy_color[u] = f_best[i].city_color;
          this.f_api_img[u] = f_best[i].api_img;
          this.f_city_sell[u] = numeral(f_best[i].city_sell).format("0,0");
          this.f_percen[u] = numeral(
            (100 * f_best[i].profit) / f_best[i].city_buy
          ).format("0,0");
        }
      }
    }
    //Bridgewatch
    b_profit_check.sort(function(c, d) {
      return d - c;
    });
    // console.log(b_profit_check);
    // console.log(b_best);
    for (let u = 0; u < b_profit_check.length; u++) {
      for (let i = 0; i < b_profit_check.length; i++) {
        if (b_profit_check[u] == b_best[i].profit) {
          this.b_item_n[u] = b_best[i].item;
          this.b_item_p[u] = numeral(b_best[i].profit).format("0,0");
          this.b_city_buy[u] = numeral(b_best[i].city_buy).format("0,0");
          this.b_city_buy_color[u] = b_best[i].city_color;
          this.b_api_img[u] = b_best[i].api_img;
          this.b_city_sell[u] = numeral(b_best[i].city_sell).format("0,0");
          this.b_percen[u] = numeral(
            (100 * b_best[i].profit) / b_best[i].city_buy
          ).format("0,0");
        }
      }
    }
  },
};
</script>
