<script setup>
import { ref } from 'vue'
const visibleDrawer = ref(false)

// 打开抽屉之后，默认重置表单数据
const defaultForm = {
  title: '',
  cate_id: '',
  cover_img: '',
  content: '',
  state: ''
}
// 此处不可以直接引用，否则为深拷贝
const formModel = ref({ ...defaultForm })

// 提供一个抽屉 open 方法
import { baseURL } from '@/utils/request'
import { artGetDetailService } from '@/api'
import axios from 'axios'

const formRef = ref()
const editorRef = ref()

const imgUrlToFile = async (url, fileName) => {
  try {
    // 使用 axios 获取网络图片数据
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    const imageData = response.data

    // 图片转换为 Blob 对象
    const blob = new Blob([imageData], {
      type: response.headers['content-type']
    })

    // 创建新的 File 对象
    const file = new File([blob], fileName, { type: blob.type })

    return file
  } catch (error) {
    console.log('将图片转为 File 对象时发生错误：', error)
    throw error
  }
}

const open = async (row) => {
  visibleDrawer.value = true
  if (row.id) {
    console.log('编辑回显')
    const res = await artGetDetailService(row.id)
    formModel.value = res.data.data
    imgUrl.value = baseURL + formModel.value.cover_img
    formModel.value.cover_img = await imgUrlToFile(
      imgUrl.value,
      formModel.value.cover_img
    )
  } else {
    formModel.value = { ...defaultForm }
    editorRef.value.setHTML('')
  }
}

// 提供图片上传逻辑
import { Plus } from '@element-plus/icons-vue'

const imgUrl = ref('')
const onUploadFile = (uploadFile) => {
  imgUrl.value = URL.createObjectURL(uploadFile.raw)
  formModel.value.cover_img = uploadFile.raw
}

// 添加富文本编辑器
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

// 发布文章功能
import { artPublishService, artEditService } from '@/api'
import { ElMessage } from 'element-plus'

const emit = defineEmits(['success'])
const onPublish = async (state) => {
  // 将已发布还是草稿状态，存入state
  formModel.value.state = state

  // 转换 formData 数据
  const fd = new FormData()
  for (let key in formModel.value) {
    fd.append(key, formModel.value[key])
  }

  if (formModel.value.id) {
    console.log('编辑操作')
    await artEditService(fd)
    ElMessage.success('编辑成功')
    visibleDrawer.value = true
    emit('success', 'edit')
  } else {
    // 添加请求
    await artPublishService(fd)
    ElMessage.success('添加成功')
    visibleDrawer.value = false
    emit('success', 'add')
  }
}

// 将 open 方法暴露
defineExpose({
  open
})
</script>

<template>
  <!-- 抽屉提供发布文章功能 -->
  <el-drawer
    v-model="visibleDrawer"
    :title="formModel.title ? '编辑文章' : '添加文章'"
    direction="rtl"
    size="70%"
  >
    <!-- 发表文章表单 -->
    <el-form :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <channel-select
          v-model="formModel.cate_id"
          width="100%"
        ></channel-select>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <el-upload
          class="avatar-uploader"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="onUploadFile"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" alt="" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <quill-editor
            theme="snow"
            v-model:content="formModel.content"
            contentType="html"
            ref="editorRef"
          >
          </quill-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onPublish('已发布')">发布</el-button>
        <el-button type="primary" @click="onPublish('草稿')">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style scoped lang="scss">
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
  .el-upload {
    border: 1px border var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }
  .el-upload:hover {
    border-color: var(--el-color-primary);
  }
  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
  .editor {
    width: 100%;
    :deep(.ql-editor) {
      min-height: 200px;
    }
  }
}
</style>
