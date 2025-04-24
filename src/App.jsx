import { Proyect } from './components/proyect/proyect'
import { Card } from './components/card/card'
import { Navbar } from './components/navbar/navbar'
import './style.css'
import style from './App.module.css'

export function App() {
  return (
    <div>
      <Navbar />
      <div className={`${style.containerApp}`}>
        <Card />
        <Proyect />
      </div>
    </div>
  )
}
