import { useState } from 'react'
import './App.css'
import { Configuration, OpenAIApi } from 'openai'
import 'react-loading-skeleton/dist/skeleton.css'
import ContentLoader from "react-content-loader"
import Navbar from './components/Navbar'

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
    width={256}
    height={256}
    viewBox="0 0 256 256"
    backgroundColor="#171717"
    foregroundColor="#1f1f1f"
  >
    <rect x="0" y="0" rx="16" ry="16" width="256" height="256" />
  </ContentLoader>

  async function fetchData() {
    try {
      setIsloading(true)
      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
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
      <Navbar />
      <div className='container'>
        <div className="header">
          <h1>Image Generator</h1>
          <p>Transform words into visuals with AI image generator. Effortlessly create custom images based on your descriptions.</p>
        </div>
        <div className="inputs">
          <input placeholder='Hmm?' type="text" onChange={(e) => setPrompt(e.target.value)} />
          <button onClick={fetchData}>Generate</button>
        </div>
        <div className="image">
          {isLoading ? <>{loading}</> : <img src={image} alt="" />}
        </div>
      </div>
    </div>
  )
}



export default App
