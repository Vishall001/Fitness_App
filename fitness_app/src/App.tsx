import Navbar from "@/component/navbar"
import Home from "@/component/home"
import Benefits from "@/component/benefits"
import OurClasses from "@/component/ourClasses"

import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"


function App() {
  const [selectedPage,setSelectedPage] =useState<SelectedPage>(SelectedPage.Home)
 const [isTopOfPage, setIsTopOfPage] =useState <boolean>(true)

 useEffect(()=>{
  const hanldleScroll=()=>{
    if(window.scrollY===0){
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if(window.scrollY !==0){
      setIsTopOfPage(false)
    }
  }
  window.addEventListener("scroll",hanldleScroll)
  return ()=> window.removeEventListener("scroll",hanldleScroll)
 },[])
  return (
    <div className="bg-gray-20 ">
    <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    <Home setSelectedPage={setSelectedPage}/>
    <Benefits setSelectedPage={setSelectedPage}/>
  <OurClasses setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
