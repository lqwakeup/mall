import {request} from './require';

export function getHomeData() {
    return request({
        url:'home/multidata'
    })
}