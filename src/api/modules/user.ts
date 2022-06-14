import client from "@/api/umi-request";

export function login(data: {username?:string,password?:string}) {
    return client.post('/user/login', {data})
}

export function userInfo() {
    return client.get('/user')
}

export function check() {
    return client.get('/user/check_logged')
}