import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function App() {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

```
emailjs
  .sendForm(
    "service_p0sv8zt",
    "template_94gtq8r",
    form.current,
    "GoZNF9uaJX296agta"
  )
  .then(
    () => alert("Message sent 🚀"),
    () => alert("Failed ❌")
  );
```

};

return ( <div className="min-h-screen text-white bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]">

```
  {/* NAVBAR */}
  <nav className="flex justify-between items-center p-6 sticky top-0 bg-[#0f172a]/70 backdrop-blur-lg z-50 border-b border-white/10">
    <h1 className="text-xl font-bold tracking-wide">Anuj Kumar Yadav</h1>

    <div className="space-x-6 hidden md:block">
      <a href="#home" className="hover:text-blue-400 transition">Home</a>
      <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
      <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
    </div>

    <a href="/resume.pdf" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
      Resume
    </a>
  </nav>

  {/* HERO */}
  <section id="home" className="h-screen flex items-center justify-center px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">

      <div className="space-y-5">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Hi, I’m <span className="text-blue-400">Anuj</span>
        </motion.h1>

        <p className="text-gray-400 text-lg">
        Full-Stack Developer focused on building fast, responsive and user-friendly web applications.
        </p>

        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "React Developer",
            2000,
            "Java Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-blue-400 text-lg block"
        />

        <div className="flex gap-4 pt-2">
          <a href="#projects" className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            View Work
          </a>

          <a href="/resume.pdf" className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Resume
          </a>
        </div>

        <div className="flex gap-4 text-xl pt-2 opacity-80">
          <a href="https://github.com/anuj2121" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/anuj-kumar-yadav-5031a8257" target="_blank">LinkedIn</a>
          <a href="mailto:yadavk.anuj21@gmail.com">Mail</a>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        <img 
          src="/profile.jpg" 
          alt="profile"
          className="relative w-64 h-64 rounded-full border border-gray-700 shadow-xl"
        />
      </div>

    </div>
  </section>

  {/* PROJECTS */}
  <section id="projects" className="p-10 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Task Manager */}
      <motion.div 
  whileHover={{ scale: 1.05 }}
  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition duration-300"
>
  <img src="/project1.png" className="rounded-lg mb-4" />

  <h3 className="text-xl font-semibold">RescueNexus 🚑</h3>

  <p className="text-gray-400 mt-2 text-sm">
    Emergency response platform designed to connect users with nearby rescue services efficiently.
  </p>

  <ul className="text-gray-400 text-sm mt-2 space-y-1">
    <li>• Built responsive UI using React</li>
    <li>• Focused on usability and quick access to services</li>
    <li>• Designed system flow for emergency handling</li>
  </ul>

  <div className="mt-4 flex gap-4">
    <a href="https://github.com/anuj2121" target="_blank" className="bg-blue-500 px-3 py-1 rounded">
      GitHub
    </a>
  </div>
</motion.div>
<motion.div 
  whileHover={{ scale: 1.05 }}
  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition duration-300"
>
  <img src="/project4.png" className="rounded-lg mb-4" />

  <h3 className="text-xl font-semibold">Mecare 🏥</h3>

  <p className="text-gray-400 mt-2 text-sm">
    Healthcare platform for managing patient information and improving access to medical services.
  </p>

  <ul className="text-gray-400 text-sm mt-2 space-y-1">
    <li>• Built using web technologies with focus on UI</li>
    <li>• Designed user-friendly interface for patient interaction</li>
    <li>• Focused on accessibility and simplicity</li>
  </ul>

  <div className="mt-4 flex gap-4">
    <a href="https://github.com/anuj2121" target="_blank" className="bg-blue-500 px-3 py-1 rounded">
      GitHub
    </a>
  </div>
</motion.div>

      {/* RescueNexus */}
      <motion.div 
  whileHover={{ scale: 1.05 }}
  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition duration-300"
>
  <img src="/project3.png" className="rounded-lg mb-4" />

  <h3 className="text-xl font-semibold">Task Manager App 🗂️</h3>

  <p className="text-gray-400 mt-2 text-sm">
    Full-stack task management system for creating, assigning and tracking tasks with role-based access.
  </p>

  <ul className="text-gray-400 text-sm mt-2 space-y-1">
    <li>• Frontend: HTML, CSS, JavaScript</li>
    <li>• Backend: Java (REST API)</li>
    <li>• Database: PostgreSQL</li>
    <li>• Deployed on Railway</li>
  </ul>

  <div className="mt-4 flex gap-4">
    <a href="https://github.com/anuj2121" target="_blank" className="bg-blue-500 px-3 py-1 rounded">
      GitHub
    </a>

    <a href="https://task-manager-production-cd74.up.railway.app/" target="_blank" className="bg-green-500 px-3 py-1 rounded">
      Live
    </a>
  </div>
</motion.div>

      {/* Portfolio */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition duration-300"
      >
        <img src="/project2.png" className="rounded-lg mb-4" />

        <h3 className="text-xl font-semibold">Portfolio 🌐</h3>
        <p className="text-gray-400 mt-2 text-sm">
          Personal portfolio built with React, Tailwind CSS and animations.
        </p>

        <div className="mt-4 flex gap-4">
          <a href="https://github.com/anuj2121" target="_blank" className="bg-blue-500 px-3 py-1 rounded">
            GitHub
          </a>
        </div>
      </motion.div>

    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="p-10 text-center">
    <h2 className="text-3xl font-bold mb-6">Contact</h2>

    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto flex flex-col gap-4">
      <input name="name" type="text" placeholder="Your Name" className="p-3 rounded bg-white/5 border border-white/10" required />
      <input name="email" type="email" placeholder="Your Email" className="p-3 rounded bg-white/5 border border-white/10" required />
      <textarea name="message" placeholder="Message" className="p-3 rounded bg-white/5 border border-white/10" required></textarea>

      <button className="bg-blue-500 py-2 rounded hover:bg-blue-600 transition">
        Send Message
      </button>
    </form>
  </section>

  {/* FOOTER */}
  <footer className="text-center p-6 border-t border-gray-700">
    <p className="text-gray-400">© 2026 Anuj Yadav</p>
  </footer>

</div>


);
}

export default App;
