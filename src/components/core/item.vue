<template>
  <v-card
    class="rounded-0 bg_main px-0 mx-10 my-6 grey--text text--lighten-1"
    elevation="0"
    rounded-0
  >
    <v-card-title class="mx-0 px-4 mb-5 pl-0">
      <h1 class="text-uppercase ls-1">Title</h1>
    </v-card-title>
    <v-card-text>
      <table>
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
      <div class="text-canvas mx-auto">
        <canvas id="test"></canvas>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "item",
  mounted() {
    const data = {
      labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
      datasets: [
        {
          label: "Dataset",
          data: [1, 2, 3, 4, 5],
          borderColor: ["rgba(207, 0, 0, 1)"],
          backgroundColor: [
            "rgba(207, 0, 0, 0.5)",
            "rgba(7, 207, 0, 0.5)",
            "rgba(224, 224, 224, 0.5)",
          ],
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
                size: '20rem',
              },
            },
          },
        },
        scales: {
          r: {
            min: 0,
            pointLabels: {
              color: ["rgb(54, 162, 235)", "red", "green", "yellow", "white"],
              font: {
                size: '15rem',
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
  color: #ffffff00;
}
.text-canvas {
  font-size: 1rem;
  letter-spacing: 5px;
  font-weight: 900;
  width: 100%;
}
.wd{
  width: 100%;
}
</style>