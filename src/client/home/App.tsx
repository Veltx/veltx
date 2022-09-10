import reactLogo from '../assets/react.svg'
import veltxLogo from '../assets/veltx.png'
import './App.sass'

function App() {
  return (
    <div className="App">
      <div className='veltxLogo'>
        <a href="https://reactjs.org" target="_blank">
          <img src={veltxLogo} className="logo react" alt="Veltx logo" />
        </a>
      </div>
      <h1 className='TitleCard'>Veltx</h1>
    </div>
  )
}

export default App
