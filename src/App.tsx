import { useState } from 'react'
import './App.css'

function App() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  // Update time every second
  useState(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  })

  const windows = [
    { id: 'about', title: 'About Me', icon: '👤' },
    { id: 'projects', title: 'Projects', icon: '📁' },
    { id: 'contact', title: 'Contact', icon: '📧' },
    { id: 'resume', title: 'Resume', icon: '📄' }
  ]

  return (
    <div className="min-h-screen bg-mac-beige crt-screen">
      {/* Mac Menu Bar */}
      <div className="mac-title-bar">
        <div className="flex items-center space-x-4">
          <span className="font-bold">🍎</span>
          <span className="mac-menu-item">Portfolio OS</span>
          <span className="mac-menu-item">File</span>
          <span className="mac-menu-item">Edit</span>
          <span className="mac-menu-item">View</span>
          <span className="mac-menu-item">Special</span>
        </div>
        <div className="font-monaco text-xs">
          {time}
        </div>
      </div>

      {/* Desktop */}
      <div className="p-8 min-h-screen">
        {/* Main Portfolio Window */}
        <div className="mac-window max-w-4xl mx-auto mt-8">
          <div className="mac-title-bar">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-mac-red rounded-full"></div>
              <div className="w-3 h-3 bg-mac-yellow rounded-full"></div>
              <div className="w-3 h-3 bg-mac-green rounded-full"></div>
            </div>
            <span className="font-geneva font-bold">Portfolio - May Zhou</span>
            <div></div>
          </div>
          
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-mac-gray border-2 border-mac-border shadow-mac-inset mx-auto mb-4 rounded-lg flex items-center justify-center text-4xl">
                👩‍💻
              </div>
              <h1 className="text-4xl font-bold font-geneva mb-2 pixel-text">May Zhou</h1>
              <p className="text-mac-dark-gray font-geneva">Full Stack Developer & Designer</p>
            </div>

            {/* Navigation Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {windows.map((window) => (
                <button
                  key={window.id}
                  className="mac-button flex flex-col items-center p-6 space-y-2"
                  onClick={() => setActiveWindow(window.id)}
                >
                  <span className="text-3xl">{window.icon}</span>
                  <span className="font-geneva text-sm">{window.title}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="mac-window bg-white min-h-[300px] p-6">
              <div className="mac-title-bar">
                <span className="font-geneva text-sm">
                  {activeWindow ? windows.find(w => w.id === activeWindow)?.title : 'Welcome'}
                </span>
              </div>
              
              <div className="p-4">
                {!activeWindow && (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold font-geneva mb-4">Welcome to Portfolio OS</h2>
                    <p className="text-mac-dark-gray font-geneva mb-6">
                      A retro Macintosh-inspired portfolio experience
                    </p>
                    <p className="text-sm font-monaco bg-mac-beige p-4 rounded border">
                      System 7.0 - Portfolio Edition<br/>
                      Click on the icons above to explore my work
                    </p>
                  </div>
                )}

                {activeWindow === 'about' && (
                  <div>
                    <h3 className="text-xl font-bold font-geneva mb-4">About Me</h3>
                    <p className="font-geneva mb-4">
                      Hello! I'm a passionate full-stack developer with a love for both modern technologies 
                      and retro computing aesthetics. I enjoy creating digital experiences that blend 
                      functionality with nostalgia.
                    </p>
                    <div className="bg-mac-beige p-4 rounded border">
                      <h4 className="font-bold font-geneva mb-2">Skills:</h4>
                      <div className="grid grid-cols-2 gap-2 font-monaco text-sm">
                        <span>• React & TypeScript</span>
                        <span>• Node.js & Express</span>
                        <span>• Python & Django</span>
                        <span>• PostgreSQL & MongoDB</span>
                        <span>• UI/UX Design</span>
                        <span>• Retro Computing</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeWindow === 'projects' && (
                  <div>
                    <h3 className="text-xl font-bold font-geneva mb-4">Projects</h3>
                    <div className="space-y-4">
                      <div className="border border-mac-border p-4 bg-mac-cream">
                        <h4 className="font-bold font-geneva">Portfolio OS</h4>
                        <p className="text-sm font-geneva text-mac-dark-gray">
                          This retro Mac-inspired portfolio website
                        </p>
                      </div>
                      <div className="border border-mac-border p-4 bg-mac-cream">
                        <h4 className="font-bold font-geneva">Coming Soon...</h4>
                        <p className="text-sm font-geneva text-mac-dark-gray">
                          More projects will be added here
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeWindow === 'contact' && (
                  <div>
                    <h3 className="text-xl font-bold font-geneva mb-4">Contact</h3>
                    <div className="space-y-4 font-geneva">
                      <div className="flex items-center space-x-3">
                        <span>📧</span>
                        <span>mayzhou94@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span>🔗</span>
                        <span>GitHub: maydeploy</span>
                      </div>
                      <div className="bg-mac-beige p-4 rounded border">
                        <p className="text-sm">
                          Feel free to reach out for collaborations, opportunities, or just to chat about technology!
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeWindow === 'resume' && (
                  <div>
                    <h3 className="text-xl font-bold font-geneva mb-4">Resume</h3>
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">📄</div>
                      <p className="font-geneva mb-4">Resume file coming soon...</p>
                      <button className="mac-button">
                        Download PDF
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="absolute top-20 right-8 space-y-4">
          <div className="text-center cursor-pointer">
            <div className="w-12 h-12 bg-mac-window border border-mac-border shadow-mac-raised flex items-center justify-center mb-1">
              🗑️
            </div>
            <span className="text-xs font-geneva">Trash</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
