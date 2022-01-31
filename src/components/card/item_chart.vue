<template>
  <v-card-text class="text-canvas mx-auto">
    <div class="px-10">
      <canvas id="test"></canvas>
    </div>
  </v-card-text>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "item_chart",
  mounted() {
    var ctx = document.getElementById("test").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "radar",
      data: this.$store.getters.item_chart[0],
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "left",
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

<style></style>
