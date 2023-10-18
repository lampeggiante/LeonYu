import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'
const request = axios.create({
  baseURL,
  timeOut: 100000
})

request.interceptors.request.use(
  (config) => {
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

request.interceptors.response.use(
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

export default request
export { baseURL }
