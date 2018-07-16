import axios from 'axios'

// axios 配置
axios.defaults.timeout = 50000

const env = process.env.NODE_ENV
if (env === 'development') {
  // axios.defaults.baseURL = 'http://118.25.13.116:8981/mrsyg' // 本地测试
  axios.defaults.withCredentials = true
} else {
  // axios.defaults.baseURL = 'http://118.25.13.116:8981/mrsyg' // 本地测试
  axios.defaults.withCredentials = true
}

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
      // 401 跳转到登录页面
        console.log('error')
    }
  }
  return Promise.resolve(error.response)
})

const buildGetUrl = function (url, params) {
  var result = Object.params(params, true)
  if (result) return url + '?' + result
  return url
}

export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(buildGetUrl(url, params)).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function post (url, params) {
  let searchParams = new URLSearchParams()
  for (let key in params) {
    searchParams.append(key, params[key])
  }
  return new Promise((resolve, reject) => {
    axios.post(url, searchParams, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default {
  /* ==================== 所有接口信息 ==================== */
  /* 接口登录 */
  //   Wxlogin (params) {
  //     return post('/yunhe/wechat/login/wxpublogin', params)
  //   }
}
