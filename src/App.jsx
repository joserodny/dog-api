import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'

const getDogPic = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json()
  return dog.message
}

function App() {
  const [dogPic, setDogPic] = useState('')
  useEffect(() => {
    getDogPic().then(pic => setDogPic(pic))
  }, [] )
  return (
    <div className="App">
        <img src={dogPic}/>
        <button onClick={async e => setDogPic(await getDogPic())}> random </button>
    </div>
  )
}

export default App
