import axios, { Axios, AxiosInstance, AxiosRequestConfig } from "axios";

axios.defaults.withCredentials = true;

// ベースURL
axios.defaults.baseURL = "api";

// ヘッダー設定
axios.defaults.headers.common = {
  "Access-Control-Allow-Origin":"*",
}


export const postAxios: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fileAxios: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// 実行直前に走る処理
postAxios.interceptors.request.use((config: AxiosRequestConfig)=> {
  //トークンをヘッダーに設定 
  const accessToken = localStorage.getItem('jwt')
  if (accessToken) {
    if(config.headers != undefined){
      config.headers.Authorization = `Bearer ${accessToken}`
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

postAxios.interceptors.response.use(
	function(response) {
		return response
	}
)

// 実行直前に走る処理
fileAxios.interceptors.request.use((config: AxiosRequestConfig)=> {
  //トークンをヘッダーに設定 
  const accessToken = localStorage.getItem('jwt')
  if (accessToken) {
    if(config.headers != undefined){
      config.headers.Authorization = `Bearer ${accessToken}`
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

fileAxios.interceptors.response.use(
	function(response) {
		return response
	}
)
