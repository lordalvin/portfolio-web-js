import React from 'react'
import { BsGithub,BsLinkedin,BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs"
import { useEffect } from 'react'

export default function header() {
 
  return ( 
  <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 items-center">
          <div 
              className="text-gradient font-secondary" 
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos-delay="0"
          >
              <a href="/">
              <h1 className="text-[30px] leading-none font-bold">
                  Alvin
              </h1>
              <h4 className="font-normal leading-none">Parulian</h4>
              </a>
          </div>
          <div className="flex items-center space-x-3"
                        data-aos="fade-left"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="0"
          >
            
              <a href="https://github.com/lordalvin">
              <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/stanislaus-katska-alvin-parulian-sitanggang-857934274/">
              <BsLinkedin />
              </a>
              <a href="https://www.instagram.com/alvinparulian99/">
              <BsInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100004187205966">
              <BsFacebook />
              </a>
              <a href="https://wa.me/628986467365">
              <BsWhatsapp />
              </a>
          </div>
      </div>
  </div>
  )
}

