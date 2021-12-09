<template>
  <v-card
    class="rounded-0 bg_main px-0 mx-10 my-6 grey--text text--lighten-1"
    elevation="0"
    rounded-0
  >
    <v-card-title class="mx-0 px-0 mb-5">
      <h1 class="text-uppercase text-h">caravan {{$store.getters.gold[0]}}</h1>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="5">
          <v-select
            dark
            label="BUY"
            outlined
            :items="['Caerleon', 'Thetford', 'Martlock', 'Lymhurst', 'Fort Sterling', 'Bridgewatch']"
            color="red"
            item-color="purple darken-4"
          ></v-select>
        </v-col>
        <v-col cols="5">
          <v-select
            dark
            label="SELL"
            outlined
            :items="['Caerleon', 'Thetford', 'Martlock', 'Lymhurst', 'Fort Sterling', 'Bridgewatch']"
            color="green"
            item-color="purple darken-4"
          ></v-select>
        </v-col>
        <v-col cols="2">
          <v-btn block color="success" class="me-3" x-large>SEE</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
        </v-col>
        <v-col cols="6">

        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "market"
};
</script>

<style scoped></style>
