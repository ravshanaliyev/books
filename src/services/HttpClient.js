import axios from "axios"
import ApiSerivce from "./ApiService"


class HttpClient{
    async get(url){
        return await ApiSerivce.fetchData({
            method: "get",
            url
        })
    }
    async post(url, data){
        return await ApiSerivce.fetchData({
            method: "post",
            url,
            data
        }) 
    }
    async patch(url, data){
        return await ApiSerivce.fetchData({
            method: "patch",
            url,
            data
        })
    }
    async put(url, data){
        return await ApiSerivce.fetchData({
            method: "put",
            url,
            data
        })
    }
    async delete(url){
        return await ApiSerivce.fetchData({
            method: "delete",
            url
        })
    }
}
export default new HttpClient()