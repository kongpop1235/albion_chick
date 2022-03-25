<template>
  <v-card
    class="rounded-0 bg_card rounded-lg px-12 mx-10 my-6 grey--text text--lighten-1"
    elevation="0"
    rounded-0
  >
    <v-card-title class="mx-0 px-4 mb-5 pl-0 mt-10">
      <v-img max-height="120" max-width="120" :src="item.api_img"></v-img>
      <h1 class="text-uppercase ls-1 ml-5">{{ this.name }}</h1>
    </v-card-title>
    <v-card-text class="mb-16">
      <p>Item power :</p>
      <p></p>
      <table class="mx-auto text-h6">
        <tr>
          <th class="th-b text-left pr-7 pb-2">CITY</th>
          <th class="th-b text-center px-5 pb-2">SELL ORDER PRICE MIN</th>
          <th class="th-b text-center px-5 pb-2">SELL ORDER PRICE MAX</th>
          <th class="th-b text-center px-5 pb-2">BUY ORDER PRICE MIN</th>
          <th class="th-b text-right pl-5 pb-2">BUY ORDER PRICE MAX</th>
        </tr>
        <tr>
          <th class="text-uppercase text-left pr-8 cc py-3">caerleon</th>
          <td class="text-center py-3 sell">{{ item.details.Caerleon.sell_min }}</td>
          <td class="text-center py-3 sell">{{ item.details.Caerleon.sell_max }}</td>
          <td class="text-center py-3 buy">{{ item.details.Caerleon.buy_min }}</td>
          <td class="text-center py-3 buy">{{ item.details.Caerleon.buy_max }}</td>
        </tr>
        <tr>
          <th class="text-uppercase text-left pr-7 cb pb-3">bridgewatch</th>
          <td class="text-center pb-3 sell">{{ item.details.Bridgewatch.sell_min }}</td>
          <td class="text-center pb-3 sell">{{ item.details.Bridgewatch.sell_max }}</td>
          <td class="text-center pb-3 buy">{{ item.details.Bridgewatch.buy_min }}</td>
          <td class="text-center pb-3 buy">{{ item.details.Bridgewatch.buy_max }}</td>
        </tr>
        <tr>
          <th class="text-uppercase text-left pr-7 cf pb-3">fort sterling</th>
          <td class="text-center pb-3 sell">{{ item.details.FortSterling.sell_min }}</td>
          <td class="text-center pb-3 sell">{{ item.details.FortSterling.sell_max }}</td>
          <td class="text-center pb-3 buy">{{ item.details.FortSterling.buy_min }}</td>
          <td class="text-center pb-3 buy">{{ item.details.FortSterling.buy_max }}</td>
        </tr>
        <tr>
          <th class="text-uppercase text-left pr-7 cl pb-3">lymhurst</th>
          <td class="text-center pb-3 sell">{{ item.details.Lymhurst.sell_min }}</td>
          <td class="text-center pb-3 sell">{{ item.details.Lymhurst.sell_max }}</td>
          <td class="text-center pb-3 buy">{{ item.details.Lymhurst.buy_min }}</td>
          <td class="text-center pb-3 buy">{{ item.details.Lymhurst.buy_max }}</td>
        </tr>
        <tr>
          <th class="text-uppercase text-left pr-7 cm pb-3">martlock</th>
          <td class="text-center pb-3 sell">{{ item.details.Martlock.sell_min }}</td>
          <td class="text-center pb-3 sell">{{ item.details.Martlock.sell_max }}</td>
          <td class="text-center pb-3 buy">{{ item.details.Martlock.buy_min }}</td>
          <td class="text-center pb-3 buy">{{ item.details.Martlock.buy_max }}</td>
        </tr>
        <tr>
          <th class="text-uppercase text-left pr-7 ct pb-3">thetford</th>
          <td class="text-center pb-3 sell">{{ item.details.Thetford.sell_min }}</td>
          <td class="text-center pb-3 sell">{{ item.details.Thetford.sell_max }}</td>
          <td class="text-center pb-3 buy">{{ item.details.Thetford.buy_min }}</td>
          <td class="text-center pb-3 buy">{{ item.details.Thetford.buy_max }}</td>
        </tr>
      </table>
      <item_chart />
      <table class="mx-auto">
        <tr>
          <th></th>
          <th>caerleon</th>
          <th>thetford</th>
          <th>martlock</th>
          <th>lymhurst</th>
          <th>fort sterling</th>
          <th>bridgewatch</th>
        </tr>
        <tr>
          <th>caerleon</th>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
        </tr>
        <tr>
          <th>thetford</th>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
        </tr>
        <tr>
          <th>martlock</th>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
        </tr>
        <tr>
          <th>lymhurst</th>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
        </tr>
        <tr class="tr-b">
          <th>fort sterling</th>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
        </tr>
        <tr class="tr-b">
          <th>bridgewatch</th>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
        </tr>
      </table>
    </v-card-text>
  </v-card>
</template>

<script>
import item_chart from "../card/item_chart.vue";
import numeral from "numeral";

export default {
  components: { item_chart },
  name: "item",
  data() {
    return {
      item: null,
      name: null,
      max_min: null,
    };
  },
  methods: {},
  mounted() {
    this.item = this.$store.getters.item_detail_check[0];
    this.name = this.$store.getters.item_detail_check[1];
    console.log(this.item.details);
    const city = [
      "Bridgewatch",
      "Caerleon",
      "FortSterling",
      "Lymhurst",
      "Martlock",
      "Thetford",
    ];
    const price_time = [
      "buy_max",
      "buy_max_date",
      "buy_min",
      "buy_min_date",
      "sell_max",
      "sell_max_date",
      "sell_min",
      "sell_min_date",
    ];
    for (let x = 0; x < city.length; x++) {
      for (let y = 0; y < price_time.length; y++) {
        this.item.details[city[x]][price_time[y]] = numeral(
          this.item.details[city[x]][price_time[y]]
        ).format("0,0");
      }
    }

    //find word
    let example = "Example String!";
    let ourSubstring = "Example";
    if (example.includes(ourSubstring)) {
      console.log("The word Example is in the string.");
    } else {
      console.log("The word Example is not in the string.");
    }

    const city_chart = [];
    for (let i = 0; i < city.length; i++) {
      for (let v = 0; v < city.length; v++) {
        city_chart.push(
          this.item.city
        );
      }
    }

    this.$store.getters.item_chart[0] = {
      labels: [
        "Caerleon",
        "FortSterling",
        "Lymhurst",
        "Bridgewatch",
        "Martlock",
        "Thetford",
      ],
      datasets: [
        {
          label: ["Caerlron"],
          data: city_chart[0],
          borderColor: ["#FF2626"],
          backgroundColor: ["rgb(255, 38, 38, 0.5)"],
        },
        {
          label: ["Bridgewatch"],
          data: city_chart[1],
          borderColor: ["#FF952C"],
          backgroundColor: ["rgb(255, 149, 44, 0.5)"],
        },
        {
          label: ["FortSterling"],
          data: city_chart[2],
          borderColor: ["#F9F9F9"],
          backgroundColor: ["rgb(249, 249, 249, 0.5)"],
        },
        {
          label: ["Lymhurst"],
          data: city_chart[3],
          borderColor: ["#38CD00"],
          backgroundColor: ["rgb(56, 205, 0, 0.5)"],
        },
        {
          label: ["Martlock"],
          data: city_chart[4],
          borderColor: ["#00ADE9"],
          backgroundColor: ["rgb(0, 173, 233, 0.5)"],
        },
        {
          label: ["Thetford"],
          data: city_chart[5],
          borderColor: ["#C62EFF"],
          backgroundColor: ["rgb(198, 46, 255, 0.5)"],
        },
      ],
    };
  },
};
</script>

<style scoped>
table {
  border-style: none;
  border-collapse: collapse;
}
th {
  color: #9155fd;
}
th,
td {
  border-style: none;
}
td {
  color: #bdbdbd;
}
.th-b {
  border-bottom-style: solid;
  border-color: #9155fd;
  border-width: 1px;
}
.text-canvas {
  font-size: 1rem;
  letter-spacing: 5px;
  font-weight: 900;
  width: 80%;
}
.wd {
  width: 100%;
}
.cc {
  color: #ff2626;
}
.cb {
  color: #ff952c;
}
.cf {
  color: #f9f9f9;
}
.cl {
  color: #38cd00;
}
.cm {
  color: #00ade9;
}
.ct {
  color: #c62eff;
}
.font-size {
  font-size: 1.5rem;
}
.sell {
  color: #4caf50;
}
.buy {
  color: #cf3737;
}
</style>
