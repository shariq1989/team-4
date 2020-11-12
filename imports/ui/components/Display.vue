<template>
  <div>
    <h2>Receipts Table</h2>
  </div>
</template>

<script>
import {Receipts} from "../../api/collections/Receipts";

export default {
  data() {
    return {}
  },
  methods: {},
  getReceipts() {
    return Receipts.find({}).fetch();
  },
}
</script>

<style scoped>
ul {
  font-family: monospace;
}
</style>
