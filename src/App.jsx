
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const App = () => {
  const first = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (first.current) {
      const textContent = first.current.textContent;
      first.current.innerHTML = textContent
        .split("")
        .map((char, index) =>
          char === " "
            ? `<span style="display:inline-block; width:0.5em;" key=${index}>&nbsp;</span>`
            : `<span style="display:inline-block;" key=${index}>${char}</span>`
        )
        .join("");

      const letters = first.current.querySelectorAll("span");

      gsap.fromTo(
        letters,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add your form submission logic here
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-10">
        <div ref={first} className="text-2xl font-bold text-blue-600">
          Portfolio
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600 scale-105 transition-all duration-300 ease-in-out ">
            About
          </a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600">
            Skills
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-600">
            Portfolio
          </a>
          <a href="#testimonial" className="text-gray-700 hover:text-blue-600">
            Testimonial
          </a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Download CV
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Hero Section */}
        <section id="about" className="text-center my-12">
          <h1 className="text-4xl font-bold">
            I have <span className="text-blue-600">Creative Design</span>{" "}
            Experience
          </h1>
          <p className="text-gray-600 mt-4">
            I'm Umakant, a creative Frontend Developer with 2+ years of
            experience in helping businesses solve their problems with my code.
          </p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded mr-4 hover:bg-blue-700">
              Contact Me
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-100">
              View Portfolio
            </button>
          </div>
          <div className="mt-12">
            <img
              src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0="
              alt="Profile of Tanvir"
              className=" w-32 h-32  object-cover inline-block border-4 border-blue-600 rounded-full shadow-md"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section
          id="skills"
          className="bg-white shadow-md rounded-lg p-8 my-12 text-center grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-600">80+</h2>
            <p className="text-gray-600">Satisfied clients</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-600">200+</h2>
            <p className="text-gray-600">Projects completed</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-600">99+</h2>
            <p className="text-gray-600">Reviews given</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="my-12 text-center">
          <h2 className="text-3xl font-bold">My Creative Works Latest Projects</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, idx) => (
              <img
                key={idx}
                src="https://placehold.co/200x150"
                alt={`Project ${idx + 1}`}
                className="shadow-md rounded-lg hover:shadow-xl"
              />
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonial" className="my-12 text-center">
          <h2 className="text-3xl font-bold">Our Customers Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-white p-6 shadow-md rounded-lg">
                <p className="text-black">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante."
                </p>
                <p className="text-gray-600 mt-4">- Customer {idx + 1}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-12">
          <h2 className="text-3xl font-bold text-center">
            Let's Discuss Your Project
          </h2>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-1/3">
              <p className="text-gray-600">
                <i className="fas fa-phone-alt text-blue-600"></i> +123 456 7890
              </p>
              <p className="text-gray-600 mt-4">
                <i className="fas fa-envelope text-blue-600"></i>{" "}
                umakantranga47@gmail.com
              </p>
              <p className="text-gray-600 mt-4">
                <i className="fas fa-map-marker-alt text-blue-600"></i> Delhi , India
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-lg">
              <div className="mb-4">
                <label className="block text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Submit Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-gray-600">
        &copy; 2024 Umakant. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
