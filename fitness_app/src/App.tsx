import Navbar from "@/component/navbar"
import { useState } from "react"

function App() {
  const [selectedPage,setSelectedPage] =useState("home")
 
  return (
    <div className="bg-gray-20 ">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
