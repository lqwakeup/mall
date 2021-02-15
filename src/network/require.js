import axios from 'axios';
export function request(config){
    return new Promise((reslove,reject)=>{
        const instance = axios.create({
            baseURL:'http://152.136.185.210:7878/api/m5'
        });

        // instance.interceptors.request.use(config => {
        //     return config;
        // },err => {
        //     console.log(err)
        // });

        // instance.interceptors.response.use(res =>{
        //     return res;
        // },err=>{
        //     console.log(err);
        // })
    
        instance(config)
        .then(res => {
            reslove(res);
        }).catch(err => {
            reject(err);
        })
    })
    
}

