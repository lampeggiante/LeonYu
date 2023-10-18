<script setup>
// 模拟假数据渲染
import { Delete, Edit } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
// // 假数据
// const articleList = ref([
//   {
//     id: 5961,
//     title: '新的文章啊',
//     pub_date: '2022-07-10 14:53:52.604',
//     state: '已发布',
//     cate_name: '体育'
//   },
//   {
//     id: 5962,
//     title: '新的文章啊',
//     pub_date: '2022-07-10 14:54:30.904',
//     state: null,
//     cate_name: '体育'
//   }
// ])

// 父组件绑定参数
const params = ref({
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: ''
})

// 在页面中调用保存数据
import { artGetListService } from '@/api'

const articleList = ref([])
const total = ref(0)

// 添加 loading 处理
const loading = ref(false)
const getArticleList = async () => {
  loading.value = true
  const res = await artGetListService(params.value)
  console.log(res)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
}
onMounted(() => {
  getArticleList()
})

// 格式化时间
import { formatTime } from '@/utils/format'

// 提供分页修改逻辑
// 修改每页最大显示范围
const onSizeChange = (size) => {
  params.value.pagenum = 1
  params.value.pagesize = size
  getArticleList()
}
// 修改当前页
const onCurrentChange = (page) => {
  params.value.pagenum = page
  getArticleList()
}

// 提供搜索和重置逻辑
const onSearch = () => {
  params.value.pagenum = 1
  getArticleList()
}
const onReset = () => {
  params.value.pagenum = 1
  params.value.cate_id = ''
  params.value.state = ''
  getArticleList()
}

// 弹窗
const articleEditRef = ref()

// 编辑文章
const onAddArticle = () => {
  articleEditRef.value.open({})
}

// 编辑文章
const onEditArticle = (row) => {
  articleEditRef.value.open(row)
}

// 添加修改成功重新显示的功能
const onSuccess = (type) => {
  if (type === 'add') {
    // 如果是添加，需要渲染跳转最后一页，编辑直接渲染当前页
    const lastPage = Math.ceil((total.value + 1) / params.value.pagesize)
    params.value.pagenum = lastPage
  }
  getArticleList()
}

// 删除文章
import { artDelService } from '@/api'

const onDeleteArticle = async (row) => {
  await ElMessageBox.confirm('你确认删除该文章信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await artDelService(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getArticleList()
}
</script>

<template>
  <page-container title="文章管理">
    <!-- 右侧发布文章插槽 -->
    <template #extra>
      <el-button type="primary" @click="onAddArticle">发布文章</el-button>
    </template>
    <!-- 弹窗 -->
    <article-edit ref="articleEditRef" @success="onSuccess"></article-edit>
    <!-- 搜索表单 -->
    <el-form inline>
      <el-form-item label="文章分类：">
        <ChannelSelect v-model="params.cate_id"></ChannelSelect>
      </el-form-item>
      <el-form-item label="发布状态：">
        <el-select v-model="params.state">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="articleList" style="width: 100%" v-loding="loading">
      <el-table-column label="文章标题" width="400">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="分类" prop="cate_name"></el-table-column>
      <el-table-column label="发表时间" prop="pub_date">
        <!-- 尝试能不能直接用 pub_date 替换 row -->
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditArticle(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDeleteArticle(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
  </page-container>
  <!-- 分页渲染 -->
  <el-pagination
    v-model:current-page="params.pagenum"
    v-model:page-size="params.pagesize"
    :page-sizes="[2, 3, 4, 5, 10]"
    layout="jumper, total, sizes, prev, pager, next"
    background
    :total="total"
    @size-change="onSizeChange"
    @current-change="onCurrentChange"
    style="margin-top: 20px; justify-content: flex-end"
  />
</template>

<style scoped></style>
