import {acceptHMRUpdate, defineStore} from "pinia";
import {reactive} from "vue";
import {IBlogData} from "@/typings/article";
import {GetArticle} from "@/api/modules/article";
// @ts-ignore
import {marked} from "marked";
export const useArticle = defineStore('article', () => {
    const article = reactive<IBlogData>({
        title:'',
        content:'',
        url:''
    })

    ;(async ()=>{
        const res = await GetArticle()
        article.title = res.title
        article.content = marked((res.text).substring(0,200) + '....')
        article.url = `https://www.suemor.com/posts/${res.category.slug}/${res.slug}`
    })()
    return {
        article
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useArticle, import.meta.hot))
