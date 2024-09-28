import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import translations from './translations'
import { projectsImages, certificationsImages } from './ImagesImports'
import Slider from 'react-slick';
import './index.css';
import CustomPrevArrow from './CustomPrevArrow';
import CustomNextArrow from './CustomNextArrow';

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value)

  const t = translations[language as keyof typeof translations]

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const projects = [
    { title: t.project1Title, desc: t.project1Desc, href: "https://github.com/ReFraX32/-Balance-and-Inventory-Manager", img: projectsImages.project1Image },
    { title: t.project2Title, desc: t.project2Desc, href: "https://github.com/ReFraX32/Franco-Ruffin-Portfolio", img: projectsImages.project2Image },
    { title: t.project3Title, desc: t.project3Desc, href: "https://github.com/ReFraX32/Trabajo-Final-Web-Junior-Achievement", img: projectsImages.project3Image },
  ];

  const certifications = [
    { title: t.certification1Title, img: certificationsImages.certification1Image },
    { title: t.certification2Title, img: certificationsImages.certification2Image },
    { title: t.certification3Title, img: certificationsImages.certification3Image },
    { title: t.certification4Title, img: certificationsImages.certification4Image },
    { title: t.certification5Title, img: certificationsImages.certification5Image },
    { title: t.certification6Title, img: certificationsImages.certification6Image },
    { title: t.certification7Title, img: certificationsImages.certification7Image },
    { title: t.certification8Title, img: certificationsImages.certification8Image },
    { title: t.certification9Title, img: certificationsImages.certification9Image },
    { title: t.certification10Title, img: certificationsImages.certification10Image },
    { title: t.certification11Title, img: certificationsImages.certification11Image },
    { title: t.certification12Title, img: certificationsImages.certification12Image },
    { title: t.certification13Title, img: certificationsImages.certification13Image },
    { title: t.certification14Title, img: certificationsImages.certification14Image },
    { title: t.certification15Title, img: certificationsImages.certification15Image },
    { title: t.certification16Title, img: certificationsImages.certification16Image },
    { title: t.certification17Title, img: certificationsImages.certification17Image },
    { title: t.certification18Title, img: certificationsImages.certification18Image },
    { title: t.certification19Title, img: certificationsImages.certification19Image },
    { title: t.certification20Title, img: certificationsImages.certification20Image },
    { title: t.certification21Title, img: certificationsImages.certification21Image },
    { title: t.certification22Title, img: certificationsImages.certification22Image },
    { title: t.certification23Title, img: certificationsImages.certification23Image },
    { title: t.certification24Title, img: certificationsImages.certification24Image },
  ];

  const experience = [
    { title: t.experience1Title, desc: t.experience1Desc },
    { title: t.experience2Title, desc: t.experience2Desc },
  ];

  const education = [
    { title: t.education1Title, desc: t.education1Desc },
    { title: t.education2Title, desc: t.education2Desc },
  ];

  // Settings for the carousel
  const settingsProjects = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
    responsive: [ // Responsive settings
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsCertifications = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
    responsive: [ // Responsive settings
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');

    if (targetId) { // Check if targetId is not null
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen text-white">
      <div className="background"></div>
      <header className={`fixed top-0 left-0 w-full p-4 md:p-6 bg-black transition-transform duration-300 z-50 rounded-md ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold" onClick={(e) => { 
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}>
            Franco Ruffin
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-gray-400" onClick={handleLinkClick}> {t.about} </a>
            <a href="#projects" className="hover:text-gray-400" onClick={handleLinkClick}> {t.projectsTitle} </a>
            <a href="#certifications" className="hover:text-gray-400" onClick={handleLinkClick}> {t.certificationsTitle} </a>
            <a href="#experience" className="hover:text-gray-400" onClick={handleLinkClick}> {t.experienceTitle} </a>
            <a href="#aptitudes" className="hover:text-gray-400" onClick={handleLinkClick}> {t.aptitudesTitle} </a>
            <a href="#skills" className="hover:text-gray-400" onClick={handleLinkClick}> {t.skillsTitle} </a>
            <a href="#education" className="hover:text-gray-400" onClick={handleLinkClick}> {t.educationTitle} </a>
            <a href="#contact" className="hover:text-gray-400" onClick={handleLinkClick}> {t.contact} </a>
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
            <a href="#about" className="hover:text-gray-400" onClick={handleLinkClick}> {t.about} </a>
            <a href="#projects" className="hover:text-gray-400" onClick={handleLinkClick}> {t.projectsTitle} </a>
            <a href="#certifications" className="hover:text-gray-400" onClick={handleLinkClick}> {t.certificationsTitle} </a>
            <a href="#experience" className="hover:text-gray-400" onClick={handleLinkClick}> {t.experienceTitle} </a>
            <a href="#aptitudes" className="hover:text-gray-400" onClick={handleLinkClick}> {t.aptitudesTitle} </a>
            <a href="#skills" className="hover:text-gray-400" onClick={handleLinkClick}> {t.skillsTitle} </a>
            <a href="#education" className="hover:text-gray-400" onClick={handleLinkClick}> {t.educationTitle} </a>
            <a href="#contact" className="hover:text-gray-400" onClick={handleLinkClick}> {t.contact} </a>
            <select onChange={changeLanguage} value={language} className="bg-black text-white border border-white rounded">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-20">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.aboutMe}</h2>
          <p className="text-gray-300">
            {t.aboutMeText}
          </p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.projectsTitle}</h2>
          <Slider {...settingsProjects}>
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-800 p-2 rounded-lg transition-all duration-300 hover:bg-gray-600">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <a href={project.href} className="text-blue-400 hover:underline">{t.viewProject}</a>
                {project.img && (
                  <img src={project.img} alt={project.title} className="w-full h-auto mt-4 rounded-lg" />
                )}
              </div>
            ))}
          </Slider>
        </section>

        <section id="certifications" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.certificationsTitle}</h2>
          <Slider {...settingsCertifications}>
            {certifications.map((certification, index) => (
              <div key={index} className="certification-box border border-gray-800 p-2 rounded-lg transition-all duration-300 hover:bg-gray-600">
                <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
                {certification.img && (
                  <img src={certification.img} alt={certification.title} className="w-full h-auto mt-2 rounded-lg" />
                )}
              </div>
            ))}
          </Slider>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.experienceTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((experience, index) => (
              <div key={index} className="border border-gray-800 p-4 rounded-lg transition-all duration-300 hover:bg-gray-600">
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-400 mb-4">{experience.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="aptitudes" className='mb-16'>
          <h2 className="text-3xl font-bold mb-4">{t.aptitudesTitle}</h2>
          <ul className="text-gray-400 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 list-none">
            {t.aptitudesDesc.split('\n').map((line, index) => (
              <li key={index} className="flex items-center before:content-['•'] before:text-gray-400 before:mr-2">
                {line}
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className='mb-16'>
          <h2 className="text-3xl font-bold mb-4">{t.skillsTitle}</h2>
          <ul className="text-gray-400 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 list-none">
            {t.skillsDesc.split('\n').map((line, index) => (
              <li key={index} className="flex items-center before:content-['•'] before:text-gray-400 before:mr-2">
                {line}
              </li>
            ))}
          </ul>
        </section>

        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.educationTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((education, index) => (
              <div key={index} className="border border-gray-800 p-4 rounded-lg transition-all duration-300 hover:bg-gray-600">
                <h3 className="text-xl font-semibold mb-2">{education.title}</h3>
                <p className="text-gray-400 mb-4">{education.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-gray-300 mb-4">
            {t.contactText}
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            <a href="https://github.com/ReFraX32?tab=overview&from=2024-09-01&to=2024-09-01" className="hover:text-gray-300 flex items-center">
              <p className="mr-2">GitHub</p><Github />
            </a>
            <a href="https://www.linkedin.com/in/franco-ruffin-berriel-040b70249/" className="hover:text-gray-300 flex items-center">
              <p className="mr-2">Linkedin</p><Linkedin />
            </a>
            <div className="hover:text-gray-300 flex items-center">
              <p className="mr-2">E-Mail:</p>
              <p className="text-center">ruffinfranco@gmail.com</p>
              <Mail />
            </div>
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