<template>
  <header>
    <div class="btn">
      <div
        @click="handleMenu"
        :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      ></div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path + ''"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>

    <el-dropdown>
      <span class="el-dropdown-link">欢迎您，张三</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
    logOut() {
      this.$store.commit("clearToken");
      this.$store.commit("clearMenu");
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-content: center;
}
.btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
  margin-left: -10px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  line-height: 80px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-breadcrumb{
  margin-left: 10px;
}
</style>
