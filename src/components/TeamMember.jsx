import React from 'react'
import LnIcon from './ui/LnIcon'

export default function TeamMember() {
  return (
    <li className='border border-slate-700 border-2 group'>
        <div className='relative overflow-hidden'>
          <img className='w-full' src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg" alt="guy" />
          <ul className='bg-blue-500 text-white -translate-x-full absolute top-0 left-0 h-full  group-hover:translate-x-0 transition-transform' >
            <li className='p-4 hover:bg-blue-400'>
              <LnIcon>lnr-apartment</LnIcon>
            </li>
            <li className='p-4 hover:bg-blue-400'>
              <LnIcon>lnr-cog</LnIcon>
            </li>
            <li className='p-4 hover:bg-blue-400'>
              <LnIcon>lnr-graduation-hat</LnIcon>
            </li>
          </ul>
          </div>
          <div className='py-4 px-6'>
            <h3 className='text-2xl font-bold'>Name</h3>
            <p className='italic'>Pareigos</p>
          </div>
      </li>
  )
}
