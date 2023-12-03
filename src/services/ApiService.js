import BaseService from "./BaseService"


const ApiSerivce = {
    fetchData(param){
        return new Promise((resolve, reject) => {
            BaseService(param)
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

export default ApiSerivce