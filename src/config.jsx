import { lazy } from 'react'
import { BsLinkedin, BsGithub, BsInstagram, BsFillEnvelopeFill, BsFillChatFill } from 'react-icons/bs'

const Intro = lazy(() => import('sections/Home/Intro'))
const About = lazy(() => import('sections/Home/About'))
const Experience = lazy(() => import('sections/Home/Experience'))
const Projects = lazy(() => import('sections/Home/Projects'))
const Contact = lazy(() => import('sections/Home/Contact'))

export const navLinks = [
  { link: '/', name: 'intro', element: <Intro /> },
  { link: '#about', name: 'about', element: <About /> },
  { link: '#experience', name: 'experience', element: <Experience /> },
  { link: '#projects', name: 'projects', element: <Projects /> },
  { link: '#contact', name: 'contact', element: <Contact /> }
]

export const backLinks = [
  { name: '/', link: '/' },
  { name: '/resume', link: '/resume' },
]

export const socialLinks = [
  {
    name: 'linkedin', link: 'https://www.linkedin.com/in/jaydesmarais/', icon: <BsLinkedin size={40} fill='url(#linkedinGrad)' />
  },
  {
    name: 'github', link: 'https://github.com/jaydesmarais', icon: <BsGithub size={40} fill='url(#githubGrad)' />
  },
  {
    name: 'instagram', link: 'https://www.instagram.com/jaydesmarais/', icon: <BsInstagram size={40} fill='url(#instagramGrad)' />
  },
  {
    name: 'email', link: 'mailto:jmdesmarais01@gmail.com', icon: <BsFillEnvelopeFill size={40} fill="url(#emailGrad)" />
  },
  {
    name: 'text', link: 'sms:4437454624', icon: <BsFillChatFill size={40} fill="url(#textGrad)" />
  }
]
