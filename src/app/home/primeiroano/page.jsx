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
        <p className='text-[1.1rem] text-[#000] text-center font-light pt-2'>Escolha o experimento que queres apresentar</p>
      </div>

      <div id='Tabela-Fisica' className=' pt-5 lg:flex sm:block'>

        <div>
          <h1 className='text-[#000] text-[1.2rem] font-semibold pl-10 pt-5'>Introdução à Física:</h1>
          <div className='pl-10 pt-3' 
          onClick={() => router.push('/experimentos/grandezasfisicas')}>
            <button className='bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] text-[1.2rem] py-2 px-3 rounded-[1rem] border border-[#000] cursor-pointer transition delay-20 duration-200 ease-in-out'>Grandezas físicas e medidas</button>
          </div>
          <div className='pl-10 pt-3'>
            <button className='bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] text-[1.2rem] py-2 px-3 rounded-[1rem] border border-[#000] cursor-pointer transition delay-20 duration-200 ease-in-out'>Sistemas de unidades</button>
          </div>
          <div className='pl-10 pt-3'>
            <button className='bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] text-[1.2rem] py-2 px-3 rounded-[1rem] border border-[#000] cursor-pointer transition delay-20 duration-200 ease-in-out'>Notação Científica</button>
          </div>
          <div className='pl-10 pt-3'>
            <button className='bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] text-[1.2rem] py-2 px-3 rounded-[1rem] border border-[#000] cursor-pointer transition delay-20 duration-200 ease-in-out'>Vetores</button>
          </div>
        </div>

        <div>
          <h1 className='text-[#000] text-[1.2rem] font-semibold pl-10 pt-5'>Cinemática:</h1>
          <div className='pl-10 pt-3'>
            <button className='bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] text-[1.2rem] py-2 px-3 rounded-[1rem] border border-[#000] cursor-pointer transition delay-20 duration-200 ease-in-out'>Movimento uniforme (MU)</button>
          </div>
          <div className='pl-10 pt-3'>
            <button className='bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] text-[1.2rem] py-2 px-3 rounded-[1rem] border border-[#000] cursor-pointer transition delay-20 duration-200 ease-in-out' >Movimento uniformemente variado (MUV)</button>
          </div>
          <div className='pl-10 pt-3'>
            <button className='bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] text-[1.2rem] py-2 px-3 rounded-[1rem] border border-[#000] cursor-pointer transition delay-20 duration-200 ease-in-out' >Queda livre e lançamento vertical</button>
          </div>
          <div className='pl-10 pt-3'>
            <button className='bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] text-[1.2rem] py-2 px-3 rounded-[1rem] border border-[#000] cursor-pointer transition delay-20 duration-200 ease-in-out' >Lançamento horizontal e oblíquo</button>
          </div>
          <div className='pl-10 pt-3'>
            <button className='bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] text-[1.2rem] py-2 px-3 rounded-[1rem] border border-[#000] cursor-pointer transition delay-20 duration-200 ease-in-out' >Movimento circular uniforme</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
