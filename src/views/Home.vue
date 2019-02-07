<template>
  <div class="home">
    <VueTabulator ref="tabulator" v-model="data" :options="options"/>

    <button id="row" @click="newRow">New Row</button>
    <button id="column" @click="newColumn">New Column</button>
    <button id="clear" @click="clearTable">Clear Table</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      data: [{ name: "Teste", age: 13 }],
      options: {
        layout:"fitDataFill",
        columns: [
          {
            title: "Name",
            field: "name",
            sorter: "string",
            width: 200,
            editor: true
          }
        ]
      }
    };
  },
  methods: {
    newRow() {
      this.data.push({ name: "Teste 2", age: 15 });
    },
    newColumn() {
      this.options.columns.push({
        title: "age",
        field: "age",
        sorter: "number",
        width: 300,
        editor: false
      });
    },
    clearTable() {
      this.$refs.tabulator.getInstance().clearData();
    }
  }
};
</script>

<style lang='scss'>
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
.home {
  height: 100%;
}
</style>
