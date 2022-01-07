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
    {{ dates[0] }}
    <div class="ma-0 pa-0">
      <v-row>
        <v-col cols="5">
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
        <v-col cols="5">
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
                label="DATE TO DATE"
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
        <v-col cols="2"
          ><v-btn block color="#FF9F40" class="me-3 white--text" x-large>text</v-btn></v-col
        >
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

      time: [],
      gold:[],

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

    const wait = (
      timeToDelay //delay
    ) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
    //log
    await wait(2000); //delay time

    

    if (this.$store.getters.gold_price[1] == true) {
      for (let x = 0; x < 24; x++) {
        this.gold.push(this.$store.getters.gold_price[0][x].price);
        this.time.push(this.$store.getters.gold_price[0][x].timestamp.substring(11, 16));
      }
    }

    var ctx = document.getElementById("gold").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.time,
        datasets: [
          {
            label: "gold value ",
            data: this.gold,
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
            max: Math.max(...this.gold) + 10,
            min: Math.min(...this.gold) - 10,
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
