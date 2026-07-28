import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import SkillBar from '../components/SkillBar'
import { Code, Wrench, Brain, MessageSquare, Lightbulb, Crosshair, Users, GitBranch, Database } from 'lucide-react'

const technicalSkills = [
  { skill: 'Java', percentage: 75 },
  { skill: 'Python', percentage: 70 },
  { skill: 'JavaScript', percentage: 80 },
  { skill: 'HTML / CSS', percentage: 85 },
  { skill: 'MySQL / Database', percentage: 78 },
  { skill: 'Git & Version Control', percentage: 72 },
  { skill: 'n8n / Automation', percentage: 65 },
  { skill: 'Web Development', percentage: 82 },
]

const tools = [
  { name: 'Git', icon: '🔀' },
  { name: 'n8n', icon: '⚡' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'VS Code', icon: '💻' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'GitHub', icon: '🐙' },
]

const softSkills = [
  { icon: MessageSquare, title: 'Communication', desc: 'Good verbal and written communication skills' },
  { icon: Brain, title: 'Problem Solving', desc: 'Analytical thinking and root cause analysis' },
  { icon: Lightbulb, title: 'Quick Learner', desc: 'Adaptive to new techniques and technologies' },
  { icon: Crosshair, title: 'Attention to Detail', desc: 'Precision in code and system design' },
  { icon: Users, title: 'Team Player', desc: 'Collaborative mindset with sportsmanship spirit' },
  { icon: Code, title: 'Adaptability', desc: 'Rapidly adapts to new frameworks and tools' },
]

export default function Skills() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                My <span className="gradient-text">Skills</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A blend of technical expertise, modern tools, and essential soft skills
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <ScrollReveal direction="left">
              <div className="glass p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Code className="w-6 h-6 text-primary-400" />
                  Technical Skills
                </h2>
                {technicalSkills.map((skill, i) => (
                  <SkillBar key={i} skill={skill.skill} percentage={skill.percentage} delay={i * 0.1} />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="glass p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Wrench className="w-6 h-6 text-primary-400" />
                  Tools & Technologies
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary-500/20 transition-all"
                    >
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="text-white font-medium text-sm">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">
              Soft <span className="gradient-text">Skills</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass p-6 card-hover text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-20 glass p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">
                Areas of <span className="gradient-text">Interest</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {['Web Development', 'AI Development', 'Cloud Computing', 'Automation', 'Database Management', 'Problem Solving'].map(
                  (area) => (
                    <span
                      key={area}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/10 to-cyan-500/10 text-primary-400 font-semibold border border-primary-500/20"
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}