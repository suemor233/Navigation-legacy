import client from "@/api/umi-request";
import { AboutType } from "@/models/InformationConfigType";


export function aboutInfo() {
    return client.get('/about')
}

export function updateAbout(data:AboutType[]) {
    return client.post('/about',{data})
}