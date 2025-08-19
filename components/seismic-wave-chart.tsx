
'use client'

import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

export default function SeismicWaveChart() {
  const [data, setData] = useState<Array<{ time: number; amplitude: number }>>([])

  useEffect(() => {
    const generateData = () => {
      const newData = []
      const currentTime = Date.now()
      
      for (let i = 0; i < 50; i++) {
        const time = currentTime + (i * 100)
        // Generate seismic-like wave with multiple frequencies
        const primaryWave = Math.sin((i * 0.3)) * 0.8
        const secondaryWave = Math.sin((i * 0.7)) * 0.3
        const noise = (Math.random() - 0.5) * 0.2
        const amplitude = primaryWave + secondaryWave + noise
        
        newData.push({
          time: i,
          amplitude: amplitude
        })
      }
      
      setData(newData)
    }

    generateData()
    const interval = setInterval(generateData, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-64 bg-slate-800/30 rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="time" 
            tick={false}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            tick={false}
            axisLine={false}
            tickLine={false}
            domain={[-1.5, 1.5]}
          />
          <Line
            type="monotone"
            dataKey="amplitude"
            stroke="#FF6A00"
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
            animationDuration={2000}
            className="seismic-wave"
          />
        </LineChart>
      </ResponsiveContainer>
      
      {/* Grid overlay for seismic chart look */}
      <div className="absolute inset-4 pointer-events-none opacity-20">
        <div className="w-full h-full grid grid-cols-10 grid-rows-6 gap-0">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="border border-orange-500/20"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
