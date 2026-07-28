import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-dark-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Manoj K</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Motivated Computer Science Engineering student passionate about software development,
              problem-solving, artificial intelligence, and cloud computing.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/MANOJ" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/MANOJ" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:manojkaruppasamy011@gmail.com"
                 className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+919750240757"
                 className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Manoj K
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center hover:bg-primary-500/20 transition-all"
          >
            <ArrowUp className="w-5 h-5 text-primary-400" />
          </button>
        </div>
      </div>
    </footer>
  )
}