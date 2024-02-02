import React from 'react'
import TeamMember from './TeamMember';

export default function TeamSection() {

  const newArr = []
for (let i = 1; i < 5; i++) {
  newArr.push(i)
}
console.log('newArr ===', newArr);

  return (
    <section className='py-16 border-b-2' >
      <div className="container px-12 mx-auto">
      <h2 className='text-4xl font-bold text-blue-500 text-center pb-4'>Our Team</h2>
      <p className='font-light text-center lg:max-w-96 max-w-[60%] mx-auto text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odio eos cupiditate repellendus modi odit iusto dolore. Aperiam, molestias perspiciatis.</p>

    <ul className='pt-10 grid lg:grid-cols-3 grid-cols-2 gap-6'>
      {newArr.map((sk) => <TeamMember key={sk} /> 
    )}
    </ul>
    </div>
    </section>
  )
}
