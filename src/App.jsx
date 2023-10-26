import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardCountry from './components/CardCountry'

function App() {

  const [countries, setCountries] = useState()
  const [inputValue, setInputValue] = useState('colombia')
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${inputValue}`
    setIsLoading(true)
    axios.get(url)
      .then(res => {
        setCountries(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
      .finally(() => {
        //setTimeout(() => {
        setIsLoading(false)
        //}, 3000)
      })
  }, [inputValue])

  const inputCountry = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputCountry.current.value.toLowerCase().trim())
  }

  return (
    <div>
      <h1>Peticiones asíncronas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputCountry} />
        <button className='btn'>Search</button>
      </form>
      {
        isLoading
          ? <h2>loading...</h2>
          : (
            hasError
              ? <h2>"{inputValue}" is not a country. ❌</h2>
              : (
                <CardCountry
                  countries={countries}
                />
              )
          )
      }
    </div>
  )
}

export default App