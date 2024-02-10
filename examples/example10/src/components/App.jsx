import React, {useState, useCallback} from 'react'
import css from './App.module.scss'

const App = () => {
  const [count, setCount] = useState(0)
  const onClick = useCallback(() => {
    setCount((oldCount) => oldCount + 1)
  }, [])

  return (
    <div className={css.MainBlock}>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClick}>
          count is {count}
        </button>
      </div>
      <div>
        <input placeholder='enter string' className={css.Input}/>
      </div>
    </div>
  )
}

export default App
