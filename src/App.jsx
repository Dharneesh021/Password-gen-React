import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [upperCase , setUpperCase] = useState(true)
  const [lowerCase , setLowerCase] = useState(true)
  const [number , setNumber] = useState(true)
  const [symbols , setSymbols] = useState(true)
  const [password , setPassword] = useState("")


  const handleGenerate = ()=>{
    let charset = " "
    if(upperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(lowerCase) charset += "abcdefghijklmnopqrstuvwxyz"
    if(number) charset += "0123456789"
    if(symbols) charset += "!@#$%^&*()_+={}[]><"

    let generatePassword = ""
    for(let i = 0 ; i < length ; i++){
      const store = Math.floor(Math.random()*charset.length)
      generatePassword += charset[store]
    }
    setPassword(generatePassword)
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(password)
    alert(`${password} is copied`)
  }


  useEffect(()=>{
    handleGenerate()
  },[length,upperCase,lowerCase,number,symbols])
  return (
    <>
      <div className="password-gen">
        <h2>Strong Password Generator</h2>

        <div className="lenght-password">
          <label htmlFor="lenght">Password Length :</label>
          <input type="number" id="lenght" min="0" value={length} onChange={(e)=>{setLength(parseInt(e.target.value))}}/>
        </div>

        <div className="check-input">
          <input type="checkbox" id="upper" checked={upperCase} onChange={(e)=>{setUpperCase(e.target.checked)}}/>
          <label htmlFor="upper">Include UpperCase</label>
        </div>

        <div className="check-input">
          <input type="checkbox" id="lower" checked={lowerCase} onChange={(e)=>{setLowerCase(e.target.checked)}}/>
          <label htmlFor="lower">Include LowerCase</label>
        </div>

        <div className="check-input">
          <input type="checkbox" id="number" checked={number} onChange={(e)=>{setNumber(e.target.checked)}}/>
          <label htmlFor="number">Include Numbers</label>
        </div>

        <div className="check-input">
          <input type="checkbox" id="symbols" checked={symbols} onChange={(e)=>{setSymbols(e.target.checked)}}/>
          <label htmlFor="symbols">Include Symbols</label>
        </div>

        <button className="generate-btn" onClick={handleGenerate}>Generate Password</button>
        <div className="result">
          <input type="text" id="" value={password}/>
          <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
