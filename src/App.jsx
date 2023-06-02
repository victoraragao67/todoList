import styles from './App.module.css'
import { Header } from './components/Header'
import { ToDoList } from './components/List'
import './global.css'


export function App() {

  return (
    <>
    <Header />
     <ToDoList/>
    </>
  )
}


