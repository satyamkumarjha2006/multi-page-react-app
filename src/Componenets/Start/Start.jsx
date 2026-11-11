import React from 'react';

function Start() {
    
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description: 'Sign up with your email address to set up your personal workspace in seconds.',
    },
    {
      number: '02',
      title: 'Configure Your Profile',
      description: 'Add your team details, choose your preferences, and customize your dashboard.',
    },
    {
      number: '03',
      title: 'Launch Your First Project',
      description: 'Use our ready-made templates or start from scratch to bring your idea to life.',
    },
  ]
    return ( 
        <div className="min-h-screen bg-slate-950 flex flex-col justify-between">
      
      {/* Top Navigation */}
      <header className="bg-slate-950 border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">MyApp</span>
         
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 text-center">
        
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Welcome Aboard
          </span>
          <h1 className="text-4xl font-extrabold text-transparent bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text tracking-tight sm:text-5xl mb-4">
            Get started in three simple steps
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Everything you need to organize your workflow, collaborate with your team, and ship faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-sm shadow-sm transition"
            >
              Start for Free
            </a>
            <a 
              href="#steps" 
              className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 font-medium px-6 py-3 rounded-lg text-sm transition"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* 3-Step Grid */}
        <div id="steps" className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="bg-gray-400 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <span className="inline-block text-sm font-bold text-blue-600 bg-gray-400 px-3 py-1 rounded-md mb-4">
                Step {step.number}
              </span>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-200 bg-slate-950 py-6 text-center text-sm text-gray-500">
        Need help? <a href="#" className="text-blue-600 hover:underline">Read the documentation</a>
      </footer>

    </div>
     );
}

export default Start;