import dotenv from 'dotenv';
import OpenAI from 'openai'
dotenv.config();
const {
    OPENAI_API_KEY,
    OPENAI_BASE_URL

} = process.env;

// 实例化openai对象
const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
    baseURL: OPENAI_BASE_URL,
});

// get_comolpletion 函数封装
// async 是 es7
/**
 * 获取 OpenAI GPT 模型的完成结果。
 * 
 * @param {string} prompt - 用户提供的提示信息，用于引导模型生成回复。
 * @param {string} [model='gpt-3.5-turbo'] - 要使用的 OpenAI 模型，默认为 'gpt-3.5-turbo'。
 * @returns {Promise<string>} - 一个 Promise，解析为模型生成的回复内容。
 */
const get_completion =
    async (prompt, model = 'gpt-3.5-turbo') => {
        // 构造消息对象，包含用户角色和提示内容
        const messages = [{
            role: 'user', content: prompt
        }];

        // 调用 OpenAI API 创建聊天完成结果
        const response = await client.chat.completions.create({
            model,
            messages,
            temperature: 0 // 控制输出的随机性，0 表示最确定的输出
        });
        // 返回模型生成的第一条回复内容
        return response.choices[0].message.content;
    }

const main = async () => {
    const sentiment = 'negative'
    const review = ` `
    const prompt = `
    我给一个产品写了一个评论：${review}
    这个评论是${sentiment}的。
    请总结一下这个评论。 `
    const result = await get_completion(prompt)
    console.log(result)
}
main()
