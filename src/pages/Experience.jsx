import ScrollReveal from '../components/ScrollReveal'
import TimelineItem from '../components/TimelineItem'

const internships = [
  {
    role: 'Web Development Intern',
    company: 'CodeBind TECHNOLOGY',
    duration: 'June 2025',
    location: 'Coimbatore',
    description: 'Worked on the web development of web-based applications. Gained hands-on experience in building responsive interfaces, implementing core features, and collaborating with a professional development team.',
  },
]

export default function Experience() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                My <span className="gradient-text">Experience</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Professional internship experience that shaped my skills in web development
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-0">
            {internships.map((internship, i) => (
              <TimelineItem key={i} item={internship} index={i} isLeft={i % 2 === 0} />
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Internships', value: '1' },
                { label: 'Projects Built', value: '3+' },
                { label: 'Technologies', value: 'Web, AI, DB' },
                { label: 'Certifications', value: '6+' },
              ].map((stat, i) => (
                <div key={i} className="glass p-6 text-center card-hover">
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}