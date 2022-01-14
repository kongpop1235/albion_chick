<template>
  <v-card>
    <v-navigation-drawer permanent expand-on-hover app color="bg_card">
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="@/assets/chicat2.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              class="grey--text text--lighten-1 text-menu text-uppercase"
            >
              <h5 class="py-4">Albion Chick</h5>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense class="text-uppercase">
        <span @click="action">
          <router-link to="/" class="text-decoration-none" @click="action">
            <v-list-item link id="m-animation">
              <v-list-item-icon>
                <v-icon class="grey--text text--lighten-1">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="grey--text text--lighten-1 text-menu py-3"
                >home</v-list-item-title
              >
            </v-list-item>
          </router-link>
        </span>
        <span @click="action">
          <router-link to="/Market" class="text-decoration-none">
            <v-list-item link id="m-animation">
              <v-list-item-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 172 172"
                  style="fill: #000000"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#bdbdbd">
                      <path
                        d="M125.259,100.93533c-2.494,-4.3645 -6.37833,-8.19867 -11.63867,-11.48817c-5.2675,-3.29667 -12.599,-6.31383 -21.98733,-9.05867c-9.38833,-2.73767 -16.13217,-5.7835 -20.22433,-9.14467c-4.09933,-3.34683 -6.149,-7.85467 -6.149,-13.50917c0,-6.09167 1.94217,-10.85033 5.8265,-14.2545c3.87717,-3.41133 9.4815,-5.10983 16.80583,-5.10983c7.01617,0 12.599,2.3005 16.71983,6.90867c1.935,2.15717 3.41133,4.6655 4.44333,7.525c0.50883,1.42617 1.42617,4.72283 1.47633,4.86617c1.4405,4.31433 3.89867,6.82983 8.14133,6.82983c4.687,0 8.48533,-2.967 8.48533,-8.48533c0,-1.03917 -0.22217,-2.13567 -0.35833,-2.78067c-1.29,-6.42133 -3.83417,-11.78917 -7.64683,-16.11067c-5.762,-6.52167 -13.81017,-10.4275 -24.15883,-11.696l-0.03583,-0.00717v-11.08683c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v11.1155c-9.976,1.1825 -17.87367,4.5795 -23.6285,10.26267c-5.88383,5.81217 -8.82933,13.25117 -8.82933,22.32417c0,8.90817 3.00283,16.254 9.0085,22.0375c6.00567,5.77633 15.566,10.4705 28.681,14.06817c9.42417,2.82367 16.11783,5.977 20.09533,9.46c3.96317,3.49017 5.9555,7.77583 5.9555,12.86417c0,6.03433 -2.31483,10.793 -6.93017,14.276c-4.6225,3.483 -10.965,5.2245 -19.03467,5.2245c-8.24883,0 -15.51583,-2.07117 -20.00933,-6.22067c-3.02433,-2.78783 -5.02383,-6.37833 -6.01283,-10.7715c-0.03583,-0.16483 -0.559,-1.849 -0.93167,-2.54417c-1.40467,-2.65167 -4.26417,-4.43617 -7.482,-4.43617c-4.69417,-0.01433 -8.50683,3.79833 -8.50683,8.49967c0,2.064 1.032,4.988 1.34733,5.848c1.6125,4.4075 4.22833,8.41367 7.5035,11.64583c6.32817,6.22783 15.94583,9.81833 26.9825,10.87183v8.80783c0,3.956 3.2035,7.16667 7.1595,7.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-8.67167l0.17917,-0.00717c11.266,-1.0535 20.03083,-4.42183 26.28017,-10.1265c6.24933,-5.6975 9.38117,-13.2225 9.38117,-22.56783c0,-5.86233 -1.25417,-10.9865 -3.741,-15.35817z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="grey--text text--lighten-1 text-menu py-3"
                >caravan</v-list-item-title
              >
            </v-list-item>
          </router-link>
        </span>
        <span @click="action">
          <router-link to="/Gold" class="text-decoration-none">
            <v-list-item link id="m-animation">
              <v-list-item-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 172 172"
                  style="fill: #000000"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#bdbdbd">
                      <path
                        d="M56.00708,40.3125l-13.00708,22.75977v6.80273h-8.49292l-13.00708,22.75977v6.80273h-8.49292l-13.00708,22.75977v17.55273h43h10.75h32.25h10.75h43h32.25v-17.39526l-12.80237,-22.91724h-8.69763v-6.64526l-12.80237,-22.91724h-8.69763v-6.64526l-12.80237,-22.91724h-35.57263zM62.24292,51.0625h15.26416l8.49292,14.86523v3.94727h-8.49292h-15.26416h-3.11792h-5.375v-3.94727zM40.74292,80.625h2.25708h13.00708l8.49292,14.86523v3.94727h-8.49292h-15.26416h-3.11792h-5.375v-3.94727zM83.74292,80.625h13.00708h2.25708l8.49292,14.86523v3.94727h-23.75708h-3.11792h-5.375v-3.94727zM19.24292,110.1875h2.25708h13.00708l8.49292,14.86523v3.94727h-32.25v-3.94727zM62.24292,110.1875h2.25708h13.00708l8.49292,14.86523v3.94727h-32.25v-3.94727zM105.24292,110.1875h13.00708h2.25708l8.49292,14.86523v3.94727h-32.25v-3.94727z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="grey--text text--lighten-1 text-menu py-3"
                >gold</v-list-item-title
              >
            </v-list-item>
          </router-link>
        </span>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  methods: {
    action() {
      this.$store.getters.Detail[0] = null;
      this.$store.getters.Detail[1] = false;
    },
  },
};
</script>

<style scoped>
#m-animation:hover {
  animation: text-shadow 1.5s ease-in-out infinite;
  font-weight: 900;
  line-height: 1;
}

@keyframes text-shadow {
  0% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }

  20% {
    transform: translateY(-1em);
    text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b,
      0 -0.25em 0 #fefc4b;
  }

  40% {
    transform: translateY(0.5em);
    text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd, 0 0.0625em 0 #fb203b,
      0 0.125em 0 #fefc4b;
  }

  60% {
    transform: translateY(-0.25em);
    text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd, 0 -0.03125em 0 #fb203b,
      0 -0.0625em 0 #fefc4b;
  }

  80% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }
}

/*Animation by : 
CodePen Home
Animated Text-Shadow
Erin E. Sullivan */
</style>
