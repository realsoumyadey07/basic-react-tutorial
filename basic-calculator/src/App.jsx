import style from './App.module.css'
import Displya from './components/Displya.jsx'
import Button from './components/Button.jsx'

function App() {
  
          
  return (
    <div className={style.calculator}>
      <Displya/>
      <div className={`${style.buttons}`}>
        <Button/>
      </div>
    </div>
  )
}

export default App
