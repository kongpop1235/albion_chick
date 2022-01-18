<template>
  <v-card
    class="rounded-0 bg_main px-lg-15 mx-lg-10 px-md-5 mx-md-5 px-3 mx-3 my-6 grey--text text--lighten-1"
    elevation="0"
    rounded-0
  >
    <v-card-title class="mx-0 px-0 mb-0">
      <h1 class="text-uppercase text-h">Gold Price</h1>
    </v-card-title>
    <v-card-text class="bg_card rounded-lg position-relative mx-0 px-4 mb-5">
      <div :style="x">
        <canvas :style="x" id="gold"></canvas>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      x : null
    };
  },
  async mounted() {
    var
    win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

    this.x = "height : " + y * 0.80 + "px;";
    console.log(this.x);

    let
    gold = [],
    time = [];

    const wait = (
      timeToDelay //delay
    ) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
    //log
    await wait(1); //delay time

    if (this.$store.getters.gold_price[1] == true) {
      //check Gold data
      /* console.log("+++++++++++++++++++");
      console.log(this.$store.getters.gold_price[0]);
      console.log("+++++++++++++++++++"); */

      for (let x = 0; x < this.$store.getters.gold_price[0].length; x+=24) {
        gold.push(this.$store.getters.gold_price[0][x].price);
        time.push(this.$store.getters.gold_price[0][x].timestamp.substring(0,10));
      }
    }

    var ctx = document.getElementById("gold").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: time,
        datasets: [
          {
            label: "gold value ",
            data: gold,
            backgroundColor: ["rgba(255, 159, 64, 0.8)"],
            borderRadius: Number.MAX_VALUE,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, //label : ปิด
          },
        },
        scales: {
          y: {
            max: Math.max(...gold) + 10,
            min: Math.min(...gold) - 10,
            beginAtZero: true,
            ticks: {
              color: "#bdbdbd",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.3)",
              borderColor: "rgba(255, 99, 132, 0)",
              borderDash: [10],
              tickLength: 20,
              tickColor: false,
            },
          },
          x: {
            ticks: {
              color: "#bdbdbd",
            },
            grid: {
              color: false,
              borderColor: "rgba(255, 99, 132, 0)",
            },
          },
        },
      },
    });
    console.log(myChart);
  },
};
</script>

<style scoped></style>
