import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0sv8zt",
        "template_94gtq8r",
        form.current,
        "GoZNF9uaJX296agta"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
        },
        () => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <div className="bg-[#0f172a] text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 sticky top-0 bg-[#0f172a] z-50">

  <h1 className="text-xl font-bold">Anuj</h1>

  <div className="space-x-6 hidden md:block">
    <a href="#home" className="hover:text-blue-400">Home</a>
    <a href="#about" className="hover:text-blue-400">About</a>
    <a href="#skills" className="hover:text-blue-400">Skills</a>
    <a href="#projects" className="hover:text-blue-400">Projects</a>
    <a href="#contact" className="hover:text-blue-400">Contact</a>
  </div>

  <a href="/resume.pdf" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
    Resume
  </a>

</nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Anuj Yadav
        </motion.h1>
        <p className="mt-6 text-gray-400 max-w-xl text-center">
  I am a passionate Frontend Developer skilled in React, Tailwind CSS and modern UI design. 
  I love building fast, responsive and user-friendly web applications and continuously 
  improving my skills to create impactful digital experiences.
</p>
        <div className="mt-6 flex gap-6 flex-wrap justify-center md:justify-start text-lg">

  <a 
    href="https://github.com/anuj2121" 
    target="_blank" 
    className="hover:text-blue-400"
  >
    🐙 GitHub
  </a>

  <a 
    href="https://www.linkedin.com/in/anuj-kumar-yadav-5031a8257" 
    target="_blank" 
    className="hover:text-blue-400"
  >
    💼 LinkedIn
  </a>

  <a 
    href="https://www.instagram.com/mr.yaduvanshii21" 
    target="_blank" 
    className="hover:text-pink-400"
  >
    📸 Instagram
  </a>

  <a 
    href="mailto:yadavk.anuj21@gmail.com" 
    className="hover:text-red-400"
  >
    📧 Gmail
  </a>

  <a 
    href="https://wa.me/917268047858" 
    target="_blank" 
    className="hover:text-green-400"
  >
    💬 WhatsApp
  </a>

</div>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "UI Enthusiast",
            2000,
            "Backend Developer",
            2000,

          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-blue-400 text-xl mt-4"
        />
        <p className="mt-4 text-red-400">Update test 🔥</p>
      </section>

      {/* Skills */}
      <section id="skills" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["HTML","CSS","JavaScript","React","Tailwind","Git"].map(skill => (
            <motion.span 
              whileHover={{ scale: 1.1 }}
              key={skill}
              className="bg-gray-800 px-4 py-2 rounded-lg"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="about" className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* RescueNexus */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold">RescueNexus 🚑</h3>
            <p className="text-gray-400 mt-2">
              Cloud-native emergency response coordination platform that connects users with nearby rescue services in real-time.
            </p>

            <div className="mt-4 flex gap-4">
              <a href="https://github.com/anuj2121" target="_blank" className="bg-blue-500 px-3 py-1 rounded">
                GitHub
              </a>
              <a href="#" className="bg-green-500 px-3 py-1 rounded">
                Live Demo
              </a>
            </div>
          </motion.div>

          {/* Portfolio */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold">Portfolio Website 🌐</h3>
            <p className="text-gray-400 mt-2">
              Personal portfolio built using React, Tailwind CSS, and Framer Motion with smooth animations and modern UI.
            </p>

            <div className="mt-4 flex gap-4">
              <a href="https://github.com/anuj2121" target="_blank" className="bg-blue-500 px-3 py-1 rounded">
                GitHub
              </a>
              <a href="#" className="bg-green-500 px-3 py-1 rounded">
                Live Demo
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Experience */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl max-w-xl mx-auto">
          <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
          <p className="text-gray-400 mt-2">
            Built responsive UI using React and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-xl">Web Development</div>
          <div className="bg-white/10 p-6 rounded-xl">UI Design</div>
          <div className="bg-white/10 p-6 rounded-xl">Frontend Optimization</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>

        <div className="bg-white/10 p-6 rounded-xl max-w-xl mx-auto">
          <p className="text-gray-400">
            "Anuj is a highly skilled frontend developer with great UI/UX sense."
          </p>
          <p className="mt-2 font-semibold">- Team Member</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto flex flex-col gap-4">
          <input name="name" type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800" required />
          <input name="email" type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800" required />
          <textarea name="message" placeholder="Your Message" className="p-3 rounded bg-gray-800" required></textarea>

          <button type="submit" className="bg-blue-500 py-2 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </section>
      

      {/* Footer */}
      <footer className="text-center p-6 border-t border-gray-700">
        <p className="text-gray-400">
          © 2026 Anuj | Built with React & Tailwind
        </p>
      </footer>

    </div>
  );
}

export default App;