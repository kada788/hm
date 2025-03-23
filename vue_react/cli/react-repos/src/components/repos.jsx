import { useState } from 'react'
import './repos.css'
function Repos() {

    // vue template 
    // js 区域
    // 使用一个响应式数据状态
    // 返回数组 解构，数组的第一个元素是状态，第二个元素是修改状态的函数
    const [repos, setRepos] = useState([])
    const [loading, setloading] = useState(true)
    fetch('https://api.github.com/users/kada788/repos')
        .then(res => res.json())
        .then(data => {
            setloading(false);
            setRepos(data)
        })
    return (
        <div className="github-repos">
            <h2>GITHUB REPOSITORIES</h2>
            {loading && <h3>loading...</h3>}
            <ul>
                {
                    repos.map(repos => (
                        <li key={repos.id}>
                            <a href={repos.html_url}>{repos.name}</a>
                            <span>作者: {repos.owner.login}</span>
                        </li>
                    ))
                }
            </ul>
            {!loading && repos.length === 0 && <h3>没有repos</h3>}
        </div>

    )
}

export default Repos;