import { BsLinkedin, BsGithub, BsInstagram, BsFillEnvelopeFill, BsFillChatFill } from 'react-icons/bs'
import Intro from 'sections/Home/Intro'
import About from 'sections/Home/About'
import Experience from 'sections/Home/Experience'
import Projects from 'sections/Home/Projects'
import Contact from 'sections/Home/Contact'

export const navLinks = [
  { name: '/', link: 'intro', element: <Intro />, complete: false },
  { name: '#about', link: 'about', element: <About />, complete: true },
  { name: '#experience', link: 'experience', element: <Experience />, complete: true },
  { name: '#projects', link: 'projects', element: <Projects />, complete: true },
  { name: '#contact', link: 'contact', element: <Contact />, complete: false }
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