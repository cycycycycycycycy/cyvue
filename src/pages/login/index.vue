<template>
  <div class="login">
    <img :src="imgSrc" width="100%" height="100%" alt="" />
  <div class="loginPart">
    <h2>系统登录</h2>
  <el-form
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page">
      <el-form-item prop="username" class="inputElement">
        <el-input
          type="text"
          v-model="ruleForm2.username"
          auto-complete="off"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" class="inputElement">
        <el-input
          type="password"
          v-model="ruleForm2.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <!-- <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox> -->
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%"
          @click="handleSubmit"
          :loading="logining"
          >登录</el-button
        >
      </el-form-item>

  </el-form>
  </div>
  </div>
</template>

<script>
export default {
data() {
      return {
        imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile05.16sucai.com%2F2015%2F0615%2F0f9320e353671b9b02049dec80a7fde3.jpg&refer=http%3A%2F%2Ffile05.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649492098&t=7809417f3b2a05a3486ae112253acbad',
        
        logining: false,
      ruleForm2: {
        username: "admin",
        password: "123456",
      },
      rules2: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
      checked: false,
      }
    },
    methods: {
    handleSubmit(event) {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          this.logining = true;
          if (
            this.ruleForm2.username === "admin" &&
            this.ruleForm2.password === "123456"
          ) {
            this.logining = false;
            const token = Date.parse(new Date());
            const res = [
              {
                name: "books",
                path: "/books",
                label: "书",
                icon: "-eleme",
                url: "books",
              },
              {
                name: "goods",
                path: "/goods",
                label: "商品",
                icon: "-eleme",
                url: "goods",
              },
              {
                label: "其他",
                icon: "-eleme",
                children:[
                  {
                name: "other1",
                path: "/other1",
                label: "其他1",
                icon: "-eleme",
                url: "others/other1",
              },
              {
                name: "other2",
                path: "/other2",
                label: "其他2",
                icon: "-eleme",
                url: "others/other2",
              },
              ]
              
              },
            ];
            this.$store.commit("clearMenu");
            this.$store.commit("setMenu", res);
            this.$store.commit("setToken", token);
            this.$store.commit("addMenu", this.$router);
            // sessionStorage.setItem("user", this.ruleForm2.username);
            this.$router.push({ path: "/home" });
          } else {
            this.logining = false;
            this.$alert("用户名或密码错误!", {
              confirmButtonText: "ok",
            });
          }
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
  },
}

</script>

<style>
.loginPart{
  
    position:absolute;
    /*定位方式绝对定位absolute*/
    top:50%;
    left:50%;
    /*顶和高同时设置50%实现的是同时水平垂直居中效果*/
    transform:translate(-50%,-50%);
    /*实现块元素百分比下居中*/
    width:370px;
    padding:30px;
    background: rgba(0,0,0,.5);
    /*背景颜色为黑色，透明度为0.8*/
    box-sizing:border-box;
    /*box-sizing设置盒子模型的解析模式为怪异盒模型，
    将border和padding划归到width范围内*/
    box-shadow: 0px 15px 25px rgba(0,0,0,.5);
    /*边框阴影  水平阴影0 垂直阴影15px 模糊25px 颜色黑色透明度0.5*/
    border-radius:15px;
    /*边框圆角，四个角均为15px*/
  }
  .loginPart h2{
    margin:0 0 30px;
    padding:0;
    color: #fff;
    text-align:center;
    /*文字居中*/
  }
  .loginPart .inputbox{
    position:relative;
  }
  .loginPart .inputElement input{
    width: 100%;
    padding:10px 0;
    font-size:16px;
    color:#fff;
    letter-spacing: 1px;
    /*字符间的间距1px*/
    margin-bottom: 30px;
    border:none;
    border-bottom: 1px solid #fff;
    outline:none;
    /*outline用于绘制元素周围的线
    outline：none在这里用途是将输入框的边框的线条使其消失*/
    background: transparent;
    /*背景颜色为透明*/
  }

  .login{
    width:100%;
    height:100%;
  }
  
</style>