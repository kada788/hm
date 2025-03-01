import OpenAI from 'openai'
const openai = new OpenAI({
    //付费
    apiKey: 'sk-nwDEG8UhIM78Da5xcPLwsRv0vj83yCVviIxegcYLHlqGFkAe',

    baseURL: 'https://api.302.ai/v1'

});
const response = await openai.completions.create(

    {
        model: 'gpt-3.5-turbo-instruct',
        max_tokens: 256,
        prompt: '写一首歌'
    }
)
console.log(response);