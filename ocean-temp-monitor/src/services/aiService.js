// src/services/aiService.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY',
});

const openai = new OpenAIApi(configuration);

export const searchAI = async (query) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: query,
    max_tokens: 100,
  });
  return response.data.choices[0].text;
};
