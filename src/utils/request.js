import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'
import { router } from '@/router'

const baseURl = 'http://big-evetn-vue-api-t.itheima.net'
const instance = axios.create({
  baseURl,
  timeOut: 10000
})

instance.interceptors.request.use(
  (config) => {
    const useStore = useUserStore()
    if (useUserStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }

    ElMessage.error(res.data.message || '服务器异常')
    return res
  },
  (err) => {
    // 401 错误
    if (err.response?.status === 401) {
      router.push('/login')
    }

    ElMessage.error(err.response.data.message || '服务器异常')
    return Promise.reject(err)
  }
)
