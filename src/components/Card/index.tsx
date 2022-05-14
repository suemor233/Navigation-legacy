import {defineComponent} from 'vue'
import './index.modules.scss'
import Left from "@/components/Left";
import Right from "@/components/Right";
import {NSkeleton} from "naive-ui";
export default defineComponent({
    setup(props, ctx) {
        return () => (
            <>
                    <div class={'card animate__animated animate__fadeIn'}>
                            <Left/>
                            <div class={'fg'}/>
                            <Right/>
                    </div>
            </>
        );
    }
})
