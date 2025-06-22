import React from 'react';
import { Mail, Linkedin, Phone, Github, Twitter } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Me Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about web development services or looking to hire a passionate developer? Reach out and let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700 max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-4 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                UG
              </div>
              <h3 className="text-xl font-bold text-gray-900">Upendra Gariminti</h3>
              <p className="text-gray-600 mb-4">Web Developer</p>
              <div className="flex flex-col space-y-3 w-full">
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
                className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group w-full justify-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
