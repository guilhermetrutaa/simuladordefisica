'use client';

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

function page() {
  const router = useRouter();

  return (
    <div className='min-h-screen w-full bg-[#fff]'>
      <div className='flex justify-center items-center gap-2 pt-10'>
          <Image
            src="/Logo.svg"
            width={50}
            height={50}
            alt="Logo Fisica"
          />

          <h1 className='text-[#000] text-[2.5rem] font-medium'>Simulador de Física</h1>
      </div>

      <div>
        <p className='text-[1.1rem] text-[#000] text-center font-light pt-2'>Em que turma você esta dando aula ?</p>
      </div>


      <div className='flex gap-5 justify-center items-center pt-10'>

        <div>
          <button className='bg-[#fff] shadow-md text-[#000] text-[2rem] py-1 px-5 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer' onClick={() => router.push('/home/primeiroano')}>1º ano</button>
        </div>

        <div>
          <button className='bg-[#fff] shadow-md text-[#000] text-[2rem] py-1 px-5 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>2º ano</button>
        </div>

        <div>
          <button className='bg-[#fff] shadow-md text-[#000] text-[2rem] py-1 px-5 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>3º ano</button>
        </div>

      </div>
    </div>
  )
}

export default page
