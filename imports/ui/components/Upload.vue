<template>
  <div>
    <!-- Upload receipt form -->
    <div v-if="!image">
      <h2>Select an image</h2>
      <input type="file" @change="onFileChange">
    </div>
    <!-- Displayed after upload complete -->
    <div v-else>
      <img :src="image" alt="uploaded image"/>
      <button @click="uploadAnotherReceipt">Upload another</button>
    </div>
  </div>
</template>

<script>
import {Receipts} from "../../api/collections/Receipts";

export default {
  data() {
    return {
      counter: 0,
      image: null
    }
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      if (e.currentTarget.files && e.currentTarget.files[0]) {
        let file = e.currentTarget.files[0];
        console.log(file);
        this.uploadReceipt(file)
      }
      this.displayImage(files[0]);
    },

    displayImage(file) {
      const reader = new FileReader();
      const vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    uploadAnotherReceipt: function () {
      this.image = null;
    },
    uploadReceipt(image) {
      let upload = Receipts.insert({
        file: image,
        streams: 'dynamic',
        chunkSize: 'dynamic',
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
      // Clear form
      this.image = null;
    }
  },
}
</script>

<style scoped>
img {
  width: 30%;
  display: block;
  margin: auto auto 10px;
}

p {
  font-family: serif;
}

p {
  font-family: serif;
}
</style>
