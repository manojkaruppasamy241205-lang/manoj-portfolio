import ScrollReveal from '../components/ScrollReveal'
import ProjectCard from '../components/ProjectCard'
import { Globe, Layout } from 'lucide-react'

const projects = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'TripGo – Travel Planning Application',
    description: 'Developed a web-based trip planning platform that helps users organize travel plans and manage itineraries efficiently. Built responsive interfaces and implemented core trip management features using modern web technologies.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/manojkaruppasamy241205-lang',
    link: null,
  },
]

export default function Projects() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Real-world projects that showcase my skills in web development and problem-solving
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
            
            <ScrollReveal delay={0.2}>
              <div className="glass p-6 card-hover flex flex-col items-center justify-center text-center min-h-[300px] border-dashed border-2 border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <Layout className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">More Coming Soon</h3>
                <p className="text-gray-500 text-sm">Stay tuned for upcoming AI and full-stack projects!</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}