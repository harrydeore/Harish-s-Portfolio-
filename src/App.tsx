import React from 'react';
import { Github, Linkedin, Mail, Download, Code2, Database, Cloud, Laptop, Shield, Book, Plane, Youtube, Zap, Droplets, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2070')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Harish Rajendra Deore
            </h1>
            <p className="text-2xl text-slate-300 mb-8">Emerging Software Developer | Java Enthusiast</p>
            <div className="flex justify-center gap-4">
              <a
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full inline-block transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1wbRY85LP_HGwUqfbtVcT9DME7dHXtRhu/view?usp=drive_link"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all hover:shadow-lg"
              >
                <Download size={20} />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
              <img
              src="Harry.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              />
            </div>
            </div>

              <div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I'm an emerging software developer with expertise in Java and a solid foundation in building scalable and efficient applications.
                  Skilled in problem-solving, database management, and delivering robust software solutions. I'm committed to continuous growth
                  and mastering technologies to drive innovation in software development.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Java Development', 'Technology Innovation', 'Coding', 'Travel', 'Reading Manga/Manhwas'].map((interest) => (
                    <span key={interest} className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SkillCard icon={<Code2 size={32} />} title="Programming" description="Java, Python, OOP" />
            <SkillCard icon={<Laptop size={32} />} title="Web Development" description="HTML, CSS, Bootstrap, Django" />
            <SkillCard icon={<Database size={32} />} title="Database" description="DBMS, MySQL, JDBC" />
            <SkillCard icon={<Cloud size={32} />} title="Tools" description="Google Cloud, Git, Power BI" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              icon={<Youtube size={32} />}
              title="YouTube Video & Playlist Downloader"
              description="A Java-based application using the YouTube API, enabling efficient video and playlist downloads."
              tags={['Java', 'YouTube API', 'Servlet']}
            />
            <ProjectCard
              icon={<Zap size={32} />}
              title="Electricity Billing System"
              description="GUI-based Java application for automated billing, customer data management, and reporting functionalities."
              tags={['Java', 'GUI', 'Database']}
            />
            <ProjectCard
              icon={<Droplets size={32} />}
              title="Jal Samruddh Nashik"
              description="Dynamic website featuring initiative details, project updates, donation systems, and community gallery."
              tags={['Web Development', 'Django', 'Bootstrap']}
            />
            <ProjectCard
              icon={<Cpu size={32} />}
              title="Induction Motor Control and Protection System"
              description="Real-time motor monitoring and protection system with Bluetooth-based mobile application."
              tags={['IoT', 'Bluetooth', 'Mobile App']}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <ExperienceCard
              title="Software Development Intern"
              company="Edunet Foundation-AICTE"
              period="Feb 2024 - April 2024"
              description="Developed and optimized a Django-based academic note-sharing platform, improving engagement metrics by 25%."
            />
            <ExperienceCard
              title="Internshala Student Partner"
              company="Internshala"
              period="August 2023 - October 2023"
              description="Promoted skill development courses, achieving a 20% increase in course enrollments. Conducted workshops enhancing communication skills."
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <EducationCard
              degree="Bachelor of Engineering (E&TC)"
              school="MVP'S KBT College Of Engineering, Nashik"
              period="2021 - 2025"
              grade="CGPA: 7.04/10"
            />
            <EducationCard
              degree="HSC (Class 12th)"
              school="M.S.G Jr. College, Malegaon"
              period="2019 - 2021"
              grade="Percentage: 81.6%"
            />
            <EducationCard
              degree="SSC (Class 10th)"
              school="K.B.H Vidyalaya, Malegaon"
              period="2018 - 2019"
              grade="Percentage: 78%"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <CertificationCard
              icon={<Shield size={32} />}
              title="Google Cyber Security Certificate"
              issuer="Coursera"
            />
            <CertificationCard
              icon={<Database size={32} />}
              title="Building Data Analytics Application with Cloud"
              issuer="Next Gen Employability Program"
            />
            <CertificationCard
              icon={<Cloud size={32} />}
              title="Google Cloud Arcade Badges"
              issuer="Google Cloud"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/harrydeore" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="http://www.linkedin.com/in/harishdeore" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:harishdeore766@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-slate-400">© 2024 Harish Rajendra Deore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-700 p-6 rounded-xl"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ icon, title, description, tags }: { icon: React.ReactNode; title: string; description: string; tags: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-700 rounded-xl overflow-hidden"
    >
      <div className="p-6">
        <div className="text-blue-400 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ title, company, period, description }: { title: string; company: string; period: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-slate-700 p-6 rounded-xl"
    >
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-blue-400 mb-2">{company}</p>
      <p className="text-sm text-slate-400 mb-3">{period}</p>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  );
}

function EducationCard({ degree, school, period, grade }: { degree: string; school: string; period: string; grade: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-slate-700 p-6 rounded-xl"
    >
      <h3 className="text-xl font-semibold mb-1">{degree}</h3>
      <p className="text-blue-400 mb-2">{school}</p>
      <p className="text-sm text-slate-400 mb-2">{period}</p>
      <p className="text-slate-300">{grade}</p>
    </motion.div>
  );
}

function CertificationCard({ icon, title, issuer }: { icon: React.ReactNode; title: string; issuer: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-700 p-6 rounded-xl text-center"
    >
      <div className="text-blue-400 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{issuer}</p>
    </motion.div>
  );
}

export default App;
