import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'manojkaruppasamy011@gmail.com',
    href: 'mailto:manojkaruppasamy011@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9750240757',
    href: 'tel:+919750240757',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sankarankovil, Tamil Nadu, India',
    href: null,
  },
]

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/manojkaruppasamy241205-lang' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/MANOJ' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you!
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <p className="text-gray-400 mb-8">
                    Feel free to reach out through any of these channels. I&apos;m always open to discussing new projects,
                    creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="glass p-5 flex items-center gap-4 card-hover"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-white font-medium hover:text-primary-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                  <div className="flex gap-3">
                    {socials.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 transition-all"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="glass p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}