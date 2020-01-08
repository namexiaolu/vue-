import axios from 'axios'

// export function request(config,succes,failure){
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout:5000
//     })
// // 发送真正的网络请求
//     instance(config)
//     .then(res =>{
//         // config.log(res);
//         succes(res);
//     })
//     .catch(err => {
        
//         failure(err)
//     })
// }
export function request(config){
    return new Promise((resolve,reject) =>{
        // 1创建axios实例
        const instance = axios.create({
            baseURL:'http://123.207.32.32:8000',
            timeout: 5000
        })
        // 发送真正的网络请求
        instance(config)
            .then(res =>{
                resolve(res)
            })
            .catch(err =>{
                reject(err)
            })
    })
}