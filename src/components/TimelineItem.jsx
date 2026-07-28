import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export default function TimelineItem({ item, index, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex items-center ${isLeft ? 'flex-row-reverse' : ''} md:flex-row`}
    >
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary-500/50 to-transparent" />
      
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
        <div className="glass p-6 card-hover relative">
          <div className={`hidden md:block absolute top-6 ${isLeft ? '-right-[54px]' : '-left-[54px]'} w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900 shadow-lg shadow-primary-500/50`} />
          
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
            <Briefcase className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 font-semibold text-sm">{item.role}</span>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-1">{item.company}</h3>
          
          <div className={`flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {item.duration}
            </span>
            {item.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {item.location}
              </span>
            )}
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}