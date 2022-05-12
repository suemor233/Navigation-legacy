import {computed, defineComponent, onMounted, reactive, ref} from 'vue'
import './index.modules.scss'
import axios from "axios";
// @ts-ignore
import { marked } from 'marked'
import {useArticle} from "@/store/article";

type IBlogData = {
  title:string,
  content:string,
  url:string
}
export default defineComponent({
  setup(props, ctx) {

      const {article} = useArticle()
    // onMounted(()=>{
    //   axios.get('https://server.suemor.com/api/v2/posts/latest').then(res =>{
    //     blogData.title = res.data.title
    //     blogData.content = marked((res.data.text).substring(0,200) + '....')
    //     blogData.url = `https://www.suemor.com/posts/${res.data.category.slug}/${res.data.slug}`
    //   })
    // })
    return () => (
      <>
        <div class={'card-right'}>
          <p class={'card-about'}>{article.title}</p>
            <div class={'card-content'} v-html={article.content}/>
          <a target={'view-windows'}  class={'card-more'} href={article.url}>查看更多</a>
        </div>
      </>
    )
  },
})
