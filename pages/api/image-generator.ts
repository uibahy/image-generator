// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

type Data = {
  image: any
}

const configurastion = new Configuration({
  apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configurastion)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {input} = req.body

  const response = await openai.createImage({
    prompt: input,
    n:1 ,
    size: '256x256'
  })

  const img = response.data.data[0].url

  res.status(200).json({image: img})
}