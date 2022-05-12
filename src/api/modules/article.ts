import client from "@/api/umi-request";


export function GetArticle() {
    return client.get('/posts/latest')
}





