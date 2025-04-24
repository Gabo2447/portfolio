import React from 'react'

export function Counter() {
  const [count, setCounter] = React.useState(0)

  function increment() {
    setCounter(count + 1)
  }
  function decrement() {
    setCounter(count - 1)
  }
  function exponent() {
    setCounter(count ** 2)
  }
  return (
    <div>
      <h2>Counter</h2>
      <p>Valor Actual: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={exponent}>Exponencial</button>
    </div>
  )
}
