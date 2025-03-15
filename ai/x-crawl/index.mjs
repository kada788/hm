//es6 模块化 导包
import { createCrawl, createCrawlOpenAI } from 'x-crawl'

const crawlApp = createCrawl({
    maxRetry: 3,
    intervalTime: { max: 2000, min: 1000 }
})

const crawlOpenAIApp = createCrawlOpenAI({
    clientOptions: {
        apiKey: 'sk-498e28657a804204a2eafa653d8681de', // 你的 OpenAI API 密钥
        baseURL: 'https://api.deepseek.com',
    },
    defaultModel: {
        chatModel: 'deepseek-chat', // 你想要使用的模型名称，例如 'gpt-3.5-turbo'
    }
})

crawlApp.crawlPage('https://movie.doubao.com/chart')
    .then(async (res) => {
        console.log(res.data)
    })
