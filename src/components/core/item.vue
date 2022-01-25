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
      <div>
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
          label: "Dataset 1",
          data: [90,25,30,50,70],
          backgroundColor: [
            "rgba(255, 159, 64, 0.8)",
            "#bdbdbd",
            "#9155fd",
            "red",
            "blue",
          ],
        },
      ],
    };

    var ctx = document.getElementById("test").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "polarArea",
      data: data,
      options: {
        responsive: true,
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 18,
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Polar Area Chart With Centered Point Labels",
          },
        },
      },
    });
    console.log(myChart);
  },
};
</script>

<style></style>
