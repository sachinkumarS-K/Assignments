
import './App.css'
import Person from './Components/Person'
import Button from './Components/Button'
import toast, { Toaster } from 'react-hot-toast';
import Header from './Components/Header';
import List from './Components/List';
function App() {
  const items = [
    "header",
    "Main-Section",
    "Sub-Section",
    "Footer"
  ]
  return (
    <>
      <Header title={"Dummy Reat App"}/>
      <Person name={"sachin"} age={18} />
      <Button text={"Click ME"} onClick={() => { toast.success("Button Clicked") }} />
      <List items={items}/>

      <Toaster/>
    </>
  )
}

export default App
