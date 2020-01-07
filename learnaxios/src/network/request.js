export function instance1(config,succes,failure){
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout:5000
    })

    instance(config)
    .this(res =>{
        config.log(res);
    })
    .catch(err => {
        console.log(err);
        failure(err)
    })
}