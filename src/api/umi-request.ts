import {extend} from 'umi-request'
import {informationConfig} from "../../config";

/**
 * 配置request请求时的默认参数
 */
const client = extend({
    prefix: informationConfig.serverApi,
    timeout: 5000,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})

export default client
