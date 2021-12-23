<template>
  <v-card class="rounded-0 bg_main px-0 mx-10 my-6" elevation="0" rounded-0 v-if="this.$store.getters.item_profit.check">
    <v-row>
      <v-col cols="12" lg="4">
        <BestSell
          class="grey--text text--lighten-1"
          :bs_in="this.$store.getters.item_profit.best_sell[0].item"
          :bs_ip="this.$store.getters.item_profit.best_sell[0].profit"
          :bs_cb="this.$store.getters.item_profit.best_sell[0].city_buy_price"
          :bs_cs="this.$store.getters.item_profit.best_sell[0].city_sell_price"
          :bs_img="this.$store.getters.item_profit.best_sell[0].api_img"
          :bs_cb_c="this.$store.getters.item_profit.best_sell[0].city_color_buy"
          :bs_cs_c="this.$store.getters.item_profit.best_sell[0].city_color_sell"
        />
      </v-col>
      <v-col cols="12" lg="8">
        <Top5SellCaerleon
          class="grey--text text--lighten-1"
          :c_api_img_1="this.$store.getters.item_profit.Caerleon[0].api_img"
          :c_item_name_1="this.$store.getters.item_profit.Caerleon[0].item"
          :c_item_p_1="this.$store.getters.item_profit.Caerleon[0].profit"
          :c_city_buy_1="this.$store.getters.item_profit.Caerleon[0].city_buy_price"
          :c_city_buy_color_1="this.$store.getters.item_profit.Caerleon[0].city_color_buy"
          :c_city_sell_1="this.$store.getters.item_profit.Caerleon[0].city_sell_price"
          :c_city_sell_color_1="this.$store.getters.item_profit.Caerleon[0].city_color_sell"
          :c_api_img_2="this.$store.getters.item_profit.Caerleon[1].api_img"
          :c_item_name_2="this.$store.getters.item_profit.Caerleon[1].item"
          :c_item_p_2="this.$store.getters.item_profit.Caerleon[1].profit"
          :c_city_buy_2="this.$store.getters.item_profit.Caerleon[1].city_buy_price"
          :c_city_buy_color_2="this.$store.getters.item_profit.Caerleon[1].city_color_buy"
          :c_city_sell_2="this.$store.getters.item_profit.Caerleon[1].city_sell_price"
          :c_city_sell_color_2="this.$store.getters.item_profit.Caerleon[1].city_color_sell"
          :c_api_img_3="this.$store.getters.item_profit.Caerleon[2].api_img"
          :c_item_name_3="this.$store.getters.item_profit.Caerleon[2].item"
          :c_item_p_3="this.$store.getters.item_profit.Caerleon[2].profit"
          :c_city_buy_3="this.$store.getters.item_profit.Caerleon[2].city_buy_price"
          :c_city_buy_color_3="this.$store.getters.item_profit.Caerleon[2].city_color_buy"
          :c_city_sell_3="this.$store.getters.item_profit.Caerleon[2].city_sell_price"
          :c_city_sell_color_3="this.$store.getters.item_profit.Caerleon[2].city_color_sell"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <GoldPrice class="grey--text text--lighten-1" />
      </v-col>
      <v-col cols="12" lg="4">
        <Thetford
          class="grey--text text--lighten-1"
          :t_api_img_1="this.$store.getters.item_profit.Thetford[0].api_img"
          :t_item_name_1="this.$store.getters.item_profit.Thetford[0].item"
          :t_item_p_1="this.$store.getters.item_profit.Thetford[0].profit"
          :t_percen_1="this.$store.getters.item_profit.Thetford[0].percent"
          :t_city_buy_1="this.$store.getters.item_profit.Thetford[0].city_buy_price"
          :t_city_buy_color_1="this.$store.getters.item_profit.Thetford[0].city_color_buy"
          :t_city_sell_1="this.$store.getters.item_profit.Thetford[0].city_sell_price"
          :t_city_sell_color_1="this.$store.getters.item_profit.Thetford[0].city_color_sell"
          :t_api_img_2="this.$store.getters.item_profit.Thetford[1].api_img"
          :t_item_name_2="this.$store.getters.item_profit.Thetford[1].item"
          :t_item_p_2="this.$store.getters.item_profit.Thetford[1].profit"
          :t_percen_2="this.$store.getters.item_profit.Thetford[1].percent"
          :t_city_buy_2="this.$store.getters.item_profit.Thetford[1].city_buy_price"
          :t_city_buy_color_2="this.$store.getters.item_profit.Thetford[1].city_color_buy"
          :t_city_sell_2="this.$store.getters.item_profit.Thetford[1].city_sell_price"
          :t_city_sell_color_2="this.$store.getters.item_profit.Thetford[1].city_color_sell"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <Martlock
          class="grey--text text--lighten-1"
          :m_api_img_1="this.$store.getters.item_profit.Martlock[0].api_img"
          :m_item_name_1="this.$store.getters.item_profit.Martlock[0].item"
          :m_item_p_1="this.$store.getters.item_profit.Martlock[0].profit"
          :m_percen_1="this.$store.getters.item_profit.Martlock[0].percent"
          :m_city_buy_1="this.$store.getters.item_profit.Martlock[0].city_buy_price"
          :m_city_buy_color_1="this.$store.getters.item_profit.Martlock[0].city_color_buy"
          :m_city_sell_1="this.$store.getters.item_profit.Martlock[0].city_sell_price"
          :m_city_sell_color_1="this.$store.getters.item_profit.Martlock[0].city_color_sell"
          :m_api_img_2="this.$store.getters.item_profit.Martlock[1].api_img"
          :m_item_name_2="this.$store.getters.item_profit.Martlock[1].item"
          :m_item_p_2="this.$store.getters.item_profit.Martlock[1].profit"
          :m_percen_2="this.$store.getters.item_profit.Martlock[1].percent"
          :m_city_buy_2="this.$store.getters.item_profit.Martlock[1].city_buy_price"
          :m_city_buy_color_2="this.$store.getters.item_profit.Martlock[1].city_color_buy"
          :m_city_sell_2="this.$store.getters.item_profit.Martlock[1].city_sell_price"
          :m_city_sell_color_2="this.$store.getters.item_profit.Martlock[1].city_color_sell"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <Lymhurst
          class="grey--text text--lighten-1"
          :l_api_img_1="this.$store.getters.item_profit.Lymhurst[0].api_img"
          :l_item_name_1="this.$store.getters.item_profit.Lymhurst[0].item"
          :l_item_p_1="this.$store.getters.item_profit.Lymhurst[0].profit"
          :l_percen_1="this.$store.getters.item_profit.Lymhurst[0].percent"
          :l_city_buy_1="this.$store.getters.item_profit.Lymhurst[0].city_buy_price"
          :l_city_buy_color_1="this.$store.getters.item_profit.Lymhurst[0].city_color_buy"
          :l_city_sell_1="this.$store.getters.item_profit.Lymhurst[0].city_sell_price"
          :l_city_sell_color_1="this.$store.getters.item_profit.Lymhurst[0].city_color_sell"
          :l_api_img_2="this.$store.getters.item_profit.Lymhurst[1].api_img"
          :l_item_name_2="this.$store.getters.item_profit.Lymhurst[1].item"
          :l_item_p_2="this.$store.getters.item_profit.Lymhurst[1].profit"
          :l_percen_2="this.$store.getters.item_profit.Lymhurst[1].percent"
          :l_city_buy_2="this.$store.getters.item_profit.Lymhurst[1].city_buy_price"
          :l_city_buy_color_2="this.$store.getters.item_profit.Lymhurst[1].city_color_buy"
          :l_city_sell_2="this.$store.getters.item_profit.Lymhurst[1].city_sell_price"
          :l_city_sell_color_2="this.$store.getters.item_profit.Lymhurst[1].city_color_sell"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <FortSterling
          class="grey--text text--lighten-1"
          :f_api_img_1="this.$store.getters.item_profit.FortSterling[0].api_img"
          :f_item_name_1="this.$store.getters.item_profit.FortSterling[0].item"
          :f_item_p_1="this.$store.getters.item_profit.FortSterling[0].profit"
          :f_percen_1="this.$store.getters.item_profit.FortSterling[0].percent"
          :f_city_buy_1="this.$store.getters.item_profit.FortSterling[0].city_buy_price"
          :f_city_buy_color_1="this.$store.getters.item_profit.FortSterling[0].city_color_buy"
          :f_city_sell_1="this.$store.getters.item_profit.FortSterling[0].city_sell_price"
          :f_city_sell_color_1="this.$store.getters.item_profit.FortSterling[0].city_color_sell"
          :f_api_img_2="this.$store.getters.item_profit.FortSterling[1].api_img"
          :f_item_name_2="this.$store.getters.item_profit.FortSterling[1].item"
          :f_item_p_2="this.$store.getters.item_profit.FortSterling[1].profit"
          :f_percen_2="this.$store.getters.item_profit.FortSterling[1].percent"
          :f_city_buy_2="this.$store.getters.item_profit.FortSterling[1].city_buy_price"
          :f_city_buy_color_2="this.$store.getters.item_profit.FortSterling[1].city_color_buy"
          :f_city_sell_2="this.$store.getters.item_profit.FortSterling[1].city_sell_price"
          :f_city_sell_color_2="this.$store.getters.item_profit.FortSterling[1].city_color_sell"
        />
      </v-col>
      <v-col cols="12" lg="4">
        <Bridgewatch
          class="grey--text text--lighten-1"
          :b_api_img_1="this.$store.getters.item_profit.Bridgewatch[0].api_img"
          :b_item_name_1="this.$store.getters.item_profit.Bridgewatch[0].item"
          :b_item_p_1="this.$store.getters.item_profit.Bridgewatch[0].profit"
          :b_city_buy_1="this.$store.getters.item_profit.Bridgewatch[0].city_buy_price"
          :b_city_buy_color_1="this.$store.getters.item_profit.Bridgewatch[0].city_color_buy"
          :b_city_sell_1="this.$store.getters.item_profit.Bridgewatch[0].city_sell_price"
          :b_city_sell_color_1="this.$store.getters.item_profit.Bridgewatch[0].city_color_sell"
          :b_percent_1="this.$store.getters.item_profit.Bridgewatch[0].percent"
          :b_api_img_2="this.$store.getters.item_profit.Bridgewatch[1].api_img"
          :b_item_name_2="this.$store.getters.item_profit.Bridgewatch[1].item"
          :b_item_p_2="this.$store.getters.item_profit.Bridgewatch[1].profit"
          :b_city_buy_2="this.$store.getters.item_profit.Bridgewatch[1].city_buy_price"
          :b_city_buy_color_2="this.$store.getters.item_profit.Bridgewatch[1].city_color_buy"
          :b_city_sell_2="this.$store.getters.item_profit.Bridgewatch[1].city_sell_price"
          :b_city_sell_color_2="this.$store.getters.item_profit.Bridgewatch[1].city_color_sell"
          :b_percent_2="this.$store.getters.item_profit.Bridgewatch[1].percent"
        />
      </v-col>
    </v-row>
  </v-card>
</template>
<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
<script>
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
    return {};
  },
  async mounted() {},
};
</script>
