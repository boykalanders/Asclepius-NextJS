import Image from 'next/image'
import React from 'react'
import logo from "@/public/assets/icons/logo-full.svg";

const page = () => {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scollbar container'>
        <div className='sub-container max-w-[860px] flex-1 flex-col py-10'>
          <Image 
            src={logo}
            height={1000}
            width={1000}
            alt="asclepius"
            className="mb-12 h-10 w-fit"
          />
          
        </div>
      </section>
    </div>
  )
}

export default page
