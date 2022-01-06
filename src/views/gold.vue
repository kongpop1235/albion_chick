<template>
  <v-card
    class="rounded-0 bg_main px-0 mx-10 my-6 grey--text text--lighten-1"
    elevation="0"
    rounded-0
  >
    <v-card-title class="mx-0 px-0 mb-0">
      <h1 class="text-uppercase text-h">Gold Price</h1>
    </v-card-title>
    <v-card-text class="bg_card rounded-lg position-relative mx-0 px-4 mb-5">
      <div>
        <canvas id="gold" class="c-gold" :height="height"></canvas>
      </div>
    </v-card-text>
    <div class="ma-0 pa-0">
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="select_buy"
            dark
            label="PERIOD"
            outlined
            :items="['HOUR', 'DAY', 'WEEK', 'MONTH']"
            color="#FF9F40"
            item-color="#FF9F40"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="dates"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                dark
                v-model="dateRangeText"
                label="Picker in dialog"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                color="#FF9F40"
                item-color="#FF9F40"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dates" range color="#FF9F40" item-color="#FF9F40">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(dates)"> OK </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import Chart from "chart.js/auto";
import date from "date.js";

export default {
  data() {
    let d = date("today").toISOString().substr(0, 10);
    let y = date("yesterday").toISOString().substr(0, 10);
    return {
      day: null,
      montsh: null,
      year: null,
      height: 0,

      dates: [y, d],
      modal: false,
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.height = window.innerHeight * 0.7;
    },
  },
  async mounted() {
    const d = new Date();
    const months = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec.",
    ];
    let month = months[d.getMonth()];
    this.montsh = month;
    this.day = d.getDate();

    let gold = [];
    let time = [];

    const wait = (
      timeToDelay //delay
    ) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
    //log
    await wait(2000); //delay time

    if (this.$store.getters.gold_price[1] == true) {
      //check Gold data
      /* console.log("+++++++++++++++++++");
      console.log(this.$store.getters.gold_price[0]);
      console.log("+++++++++++++++++++"); */

      for (let x = 0; x < 24; x++) {
        gold[x] = this.$store.getters.gold_price[0][x].price;
        time[x] = this.$store.getters.gold_price[0][x].timestamp.substring(11, 16);
      }
    }

    var ctx = document.getElementById("gold").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          time[0],
          time[1],
          time[2],
          time[3],
          time[4],
          time[5],
          time[6],
          time[7],
          time[8],
          time[9],
          time[10],
          time[11],
          time[12],
          time[13],
          time[14],
          time[15],
          time[16],
          time[17],
          time[18],
          time[19],
          time[20],
          time[21],
          time[22],
          time[23],
        ],
        datasets: [
          {
            label: "gold value ",
            data: [
              gold[0],
              gold[1],
              gold[2],
              gold[3],
              gold[4],
              gold[5],
              gold[6],
              gold[7],
              gold[8],
              gold[9],
              gold[10],
              gold[11],
              gold[12],
              gold[13],
              gold[14],
              gold[15],
              gold[16],
              gold[17],
              gold[18],
              gold[19],
              gold[20],
              gold[21],
              gold[22],
              gold[23],
            ],
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
