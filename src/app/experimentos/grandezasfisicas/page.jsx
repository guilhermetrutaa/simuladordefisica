'use client';

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function PhysicsLab() {
  const [activeTool, setActiveTool] = useState('ruler');
  const [unitSystem, setUnitSystem] = useState('metric');
  const router = useRouter();
  
  
  return (
    <div className="min-h-screen bg-[#ececec]">
      <Head>
        <title>Laboratório Virtual de Grandezas Físicas</title>
        <meta name="description" content="Demonstração interativa de grandezas físicas e medidas" />
      </Head>

      <header className="pt-10 pb-5">
        <h1 className="text-2xl font-bold text-center text-[#000]">Laboratório Virtual de Grandezas Físicas</h1>
        <div className='justify-center flex items-center pt-2'>
            <button className='text-[#000] py-3 px-10 bg-[#fff] shadow-md rounded-[0.50rem]  cursor-pointer' onClick={() => router.push('/calculos/calculoOne')}>Ver Cálculos</button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Painel de ferramentas */}
          <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/4">
            <h2 className="text-xl font-semibold mb-4 text-[#000]">Ferramentas de Medição</h2>
            
            <div className="space-y-2">
              <ToolButton 
                active={activeTool === 'ruler'} 
                onClick={() => setActiveTool('ruler')}
                icon="📏"
                label="Régua Digital"
              />
              <ToolButton 
                active={activeTool === 'caliper'} 
                onClick={() => setActiveTool('caliper')}
                icon="🔧"
                label="Paquímetro"
              />
              <ToolButton 
                active={activeTool === 'scale'} 
                onClick={() => setActiveTool('scale')}
                icon="⚖️"
                label="Balança"
              />
              <ToolButton 
                active={activeTool === 'thermometer'} 
                onClick={() => setActiveTool('thermometer')}
                icon="🌡️"
                label="Termômetro"
              />
              <ToolButton 
                active={activeTool === 'timer'} 
                onClick={() => setActiveTool('timer')}
                icon="⏱️"
                label="Cronômetro"
              />
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-2 text-[#000]">Sistema de Unidades</h3>
              <div className="flex space-x-4">
                <UnitSystemButton 
                  active={unitSystem === 'metric'} 
                  onClick={() => setUnitSystem('metric')}
                  label="Métrico (SI)"
                />
                <UnitSystemButton 
                  active={unitSystem === 'imperial'} 
                  onClick={() => setUnitSystem('imperial')}
                  label="Imperial"
                />
              </div>
            </div>
          </div>

          {/* Área de trabalho */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1">
            {activeTool === 'ruler' && <RulerTool unitSystem={unitSystem} />}
            {activeTool === 'caliper' && <CaliperTool unitSystem={unitSystem} />}
            {activeTool === 'scale' && <ScaleTool unitSystem={unitSystem} />}
            {activeTool === 'thermometer' && <ThermometerTool unitSystem={unitSystem} />}
            {activeTool === 'timer' && <TimerTool />}
          </div>
        </div>
      </main>
    </div>
  );
}

function ToolButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center p-3 rounded-lg transition-all ${active ? 'bg-indigo-100 text-indigo-700 border-l-4 border-indigo-500' : 'hover:bg-gray-100'} text-[#000]`}
    >
      <span className="text-2xl mr-3">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
}

function UnitSystemButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${active ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'} text-[#000]`}
    >
      {label}
    </button>
  );
}

function RulerTool({ unitSystem }) {
  const [measurement, setMeasurement] = useState(0);
  const rulerRef = useRef(null);
  const objectRef = useRef(null);
  const [isMeasuring, setIsMeasuring] = useState(false);

  const handleMouseMove = (e) => {
    if (!isMeasuring || !rulerRef.current || !objectRef.current) return;
    
    const rulerRect = rulerRef.current.getBoundingClientRect();
    const objectRect = objectRef.current.getBoundingClientRect();
    
    const measuredLength = Math.abs(e.clientX - rulerRect.left) - objectRect.left;
    const lengthInCm = measuredLength / 10;
    
    if (unitSystem === 'metric') {
      setMeasurement(lengthInCm);
    } else {
      setMeasurement(lengthInCm / 2.54);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-[#000]">Régua Digital</h2>
      <p className="mb-4 text-[#000]">Arraste a régua para medir o objeto azul.</p>
      
      <div 
        className="relative h-32 bg-gray-100 rounded-lg mb-6 p-4"
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsMeasuring(false)}
        onMouseLeave={() => setIsMeasuring(false)}
      >
        <div 
          ref={objectRef}
          className="w-40 h-20 bg-blue-500 rounded-md absolute left-10 top-6"
        />
        
        <div
          ref={rulerRef}
          className={`h-8 bg-yellow-200 absolute top-4 cursor-move ${isMeasuring ? 'shadow-lg' : ''}`}
          style={{ width: '300px' }}
          onMouseDown={() => setIsMeasuring(true)}
        >
          <div className="flex h-full items-center justify-between px-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i}
                className={`h-${i % 10 === 0 ? '6' : i % 5 === 0 ? '4' : '2'} w-px bg-gray-700`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2 text-[#000]">Resultado da Medição:</h3>
        <p className="text-2xl font-bold text-[#000]">
          {measurement.toFixed(2)} {unitSystem === 'metric' ? 'cm' : 'pol'}
        </p>
        <p className="text-sm mt-1 text-[#000]">
          {unitSystem === 'metric' ? 
            `Equivalente: ${(measurement / 100).toFixed(4)} m` : 
            `Equivalente: ${(measurement * 2.54).toFixed(2)} cm`}
        </p>
      </div>
    </div>
  );
}

function CaliperTool({ unitSystem }) {
  const [measurement, setMeasurement] = useState(0);
  const [jawPosition, setJawPosition] = useState(50);

  const handleSliderChange = (e) => {
    const position = e.target.value;
    setJawPosition(position);
    
    const measurementCm = position / 10;
    setMeasurement(unitSystem === 'metric' ? measurementCm : measurementCm / 2.54);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4  text-[#000]">Paquímetro Digital</h2>
      <p className="mb-4 text-[#000]">Ajuste o paquímetro para medir o objeto virtual.</p>
      
      <div className="relative h-40 bg-gray-100 rounded-lg mb-6 p-6 flex items-center justify-center">
        <div className="w-24 h-16 bg-purple-500 rounded-sm absolute left-1/4" />
        
        <div className="relative w-full">
          <div className="h-12 bg-gray-300 rounded-sm absolute left-0 right-0" />
          
          <div 
            className="h-16 bg-gray-400 rounded-sm absolute top-0"
            style={{ width: '20px', left: `${jawPosition}%` }}
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block mb-2 font-medium text-[#000]">Posição do cursor:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={jawPosition}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2 text-[#000]">Medição:</h3>
        <p className="text-2xl font-bold text-[#000]">
          {measurement.toFixed(2)} {unitSystem === 'metric' ? 'cm' : 'pol'}
        </p>
        <p className="text-sm mt-1 text-[#000]">
          Precisão: ±0.05 {unitSystem === 'metric' ? 'mm' : 'in'}
        </p>
      </div>
    </div>
  );
}

function ScaleTool({ unitSystem }) {
  const [mass, setMass] = useState(0);
  const [selectedObject, setSelectedObject] = useState(null);
  
  const objects = [
    { name: "Maçã", emoji: "🍎", massKg: 0.15 },
    { name: "Livro", emoji: "📚", massKg: 0.5 },
    { name: "Tijolo", emoji: "🧱", massKg: 2.5 },
    { name: "Bola", emoji: "⚽", massKg: 0.4 },
  ];

  const handleObjectSelect = (obj) => {
    setSelectedObject(obj);
    setMass(obj.massKg);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4  text-[#000]">Balança Digital</h2>
      <p className="mb-4 text-[#000]">Selecione um objeto para medir sua massa.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {objects.map((obj) => (
          <button
            key={obj.name}
            onClick={() => handleObjectSelect(obj)}
            className={`p-4 rounded-lg flex flex-col items-center transition-all ${selectedObject?.name === obj.name ? 'bg-indigo-100 border-2 border-indigo-300' : 'bg-gray-100 hover:bg-gray-200'} text-[#000]`}
          >
            <span className="text-3xl mb-2">{obj.emoji}</span>
            <span>{obj.name}</span>
          </button>
        ))}
      </div>
      
      <div className="bg-gray-100 rounded-lg p-6 mb-6 flex flex-col items-center">
        <div className="w-32 h-8 bg-gray-300 rounded-t-lg mb-2"></div>
        <div className="w-40 h-4 bg-gray-400 rounded-lg"></div>
        
        {selectedObject && (
          <div className="mt-4 text-4xl">
            {selectedObject.emoji}
          </div>
        )}
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2 text-[#000]">Resultado:</h3>
        <p className="text-2xl font-bold text-[#000]">
          {unitSystem === 'metric' ? 
            `${mass.toFixed(2)} kg` : 
            `${(mass * 2.20462).toFixed(2)} lb`}
        </p>
        <p className="text-sm mt-1 text-[#000]">
          Peso: {(mass * 9.8).toFixed(2)} N (na Terra)
        </p>
      </div>
    </div>
  );
}

function ThermometerTool({ unitSystem }) {
  const [temperature, setTemperature] = useState(20);
  const [substance, setSubstance] = useState('water');
  
  const substances = {
    water: { name: "Água", freeze: 0, boil: 100, color: "bg-blue-400" },
    mercury: { name: "Mercúrio", freeze: -38.83, boil: 356.7, color: "bg-gray-400" },
    ethanol: { name: "Etanol", freeze: -114, boil: 78.37, color: "bg-green-400" },
  };

  const currentSubstance = substances[substance];
  const state = temperature < currentSubstance.freeze ? "Sólido" :
               temperature > currentSubstance.boil ? "Gasoso" : "Líquido";

  const getTempInCurrentUnit = (tempC) => {
    return unitSystem === 'metric' ? tempC : (tempC * 9/5) + 32;
  };

  const getUnitSymbol = () => {
    return unitSystem === 'metric' ? '°C' : '°F';
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-[#000]">Termômetro Digital</h2>
      
      <div className="mb-6">
        <label className="block mb-2 font-medium text-[#000]">Substância:</label>
        <div className="flex space-x-2">
          {Object.keys(substances).map((key) => (
            <button
              key={key}
              onClick={() => setSubstance(key)}
              className={`px-4 py-2 rounded-md ${substance === key ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'} text-[#000]`}
            >
              {substances[key].name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <label className="block mb-2 font-medium text-[#000]">
            Temperatura: {getTempInCurrentUnit(temperature).toFixed(1)}{getUnitSymbol()}
          </label>
          <input
            type="range"
            min="-200"
            max="400"
            value={temperature}
            onChange={(e) => setTemperature(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          
          <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-[#000]">
            <div>
              <p className="font-medium">Ponto de Fusão:</p>
              <p>{getTempInCurrentUnit(currentSubstance.freeze).toFixed(1)}{getUnitSymbol()}</p>
            </div>
            <div>
              <p className="font-medium">Ponto de Ebulição:</p>
              <p>{getTempInCurrentUnit(currentSubstance.boil).toFixed(1)}{getUnitSymbol()}</p>
            </div>
            <div>
              <p className="font-medium">Estado Atual:</p>
              <p>{state}</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="relative h-48 w-24 bg-gray-200 rounded-lg overflow-hidden">
            <div 
              className={`absolute bottom-0 left-0 right-0 ${currentSubstance.color}`}
              style={{ 
                height: `${((temperature + 200) / 600) * 100}%`,
                transition: 'height 0.3s ease'
              }}
            />
            
            <div className="absolute inset-0 flex flex-col justify-between">
              {Array.from({ length: 7 }).map((_, i) => {
                const temp = -200 + (i * 100);
                return (
                  <div key={i} className="relative h-px bg-black">
                    <span className="absolute left-6 text-xs text-[#000]">
                      {getTempInCurrentUnit(temp).toFixed(0)}{getUnitSymbol()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2 text-[#000]">Equivalências:</h3>
        <div className="grid grid-cols-2 gap-2 text-[#000]">
          <p>{temperature.toFixed(1)} °C</p>
          <p>{(temperature + 273.15).toFixed(2)} K</p>
          <p>{((temperature * 9/5) + 32).toFixed(1)} °F</p>
        </div>
      </div>
    </div>
  );
}

function TimerTool() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    const startTime = Date.now() - time * 10;
    
    intervalRef.current = setInterval(() => {
      setTime((Date.now() - startTime) / 10);
    }, 10);
  };

  const stopTimer = () => {
    if (!isRunning) return;
    
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (t) => {
    const ms = `00${Math.floor(t % 100)}`.slice(-2);
    const s = `00${Math.floor((t / 100) % 60)}`.slice(-2);
    const m = `00${Math.floor((t / 6000) % 60)}`.slice(-2);
    return `${m}:${s}.${ms}`;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-[#000]">Cronômetro de Precisão</h2>
      
      <div className="flex flex-col items-center mb-6">
        <div className="text-5xl font-mono font-bold mb-6 text-[#000]">
          {formatTime(time)}
        </div>
        
        <div className="flex space-x-4 mb-6">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Iniciar
            </button>
          ) : (
            <button
              onClick={stopTimer}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Parar
            </button>
          )}
          
          <button
            onClick={resetTimer}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Reiniciar
          </button>
          
          {isRunning && (
            <button
              onClick={recordLap}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Volta
            </button>
          )}
        </div>
      </div>
      
      {laps.length > 0 && (
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2 text-[#000]">Voltas Registradas:</h3>
          <ul className="divide-y divide-indigo-100 text-[#000]">
            {laps.map((lap, i) => (
              <li key={i} className="py-2 flex justify-between">
                <span>Volta {i + 1}:</span>
                <span className="font-mono">{formatTime(lap)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mt-6 text-sm text-[#000]">
        <p>Precisão: ±0.01s (tempo de reação humana: ~0.1-0.3s)</p>
      </div>
    </div>
  );
}