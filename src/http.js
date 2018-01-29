import axios from 'axios'

//创建axios实例
const instance = axios.create({
  withCredentials: true,
  //请求超时时间
  timeout: 50000
})

instance
