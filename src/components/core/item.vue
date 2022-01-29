<template>
  <v-card
    class="rounded-0 bg_card rounded-lg px-0 mx-10 my-6 grey--text text--lighten-1"
    elevation="0"
    rounded-0
  >
    <v-card-title class="mx-0 px-4 mb-5 pl-0">
      <h1 class="text-uppercase ls-1 ml-10 mt-7">{{this.name}}</h1>
    </v-card-title>
    <v-card-text class="mb-16">

      <div class="text-canvas mx-auto mb-10">
        <canvas id="test"></canvas>
      </div>
      <table class="mx-auto">
        <tr>
          <th></th>
          <th>caerleon</th>
          <th>thetford</th>
          <th>martlock</th>
          <th>lymhurst</th>
          <th>fort sterling</th>
          <th>bridwatch</th>
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
        <tr>
          <th>fort sterling</th>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
          <td>Nan</td>
        </tr>
        <tr>
          <th>bridwatch</th>
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
import Chart from "chart.js/auto";

export default {
  name: "item",
  data() {
    return {
      item: null,
      name: null
    }
  },
  methods: {},
  mounted() {
    this.item = this.$store.getters.item_detail_check[0];
    this.item = this.$store.getters.itemData.find(o => o.item_detail.item_id === this.item);
    this.name = this.$store.getters.item_detail_check[1];
    console.log(this.item.item_detail);
    const data = {
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
          data: [0, 15, 12, 13, 17, 20],
          borderColor: ["#FF2626"],
          backgroundColor: ["rgb(255, 38, 38, 0.5)"],
        },
        {
          label: ["Bridgewatch"],
          data: [12, 0, 14, 10, 15, 20],
          borderColor: ["#FF952C"],
          backgroundColor: ["rgb(255, 149, 44, 0.5)"],
        },
        {
          label: ["FortSterling"],
          data: [15, 10, 0, 13, 11, 12],
          borderColor: ["#F9F9F9"],
          backgroundColor: ["rgb(249, 249, 249, 0.5)"],
        },
        {
          label: ["Lymhurst"],
          data: [13, 15, 12, 17, 11, 10],
          borderColor: ["#38CD00"],
          backgroundColor: ["rgb(56, 205, 0, 0.5)"],
        },
        {
          label: ["Martlock"],
          data: [10, 2, 3, 4, 5, 10],
          borderColor: ["#00ADE9"],
          backgroundColor: ["rgb(0, 173, 233, 0.5)"],
        },
        {
          label: ["Thetford"],
          data: [10, 2, 3, 4, 5, 15],
          borderColor: ["#C62EFF"],
          backgroundColor: ["rgb(198, 46, 255, 0.5)"],
        },
      ],
    };

    var ctx = document.getElementById("test").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "radar",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              font: {
                size: "20rem",
              },
            },
          },
        },
        scales: {
          r: {
            min: 0,
            pointLabels: {
              color: ["#FF2626", "#F9F9F9", "#38CD00", "#FF952C", "#00ADE9", "#C62EFF"],
              font: {
                size: "15rem",
              },
            },
            ticks: {
              color: "#ffffff",
              backdropColor: "rgba(255, 255, 255, 0)",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.3)",
            },
          },
        },
      },
    });
    console.log(myChart);
  },
};
</script>

<style scoped>
test.color {
  color: rgb(198, 46, 255);
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
</style>
