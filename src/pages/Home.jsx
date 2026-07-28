import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Brain, Code, Zap, TrendingUp } from 'lucide-react'
import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'

const stats = [
  { icon: Code, value: '3+', label: 'Projects' },
  { icon: Globe, value: '1', label: 'Internship' },
  { icon: Zap, value: '5+', label: 'Certifications' },
  { icon: TrendingUp, value: '7.5', label: 'CGPA' },
]

const highlights = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Built responsive web applications including TripGo, a travel planning platform with modern UI and efficient itinerary management.',
  },
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Exploring artificial intelligence and cloud computing to build intelligent solutions and automate complex workflows.',
  },
  {
    icon: Code,
    title: 'Problem Solving',
    description: 'Strong analytical thinking and root cause analysis skills with a quick learning ability to adapt to new technologies.',
  },
]

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass p-6 text-center card-hover">
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What I <span className="gradient-text">Do</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Combining web development skills with AI curiosity to build practical, user-focused solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass p-8 card-hover h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                Explore All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="glass p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Let&apos;s Build Something <span className="gradient-text">Amazing</span> Together
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  I&apos;m always excited to collaborate on innovative projects. Whether it&apos;s web development, AI, or automation — let&apos;s connect!
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}