import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Configuration, OpenAIApi } from 'openai'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ContentLoader from "react-content-loader"

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY
})
const openai = new OpenAIApi(configuration)

function App() {
  const [prompt, setPrompt] = useState('')
  const [image, setImage] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const loading = <ContentLoader
    speed={1}
    width={512}
    height={512}
    viewBox="0 0 512 512"
    backgroundColor="#171717"
    foregroundColor="#1f1f1f"
  >
    <rect x="0" y="0" rx="16" ry="16" width="512" height="512" />
  </ContentLoader>

  async function fetchData() {
    try {
      setIsloading(true)
      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      })
      setImage(res.data.data[0].url)
      setIsloading(false)
    } catch (e) {
      console.log(e)
    }
  }

  // const formSub = (e, prompt) => {
  //   e.preventDefault()
  //   fetchData(prompt)
  // }

  return (
    <div className="App">
      <div>
        <h1>Image Generator</h1>
        <input placeholder='Hmm?' type="text" onChange={(e) => setPrompt(e.target.value)} />
        <button onClick={fetchData}>Generate</button>
      </div>
      {isLoading ? <>{loading}</> : <img src={image} alt="" />}
    </div>
  )
}



export default App
