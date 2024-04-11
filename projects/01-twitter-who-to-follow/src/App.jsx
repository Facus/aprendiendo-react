import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard/TwitterFollowCard'

function App() {

  return (
    <div className="App">
      <header className='app-header'><h2>Tal vez te guste</h2></header>
      <TwitterFollowCard name="SoyFacus ⭐⭐⭐" userName="soyfacus" initialIsFollowing={true} />
      <TwitterFollowCard name="MiduDev" userName="midudev" />
      <TwitterFollowCard name="Twitter" userName="twitter" />
      <span className='app-footer'><a href="#">Mostrar más</a></span>
    </div>
  )
}

export default App
