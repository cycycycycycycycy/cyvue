import axios from '../utils/axios'

export function test(query) {
    return axios.request({
        url: '/wxAppLawyer/list',
        method: 'get',
        params: query
    })
}