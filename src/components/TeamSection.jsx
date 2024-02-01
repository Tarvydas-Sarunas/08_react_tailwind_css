import React from 'react'

export default function TeamSection() {
  return (
    <section className='py-16 border-b-2' >
      <div className="container px-12 mx-auto">
      <h2 className='text-4xl font-bold text-blue-500 text-center pb-4'>Our Team</h2>
      <p className='font-light text-center lg:max-w-96 max-w-[60%] mx-auto text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odio eos cupiditate repellendus modi odit iusto dolore. Aperiam, molestias perspiciatis.</p>
    

    <ul className='pt-10 grid lg:grid-cols-3 grid-cols-2 gap-6'>
      <li className='border border-slate-700 border-2'>
        <div className='relative overflow-hidden photo'>
          <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg" alt="guy" />
          <ul className='bg-blue-500 text-white absolute top-0 left-0 h-full -translate-x-full photo-hover: translate-x-full' >
            <li className='p-4'>icon1</li>
            <li className='p-4'>icon2</li>
          </ul>
          </div>
          <div>
            <h3>Name</h3>
            <p>Pareigos</p>
          </div>
      </li>
      <li className='border border-slate-700 border-2'>
        <div className='relative'>
          <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg" alt="guy" />
          <ul>
            <li>icon1</li>
            <li>icon2</li>
          </ul>
          </div>
          <div>
            <h3>Name</h3>
            <p>Pareigos</p>
          </div>
      </li>
    </ul>
    </div>
    </section>
  )
}
