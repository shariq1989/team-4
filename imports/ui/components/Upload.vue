<template name="uploadForm">
  <div id="app">
    <div v-if="!image">
      <h2>Select a receipt</h2>
      <input type="file" @change="onFileChange">
    </div>
    <div v-else>
      <img :src="image"/>
      <button @click="removeImage">Remove image</button>
    </div>
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
    if (this.uploadedImage) {
      const upload = Receipts.insert({
        file: this.uploadedImage,
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload.on('start', function () {
        //TODO: Sets upload progress
        //template.currentUpload.set(this);
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          alert(`Error during upload: ${error}`);
        } else {
          alert(`File "${fileObj.name}" successfully uploaded`);
        }
        // removes upload progress
        //template.currentUpload.set(false);
      });

      upload.start();
    }
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
