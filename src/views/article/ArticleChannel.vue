<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'

/* 获取文章数据 */
import { onMounted, ref } from 'vue'
import { artGetChannelsService } from '@/api'

const channelList = ref([])
// 添加加载效果
const loading = ref(false)

const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  console.log(res)
  channelList.value = res.data.data
  loading.value = false
}

onMounted(async () => {
  getChannelList()
})

/* 添加按钮响应事件 */
const dialog = ref()

const onAddChannel = () => {
  dialog.value.open({})
}

const onEditChannel = (row) => {
  console.log(row)
  dialog.value.open(row)
}

// 修改成功后重新渲染
const onSuccess = () => {
  getChannelList()
}

// 删除分类信息
import { artDelChannelService } from '@/api'
const onDelChannel = async (row) => {
  await ElMessageBox.confirm('你确认删除该分类信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await artDelChannelService(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getChannelList()
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra
      ><el-button type="primary" @click="onAddChannel"
        >添加分类</el-button
      ></template
    >

    <el-table :data="channelList" style="width: 100%" v-loading="loading">
      <el-table-column label="序号" width="100" type="index"> </el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
  </page-container>
  <!-- 弹窗 -->
  <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
