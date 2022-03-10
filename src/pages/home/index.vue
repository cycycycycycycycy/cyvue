<template>
  <div>home</div>
</template>

<script>
import { test } from "@/api/login.js";
export default {
  name: "",
  created() {
    test().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style scoped>
</style>
