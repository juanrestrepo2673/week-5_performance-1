
import { useState, useCallback } from 'react'


export default function UseCallBackUse() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
    console.count('increment definition')
  }
 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}> Incrementar</button>
    </div>
  )
}
