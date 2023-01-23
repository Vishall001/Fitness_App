import Navbar from "@/component/navbar"
import { useState } from "react"
import { SelectedPage } from "@/shared/types"


function App() {
  const [selectedPage,setSelectedPage] =useState<SelectedPage>(SelectedPage.Home)
 
  return (
    <div className="bg-gray-20 ">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
