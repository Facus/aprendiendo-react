// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <article className='tw-follow-card'>
        <header className='tw-follow-header'>
          <img src="https://unavatar.io/soyfacus" alt="Avatar de soyfacus" />
          <div className="tw-follow-card-info">
            <strong>SoyFacus ⭐⭐⭐</strong>
            <span>@soyfacus</span>
          </div>
        </header>
        <aside>
          <button className='tw-follow-btn'>Seguir</button>
        </aside>
      </article>
    </div>
  )
}

export default App
