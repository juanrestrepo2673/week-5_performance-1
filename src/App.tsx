import { useEffect, useState, useCallback } from 'react'
import './App.css'
import SearchBar from './components/searchBar'
import CounterUseCallback from './components/CounterUseCallback'



function App() {
  console.log('render')

  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({})
  const [error, setError] = useState(null)


  const handleSubmitParent = useCallback((query) => {

    console.count('handle submit parent')

    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(res => res.json())
      .then(res => {
        setResponse(res.results[0])
        setLoading(false)
        console.log(res)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      }
      )

  }, [response]
  )

  return (
    <div className='character-finder'>


      <CounterUseCallback />
      <SearchBar onSubmit={handleSubmitParent} />
      {loading && <p>Loading</p>}
      {!loading &&
        < img src={response?.image} />
      }
    </div>
  )

}

export default App
