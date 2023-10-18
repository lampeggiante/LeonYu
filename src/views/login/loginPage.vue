<script setup>
import { ref } from 'vue'
// 从图标库中引用，之后再使用prefix或者suffix前缀或后缀
import { User, Lock } from '@element-plus/icons-vue'
/* 使用 isRegister 控制注册与登录界面的显示 */
let isRegister = ref(false)
/* 注册校验 */
/* 【需求】注册页面基本校验

1. 用户名非空，长度校验5-10位
2. 密码非空，长度校验6-15位
3. 再次输入密码，非空，长度校验6-15位

【进阶】再次输入密码需要自定义校验规则，和密码框值一致（可选） */
const registerRuleForm = ref({
  userName: '',
  initpsw: '',
  repsw: ''
})
// 配置注册内容的校验方式
const registerRules = {
  userName: [
    // 第一条规则，必须被填写
    { required: true, message: '请输入用户名', trigger: 'blur' },
    // 第二条规则，用户名必须在5-10位
    {
      pattern: /^\S{5,10}$/,
      message: '用户名必须是5-10位的字符',
      trigger: 'blur'
    }
  ],
  initpsw: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的字符',
      trigger: 'blur'
    }
  ],
  repsw: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    // 加入第三条规则，必须和init输入的一致
    {
      validator: (rule, value, callback) => {
        if (value !== registerRuleForm.value.initpsw) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}
/* 注册前进行预校验 */
import { userRegisterService } from '@/api'

const form = ref()
// 定义注册异步函数
const register = async () => {
  // console.log(form)
  await form.value.validate()
  await userRegisterService({
    username: registerRuleForm.value.userName,
    password: registerRuleForm.value.initpsw,
    repassword: registerRuleForm.value.repsw
  })
  ElMessage.success('注册成功')
  isRegister.value = false
}

/* 切换时，将内容清空 */
import { watch } from 'vue'
watch(isRegister, () => {
  registerRuleForm.value = {
    userName: '',
    initpsw: '',
    repsw: ''
  }
})

/* 注册事件，在进行登录前进行预校验 */
import { userLoginService } from '@/api'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const login = async () => {
  await form.value.validate()
  const res = await userLoginService({
    username: registerRuleForm.value.userName,
    password: registerRuleForm.value.initpsw
  })
  // console.log(res)
  userStore.setToken(res.data.token)
  ElMessage.success('登录成功')
  router.push('/')
}
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form
        ref="form"
        size="large"
        autocomplete="off"
        :model="registerRuleForm"
        :rules="registerRules"
        v-if="isRegister"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="userName">
          <el-input
            :prefix-icon="User"
            placeholder="请输入用户名"
            v-model="registerRuleForm.userName"
          ></el-input>
        </el-form-item>
        <el-form-item prop="initpsw">
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="registerRuleForm.initpsw"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repsw">
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入再次密码"
            v-model="registerRuleForm.repsw"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="register"
            class="button"
            type="primary"
            auto-insert-space
          >
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>
      <el-form
        ref="form"
        size="large"
        autocomplete="off"
        :model="registerRuleForm"
        :rules="registerRules"
        v-else
      >
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="userName">
          <el-input
            :prefix-icon="User"
            placeholder="请输入用户名"
            v-model="registerRuleForm.userName"
          ></el-input>
        </el-form-item>
        <el-form-item prop="initpsw">
          <el-input
            name="password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="registerRuleForm.initpsw"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="login"
            class="button"
            type="primary"
            auto-insert-space
            >登录</el-button
          >
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">
            注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  .bg {
    background:
      url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
