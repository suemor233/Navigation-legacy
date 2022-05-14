import client from "@/api/umi-request";

//获取用户信息
export function GetUser() {
    return client.get('/user')
}



