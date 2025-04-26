import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[var(--color-secondary-50)]">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-6 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-secondary-800)]">Get In Touch</h2>
            <div className="w-20 h-1 bg-[var(--color-primary-500)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--color-secondary-600)] max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>
          
          {/* Contact info and form in left-right layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Contact information */}
            <div className="lg:w-2/5">
              <div className="bg-[var(--color-accent)] p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-6 text-[var(--color-secondary-800)]">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon icon={faPhone} className="text-[var(--color-primary)] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <p className="text-[var(--color-secondary-600)]">+251 912 345 678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon icon={faEnvelope} className="text-[var(--color-primary)] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p className="text-[var(--color-secondary-600)]">tesfalidet@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon icon={faLocationDot} className="text-[var(--color-primary)] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Location</h4>
                      <p className="text-[var(--color-secondary-600)]">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--color-secondary-800)]">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[var(--color-secondary-100)] rounded-full flex items-center justify-center hover:bg-[var(--color-secondary-200)] transition-colors">
                      <FontAwesomeIcon icon={faGithub} className="text-[var(--color-secondary-700)] text-xl" />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[var(--color-secondary-100)] rounded-full flex items-center justify-center hover:bg-[var(--color-secondary-200)] transition-colors">
                      <FontAwesomeIcon icon={faLinkedin} className="text-[var(--color-secondary-700)] text-xl" />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[var(--color-secondary-100)] rounded-full flex items-center justify-center hover:bg-[var(--color-secondary-200)] transition-colors">
                      <FontAwesomeIcon icon={faTwitter} className="text-[var(--color-secondary-700)] text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Contact form */}
            <div className="lg:w-3/5">
              <div className="bg-[var(--color-accent)] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-[var(--color-secondary-800)]">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--color-secondary-700)] mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[var(--color-secondary-300)] rounded-md focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-secondary-700)] mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[var(--color-secondary-300)] rounded-md focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-secondary-700)] mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--color-secondary-300)] rounded-md focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-secondary-700)] mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-[var(--color-secondary-300)] rounded-md focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] outline-none transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-primary-700)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <FontAwesomeIcon icon={faEnvelope} className="animate-pulse mr-2" />
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                  
                  {submitStatus && (
                    <div className={`mt-4 p-3 rounded-md ${submitStatus.success ? 'bg-[var(--color-success-100)] text-[var(--color-success)]' : 'bg-[var(--color-error-100)] text-[var(--color-error)]'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;