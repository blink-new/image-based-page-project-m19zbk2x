import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0A1128] relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Header */}
      <header className="relative z-10 flex justify-center pt-8">
        <div className="flex items-center relative">
          <img src="/images/blink-logo-icon-light.svg" alt="Blink Logo" className="w-10 h-10" />
          <span className="ml-2 text-white font-medium">Blink.new</span>
        </div>
      </header>
      
      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-16 md:mt-32">
        {/* Left side - Headline */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 relative">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <img src="/images/blink-logo-icon-light.svg" alt="Blink Logo" className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight relative">
            Blink
            <span className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 blur-md"></span>
          </h1>
          <p className="text-2xl md:text-3xl mt-4 text-white relative">
            The AI that turns ideas into <span className="text-[#3B82F6] relative">real apps<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 opacity-50"></span></span>.
          </p>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-500 rounded-full opacity-10 blur-lg"></div>
        </div>
        
        {/* Right side - Input card */}
        <div className="md:w-5/12 relative">
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
          <div className="bg-[#0A1128]/80 border border-[#3B82F6]/30 rounded-xl p-6 backdrop-blur-sm shadow-lg shadow-blue-900/10 relative">
            <p className="text-white text-xl font-medium mb-2 relative">
              Build my SaaS with modern, clean UI.
            </p>
            <p className="text-gray-400 relative">
              Add authentication, Postgres database and use Stripe for payment.
            </p>
            
            <div className="flex items-center mt-8 justify-between relative">
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-400 hover:text-white transition-colors relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  Attach
                </button>
                <button className="flex items-center text-gray-400 hover:text-white transition-colors relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Import Figma
                </button>
              </div>
              <button className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 rounded-full opacity-70 animate-ping"></span>
              </button>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-500 rounded-full opacity-10 blur-lg"></div>
        </div>
      </main>
    </div>
  )
}

export default App