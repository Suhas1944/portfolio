import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className="container animate-fade-in py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch.</span></h1>
        <p className="text-secondary mb-10 max-w-2xl">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-card-list">
            <a href="mailto:Suhas@example.com" className="contact-item-animated" style={{ animationDelay: '100ms' }}>
              <div className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <Mail size={24} />
                </div>
                <h3 className="contact-channel-title">Email</h3>
                <p className="contact-channel-detail">Suhas@example.com</p>
              </div>
            </a>

            <div className="contact-item-animated" style={{ animationDelay: '200ms' }}>
              <div className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <h3 className="contact-channel-title">Location</h3>
                <p className="contact-channel-detail">Narhe, Pune</p>
              </div>
            </div>

            <a href="tel:+917058293263" className="contact-item-animated" style={{ animationDelay: '300ms' }}>
              <div className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <Phone size={24} />
                </div>
                <h3 className="contact-channel-title">Phone</h3>
                <p className="contact-channel-detail">+91 7058293263</p>
              </div>
            </a>
          </div>

          {/* Form / Submission Screen Column */}
          <div className="contact-item-animated" style={{ animationDelay: '200ms' }}>
            <div className="contact-form-card">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="contact-input-group">
                      <label className="contact-label">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="contact-input"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="contact-input-group">
                      <label className="contact-label">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="contact-input"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="contact-input-group">
                      <label className="contact-label">Message</label>
                      <textarea
                        rows="5"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="contact-textarea"
                        placeholder="Hello, let's collaborate on some beautiful digital experiences..."
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button type="submit" className="btn-contact-submit mt-2">
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-8 animate-fade-in">
                  <div className="text-green-500 mb-6" style={{ color: '#22c55e' }}>
                    <CheckCircle2 size={64} className="animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold mb-3">Message Sent!</h2>
                  <p className="text-secondary max-w-sm mb-8">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your message has been received successfully. I will get back to you as soon as possible!
                  </p>
                  <button 
                    onClick={handleReset} 
                    className="btn btn-outline"
                    style={{ borderRadius: '12px', padding: '0.75rem 2rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

