import { useState } from 'react'
import { 
  Menu, 
  X, 
  Bookmark, 
  Palette, 
  Search, 
  GripVertical, 
  Download, 
  Shield, 
  Globe,
  Github,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  AlertTriangle,
  FileDown,
  Settings,
  Plus,
  Check
} from 'lucide-react'

interface OnboardingStep {
  title: string
  description: string
  content: React.ReactNode
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [onboardingStep, setOnboardingStep] = useState(0)

  const onboardingSteps: OnboardingStep[] = [
    {
      title: "Welcome to HomeBase",
      description: "A beautiful, customizable new tab page with organized bookmarks, themes, and search functionality.",
      content: (
        <div className="flex flex-col gap-6 items-center">
          <img src="/homebase-logo.png" alt="HomeBase" className="w-24 h-24 rounded-2xl" />
          <div className="text-center">
            <p className="mb-4 text-slate-300">
              HomeBase replaces your new tab with a personalized dashboard where you can organize all your important links.
            </p>
            <div className="flex gap-2 justify-center items-center text-sm text-slate-400">
              <Check className="w-4 h-4 text-green-400" />
              <span>Works offline</span>
              <span className="mx-2">|</span>
              <Check className="w-4 h-4 text-green-400" />
              <span>No account needed</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How to Install",
      description: "Follow these simple steps to add HomeBase to Chrome.",
      content: (
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="flex flex-shrink-0 justify-center items-center w-8 h-8 text-sm font-semibold text-blue-400 rounded-full bg-blue-500/20">1</span>
            <div>
              <p className="font-medium text-white">Download from GitHub</p>
              <p className="text-sm text-slate-400">Click the button below to go to GitHub, then click "Code" and "Download ZIP"</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex flex-shrink-0 justify-center items-center w-8 h-8 text-sm font-semibold text-blue-400 rounded-full bg-blue-500/20">2</span>
            <div>
              <p className="font-medium text-white">Enable Developer Mode</p>
              <p className="text-sm text-slate-400">Go to <code className="bg-slate-700 px-2 py-0.5 rounded text-xs">chrome://extensions/</code> and toggle "Developer mode" ON</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex flex-shrink-0 justify-center items-center w-8 h-8 text-sm font-semibold text-blue-400 rounded-full bg-blue-500/20">3</span>
            <div>
              <p className="font-medium text-white">Load the Extension</p>
              <p className="text-sm text-slate-400">Click "Load unpacked" and select the HomeBase folder from the ZIP</p>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-700">
            <a 
              href="https://github.com/mirabelle514/Homebase/blob/main/HomeBase.zip" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-2 items-center px-4 py-2 text-sm text-white rounded-lg transition-all bg-slate-700 hover:bg-slate-600"
            >
              <Github className="w-4 h-4" />
              Go to GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Getting Started",
      description: "Here's how to use HomeBase once it's installed.",
      content: (
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-full bg-purple-500/20">
              <Plus className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="font-medium text-white">Add Bookmarks</p>
              <p className="text-sm text-slate-400">Fill in the title, URL, and category to add new links</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-full bg-pink-500/20">
              <GripVertical className="w-4 h-4 text-pink-400" />
            </div>
            <div>
              <p className="font-medium text-white">Drag & Drop</p>
              <p className="text-sm text-slate-400">Reorder links by dragging them within or between categories</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-full bg-yellow-500/20">
              <Settings className="w-4 h-4 text-yellow-400" />
            </div>
            <div>
              <p className="font-medium text-white">Customize Themes</p>
              <p className="text-sm text-slate-400">Use the sidebar to choose from 5 beautiful themes</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-full bg-green-500/20">
              <FileDown className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="font-medium text-white">Backup Your Data</p>
              <p className="text-sm text-slate-400">Use Export to save your bookmarks before uninstalling</p>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-700">
            <div className="flex gap-3 items-start p-3 rounded-lg border bg-amber-500/10 border-amber-500/30">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-amber-300">Important: Backup Your Data</p>
                <p className="text-slate-400">Uninstalling the extension will delete your bookmarks. Always export your data before removing HomeBase.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowOnboarding(true)
    setOnboardingStep(0)
  }

  const closeOnboarding = () => {
    setShowOnboarding(false)
    setOnboardingStep(0)
  }

  const nextStep = () => {
    if (onboardingStep < onboardingSteps.length - 1) {
      setOnboardingStep(onboardingStep + 1)
    }
  }

  const prevStep = () => {
    if (onboardingStep > 0) {
      setOnboardingStep(onboardingStep - 1)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Onboarding Modal */}
      {showOnboarding && (
        <div className="flex fixed inset-0 z-50 justify-center items-center p-4">
          <div 
            className="absolute inset-0 backdrop-blur-sm bg-black/70"
            onClick={closeOnboarding}
          ></div>
          <div className="relative w-full max-w-lg rounded-2xl border shadow-2xl bg-slate-800 border-slate-700">
            <button
              onClick={closeOnboarding}
              className="absolute top-4 right-4 transition-colors text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-6">
              <div className="flex gap-2 justify-center mb-6">
                {onboardingSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === onboardingStep 
                        ? 'bg-blue-500' 
                        : index < onboardingStep 
                          ? 'bg-blue-500/50' 
                          : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              
              <h2 className="mb-2 text-2xl font-bold text-center text-white">
                {onboardingSteps[onboardingStep].title}
              </h2>
              <p className="mb-6 text-center text-slate-400">
                {onboardingSteps[onboardingStep].description}
              </p>
              
              <div className="min-h-64">
                {onboardingSteps[onboardingStep].content}
              </div>
              
              <div className="flex justify-between pt-4 mt-6 border-t border-slate-700">
                <button
                  onClick={prevStep}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    onboardingStep === 0
                      ? 'text-slate-600 cursor-not-allowed'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                  disabled={onboardingStep === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                
                {onboardingStep === onboardingSteps.length - 1 ? (
                  <a
                    href="https://github.com/mirabelle514/Homebase/blob/main/HomeBase.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeOnboarding}
                    className="inline-flex gap-2 items-center px-6 py-2 font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
                  >
                    Get Started
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={nextStep}
                    className="flex gap-2 items-center px-6 py-2 font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md bg-slate-900/90 border-slate-700/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex gap-3 items-center">
              <img src="/homebase-logo.png" alt="HomeBase" className="w-10 h-10 rounded-xl" />
              <span className="text-xl font-bold text-white">HomeBase</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden gap-8 items-center md:flex">
              <a href="#features" className="transition-colors text-slate-300 hover:text-white">Features</a>
              <a href="#categories" className="transition-colors text-slate-300 hover:text-white">Categories</a>
              <a href="#themes" className="transition-colors text-slate-300 hover:text-white">Themes</a>
              <a href="#install" className="transition-colors text-slate-300 hover:text-white">Install</a>
            </div>

            <div className="hidden gap-4 items-center md:flex">
              <a 
                href="https://github.com/mirabelle514/Homebase/blob/main/HomeBase.zip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors text-slate-300 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <button 
                onClick={handleInstallClick}
                className="px-4 py-2 font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
              >
                Get Extension
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t backdrop-blur-md md:hidden bg-slate-900/95 border-slate-700/50">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block py-2 transition-colors text-slate-300 hover:text-white">Features</a>
              <a href="#categories" className="block py-2 transition-colors text-slate-300 hover:text-white">Categories</a>
              <a href="#themes" className="block py-2 transition-colors text-slate-300 hover:text-white">Themes</a>
              <a href="#install" className="block py-2 transition-colors text-slate-300 hover:text-white">Install</a>
              <button 
                onClick={handleInstallClick}
                className="block px-4 py-2 mt-4 w-full font-medium text-center text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
              >
                Get Extension
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Your Beautiful
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> New Tab</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-slate-300">
                A customizable new tab page with organized bookmarks, beautiful themes, and powerful search functionality. Transform your browser into a productivity hub.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleInstallClick}
                  className="inline-flex gap-2 items-center px-6 py-3 font-semibold text-white bg-blue-600 rounded-xl transition-all hover:bg-blue-700 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Add to Chrome
                </button>
                <a 
                  href="https://github.com/mirabelle514/Homebase/blob/main/HomeBase.zip" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center px-6 py-3 font-semibold text-white rounded-xl transition-all bg-slate-700 hover:bg-slate-600 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              </div>
            </div>
            
            {/* Hero Preview Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r rounded-2xl blur-3xl from-blue-500/20 to-purple-500/20"></div>
              <div className="relative p-4 rounded-2xl border shadow-2xl backdrop-blur-sm bg-slate-800/80 border-slate-700/50">
                <div className="p-6 bg-gradient-to-br rounded-xl from-slate-900 to-slate-800">
                  {/* Mock browser preview */}
                  <div className="flex gap-2 items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-center text-white">HomeBase</h2>
                    <div className="p-3 rounded-lg bg-slate-700/50">
                      <div className="flex gap-2 items-center text-slate-400">
                        <Search className="w-4 h-4" />
                        <span className="text-sm">Search your links...</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-slate-700/30">
                        <div className="mb-1 text-xs text-blue-400">Work</div>
                        <div className="space-y-1">
                          <div className="w-3/4 h-2 rounded bg-slate-600"></div>
                          <div className="w-1/2 h-2 rounded bg-slate-600"></div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-700/30">
                        <div className="mb-1 text-xs text-purple-400">Personal</div>
                        <div className="space-y-1">
                          <div className="w-2/3 h-2 rounded bg-slate-600"></div>
                          <div className="w-4/5 h-2 rounded bg-slate-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Powerful Features</h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              Everything you need to organize your bookmarks and customize your browsing experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1: Bookmark Management */}
            <div className="p-6 rounded-2xl border backdrop-blur-sm transition-all bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 hover:scale-105">
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-xl bg-blue-500/20">
                <Bookmark className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Bookmark Management</h3>
              <p className="text-slate-400">
                Organize your links into custom categories. Add, edit, and delete bookmarks with ease.
              </p>
            </div>

            {/* Feature 2: Drag & Drop */}
            <div className="p-6 rounded-2xl border backdrop-blur-sm transition-all bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 hover:scale-105">
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-xl bg-purple-500/20">
                <GripVertical className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Drag & Drop</h3>
              <p className="text-slate-400">
                Reorder links and move them between categories with intuitive drag and drop controls.
              </p>
            </div>

            {/* Feature 3: Beautiful Themes */}
            <div className="p-6 rounded-2xl border backdrop-blur-sm transition-all bg-slate-800/50 border-slate-700/50 hover:border-pink-500/50 hover:scale-105">
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-xl bg-pink-500/20">
                <Palette className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">5 Beautiful Themes</h3>
              <p className="text-slate-400">
                Choose from Elegant Midnight, Modern Tech, Soft Pastel, and more stunning themes.
              </p>
            </div>

            {/* Feature 4: Smart Search */}
            <div className="p-6 rounded-2xl border backdrop-blur-sm transition-all bg-slate-800/50 border-slate-700/50 hover:border-green-500/50 hover:scale-105">
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-xl bg-green-500/20">
                <Search className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Smart Search</h3>
              <p className="text-slate-400">
                Find links instantly with real-time filtering. Press Ctrl+F to quickly focus the search.
              </p>
            </div>

            {/* Feature 5: Data Backup */}
            <div className="p-6 rounded-2xl border backdrop-blur-sm transition-all bg-slate-800/50 border-slate-700/50 hover:border-yellow-500/50 hover:scale-105">
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-xl bg-yellow-500/20">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Data Backup</h3>
              <p className="text-slate-400">
                Export and import your data anytime. Your bookmarks are safely stored in your browser.
              </p>
            </div>

            {/* Feature 6: Offline Support */}
            <div className="p-6 rounded-2xl border backdrop-blur-sm transition-all bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 hover:scale-105">
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-xl bg-cyan-500/20">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Works Offline</h3>
              <p className="text-slate-400">
                No internet required. Your HomeBase works completely offline with local storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Customize Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500"> Experience</span>
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-slate-300">
                Choose from 5 beautiful built-in themes or create your own custom color combinations. Map any theme color to page elements and save your personalized look.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center text-slate-300">
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                  <span>Minimalist Neutral - Clean and simple</span>
                </li>
                <li className="flex gap-3 items-center text-slate-300">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  <span>Elegant Midnight - Dark and sophisticated</span>
                </li>
                <li className="flex gap-3 items-center text-slate-300">
                  <ChevronRight className="w-5 h-5 text-pink-400" />
                  <span>Soft Pastel - Light and calming</span>
                </li>
                <li className="flex gap-3 items-center text-slate-300">
                  <ChevronRight className="w-5 h-5 text-cyan-400" />
                  <span>Modern Tech - Clean and professional</span>
                </li>
                <li className="flex gap-3 items-center text-slate-300">
                  <ChevronRight className="w-5 h-5 text-green-400" />
                  <span>Earthy Organic - Natural and warm</span>
                </li>
              </ul>
            </div>
            
            {/* Theme Preview - Using exact colors from HomeBase extension */}
            <div className="grid grid-cols-2 gap-4">
              {/* Elegant Midnight: primary #0D1B2A, secondary #1B263B, accent #E0A458 */}
              <div className="p-4 rounded-xl border" style={{ background: 'linear-gradient(to bottom right, #0D1B2A, #1B263B)', borderColor: '#1B263B' }}>
                <div className="mb-2 text-xs" style={{ color: '#E0A458' }}>Elegant Midnight</div>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#1B263B' }}></div>
              </div>
              {/* Modern Tech: primary #0F4C81, secondary #1B9AAA, accent #F5A623 */}
              <div className="p-4 rounded-xl border" style={{ background: 'linear-gradient(to bottom right, #0F4C81, #1B9AAA)', borderColor: '#1B9AAA' }}>
                <div className="mb-2 text-xs" style={{ color: '#F5A623' }}>Modern Tech</div>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#1B9AAA' }}></div>
              </div>
              {/* Soft Pastel: primary #A3D2CA, secondary #F7D9D9, accent #FFB085, background #FFFFFF */}
              <div className="p-4 rounded-xl border" style={{ background: 'linear-gradient(to bottom right, #A3D2CA, #F7D9D9)', borderColor: '#F7D9D9' }}>
                <div className="mb-2 text-xs" style={{ color: '#444444' }}>Soft Pastel</div>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}></div>
              </div>
              {/* Earthy Organic: primary #6A994E, secondary #A7C957, accent #BC4749, background #FDF0D5 */}
              <div className="p-4 rounded-xl border" style={{ background: 'linear-gradient(to bottom right, #6A994E, #A7C957)', borderColor: '#A7C957' }}>
                <div className="mb-2 text-xs" style={{ color: '#FDF0D5' }}>Earthy Organic</div>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#FDF0D5' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              <Sparkles className="inline mr-2 w-8 h-8 text-yellow-400" />
              Organize Your Way
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              Create custom categories, drag and drop your bookmarks, and build the perfect homepage for your workflow.
            </p>
          </div>

          <div className="p-8 rounded-2xl border backdrop-blur-sm bg-slate-800/50 border-slate-700/50">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-4 rounded-xl bg-slate-700/30">
                <div className="flex gap-2 items-center mb-3">
                  <GripVertical className="w-4 h-4 text-slate-500" />
                  <span className="font-medium text-blue-400">Work</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2 text-sm rounded-lg bg-slate-600/50 text-slate-300">GitHub</div>
                  <div className="p-2 text-sm rounded-lg bg-slate-600/50 text-slate-300">Slack</div>
                  <div className="p-2 text-sm rounded-lg bg-slate-600/50 text-slate-300">Notion</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-700/30">
                <div className="flex gap-2 items-center mb-3">
                  <GripVertical className="w-4 h-4 text-slate-500" />
                  <span className="font-medium text-purple-400">Personal</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2 text-sm rounded-lg bg-slate-600/50 text-slate-300">YouTube</div>
                  <div className="p-2 text-sm rounded-lg bg-slate-600/50 text-slate-300">Netflix</div>
                  <div className="p-2 text-sm rounded-lg bg-slate-600/50 text-slate-300">Spotify</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-700/30">
                <div className="flex gap-2 items-center mb-3">
                  <GripVertical className="w-4 h-4 text-slate-500" />
                  <span className="font-medium text-green-400">Learning</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2 text-sm rounded-lg bg-slate-600/50 text-slate-300">Udemy</div>
                  <div className="p-2 text-sm rounded-lg bg-slate-600/50 text-slate-300">Coursera</div>
                  <div className="p-2 text-sm rounded-lg bg-slate-600/50 text-slate-300">MDN Docs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Get Started in Minutes</h2>
          <p className="mb-12 text-xl text-slate-400">
            Install HomeBase and transform your new tab page into a beautiful, organized dashboard.
          </p>

          <div className="p-8 text-left rounded-2xl border backdrop-blur-sm bg-slate-800/50 border-slate-700/50">
            <h3 className="mb-6 text-xl font-semibold text-white">Installation Steps</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex flex-shrink-0 justify-center items-center w-8 h-8 font-semibold text-blue-400 rounded-full bg-blue-500/20">1</span>
                <div>
                  <p className="font-medium text-white">Enable Developer Mode</p>
                  <p className="text-sm text-slate-400">Go to <code className="px-2 py-1 rounded bg-slate-700">chrome://extensions/</code> and toggle "Developer mode" in the top right</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex flex-shrink-0 justify-center items-center w-8 h-8 font-semibold text-blue-400 rounded-full bg-blue-500/20">2</span>
                <div>
                  <p className="font-medium text-white">Download HomeBase</p>
                  <p className="text-sm text-slate-400">Clone or download the extension from GitHub</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex flex-shrink-0 justify-center items-center w-8 h-8 font-semibold text-blue-400 rounded-full bg-blue-500/20">3</span>
                <div>
                  <p className="font-medium text-white">Load Extension</p>
                  <p className="text-sm text-slate-400">Click "Load unpacked" and select the HomeBase folder</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex flex-shrink-0 justify-center items-center w-8 h-8 font-semibold text-green-400 rounded-full bg-green-500/20">4</span>
                <div>
                  <p className="font-medium text-white">Enjoy!</p>
                  <p className="text-sm text-slate-400">Open a new tab and start organizing your bookmarks</p>
                </div>
              </li>
            </ol>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a 
                href="https://github.com/mirabelle514/Homebase/blob/main/HomeBase.zip" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-2 items-center px-6 py-3 font-semibold text-white rounded-xl transition-all bg-slate-700 hover:bg-slate-600"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t sm:px-6 lg:px-8 bg-slate-900 border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 justify-between items-center md:flex-row">
            <div className="flex gap-3 items-center">
              <img src="/homebase-logo.png" alt="HomeBase" className="w-10 h-10 rounded-xl" />
              <span className="text-xl font-bold text-white">HomeBase</span>
            </div>
            
            <div className="flex gap-6 items-center">
              <a href="#features" className="transition-colors text-slate-400 hover:text-white">Features</a>
              <a href="#themes" className="transition-colors text-slate-400 hover:text-white">Themes</a>
              <a href="#install" className="transition-colors text-slate-400 hover:text-white">Install</a>
              <a 
                href="https://github.com/mirabelle514/Homebase/blob/main/HomeBase.zip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors text-slate-400 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="pt-8 mt-8 text-center border-t border-slate-800">
            <p className="text-slate-400">
              Created by{' '}
              <a 
                href="https://mirabelledoiron.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 transition-colors hover:text-blue-300"
              >
                Mirabelle Doiron
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Open source and free to use
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
