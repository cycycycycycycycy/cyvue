<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-aside width="auto" style="height: 100%">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <Tag />
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import Tag from "@/components/Tag";
export default {
  name: "",
  components: {
    Aside,
    Header,
    Tag
  },
};
</script>

<style scoped>
.el-header {
  background-color: #fafafa;
}
.el-main {
  padding-top: 0;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
</style>
