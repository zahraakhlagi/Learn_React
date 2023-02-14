import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from "./component/useState/Counter.jsx";
import Counter01 from "./component/useState/Counter01.jsx";
import Input from "./component/useState/Input.jsx";
import ChangeToClass from "./component/useState/ChangeToClass.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <ChangeToClass/>
    </div>
  )
}

export default App
