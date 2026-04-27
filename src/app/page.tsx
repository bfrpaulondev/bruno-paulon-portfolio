'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  Download,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  X,
  ExternalLink,
  Code2,
  Server,
  Globe,
  ArrowUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

// ─── Translations ───────────────────────────────────────────────
const translations = {
  en: {
    hello: 'HELLO, MY NAME IS BRUNO',
    build: 'And I build websites.',
    role: 'Full Stack MERN Developer |',
    stack1: 'MongoDB - Express - React -',
    stack2: 'Node.js | Creating efficient,',
    stack3: 'scalable web applications',
    stack4: 'focused on user experience.',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    downloadCV: 'Download CV',
    menu: 'Menu',
    project1Title: 'E-Commerce Platform',
    project1Desc: 'Full-stack marketplace with real-time inventory, Stripe payments, and admin dashboard built with the MERN stack.',
    project2Title: 'Task Management App',
    project2Desc: 'Collaborative project management tool with drag-and-drop boards, real-time updates via WebSocket, and role-based access.',
    project3Title: 'Analytics Dashboard',
    project3Desc: 'Data visualization platform with interactive charts, custom report builder, and automated email summaries.',
    aboutTitle: 'About Me',
    aboutText1: 'I\'m a Full Stack Developer passionate about building modern web applications that make a difference. With deep expertise in the MERN stack, I create scalable solutions that prioritize performance and user experience.',
    aboutText2: 'My journey in software development started with curiosity and evolved into a career dedicated to crafting clean, maintainable code. I believe in continuous learning and staying at the forefront of web technologies.',
    aboutText3: 'When I\'m not coding, you\'ll find me exploring new frameworks, contributing to open-source projects, or mentoring aspiring developers.',
    contactTitle: 'Get In Touch',
    contactText: 'Have a project in mind or want to collaborate? I\'d love to hear from you. Let\'s build something amazing together.',
    viewProject: 'View Project',
    techStack: 'Tech Stack',
    skills: 'Skills',
    footerText: 'Designed & Built by Bruno Pal',
  },
  pt: {
    hello: 'OLÁ, MEU NOME É BRUNO',
    build: 'E eu crio websites.',
    role: 'Desenvolvedor Full Stack MERN |',
    stack1: 'MongoDB - Express - React -',
    stack2: 'Node.js | Criando aplicações',
    stack3: 'web eficientes e escaláveis',
    stack4: 'focadas na experiência do usuário.',
    projects: 'Projetos',
    about: 'Sobre',
    contact: 'Contato',
    downloadCV: 'Baixar CV',
    menu: 'Menu',
    project1Title: 'Plataforma E-Commerce',
    project1Desc: 'Marketplace full-stack com inventário em tempo real, pagamentos Stripe e painel administrativo construído com MERN stack.',
    project2Title: 'App de Gestão de Tarefas',
    project2Desc: 'Ferramenta colaborativa de gestão de projetos com boards drag-and-drop, atualizações em tempo real via WebSocket e controle de acesso por função.',
    project3Title: 'Dashboard de Analytics',
    project3Desc: 'Plataforma de visualização de dados com gráficos interativos, construtor de relatórios personalizados e resumos automatizados por email.',
    aboutTitle: 'Sobre Mim',
    aboutText1: 'Sou um Desenvolvedor Full Stack apaixonado por criar aplicações web modernas que fazem a diferença. Com expertise profunda no MERN stack, crio soluções escaláveis que priorizam performance e experiência do usuário.',
    aboutText2: 'Minha jornada no desenvolvimento de software começou com curiosidade e evoluiu para uma carreira dedicada a escrever código limpo e manutenível. Acredito no aprendizado contínuo e em estar na vanguarda das tecnologias web.',
    aboutText3: 'Quando não estou codando, você me encontra explorando novos frameworks, contribuindo para projetos open-source ou mentorando desenvolvedores aspirantes.',
    contactTitle: 'Entre Em Contato',
    contactText: 'Tem um projeto em mente ou quer colaborar? Adoraria ouvir você. Vamos construir algo incrível juntos.',
    viewProject: 'Ver Projeto',
    techStack: 'Stack Tecnológica',
    skills: 'Habilidades',
    footerText: 'Desenhado & Construído por Bruno Pal',
  },
}

type Lang = 'en' | 'pt'

// ─── Project data ───────────────────────────────────────────────
const projects = [
  { image: '/project1.png', tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'], github: '#', live: '#' },
  { image: '/project2.png', tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Tailwind'], github: '#', live: '#' },
  { image: '/project3.png', tech: ['Next.js', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'], github: '#', live: '#' },
]

// ─── Skill categories ───────────────────────────────────────────
const skillCategories = [
  { icon: Code2, label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: Server, label: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
  { icon: Globe, label: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'CI/CD'] },
]

// ─── Main Component ─────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<Lang>('pt')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLang = useCallback(() => setLang((l) => (l === 'en' ? 'pt' : 'en')), [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* ── Navbar ──────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050505]/70 border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 ring-2 ring-[#00ff41]/40">
              <AvatarImage src="/avatar.png" alt="Bruno Pal" />
              <AvatarFallback className="bg-[#00ff41]/20 text-[#00ff41] text-sm font-bold">
                BP
              </AvatarFallback>
            </Avatar>
            <span className="font-semibold text-sm tracking-wide hidden sm:block">Bruno Pal</span>
          </div>

          {/* Center: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {['about', 'projects', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-gray-400 hover:text-[#00ff41] transition-colors duration-300 uppercase tracking-widest"
              >
                {t[id as keyof typeof t]}
              </button>
            ))}
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs font-medium tracking-wider"
              aria-label="Toggle language"
            >
              <span className={lang === 'pt' ? 'text-[#00ff41]' : 'text-gray-500'}>PT</span>
              <span className="text-gray-600">/</span>
              <span className={lang === 'en' ? 'text-[#00ff41]' : 'text-gray-500'}>EN</span>
            </button>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10 hover:border-[#00ff41]/60 text-xs tracking-wider rounded-full"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '#'
                link.download = 'BrunoPal_CV.pdf'
                link.click()
              }}
            >
              <Download className="h-3.5 w-3.5 mr-1.5" />
              {t.downloadCV}
            </Button>
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-gray-400 hover:text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a0a0a] border-white/10 w-72">
                <div className="flex flex-col gap-6 mt-10">
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollTo('about')}
                      className="text-left text-lg text-gray-300 hover:text-[#00ff41] transition-colors"
                    >
                      {t.about}
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollTo('projects')}
                      className="text-left text-lg text-gray-300 hover:text-[#00ff41] transition-colors"
                    >
                      {t.projects}
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollTo('contact')}
                      className="text-left text-lg text-gray-300 hover:text-[#00ff41] transition-colors"
                    >
                      {t.contact}
                    </button>
                  </SheetClose>
                  <div className="h-px bg-white/10 my-2" />
                  <Button
                    variant="outline"
                    className="border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10 w-full rounded-full"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = '#'
                      link.download = 'BrunoPal_CV.pdf'
                      link.click()
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {t.downloadCV}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>

      {/* ── Hero Section ────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0d1f0d]" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff41]/[0.02] rounded-full blur-[200px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/20">
                <span className="h-2 w-2 rounded-full bg-[#00ff41] animate-pulse" />
                <span className="text-[#00ff41] text-xs font-medium tracking-wider uppercase">
                  {t.role}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#00ff41]">{t.hello}</span>
              </h1>

              <p className="text-2xl sm:text-3xl font-semibold text-[#00ff41]/80">{t.build}</p>

              <div className="space-y-1 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
                <p>{t.stack1}</p>
                <p>{t.stack2}</p>
                <p>{t.stack3}</p>
                <p>{t.stack4}</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  onClick={() => scrollTo('projects')}
                  className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90 font-semibold rounded-full px-6 tracking-wide"
                >
                  {t.projects}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollTo('contact')}
                  className="border-white/20 text-white hover:bg-white/5 rounded-full px-6 tracking-wide"
                >
                  {t.contact}
                </Button>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#00ff41]/10 rounded-2xl blur-3xl scale-110" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00ff41]/10">
                  <img
                    src="/hero-bg.png"
                    alt="Developer workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
                      <Code2 className="h-4 w-4 text-[#00ff41]" />
                      <span className="text-xs text-gray-300 font-mono">
                        &gt; building the future_
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-1 h-2 bg-[#00ff41] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── About Section ───────────────────────────────── */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080812] to-[#050505]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              <span className="text-[#00ff41]">#</span> {t.aboutTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>{t.aboutText1}</p>
                <p>{t.aboutText2}</p>
                <p>{t.aboutText3}</p>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white mb-4">{t.techStack}</h3>
                <div className="grid gap-4">
                  {skillCategories.map(({ icon: Icon, label, items }) => (
                    <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#00ff41]/20 transition-colors">
                      <div className="p-2.5 rounded-lg bg-[#00ff41]/10">
                        <Icon className="h-5 w-5 text-[#00ff41]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1.5">{label}</h4>
                        <div className="flex flex-wrap gap-2">
                          {items.map((item) => (
                            <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Section ────────────────────────────── */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a12] to-[#050505]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              <span className="text-[#00ff41]">#</span> {t.projects}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => {
                const titleKey = `project${i + 1}Title` as keyof typeof t
                const descKey = `project${i + 1}Desc` as keyof typeof t
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#00ff41]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#00ff41]/5"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={t[titleKey]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.github}
                          className="p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[#00ff41]/40 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="h-4 w-4 text-white" />
                        </a>
                        <a
                          href={project.live}
                          className="p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[#00ff41]/40 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </a>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#00ff41] transition-colors">
                        {t[titleKey]}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {t[descKey]}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-[#00ff41]/10 text-[#00ff41]/70 border border-[#00ff41]/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ─────────────────────────────── */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080812] to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00ff41]/[0.03] rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-[#00ff41]">#</span> {t.contactTitle}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-lg mx-auto">
              {t.contactText}
            </p>

            <div className="flex justify-center gap-4 mb-10">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00ff41]/30 hover:bg-[#00ff41]/5 transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-gray-400 group-hover:text-[#00ff41] transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00ff41]/30 hover:bg-[#00ff41]/5 transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-[#00ff41] transition-colors" />
              </a>
              <a
                href="mailto:bruno@example.com"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00ff41]/30 hover:bg-[#00ff41]/5 transition-all duration-300 group"
              >
                <Mail className="h-6 w-6 text-gray-400 group-hover:text-[#00ff41] transition-colors" />
              </a>
            </div>

            <a
              href="mailto:bruno@example.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00ff41] text-black font-semibold hover:bg-[#00ff41]/90 transition-colors"
            >
              <Mail className="h-4 w-4" />
              bruno@example.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">{t.footerText}</p>
          <p className="text-xs text-gray-700">© {new Date().getFullYear()}</p>
        </div>
      </footer>

      {/* ── Scroll to top ───────────────────────────────── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#00ff41] text-black shadow-lg shadow-[#00ff41]/20 hover:bg-[#00ff41]/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
