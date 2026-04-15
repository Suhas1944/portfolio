export default function About() {
  return (
    <div className="container animate-fade-in py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About <span className="text-gradient">Me.</span></h1>
        
        <div className="glass-panel p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <p className="text-secondary mb-4">
            Hello! I'm Suhas, a software developer passionate about creating interactive applications and experiences on the web. My journey in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
          </p>
          <p className="text-secondary">
            Fast-forward to today, and I've had the privilege of building software for varied platforms. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
        </div>

        <div className="glass-panel p-8">
          <h2 className="text-2xl font-bold mb-4">Core Technologies</h2>
          <ul className="grid grid-cols-2 gap-4 text-secondary">
            <li className="flex items-center gap-2">▹ JavaScript (ES6+)</li>
            <li className="flex items-center gap-2">▹ React</li>
            <li className="flex items-center gap-2">▹ Node.js</li>
            <li className="flex items-center gap-2">▹ HTML & CSS</li>
            <li className="flex items-center gap-2">▹ Express.js</li>
            <li className="flex items-center gap-2">▹ MongoDB / SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
