import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
    // 定义响应式变量 x 和 y 来存储鼠标的位置
    const x = ref(0);
    const y = ref(0);

    // 定义鼠标移动的处理函数
    const handleMouseMove = (event) => {
        // 更新鼠标的 x 和 y 坐标
        x.value = event.pageX;
        y.value = event.pageY;
    };

    // 组件挂载时添加鼠标移动事件监听器
    onMounted(() => {
        window.addEventListener('mousemove', handleMouseMove);
    });

    // 组件卸载时移除鼠标移动事件监听器，防止内存泄漏
    onUnmounted(() => {
        window.removeEventListener('mousemove', handleMouseMove);
    });

    // 返回鼠标的 x 和 y 坐标
    return { x, y };
}
