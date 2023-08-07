import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isDoneCounting, setIsDoneCounting] = useState(false)

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8080/events');

    eventSource.addEventListener('ping', (data) => {
      const parsedData = JSON.parse(data.data);

      setCount(parsedData.count)

      setIsDoneCounting(parsedData.done)
    })
  }, []);

  return (
    <>
      <h1>Event Source API example</h1>
      <div className="card">
        <p>
          Server counting to <b>{count}</b>
        </p>
        {isDoneCounting && <h3>Server is done counting</h3>}
      </div>
    </>
  )
}

export default App
