import React, { useState } from 'react'

type Props = {}

const Home = (props: Props) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => setCount(count + 1)}> Click me </button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Home