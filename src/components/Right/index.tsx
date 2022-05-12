import {computed, defineComponent, onMounted, reactive, ref} from 'vue'
import './index.modules.scss'
import axios from "axios";
// @ts-ignore
import { marked } from 'marked'
export default defineComponent({
  setup(props, ctx) {
    const blogData = reactive({
      title:'',
      content:'',
      url:''
    })
    onMounted(()=>{
      axios.get('https://server.suemor.com/api/v2/posts/latest').then(res =>{
        blogData.title = res.data.title
        blogData.content = marked((res.data.text).substring(0,200) + '....')
        blogData.url = `https://www.suemor.com/posts/${res.data.category.slug}/${res.data.slug}`
      })
    })
    return () => (
      <>
        <div class={'card-right'}>
          <p class={'card-about'}>{blogData.title}</p>
            <div class={'card-content'} v-html={blogData.content}/>
          <a target={'view-windows'}  class={'card-more'} href={blogData.url}>查看更多</a>
        </div>
      </>
    )
  },
})
