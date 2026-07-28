import ScrollReveal from '../components/ScrollReveal'
import { GraduationCap, Award, BadgeCheck, BookOpen, Trophy, MapPin } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Dr. Mahalingam College of Engineering and Technology, Pollachi',
    year: '2023 - 2027',
    detail: 'CGPA: 7.5',
    icon: GraduationCap,
  },
  {
    degree: 'Higher Secondary School Certificate (HSC)',
    institution: 'Sri Mahalakshmi Matriculation and Higher Secondary School, Sankarankovil',
    year: '2023',
    detail: 'Percentage: 88.5%',
    icon: BookOpen,
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Angel Matriculation School, Sankarankovil',
    year: '2021',
    detail: 'PASS',
    icon: BookOpen,
  },
]

const certifications = [
  {
    name: 'JavaScript Training',
    issuer: 'Professional Training Program',
    icon: BadgeCheck,
  },
  {
    name: 'MongoDB Certification',
    issuer: 'MongoDB University',
    icon: Award,
  },
]

const achievements = [
  'Hockey Anna University Zone-10 Runners - 2023',
  'Hockey Anna University Zone-10 Third Place - 2024',
  'Third Place in Hockey at Dr. MCET Tournament - 2025',
  'Third Place in GCT Alumni Hockey Trophy Tournament - 2025',
  'Secured Third Place in an Inter College Event - 2025',
  'Active participant in multiple college hockey tournaments with multiple awards',
]

export default function About() {
  return (
    <div className="pt-24">
      <section className="section-padding pb-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A motivated engineer driven by curiosity and a passion for creating impactful technology solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden glass p-2">
                  <img
                    src="/profile.jpeg"
                    alt="Manoj K"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl -z-10 opacity-50 blur-2xl" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Who Am I?</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  I am <span className="text-white font-semibold">Manoj K</span>, a motivated Computer Science Engineering student with a passion for software development,
                  problem-solving, artificial intelligence, and cloud computing. Currently pursuing my Bachelor&apos;s degree
                  at Dr. Mahalingam College of Engineering and Technology.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  I am eager to apply my technical skills in real-world projects while continuously learning and contributing to innovative solutions.
                  My experience ranges from building web applications to exploring automation tools and database management.
                </p>
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">Sankarankovil, Tamil Nadu, India</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Web Development', 'AI Development', 'Problem Solving', 'Quick Learner'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Education</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {education.map((edu, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass p-8 card-hover h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
                    <edu.icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-primary-400 font-medium text-sm mb-1">{edu.institution}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-500 text-sm">{edu.year}</span>
                    <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-semibold">
                      {edu.detail}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Certifications</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {certifications.map((cert, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass p-8 card-hover flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Achievements</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass p-6 card-hover flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}