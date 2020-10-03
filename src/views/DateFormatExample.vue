<template>
  <div class="home">
    <VueTabulator ref="tabulator" v-model="data" :options="options" :integration="integration" />
  </div>
</template>

<script>
import { createList } from '../util'
export default {
  name: "editable",
  data() {
    return {
      integration: { updateStrategy: 'UPDATE' },
      data: createList(),
      options: {
        layout: "fitDataFill",
        columns: [
          {
            title: "Name",
            field: "name",
            sorter: "string",
            width: 200,
            editor: true,
          },
          {
            title: "age",
            field: "age",
            sorter: "number",
            width: 300,
            editor: false,
          },
          {
            title: "Contact Date",
            field: "contactDate",
            formatter:"datetime",
            width: 400,
            editor: false,
          },
        ],
      },
    };
  },
  methods: {
  },
};
</script>

<style lang='scss'>
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
.home {
  height: 100%;
}
</style>
