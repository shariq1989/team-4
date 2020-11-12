<template>
  <div>
    <button @click="increment">Click Me</button>
    <p>Upload receipts</p>
  </div>
</template>

<script>
import {Receipts} from "../../api/collections/Receipts";
export default {
  data() {
    return {
      counter: 0,
      uploadedImage: null
    }
  },
  methods: {
    increment() {
      this.counter += 1
    }
  },
  uploadReceipt() {
    Receipts.insert({
      image: this.uploadedImage,
      uploadTimestamp: new Date()
    });
    // Clear form
    this.uploadedImage = null;
  }


}
</script>

<style scoped>
p {
  font-family: serif;
}
  p {
    font-family: serif;
  }
</style>
