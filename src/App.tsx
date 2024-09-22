import { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import translations from './translations'
import image1 from './assets/Preview Primera Página.webp'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value)

  const t = translations[language as keyof typeof translations]

  const projects = [
    { title: t.project1Title, desc: t.project1Desc, href: "https://github.com/ReFraX32/Trabajo-Final-Web-Junior-Achievement", img: image1 },
    { title: t.project2Title, desc: t.project2Desc, href: "https://github.com/ReFraX32/Franco-Ruffin-Portfolio" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 md:p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Franco Ruffin</a>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-gray-300">{t.about}</a>
            <a href="#projects" className="hover:text-gray-300">{t.projects}</a>
            <a href="#contact" className="hover:text-gray-300">{t.contact}</a>
            <select onChange={changeLanguage} value={language} className="bg-black text-white border border-white rounded">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <a href="#about" className="hover:text-gray-300">{t.about}</a>
            <a href="#projects" className="hover:text-gray-300">{t.projects}</a>
            <a href="#contact" className="hover:text-gray-300">{t.contact}</a>
            <select onChange={changeLanguage} value={language} className="bg-black text-white border border-white rounded">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.aboutMe}</h2>
          <p className="text-gray-300">
            {t.aboutMeText}
          </p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.projectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <a href={project.href} className="text-blue-400 hover:underline">{t.viewProject}</a>
                {project.img && (
                  <img src={project.img} alt={project.title} className="w-full h-auto mt-4 rounded-lg" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-gray-300 mb-4">
            {t.contactText}
          </p>
          <div className="flex space-x-4">
             <a href="https://github.com/ReFraX32?tab=overview&from=2024-09-01&to=2024-09-01" className="hover:text-gray-300 flex items-center">
               <p className="mr-2">GitHub</p><Github />
             </a>
            <a href="https://www.linkedin.com/in/franco-ruffin-berriel-040b70249/" className="hover:text-gray-300 flex items-center">
              <p className="mr-2">Linkedin</p><Linkedin />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          {t.footer}
        </div>
      </footer>
    </div>
  )
}