import client from "@/api/umi-request";

//读取kami的文章
export function GetArticle() {
    return client.get('/posts/latest')
}





