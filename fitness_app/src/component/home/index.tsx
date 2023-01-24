import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import  SponsorFortune from "@/assets/SponsorFortune.png"

import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props={
    setSelectedPage: (value:SelectedPage)=>void
}

const index = (setSelectedPage:Props) => {
    const isAboveMediumScreens =useMediaQuery("(min-width:1060px)")
  return (
   <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
    {/* Image Main header */}
    <div className=''>
     {/* Main header */}
     <div>
        {/* Headings */}
        <div>
            <div>
                <div>
                    <img src={HomePageText} alt="Home page text" />
                </div>
            </div>
            <p className="mt-8 text-sm">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
        </div>
        {/* Actions */}
        <div>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                 <p>Learn More</p>

            </AnchorLink>
        </div>
     </div>
     {/* Image */}
     <div>

     </div>
    </div>

   </section>
  )
}

export default index
