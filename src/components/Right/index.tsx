import {computed, defineComponent, onMounted, reactive, ref} from 'vue'
import './index.modules.scss'
// @ts-ignore
import { marked } from 'marked'
import {useArticle} from "@/store/article";
import {NSkeleton} from "naive-ui";


export default defineComponent({
  setup(props, ctx) {

      const {article} = useArticle()
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
