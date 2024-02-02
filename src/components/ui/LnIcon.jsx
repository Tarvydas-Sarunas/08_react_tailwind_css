import React, { Children } from 'react'

export default function LnIcon({children}) {
  return (
    <span className={`lnr text-4xl ${children} `}></span>
  )
}
