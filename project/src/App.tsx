import React, { useState } from 'react';
import ShinyText from './ShinyText';
import ScrollFloat from './ScrollFloat';
import { Shield, Droplets, Building2, Factory,ClipboardList, PhoneCall, ShieldCheck, Wrench, CheckCircle, Phone, Mail, MapPin, IndianRupee,CheckCircle2, Star, ArrowRight, ShowerHead as Shower, UtensilsCrossed, Home, Currency,  Award, Clock, PenTool as Tool, Users, Zap, HeartHandshake, BadgeCheck, Hammer } from 'lucide-react';
import axios from "axios";

  
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://formcarry.com/s/BRE4FqAuPJk", // Replace with your actual endpoint
        { name, email, phone, message },
        { headers: { Accept: "application/json" } }
      );
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://media.gettyimages.com/id/1251360797/photo/painting-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=YH7-mJxFKoYBFD5_Un9pOsOkG_CoeoKmRBFSkNJfqp4="
            alt="Waterproofing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <nav className=" top-10 relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="  text-white text-xl font-bold">BHARAT WATERPROOFING CO.</span>
            </div>
            
            <div className=" hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-blue-400">Services</a>
              <a href="#projects" className="text-white hover:text-blue-400">Projects</a>
              <a href="#about" className="text-white hover:text-blue-400">About</a>
              <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className=" text-4xl md:text-6xl font-bold text-white mb-6">
              Professional Waterproofing Solutions in Hyderabad
            </h1>
            <p className=" text-xl text-gray-200 mb-8 max-w-2xl">
              Protect your property with our expert waterproofing services. 
              We deliver lasting solutions for residential and commercial buildings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition text-center"
              >
                <ShinyText text="Get Free Consultation" disabled={false} speed={3} className='custom-class' />
              </a>
              <a 
                href="#projects"
                className="bg-red-500 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition text-center"
              >
                <ShinyText text="View Our Projects" disabled={false} speed={3} className='custom-class' />

              </a>
            </div>
          </div>
        </div>
      </header>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-500"><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%'
            stagger={0.03}>What We Offer</ScrollFloat></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-blue-500" />,
                title: "Quality Assurance",
                description: "Premium materials and expert application techniques for lasting results."
              },
              
              
              {
                icon: <Users className="w-12 h-12 text-blue-500" />,
                title: "Expert Team",
                description: "Benefit from our experienced team's assessment to find the perfect waterproofing solution for your needs."
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-500" />,
                title: "Quick Response",
                description: "Fast and efficient service for urgent waterproofing needs."
              },
              {
                icon: <HeartHandshake className="w-12 h-12 text-blue-500" />,
                title: "Customer Support",
                description: "Dedicated support throughout the project and after completion."
              },
              {
                icon: <BadgeCheck className="w-12 h-12 text-blue-500" />,
                title: "Warranty",
                description: "15-year warranty on all our waterproofing solutions."
              },
              {
                icon: <Hammer className="w-12 h-12 text-blue-500" />,
                title: "Maintenance",
                description: "Regular maintenance services to ensure lasting protection."
              }
            ].map((offer, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="mb-4">{offer.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-50">
        
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-500">
            <ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%'
            stagger={0.03}>Our Services</ScrollFloat></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="w-12 h-12 text-blue-500" />,
                title: "Basement Waterproofing",
                description: "Complete protection for your basement against water seepage and dampness."
              },
              {
                icon: <Building2 className="w-12 h-12 text-blue-500" />,
                title: "Terrace Waterproofing",
                description: "Advanced solutions for terrace and roof waterproofing with long-lasting results."
              },
              {
                icon: <Factory className="w-12 h-12 text-blue-500" />,
                title: "Industrial Waterproofing",
                description: "Specialized waterproofing solutions for industrial buildings and structures."
              },
              {
                icon: <Shower className="w-12 h-12 text-blue-500" />,
                title: "Bathroom Waterproofing",
                description: "Expert waterproofing for bathrooms to prevent leaks and moisture damage."
              },
              {
                icon: <UtensilsCrossed className="w-12 h-12 text-blue-500" />,
                title: "Kitchen Waterproofing",
                description: "Comprehensive waterproofing solutions for kitchen areas and wet spaces."
              },
              {
                icon: <Home className="w-12 h-12 text-blue-500" />,
                title: "Roof Waterproofing",
                description: "Professional roof waterproofing to protect against rain and weather damage."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition group">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-blue-500 font-medium inline-flex items-center group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Glimpses Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-500"><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%'
            stagger={0.03}>Project Glimpses</ScrollFloat></h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12 ">
            <div className="aspect-video rounded-xl overflow-hidden transition-transform duration-300 hover:scale-110">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fDcxTE4cAhU?si=ap_LPDt4QGj99tOC" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden transition-transform duration-100 hover:scale-110">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Uon5elENr5g?si=4ho3pigrey1gZvbu" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden transition-transform duration-300 hover:scale-110">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fDcxTE4cAhU?si=ap_LPDt4QGj99tOC" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://youtube.com/@bharatwaterproofingco.?si=63ysjOSXsBDfairJ"
              target=""
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              View More Videos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-500"><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%'
            stagger={0.03}>How It Works</ScrollFloat></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <PhoneCall className="w-12 h-12 text-blue-500" />, 
              title: "Step 1: Consultation", 
              description: "Get in touch with us for a free assessment and consultation."
            },
            {
              icon: <ClipboardList className="w-12 h-12 text-blue-500" />, 
              title: "Step 2: Site Inspection", 
              description: "Our experts visit your site to evaluate the best waterproofing solutions."
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-blue-500" />, 
              title: "Step 3: Proposal & Agreement", 
              description: "We provide a customized plan and quote before proceeding with the work."
            },
            {
              icon: <Wrench className="w-12 h-12 text-blue-500" />, 
              title: "Step 4: Implementation", 
              description: "Our skilled team carries out the waterproofing with precision and efficiency."
            },
            {
              icon: <CheckCircle className="w-12 h-12 text-blue-500" />, 
              title: "Step 5: Final Inspection", 
              description: "We conduct a thorough quality check to ensure everything is up to standard."
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-blue-500" />, 
              title: "Step 6: Post-Service Support", 
              description: "Enjoy peace of mind with our warranty and maintenance services."
            }
          ].map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-500"><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%'
            stagger={0.03}>About Our Company</ScrollFloat></h2>
              <p className="text-gray-600 mb-6">
              At Bharat Waterproofing, we are dedicated to providing high-quality water damage restoration services to our clients. Our team of experts has years of experience in the industry and is equipped with the latest technology to ensure that your property is fully restored. 
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-500">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-500">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-500"><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%'
            stagger={0.03}>Why Choose Us</ScrollFloat></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <IndianRupee className="w-16 h-16 text-blue-500" />,
                title: "Transparent Pricing",
                description: "Get a clear understanding of all costs upfront, with no hidden surprises."
              },
              {
                icon: <BadgeCheck className="w-16 h-16 text-blue-500" />,
                title: "Certified Experts",
                description: "Our team consists of certified professionals with extensive training and experience."
              },
              {
                icon: <Tool className="w-16 h-16 text-blue-500" />,
                title: "Quality Materials",
                description: "We use only premium, tested materials that ensure long-lasting protection."
              },
              {
                icon: <Shield className="w-16 h-16 text-blue-500" />,
                title: "5-Year Warranty",
                description: "Comprehensive warranty coverage for complete peace of mind."
              },
              {
                icon: <Clock className="w-16 h-16 text-blue-500" />,
                title: "Timely Completion",
                description: "We value your time and ensure projects are completed as scheduled."
              },
              {
                icon: <HeartHandshake className="w-16 h-16 text-blue-500" />,
                title: "Customer Support",
                description: "Transparent, concise communication, and updates."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-500"><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%'
            stagger={0.03}>What Our Clients Say</ScrollFloat></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Property Developer",
                content: "Exceptional service and quality work. The team was professional and completed the project ahead of schedule."
              },
              {
                name: "Priya Sharma",
                role: "Homeowner",
                content: "We had severe water seepage issues in our basement. Their solution was effective and the results are long-lasting."
              },
              {
                name: "Arun Reddy",
                role: "Industrial Manager",
                content: "Their industrial waterproofing expertise is unmatched. Highly recommend their services for large-scale projects."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-500"><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%'
            stagger={0.03}>Contact Us</ScrollFloat></h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+91 82103 49367</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>bharatwaterproofingco@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className='flex gap-2'>Hyderabad, Telangana, India <a href="https://maps.app.goo.gl/mprXUUCUgLXtN3Hz7"><img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1390/1390645.png" alt="" /></a>  
                  </span>
                </div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={submit}>
              <input onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              <input onChange={(e) => setEmail(e.target.value)}
              required
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              <input onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              <textarea onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      

      <section id="copyright" className="py-3 bg-blue-900 text-white text-center">Copyright © BharatWaterproofingCo.
        </section>
     
      
    </div>
  );
}

export default App;