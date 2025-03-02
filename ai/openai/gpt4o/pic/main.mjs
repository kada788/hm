import OpenAi from "openai";
import dotenv from "dotenv";
dotenv.config();
// console.log(process.env.OpenAI_API_KEY, '////')
const client = new OpenAi({
    apiKey: process.env.OpenAI_API_KEY,
    baseURL: 'https://api.302.ai/v1'//转发地址
})
//主函数  执行的入口，单点
// 函数申明

//es6 箭头函数 传统函数更简洁 
//赋值语句 
//函数也是对象
//函数表达式
// async 是函数修饰符， +await 一对
try {
    const main = async () => {
        // openai 的调用是异步的
        const response = await client.chat.completions.create(
            {
                model: 'gpt-4o',
                messages: [
                    {
                        role: 'user',//角色
                        content: [
                            {
                                type: 'text',
                                'text': '请描述以下图片的内容',
                            },
                            {
                                type: 'image_url',
                                'image_url': {
                                    "url": ""
                                }
                            }
                        ]
                    }
                ],
                max_tokens: 256
            }
        )
        console.log(response.choices[0].message.content)

    }

} catch (err) {
    console.log(err)
}

// main()
