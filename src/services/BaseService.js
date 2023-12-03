import axios from "axios"
import appConfig from "../configs/AppConfig"
import store from "../store"
import { setSignedOut } from "../store/auth/sessionSlice"

const unAuthenticatedCode = ["403"]
const BaseService = axios.create({
  timeout: 10000,
  baseURL: appConfig.apiPrefix
})

BaseService.interceptors.request.use(
  (config) => {
    const stateData = store.getState()
    if(stateData.session.token !== ""){
      config.headers["Authorization"] = `${appConfig.tokenType} ${stateData.session.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
BaseService.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const {response} = error
    if (unAuthenticatedCode.includes(response.status)) {
      return store.dispatch(setSignedOut())
    }
    return Promise.reject(error)
  }
)

export default BaseService