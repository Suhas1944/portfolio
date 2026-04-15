import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container animate-fade-in py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch.</span></h1>
        <p className="text-secondary mb-10 max-w-2xl">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="flex flex-col gap-6">
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="bg-tertiary p-4 rounded-full mb-4 text-accent-primary">
                <Mail size={24} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-secondary">Suhas@example.com</p>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="bg-tertiary p-4 rounded-full mb-4 text-accent-primary">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-secondary">Narhe</p>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="bg-tertiary p-4 rounded-full mb-4 text-accent-primary">
                <Phone size={24} />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-secondary">+91 7058293263</p>
            </div>
          </div>

          <div className="glass-panel p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-bg-tertiary border border-glass rounded-lg px-4 py-2 text-white outline-none focus:border-accent-primary transition-colors"
                  placeholder="John Doe"
                  style={{ background: 'var(--bg-tertiary)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-bg-tertiary border border-glass rounded-lg px-4 py-2 text-white outline-none focus:border-accent-primary transition-colors"
                  placeholder="john@example.com"
                  style={{ background: 'var(--bg-tertiary)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Message</label>
                <textarea
                  rows="5"
                  className="w-full bg-bg-tertiary border border-glass rounded-lg px-4 py-2 text-white outline-none focus:border-accent-primary transition-colors"
                  placeholder="Hello..."
                  style={{ background: 'var(--bg-tertiary)', resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
