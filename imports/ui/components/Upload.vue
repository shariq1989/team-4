<template>
  <div>
    <!-- Upload receipt form -->
    <div v-if="!image">
      <h2>Select an image</h2>
      <div id="ReceiptForm">
        <form @submit="formSubmit">
          <input id="file" type="file" ><br>
          <label for="Store">Store Name: </label><input type="text" id="Store"><br>
          <label for="Date">Date of Purchase: </label><input type="date" id="Date" ref="Date"><br>
          <label for="Total">Total Spent: </label><input type="text" id="Total"><br>
          <label for="Category">Category: </label><input type="text" id="Category"><br>
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
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
  mounted() {
    let today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth()+1,
        yyyy = today.getFullYear();

    dd = dd < 10 ? dd='0'+dd : dd;

    mm = mm < 10 ? mm='0'+mm : mm;

    today = yyyy+'-'+mm+'-'+dd;

    let date = this.$refs.Date;
    date.setAttribute('max',today);
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      //get values from form
      const Store = e.target.Store.value;
      const Total = e.target.Total.value;
      const Date = e.target.Date.value;
      const Category = e.target.Category.value;
      let file = e.target.file.files[0];
      //Create JSON object
      let data = {
        "Store": Store,
        "Total": Total,
        "Date": Date,
        "Category": Category,
        "file": file,
      };
      //console.log(data); //Confirm form data
      // Submit to database
      this.uploadReceipt(data);
    },
    uploadAnotherReceipt: function () {
      this.image = null;
    },
    uploadReceipt(obj) {
      let image = obj.file;
      console.log(image);
      let upload = Receipts.insert({
        file: image,
        meta: {
          "category": obj.Category,
          "date": obj.Date,
          "storeName": obj.Store,
          "totalSpent": obj.Total,
        },
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
h2 {
  color:red;
}
p {
  font-family: serif;
}

p {
  font-family: serif;
}
</style>
