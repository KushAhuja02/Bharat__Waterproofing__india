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
        
        <nav className=" top-4 relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* <Shield className="w-8 h-8 text-blue-500" /> */}
              <img className= "w-70 h-40" src="data:image/png;base64,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" alt="" />
              <span className="  text-white text-xl font-bold">BHARAT WATERPROOFING CO.</span>
            </div>
            
            <div className=" hidden md:flex space-x-8">
              <a href="#services" className="text-black hover:text-blue-400">Services</a>
              <a href="#projects" className="text-black hover:text-blue-400">Projects</a>
              <a href="#about" className="text-black hover:text-blue-400">About</a>
              <a href="#contact" className="text-black hover:text-blue-400">Contact</a>
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LZJJOz8kAlE?si=iyBuI-l8jqmQLYTV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </div>
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
              Bharat Waterproofing Co. is a trusted name for all waterproofing solutions in Hyderabad and Secunderabad. With years of expertise, we specialize in terrace waterproofing, basement waterproofing, bathroom leakage repairs, and damp-proof coatings. Serving residential, commercial, and industrial properties, we ensure long-lasting protection against water damage. Our services extend across Hyderabad, providing tailored solutions for home and building waterproofing needs. Whether you need roof waterproofing, wall damp-proofing, or comprehensive slab leakage repair, we are your go-to waterproofing experts in Hyderabad. Contact us for reliable, affordable, and professional waterproofing

services today!"              </p>
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
                
                content: "Exceptional service and quality work. The team was professional and completed the project ahead of schedule."
              },
              {
                name: "Priya Sharma",
                
                content: "We had severe water seepage issues in our basement. Their solution was effective and the results are long-lasting."
              },
              {
                name: "Arun Reddy",
                
                content: "Their industrial waterproofing expertise is unmatched. Highly recommend their services for large-scale projects."
              },
              {
                name: "Anushri Mahato",
                
                content: "Bharat Waterproofing Co.'s expertise and dedication ensured a seamless experience. Their professionalism and attention to detail delivered outstanding results."
              },
              {
                name: "karthick ravi",
                
                content: "I had a terrace leakage issue and chose Bharat Waterproofing Co. after my research. They did a fantastic job on time with perfection. Highly recommend them for waterproofing services!"
              },
              {
                name: "Priya Dubey",
          
                content: "Dealing with roof leaks was a hassle until I hired Bharat Waterproofing. Their expertise and quality work left my roof fully protected. Highly recommend!"
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
