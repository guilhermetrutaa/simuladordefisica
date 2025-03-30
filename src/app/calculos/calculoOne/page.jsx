'use client';

import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';

export default function CalculosFisica() {
  const [calculoSelecionado, setCalculoSelecionado] = useState(null);

  const calculos = [
    {
      id: 'velocidade',
      nome: 'Velocidade',
      formula: <div className='flex justify-center items-center'><Image src="/calculovelocidade.png" width={200} height={200}/></div>,
      explicacao: 'Onde "d" é o deslocamento e "t" é o tempo'
    },
    {
      id: 'aceleracao',
      nome: 'Aceleração',
      formula: <div className='flex justify-center items-center'><Image src="/calculoaceleracao.svg" width={200} height={200}/></div>,
      explicacao: 'onde "Δv" é a variação da velocidade e "Δt" é a variação do tempo.'
    },
    {
      id: 'forca',
      nome: 'Força (2ª Lei de Newton)',
      formula: <div className='flex justify-center items-center'><Image src="/calculoforca.svg" width={200} height={200}/></div>,
      explicacao: 'onde "m" é a massa e "a" é a aceleração (Lei de Newton).'
    },
    {
      id: 'pressao',
      nome: 'Pressão',
      formula: <div className='flex justify-center items-center'><Image src="/calculopressao.svg" width={200} height={200}/></div>,
      explicacao: 'onde "F" é a força e "A" é a área de contato.'
    },
    {
      id: 'velocidade-media',
      nome: 'Velocidade Média',
      formula: <div className='flex justify-center items-center'><Image src="/calculovelocidademedia.png" width={200} height={200}/></div>,
      explicacao: 'onde "Δd" é a mudança no deslocamento e "Δt" é o tempo decorrido.'
    },
    {
      id: 'densidade',
      nome: 'Densidade',
      formula: <div className='flex justify-center items-center'><Image src="/calculodensidade.svg" width={200} height={200}/></div>,
      explicacao: 'onde "m" é a massa e "V" é o volume.'
    },
    {
      id: 'energia-cinetica',
      nome: 'Energia Cinética',
      formula: <div className='flex justify-center items-center'><Image src="/calculoenergia.svg" width={260} height={260}/></div>,
      explicacao: 'onde "m" é a massa e "v" é a velocidade.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#ececec]">
      <Head>
        <title>Cálculos de Grandezas Físicas</title>
        <meta name="description" content="Demonstração interativa de cálculos físicos" />
      </Head>

      <header className=" text-[#000] p-4 pt-10">
        <h1 className="text-2xl font-bold text-center">Quadro Virtual de Cálculos Físicos</h1>
      </header>

      <main className="container mx-auto p-4 text-[#000]">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Painel de seleção */}
          <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-[#000]">Selecione o Cálculo</h2>
            
            <div className="space-y-2">
              {calculos.map((calculo) => (
                <button
                  key={calculo.id}
                  onClick={() => setCalculoSelecionado(calculo)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    calculoSelecionado?.id === calculo.id 
                      ? 'bg-indigo-100 text-[#000] border-l-4 border-indigo-500' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {calculo.nome}
                </button>
              ))}
            </div>
          </div>

          {/* Quadro de demonstração */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1 ">
            {calculoSelecionado ? (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-[#000]">{calculoSelecionado.nome}</h2>
                
                {/* Quadro negro estilo sala de aula */}
                <div className="bg-black text-green-400 p-6 rounded-lg mb-4 font-mono text-center">
                  <div className="text-3xl mb-4">
                    {calculoSelecionado.formula}
                  </div>
                  <div className="text-white text-lg">
                    {calculoSelecionado.explicacao}
                  </div>
                </div>

                {/* Exemplo numérico */}
                <div className="bg-gray-100 p-4 rounded-lg ">
                  <h3 className="font-medium mb-2">Exemplo Prático:</h3>
                  {renderExemplo(calculoSelecionado.id)}
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500">
                <p>Selecione um cálculo ao lado para visualizar no quadro</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function renderExemplo(tipo) {
  const exemplos = {
    'velocidade': (
      <p>Se um carro percorre 300 metros em 20 segundos: <br />
        <span className="font-mono">v = 300 m / 20 s = 15 m/s</span>
      </p>
    ),
    'aceleracao': (
      <p>Se um carro aumenta sua velocidade de 10 m/s para 30 m/s em 5 segundos: <br />
        <span className="font-mono">a = (30 m/s - 10 m/s) / 5 s = 4 m/s²</span>
      </p>
    ),
    'forca': (
      <p>Para acelerar um objeto de 5 kg a 2 m/s²: <br />
        <span className="font-mono">F = 5 kg × 2 m/s² = 10 N</span>
      </p>
    ),
    'pressao': (
      <p>Uma força de 100 N aplicada sobre uma área de 0.5 m²: <br />
        <span className="font-mono">P = 100 N / 0.5 m² = 200 Pa</span>
      </p>
    ),
    'velocidade-media': (
      <p>Se um objeto vai da posição 10 m para 50 m em 4 segundos: <br />
        <span className="font-mono">v_m = (50 m - 10 m) / 4 s = 10 m/s</span>
      </p>
    ),
    'densidade': (
      <p>Um objeto com massa de 500 g e volume de 250 cm³: <br />
        <span className="font-mono">ρ = 0.5 kg / 0.00025 m³ = 2000 kg/m³</span>
      </p>
    ),
    'energia-cinetica': (
      <p>Uma bola de 0.4 kg a 10 m/s: <br />
        <span className="font-mono">E_c = ½ × 0.4 kg × (10 m/s)² = 20 J</span>
      </p>
    )
  };

  return exemplos[tipo] || <p>Exemplo não disponível</p>;
}