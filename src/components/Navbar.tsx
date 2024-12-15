import React from 'react'
import { RainbowButton } from './ui/rainbow-button'
// import { Star } from 'lucide-react'
// import Star from " @/public/star-svgrepo-com.svg"
import Image from 'next/image'



const Navbar = () => {
  return (
    <nav className='bg-black flex border-b-2 border-zinc-500  justify-between items-center p-2'>
        <div className='text-white'>
            <h1 className='font-bold text-3xl'>Logo</h1>
        </div>
        <div className='text-white'>
            <RainbowButton className='flex gap-2 font-medium'>Star on GitHub <Image src={"/star-svgrepo-com.svg"} width={20} height={20} alt='star' /></RainbowButton>
        </div>
    </nav>
  )
}

export default Navbar