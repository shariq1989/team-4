<template>
  <div>
    <h1>Receipt Catcher</h1>
    <blaze-template template="loginButtons" tag="span"></blaze-template>
    <template v-if="currentUser">
      <upload/>
      <display/>
    </template>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import Upload from "./components/Upload";
import Display from "./components/Display";

export default {
  components: {
    Upload,
    Display,
  },
  meteor: {
    currentUser() {
      return Meteor.user();
    }
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
