import React, { useState } from 'react';
import { X, FileText, Code, Mail, Phone, Linkedin, Github } from 'lucide-react';

function App() {
  const [activeModal, setActiveModal] = useState<'resume' | 'projects' | 'contact' | null>(null);

  const projects = [
    {
      title: 'To-do List',
      description: 'A simple to-do list application built with React and TypeScript.',
      technologies: ['React', 'TypeScript', 'CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Coffee Shop',
      description: 'A coffee shop management system built with React and TypeScript.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Gym Management System',
      description: 'A gym management system built with React and TypeScript.',
      technologies: ['MVC', 'JavaScript', 'HTML', 'CSS'],
      github: '#',
      demo: '#'
    }
  ];

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-200 shadow-2xl">
                <img
                  src="public\IMG-20230322-WA0070.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-6xl font-bold text-gray-900 mb-4">Hello</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">A Bit About Me</h2>
                <p className="text-gray-600 leading-relaxed max-w-md">
               I am a passionate Full Stack Developer with experience in building dynamic, scalable, and user-friendly applications. 
               Skilled in both front-end and back-end technologies, I specialize in creating seamless digital experiences from concept to deployment. 
               With a strong foundation in modern frameworks, databases, and cloud services, I enjoy solving complex problems, optimizing performance, and delivering clean, maintainable code. I thrive in collaborative environments and am always eager to learn new technologies to stay ahead in the ever-evolving tech landscape.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setActiveModal('resume')}
                  className="w-32 h-32 rounded-full bg-orange-400 hover:bg-orange-500 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Resume
                </button>
                <button
                  onClick={() => setActiveModal('projects')}
                  className="w-32 h-32 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveModal('contact')}
                  className="w-32 h-32 rounded-full bg-teal-400 hover:bg-teal-500 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">066-105-0449</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">nomfundomanyoni2003@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Follow Me</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="www.linkedin.com/in/nomfundo-nolwazi-manyoni-85b438226" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Nolwazee" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2025 By Nomfundo Manyoni. Powered and secured by modern web technologies.
          </div>
        </div>
      </footer>

      {/* Resume Modal */}
      {activeModal === 'resume' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Resume</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              {/* Header */}
              <div className="text-center border-b border-gray-200 pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Nomfundo Manyoni</h1>
                <p className="text-xl text-gray-600 mb-4">Full Stack Developer</p>
                <div className="flex justify-center space-x-6 text-sm text-gray-600">
                  <span className="flex items-center"><Phone className="w-4 h-4 mr-1" /> 066-105-0449</span>
                  <span className="flex items-center"><Mail className="w-4 h-4 mr-1" /> nomfundomanyoni2003@gmail.com</span>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Experience</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">Software Developer</h4>
                        <p className="text-gray-600">Vending Solutions</p>
                      </div>
                      <span className="text-sm text-gray-500">02/2025 - 07/2025</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Developed and programmed an automated vending machine</li>
                      <li>Programmed the purchase interface where customers select and buy snacks and drinks.</li>
                      <li>Built the core logic in C to handle product dispensing, payment validation, and real-time user interactions.</li>
                      <li>Integrated software with hardware components to ensure smooth and reliable operation.</li>
                      <li>Enhanced understanding of embedded systems and automation in real-world applications.</li>
                    </ul>
                  </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Power Platform Mentor</h4>
                        <p className="text-gray-600">VarsityGenie</p>
                      </div>
                      <span className="text-sm text-gray-500">2022 - Present</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Completed a Power Platform certificate program and gained hands-on experience.</li>
                      <li>Created YouTube tutorials to teach Power Platform concepts and practical solutions.</li>
                      <li>Mentored students, guiding them to build real-life apps with Power Apps, Power Automate, and Virtual Agents</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">Communication Manager</h4>
                        <p className="text-gray-600">VarsityGenie</p>
                      </div>
                      <span className="text-sm text-gray-500">2023 - Present</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Develop and implement internal and external communication strategies to align with organizational goals.</li>
                      <li>Organize events, campaigns, and public engagements to promote the organization.</li>
                      <li>Analyze feedback and communication effectiveness to continuously improve strategies.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Diploma In Applications Development</h4>
                      <p className="text-gray-600">Durban University of Technology</p>
                    </div>
                    <span className="text-sm text-gray-500">2022 - 2025</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                    <p className="text-gray-700">Front-End: HTML5, CSS, JavaScript, React.js, Tailwind CSS</p>
                    <p className="text-gray-700">Back-End: Node.js, Express.js, Python, Django</p>
                    <p className="text-gray-700">Database: MongoDB, MySQL, PostgreSQL</p>
                    <p className="text-gray-700">API Development: RESTful APIs, JSON, XML</p>
                    <p className="text-gray-700">Embedded Systems: Arduino, Raspberry Pi, Robotics Programming</p>
                    <p className="text-gray-700">Cloud Computing: Microsoft Azure (App Services, Azure SQL, Functions, DevOps, Storage)</p>
                    <p className="text-gray-700">Software Design Patterns: MVC, OOP, Microservices</p>
                    <p className="text-gray-700">Other: Git, Docker, Figma, GitHub, Azure DevOps</p>

                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional & Soft Skills</h4>
                    <p className="text-gray-700">Mentoring & teaching</p>
                    <p className="text-gray-700">Project management & Scrum methodology</p>
                    <p className="text-gray-700">Teamwork & Adaptability to new technologies</p>
                    <p className="text-gray-700">Effective communication and presentation skills</p>

                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                    <p className="text-gray-700">IDEs: Visual Studio, VS Code, Eclipse, PyCharm</p>
                    <p className="text-gray-700">Version Control: Git, GitHub</p>
                    <p className="text-gray-700">Cloud & Deployment: Azure, AWS, Netlify</p>
                    <p className="text-gray-700">Testing & Debugging: Postman, NUnit, Jest</p>
                    <p className="text-gray-700">Design & Prototyping: Figma, Adobe XD</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Other</h4>
                    <p className="text-gray-700">Microsoft Power Platform (Power Apps, Power Automate, Power BI)</p>
                    <p className="text-gray-700">AI & Machine Learning: Azure Machine Learning, TensorFlow</p>
                    <p className="text-gray-700">Embedded Systems: Arduino, Raspberry Pi, Robotics Programming</p>
                  </div>
                </div>
              </div>
            </div>
      
    
    )}

      {/* Projects Modal */}
      {activeModal === 'projects' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <Code className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="font-semibold text-gray-900">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {activeModal === 'contact' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Contact Me</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
