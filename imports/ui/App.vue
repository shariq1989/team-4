<template>
  <div>
    <h1>Receipt Catcher</h1>
    <upload/>
    <display/>
  </div>
</template>

<script>
import Upload from "./components/Upload";
import Display from "./components/Display";

export default {
  components: {
    Upload,
    Display,
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
