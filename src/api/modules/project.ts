import client from "@/api/umi-request";
import { ProjectDataType } from "@/models/projectType";



export function projectInfo() {
    return client.get('/project')
}

export function createProject(data:ProjectDataType) {
    return client.post('/project',{data})
}

export function deleteProject(data:string[]) {
    return client.delete('/project',{data})
}