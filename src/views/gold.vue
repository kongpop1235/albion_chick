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
    {{ dates }}
    <div class="ma-0 pa-0">
      <v-row>
        <v-col cols="5">
          <v-select
            v-model="select_period"
            dark
            label="PERIOD"
            outlined
            :items="['HOUR', 'DAY', 'WEEK']"
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
                @click="alert_date"
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
          ><v-btn block color="#FF9F40" class="me-3 white--text" x-large @click="mounted"
            >SEE</v-btn
          ></v-col
        >
      </v-row>
    </div>
  </v-card>
</template>

<script>
import Chart from "chart.js/auto";
import date from "date.js";
import axios from "axios";

export default {
  data() {
    let d = date("today").toISOString().substr(0, 10);
    let y = date("yesterday").toISOString().substr(0, 10);
    return {
      height: 0,

      check: ["HOUR", "DAY", "WEEK"],

      time: [],
      gold: [],

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
    alert_date() {
      alert("**Start date is older than end date**");
    },
  },
  async mounted() {
    const wait = (
      timeToDelay //delay
    ) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
    //log
    await wait(2000); //delay time

    await axios
      .get(
        "https://www.albion-online-data.com/api/v2/stats/gold?date=" +
          this.dates[0] +
          "&end_date=" +
          this.dates[1]
      )
      .then((gold_fix) => {
        if (this.$store.getters.gold_price[1] == true) {
          this.gold = [];
          this.time = [];
          let asd = 0;
          if (asd == asd) {
            console.log("gold p test");
            console.log(gold_fix.data.length);
            for (let h = 0; h < gold_fix.data.length; h++) {
              this.gold.push(gold_fix.data[h].price);
              this.time.push(gold_fix.data[h].timestamp.substring(11, 16));
            }
          } else if ("DAY" == this.select_period) {
            for (let d = 0; d < gold_fix.data.length; d += 24) {
              let dh = 0;
              for (let h = 0; h <= 24; h++) {
                dh += gold_fix.data[h + d].price;
              }
              this.gold.push(dh / 24);
              this.time.push(
                gold_fix.data[d].timestamp.substring(11, 16) +
                  gold_fix.data[d].timestamp.substring(0, 10)
              );
            }
          } else if ("WEEK" == this.select_period) {
            for (let w = 0; w < gold_fix.data.length; w += 168) {
              let wh = 0;
              for (let h = 0; h < 168; h++) {
                wh += gold_fix.data[h + w].price;
              }
              this.gold.push(wh / 168);
              this.time.push(gold_fix.data[w].timestamp.substring(11, 16));
            }
          }
          /* else if ("MONTH" == this.select_period) {
              for (let m = this.dates[0].timestamp.substring(5, 7); m < this.dates[1].timestamp.substring(5, 7); m ++) {
                let mh = 0;
                for (let h = 0; h < gold_fix.length;) {
                  
                }

              }
            } */
        }
      });

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
