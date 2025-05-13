
import { openai } from '@/lib/openaiClient';

export default async function handler(req, res) {
  const { message } = req.body;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: message }],
  });

  res.status(200).json({ response: completion.choices[0].message.content });
}
