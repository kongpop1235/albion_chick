<script>
export default {
  name: "market_render",
  props: ["market_data", "data_check"],
  methods: {
    check_item: function () {
      console.log("methods : ");
      console.log(this.market_data);
      if (this.market_data["check"] == true) {
        console.log(this.market_data);
        console.log("market render");
      }
    },
  },
  mounted() {
    console.log("mounted : ");
    console.log(this.market_data);
    if (this.market_data["data"] == true) {
      console.log(this.market_data);
    }
  },
  render(createElement) {
    return createElement("h1", {}, "Hello World");
  },
};
</script>

<style></style>
