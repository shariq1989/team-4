<template>
  <div>
    <h2>Receipts Table</h2>
    <ul>
      <Receipt 
        v-for="receipt in getReceipts"
        v-bind:key="receipt._id"
        v-bind:receipt="receipt"
      />
    </ul>
  </div>
</template>

<script>
import {Receipts} from "../../api/collections/Receipts";
import Receipt from './Receipt.vue';

export default {
  components: {
    Receipt
  },
  data() {
    return {}
  },
  methods: {},
  meteor: {
    getReceipts() {
      return Receipts.find({}).fetch();
    }
  }
}
</script>

<style scoped>
ul {
  font-family: monospace;
}
</style>
