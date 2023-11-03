import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { useState } from "react";


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer mensaje="Gimnasio Ludus" />
    </>
  )
}

export default App
