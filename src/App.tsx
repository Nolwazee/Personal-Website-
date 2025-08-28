import React, { useState } from 'react';
import { X, FileText, Code, Mail, Phone, Linkedin, Github } from 'lucide-react';

function App() {
  const [activeModal, setActiveModal] = useState<'resume' | 'projects' | 'contact' | null>(null);

  const projects = [
    {
      title: 'Automate Birthday Wish',
      description: 'Automated birthday wishes system using Power Automate and ChatGPT for personalized messages at DUT.',
      technologies: ['Microsoft Power Automate', 'OpenAI', 'Microsoft Outlook'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Automate Certificate',
      description: 'Automated certificate generation system using Power Automate that delivers attendance certificates instantly upon form submission.',
      technologies: ['Microsoft Power Automate', 'Microsoft Forms', 'Microsoft Outlook'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Power BI Analytics',
      description: 'Working on it',
      technologies: ['ABC', 'Abc', 'Abc'],
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
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                     I am a Power Platform Specialist passionate about creating real-life business solutions that simplify processes and improve efficiency. 
                With expertise in Power Apps, Power Automate, Power BI, and Power Virtual Agents, I design and build applications that solve practical problems.
                Beyond development, I mentor aspiring Power Platform makers, sharing knowledge and guiding them to create impactful solutions.
                My work blends technical skill with a focus on delivering measurable business value.
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
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
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
                <p className="text-xl text-gray-600 mb-4">Power Platform Specialist</p>
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
                      <h4 className="font-semibold text-gray-900">Microsoft Power Platform Fundamentals - PL900</h4>
                      <p className="text-gray-600">University of Technology</p>
                    </div>
                    <span className="text-sm text-gray-500">Sep 2022 - Nov 2022</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                    <p className="text-gray-700">Microsoft Power Platform, TypeScript, Next.js, Tailwind CSS, Vue.js, C#, Java, Python, JavaScript, HTML, CSS, SQL, SQL Server, Azure SQL, Microsoft Dataverse</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional & Soft Skills</h4>
                    <p className="text-gray-700">Mentoring & teaching, Project management & Scrum methodology, Problem-solving & analytical thinking, Teamwork & adaptability to new technologies, Digital content creation (YouTube tutorials, blog posts)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                    <p className="text-gray-700">Git, Docker, Figma, GitHub, Azure DevOps,AI Builder  </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Other</h4>
                    <p className="text-gray-700">Arduino, Raspberry Pi, Industrial Robotics, RoboMaster coding</p>
                  </div>
                </div>
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
