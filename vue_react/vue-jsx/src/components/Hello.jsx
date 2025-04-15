// vue 中使用jsx 语法
// State(UI)
import {
    defineComponent, // 定义组件

} from 'vue'

export default defineComponent({
    name: "HelloJSX",
    props: {
        msg: String
    },
    setup(props) {
        return () => (
            <div class="hello">
                <h1>{props.msg}</h1>
                <p>Welcome to here</p>
            </div>
        )
    }
})