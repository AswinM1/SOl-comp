"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  const path = usePathname()
  const items = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Designs", path: "/designs" },
    { name: "Blogs", path: "/blogs" },
 
  
  ]

  return (
   <div className='w-full px-4 py-5   z-10   flex items-center justify-center mx-auto font-sans   '>
      <div className='flex gap-6 text-[16px] [background-color:#dddddd] p-6 rounded-full font-sans py-3 justify-between items-center mx-auto font-medium cursor-pointer  '>
        {items.map((val, idx) =>
          path === val.path ? (
            <div key={val.path} className=' font-semibold font-sans  tracking-tight text-neutral-700 '>
              {val.name}
            </div>
          ) : (
            <Link key={val.path} href={val.path}>
              <div className=' text-neutral-500  hover:text-black transition-all '>{val.name}</div>
            </Link>
          )
        )}
      </div>
    </div>
  )
}

export default Navbar
