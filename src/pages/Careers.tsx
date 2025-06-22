import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold mb-6"
              >
                Hire Me
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-xl text-gray-600 mb-4"
                >
                  I'm a passionate web developer ready to help you bring your ideas to life with modern, responsive, and user-friendly solutions.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  Whether you need a complete web application, website redesign, or ongoing development support, I'm here to help.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">Why Hire Me?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Modern Technologies",
                        description: "Proficient in the latest web development frameworks and tools to create cutting-edge solutions."
                      },
                      {
                        title: "User-Focused",
                        description: "I prioritize user experience and create intuitive, accessible interfaces that users love."
                      },
                      {
                        title: "Reliable & Dedicated",
                        description: "Committed to delivering high-quality work on time and maintaining clear communication throughout projects."
                      }
                    ].map((benefit, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mt-12">
                    <h3 className="font-bold text-xl mb-6">Ready to Work Together?</h3>
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 rounded-full mb-4 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                          UG
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Upendra Gariminti</h3>
                        <p className="text-gray-600 mb-4">Web Developer</p>
                        <div className="flex flex-col space-y-3">
                          <a href="mailto:upendra@leadkamp.com" className="flex items-center text-gray-700 hover:text-blue-600">
                            <Mail className="w-5 h-5 mr-2" />
                            upendra@leadkamp.com
                          </a>
                          <a 
                            href="https://github.com/UpendraAkki" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-blue-600"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            GitHub Profile
                          </a>
                          <a 
                            href="https://www.linkedin.com/in/upendra-akki/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-blue-600"
                          >
                            <Linkedin className="w-5 h-5 mr-2" />
                            LinkedIn Profile
                          </a>
                          <a 
                            href="https://www.linkedin.com/in/upendra-akki/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-blue-600"
                          >
                            <Twitter className="w-5 h-5 mr-2" />
                            X Profile
                          </a>
                        </div>
                        <a 
                          href="mailto:upendra@leadkamp.com" 
                          className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group"
                        >
                          Hire Me Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;
