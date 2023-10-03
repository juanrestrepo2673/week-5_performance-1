import { useState } from 'react'

interface SearchBarProps {
  onSubmit: (query: string) => {}
}


export default function SearchBar({ onSubmit }: SearchBarProps) {

  const [query, setQuery] = useState('')


  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(query)
  }

  return (

    <form onSubmit={handleSubmit}>
      <input
        placeholder='search here'
        onChange={e => setQuery(e.target.value)}
        value={query}
        name='query'
      />
      <button type='submit'>Buscar</button>
    </form>
  )
}
