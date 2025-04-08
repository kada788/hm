import { ref, onMounted, onUnmounted, reactive } from "vue";

export function useMouse() {

    const mousePos = reactive({
        x: 0,
        y: 0
    })

    const mousePosHandler = (e) => {
        mousePos.x = e.clientX
        mousePos.y = e.clientY
        console.log('我还在。。。')
    }
    //如果在组件销毁之前没有取消事件监听，那么事件处理函数仍然会被事件监听器引用。    
    onUnmounted(() => {
        window.removeEventListener('mousemove', mousePosHandler)
    })
    onMounted(() => {
        window.addEventListener('mousemove', mousePosHandler)
    })
    return mousePos
}



