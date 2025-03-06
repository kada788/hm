# 网易云音乐 html5

- 原创产品技术范

- h5
  - 手机网页 分享到朋友圈 病毒式的传播
  - 模拟器
    - 本地调试 设计稿的尺寸 标准iphone手机 750px手机 retina 屏 高清屏幕1个发光点pt(物理宽度)有多个像素 （2）2px
    - 真机调试
- dom 编程
  - document.getElementById('j-bgm')
    - document.getElementById('j-bgm') 会在 HTML 文档中查找 id 为 j-bgm 的元素，并返回该元素的引用。如果找到了对应的元素，返回的就是该元素的 DOM 对象；如果没有找到，返回值为 null。
  - document.querySelector('#j-bgm')
    - document.querySelector：可以使用任何有效的 CSS 选择器（如类选择器、ID 选择器、标签选择器等）。如果有多个元素匹配选择器，它只会返回第一个匹配的元素。
  - 添加事件

- css 高级技巧
  - music-btn off musicBtn.classList
  - music-btn 基础样式 off负责 切换独立逻辑 面向对象的多态的思想

- audio
  - 近几年，不允许 网页直接播放音乐
  - js play() 触发耳麦
  - audio, video 是网页的一部分

- 用户体验细节
  - 要把用户当小白
  - 页面指示器