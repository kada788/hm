// 一个组件就是函数
// 组件首字母大写 复习
// 组件的返回值是jsx

function App() {
  // jsx
  // js函数区域里编写html
  let myTitle = <h1>Hello,world</h1>
  return (
    //{myTitle}
    // JSX 最外层， 只能有且必须有一个节点
    // enclosed tag  -> 原理？ api
    // fragment 片段
    <>
      <p>hello</p><p>world</p>
    </>
  )
}

export default App
