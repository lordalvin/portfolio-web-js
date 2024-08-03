import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function banner() {
  return (
    <div id="home" className="section container mx-auto max-w-[1200px] px-3 items-center"
    >
      <div className="w-full" data-aos="zoom-in">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello, I am
          <div>
          <TypeAnimation
          sequence={[
          // Same substring at the start will only be typed out once, initially
          'Frontend Developer',
          3000, // wait 3s 
          'Junior Web Developer',
          3000, // wait 3s 
          'Footballer',
          3000, // wait 3s 
          'Gamers',
          3000, // wait 3s 
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="ml-3 text-secondary"
          />
          </div>
        </div>
        <div className="max-w-[750px] text-center mx-auto mt-5">
        <p>Holla, My name is Stanislaus Katska Alvin Parulian Sitanggang he is junior php web developer. We have to believe in every what we will face, because whatever we face in various problems, we can overcome it.</p>
        <p>I come from Universitas Komputer Indonesia and have experts in applied calculations and similar types of coding. precisely from that I will make my informatics in coding the best in my entire life.</p>
        </div>
      </div>
    </div>
  )
}
