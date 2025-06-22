import { ArrowLeft, CheckCircle, ArrowRight, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
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
                About Me
              </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                I'm a passionate web developer dedicated to creating innovative solutions and bringing ideas to life through code.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">My Mission</h2>
                  <p className="text-gray-600">
                    As a passionate web developer, I'm on a mission to create innovative digital solutions that 
                    improve user experiences and help businesses achieve their goals through clean, efficient code.
                  </p>
                  <p className="text-gray-600">
                    I believe that by combining creativity with technical expertise, I can build web applications 
                    that are not only functional but also delightful to use.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">My Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Innovation:</strong> I push boundaries to create solutions that weren't possible before.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Quality:</strong> I'm committed to excellence in every line of code and solution I deliver.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Collaboration:</strong> I work closely with my clients to ensure their unique needs are met.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Impact:</strong> I measure success by the tangible differences my work makes in the real world.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">My Journey</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    My journey in web development started with a passion for creating digital solutions that make a difference. 
                    I believe in building applications that are not only functional but also provide exceptional user experiences.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Throughout my career, I've worked on various projects, from small business websites to complex web applications. 
                    Each project has taught me valuable lessons about user-centered design, clean code practices, and the importance 
                    of staying updated with the latest technologies.
                  </p>
                  <p className="text-gray-600">
                    Today, I'm actively seeking new opportunities to contribute my skills to innovative projects and teams. 
                    I'm particularly interested in roles where I can combine my technical expertise with creative problem-solving 
                    to build meaningful digital experiences.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-gray-600 mb-8">
                  I'm a dedicated web developer with expertise in modern web technologies, frontend frameworks, 
                  and full-stack development. I'm passionate about creating innovative solutions that make a difference.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="bg-gray-50 border border-gray-100 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden bg-gray-200">
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                            UG
                          </div>
                        </div>
                        <h3 className="font-bold text-2xl mb-2">Upendra Gariminti</h3>
                        <p className="text-gray-500 text-lg mb-4">Web Developer</p>
                        <p className="text-gray-600 text-base mb-6">Looking for getting hired. Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient code.</p>
                        
                        <div className="flex flex-col space-y-3 w-full">
                          <a href="mailto:upendra@leadkamp.com" className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors">
                            <Mail className="w-5 h-5 mr-2" />
                            upendra@leadkamp.com
                          </a>
                          <a 
                            href="https://github.com/UpendraAkki" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            GitHub Profile
                          </a>
                          <a 
                            href="https://www.linkedin.com/in/upendra-akki/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="w-5 h-5 mr-2" />
                            LinkedIn Profile
                          </a>
                          <a 
                            href="https://www.linkedin.com/in/upendra-akki/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            <Twitter className="w-5 h-5 mr-2" />
                            X Profile
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6">Ready to Work Together?</h3>
                    <p className="text-gray-600 mb-6">
                      I'm currently looking for new opportunities to contribute to exciting projects and grow my career in web development.
                    </p>
                    <a 
                      href="mailto:upendra@leadkamp.com" 
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group"
                    >
                      Hire Me
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <a 
                href="mailto:upendra@leadkamp.com" 
                className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group"
              >
                Hire Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
