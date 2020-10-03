<template>
  <div class="home">
    <VueTabulator ref="tabulator" v-model="data" :options="options"/>

    <button id="row" @click="newRow">New Row</button>
    <button id="column" @click="newColumn">New Column</button>
    <button id="clear" @click="clearTable">Clear Table</button>
  </div>
</template>

<script>
import { createList, createItem } from '../util'

export default {
  name: "home",
  data() {
    return {
      data: createList(),
      options: {
        layout:"fitDataFill",
        columns: [
          {
            title: "Name",
            field: "name",
            sorter: "string",
            width: 200
          }
        ]
      }
    };
  },
  methods: {
    newRow() {
      this.data.push(createItem());
    },
    newColumn() {
      this.options.columns.push({
        title: "age",
        field: "age",
        sorter: "number",
        width: 300
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
