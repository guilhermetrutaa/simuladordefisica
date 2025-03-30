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

      <div id='Tabela-Fisica' className='flex pt-5'>

        <div>
          <h1 className='text-[#000] text-[1.2rem] font-semibold pl-10 pt-5'>Introdução à Física:</h1>
          <div className='pl-10 pt-1' 
          onClick={() => router.push('/experimentos/grandezasfisicas')}>
            <button className='bg-[#fff] shadow-md text-[#000] text-[1.2rem] py-1 px-1 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer' >Grandezas físicas e medidas</button>
          </div>
          <div className='pl-10 pt-1'>
            <button className='bg-[#fff] shadow-md text-[#000] text-[1.2rem] py-1 px-1 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>Sistemas de unidades</button>
          </div>
          <div className='pl-10 pt-1'>
            <button className='bg-[#fff] shadow-md text-[#000] text-[1.2rem] py-1 px-1 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>Notação Científica</button>
          </div>
          <div className='pl-10 pt-1'>
            <button className='bg-[#fff] shadow-md text-[#000] text-[1.2rem] py-1 px-1 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>Vetores</button>
          </div>
        </div>

        <div>
          <h1 className='text-[#000] text-[1.2rem] font-semibold pl-10 pt-5'>Cinemática:</h1>
          <div className='pl-10 pt-1'>
            <button className='bg-[#fff] shadow-md text-[#000] text-[1.2rem] py-1 px-1 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>Movimento uniforme (MU)</button>
          </div>
          <div className='pl-10 pt-1'>
            <button className='bg-[#fff] shadow-md text-[#000] text-[1.2rem] py-1 px-1 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>Movimento uniformemente variado (MUV)</button>
          </div>
          <div className='pl-10 pt-1'>
            <button className='bg-[#fff] shadow-md text-[#000] text-[1.2rem] py-1 px-1 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>Queda livre e lançamento vertical</button>
          </div>
          <div className='pl-10 pt-1'>
            <button className='bg-[#fff] shadow-md text-[#000] text-[1.2rem] py-1 px-1 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>Lançamento horizontal e oblíquo</button>
          </div>
          <div className='pl-10 pt-1'>
            <button className='bg-[#fff] shadow-md text-[#000] text-[1.2rem] py-1 px-1 rounded-[0.20rem] border-[#b0b0b0] border cursor-pointer'>Movimento circular uniforme</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
