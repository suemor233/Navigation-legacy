import client from "@/api/umi-request";


export function GetUser() {
    return client.get('/user')
}



