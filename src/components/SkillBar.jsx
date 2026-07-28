import { motion } from 'framer-motion'

export default function SkillBar({ skill, percentage, delay = 0 }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium text-sm">{skill}</span>
        <span className="text-primary-400 text-sm font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-400"
        />
      </div>
    </div>
  )
}