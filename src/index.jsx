import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DataComponent from './components/DataComponent.jsx'

const data = DataComponent()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 style={{
      textAlign:"center"
    }}>Kalvium gallary</h1>
    <div className='gridContainerStyle'>
      <App id="1" imgUrl={data[0].img}/>
      <App id="2" imgUrl={data[1].img}/>
      <App id="3" imgUrl={data[2].img}/>
      <App id="4" imgUrl={data[3].img}/>
    </div>
  </React.StrictMode>,
)