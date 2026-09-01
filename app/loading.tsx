"use client"
import React from 'react'
import {motion} from "motion/react"
import Shimmer from '@/components/Shimmer'

export default function loading() {
  return (
    <div className='w-full h-screen justify-center items-center flex font-medium font-xl tracking-tight'>
      Loading...
    </div>
  )
}

