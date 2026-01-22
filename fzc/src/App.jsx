import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Col, Row, Card, Button, Modal, Tab, Tabs, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";

import { 
  FaBullhorn, FaCheckCircle, FaArrowRight, FaLinkedin, FaGithub, 
  FaEnvelope, FaWhatsapp, FaPlay, FaCode, FaMobileAlt, FaServer, 
  FaPaintBrush, FaShoppingCart, FaChartLine, FaStar, FaRocket, 
  FaCrown, FaTools, FaClock, FaUsers, FaHeadset 
} from "react-icons/fa";
import {  FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Update the import - assuming you have a hero-tech.png
import heroTechImage from "./assets/img3.png";
import whyusimg from "./assets/img4.png";
import Dash from './assets/dash.png';
import web from './assets/web.png';
import mobile from './assets/mobile.png';
import ecomerce from './assets/ecomerce.png';
import marketing from './assets/marketing.png';
import design from './assets/design.png';
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [activeTab, setActiveTab] = useState("web");
  const [selectedPlan, setSelectedPlan] = useState("pro");
const [darkMode, setDarkMode] = useState(false);
const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
  // ---- Intersection Observer ----
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    { threshold: 0.15 }
  );

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("animate-section");
    observer.observe(section);
  });

  // ---- Scroll listener ----
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  // ✅ SINGLE cleanup function
  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  const handleDemoClick = (demo) => {
    setSelectedDemo(demo);
    setShowDemoModal(true);
  };

  // Add pricing plans data
const pricingPlans = [
  
  {
    name: "Smart Business App",
    icon: <FaRocket />,
    oldPrice: "$700",
    price: "$599",
    period: "one-time",
    description: "Best choice for restaurants, clinics, and shops that want to grow faster.",
    features: [
      "Custom website OR mobile app",
      "Online booking / ordering system",
      "Admin dashboard to manage your business",
      "FREE hosting for 1 year",
      "FREE promotional video for social media 🎁",
      "FREE posters & digital designs",
      "Customer notifications & offers",
      "6 months free support",
      "Priority communication",
      "Multi-language support & Dark/Light theme"
    ],
    popular: false,
    cta: "Get This Package",
    color: "primary"
  },
  {
    name: "Starter Business Pack",
    icon: <FaCrown />,
    oldPrice: "$300",
    price: "$249",
    period: "one-time",
    description: "Perfect for small businesses that want a professional online presence fast.",
    features: [
      "Professional business website",
      "Mobile-friendly design",
      "Contact & WhatsApp integration",
      "FREE hosting for 1 year",
      "FREE business poster or flyer design",
      "Basic SEO to be found on Google",
      "6 month free support",
      "Delivered quickly in 3 days",
      "Multi-language support & Dark/Light theme"
    ],
    popular: true,
    cta: "Start My Business",
    color: "warning"
  },
  {
    name: "Premium Business Solution",
    icon: <FaTools />,
    price: "Custom",
    period: "project-based",
    description: "A complete digital solution tailored exactly to your business.",
    features: [
      "Custom website + mobile app",
      "Online store / booking system",
      "Full admin control panel",
      "FREE hosting for 1 year",
      "FREE branding & design pack",
      "FREE promo video & marketing visuals",
      "Advanced reports & analytics",
      "1 year free support & updates",
      "Direct support & consultation",
      "Multi-language support & Dark/Light theme"
    ],
    popular: false,
    cta: "Talk to Us",
    color: "dark"
  }
];



  const services = [
    {
     img:web,
    title: "Website for Your Business",
    description: "A beautiful website that shows your business online and helps you get more customers.",
    features: [
      "Professional & modern design",
      "Works on computers and phones",
      "Easy to update with your info",
      "Help customers find you online"
    ]
  },
    {
     img:mobile,
    title: "Mobile App for Your Customers",
    description: "An app for your business that lets customers order, book easily.",
    features: [
      "Available on iPhone and Android",
      "Order or book from the app",
      "Send updates or promotions to customers",
     ] },
    {
     img:ecomerce,
    title: "Online Store / E-commerce",
    description: "Sell your products online with a simple and secure online shop.",
    features: [
      "Easy product management",
      "Secure payments online",
      "Track orders and deliveries",
      "Boost sales and reach more customers"
    ]
    },
    {
     img:Dash,
    title: "Business Dashboard & Reports",
description: "See how your business is performing at a glance with clear, interactive charts and detailed reports.",
    features: [
      "Track sales and performance",
      "See customer activity",
      "Easy-to-understand charts",
      "Make better decisions fast"
    ]
   },
    {
     img:design,
    title: "Design & Branding",
    description: "Create attractive posters, flyers, stickers, and other materials to promote your business.",
    features: [
      "Posters and flyers for promotions or events",
      "Custom stickers and labels",
      "Logo and branding design",
      "Professional visuals for customers"
    ] } ,
    {
     img:marketing,
  title: "Marketing & Customer Interaction",
  description: "Help your business reach more customers online and stay connected with them.",
  features: [
    "Social media promotion",
    "Email or SMS updates to customers",
    "Loyalty programs and special offers",
    "Track marketing performance"
  ]
}

  ];

  const projectDemos = {
    web: [
      {
        id: 1,
        image:marketing,
        title: "E-commerce Platform",
        description: "Full-featured online store with cart, checkout, and admin panel",
        features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking"]
      },
      {
        id: 2,
        title: "Real Estate Portal",
        description: "Property listing platform with advanced search and booking",
        tech: "Next.js, NestJS, PostgreSQL",
        videoUrl: "https://example.com/demo2.mp4",
        liveUrl: "https://demo-fzc-realestate.vercel.app",
        features: ["Property Search", "Virtual Tours", "Agent CRM", "Booking System"]
      }
    ],
    mobile: [
      {
        id: 3,
        title: "Food Delivery App",
        description: "Mobile app for food ordering and delivery tracking",
        tech: "React Native, Node.js, MongoDB",
        videoUrl: "https://example.com/demo3.mp4",
        liveUrl: "https://expo.dev/@fzc/food-delivery",
        features: ["GPS Tracking", "Real-time Updates", "Push Notifications", "Payment Integration"]
      },
      {
        id: 4,
        title: "Fitness Tracker",
        description: "Health and fitness tracking application",
        tech: "Flutter, Firebase, Health APIs",
        videoUrl: "https://example.com/demo4.mp4",
        liveUrl: "https://expo.dev/@fzc/fitness-tracker",
        features: ["Workout Plans", "Progress Tracking", "Social Features", "Health Integration"]
      }
    ],
    fullstack: [
      {
        id: 5,
        title: "Project Management Tool",
        description: "Collaborative project management platform",
        tech: "React, Express, Socket.io, MySQL",
        videoUrl: "https://example.com/demo5.mp4",
        liveUrl: "https://demo-fzc-pm.vercel.app",
        features: ["Team Collaboration", "Task Management", "File Sharing", "Real-time Chat"]
      },
      {
        id: 6,
        title: "Learning Management System",
        description: "Online education platform with course management",
        tech: "Vue.js, Laravel, Redis, AWS",
        videoUrl: "https://example.com/demo6.mp4",
        liveUrl: "https://demo-fzc-lms.vercel.app",
        features: ["Course Creation", "Video Streaming", "Quiz System", "Progress Tracking"]
      }
    ],
     dash: [
      {
        id: 5,
        title: "Project Management Tool",
        description: "Collaborative project management platform",
        tech: "React, Express, Socket.io, MySQL",
        videoUrl: "https://example.com/demo5.mp4",
        liveUrl: "https://demo-fzc-pm.vercel.app",
        features: ["Team Collaboration", "Task Management", "File Sharing", "Real-time Chat"]
      },
      {
        id: 6,
        title: "Learning Management System",
        description: "Online education platform with course management",
        tech: "Vue.js, Laravel, Redis, AWS",
        videoUrl: "https://example.com/demo6.mp4",
        liveUrl: "https://demo-fzc-lms.vercel.app",
        features: ["Course Creation", "Video Streaming", "Quiz System", "Progress Tracking"]
      }
    ],
     design: [
      {
        id: 5,
        title: "Project Management Tool",
        description: "Collaborative project management platform",
        tech: "React, Express, Socket.io, MySQL",
        videoUrl: "https://example.com/demo5.mp4",
        liveUrl: "https://demo-fzc-pm.vercel.app",
        features: ["Team Collaboration", "Task Management", "File Sharing", "Real-time Chat"]
      },
      {
        id: 6,
        title: "Learning Management System",
        description: "Online education platform with course management",
        tech: "Vue.js, Laravel, Redis, AWS",
        videoUrl: "https://example.com/demo6.mp4",
        liveUrl: "https://demo-fzc-lms.vercel.app",
        features: ["Course Creation", "Video Streaming", "Quiz System", "Progress Tracking"]
      }
    ],

  };

const clients = [
  {
    name: "TechCorp",
    rating: 5,
    logo: "techcorp-logo.png",
    testimonial: "FZC Digital revamped our e-commerce platform, resulting in a 45% increase in online sales within 3 months. Highly recommended!"
  },
  {
    name: "StartupXYZ",
    rating: 5,
    logo: "startupxyz-logo.png",
    testimonial: "Their mobile app solution boosted our user engagement by 200% and helped us retain more loyal customers. The team was professional and responsive."
  },
  {
    name: "GlobalRetail",
    rating: 5,
    logo: "globalretail-logo.png",
    testimonial: "FZC Digital delivered a seamless digital experience and provided outstanding support. Our customers love the improvements and so do we!"
  }
];


const processSteps = [
  {
    step: 1,
    title: "Listen",
    description: "We talk with you to understand your business and what you really need."
  },
  {
    step: 2,
    title: "Plan",
    description: "We suggest the best solution and agree on features, price, and timeline."
  },
  {
    step: 3,
    title: "Design",
    description: "We create a clear and attractive design and get your approval first."
  },
  {
    step: 4,
    title: "Build",
    description: "We develop your project step by step and keep you updated."
  },
  {
    step: 5,
    title: "Test",
    description: "We test everything to make sure it works perfectly."
  },
  {
    step: 6,
    title: "Launch & Support",
    description: "We launch your project and stay available for help and updates."
  }
];
const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-warning me-1" />);
    } else if (i - rating === 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-warning me-1" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-warning me-1" />);
    }
  }

  return stars;
};


  return (
<div  >
      {/* Navigation - Updated to include Pricing */}
      <Navbar expand="lg" fixed="top" className={isScrolled ? "navbar-scrolled" : "navbar-transparent"}>
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span className="brand-line"></span>
            <span className="brand-name text-primary">FZC Digital</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
<Nav className="ms-auto text-white">
  <Nav.Link     active={activeLink === "home"}
 className="text-white" onClick={() => setActiveLink("home")} href="#home">Home</Nav.Link>
  <Nav.Link   className={activeLink === "services" ? "text-white active" : "text-white"} onClick={() => setActiveLink("services")} href="#services">Services</Nav.Link>
  <Nav.Link   className={activeLink === "pricing" ? "text-white active" : "text-white"} onClick={() => setActiveLink("pricing")} href="#pricing">Pricing</Nav.Link>
  <Nav.Link   className={activeLink === "process" ? "text-white active" : "text-white"} onClick={() => setActiveLink("process")} href="#process">Process</Nav.Link>
  {/* <Nav.Link className="text-white" href="#clients">Clients</Nav.Link> */}

 
  <Nav.Link
  href="#contact"
  className={`text-white nav-contact-btn ${activeLink === "contact" ? "activeconc" : ""}`}
  onClick={() => setActiveLink("contact")}
>
  Get Quote
</Nav.Link>

</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section with Background Image */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          
        </div>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={7} className="hero-content">
              <h6 className="text-uppercase text-primary mb-3">
                <Badge bg="primary" className="me-2">NEW</Badge> Digital Solutions Company
              </h6>
              <h1 className="hero-title mb-4">
                Transform Your Business With <span className="text-primary">Digital Excellence</span>
              </h1>
              <p className="lead mb-4">
                FZC Digital delivers cutting-edge web and mobile applications that drive growth. 
                We combine innovative technology with strategic insights to create exceptional digital experiences.
              </p>
              <div className="hero-stats d-flex gap-4 mb-4">
                <div>
                  <h3 className="text-primary">72h</h3>
                  <p>Fast Delivery</p>
                </div>

                <div>
                  <h3 className="text-primary">100%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-primary">24/7</h3>
                  <p>Support Available</p>
                 </div>
              </div>
              <div className="hero-buttons">
                <Button href="#pricing" className="btn-primary me-3">
                  View Pricing <FaArrowRight className="ms-2" />
                </Button>
                <Button href="#services" variant="outline-light">
                  Service Monitoring
                </Button>
              </div>
            </Col>
            <Col >
            <img src={heroTechImage} alt="" 
          width={400} height={400}     className="floating-img"
          />
            </Col>
          </Row>
        </Container>

      </section>

 
      

      {/* Services Section */}
      <section id="services" className="section-py  ">
       <Container>
  <div className="text-center mb-5 pt-4">
    <h2 className="section-title">Our Digital Services</h2>
    <p className="section-subtitle">Comprehensive solutions for your digital transformation</p>
  </div>

  <Row >
  {services.map((service, index) => (
    <Col md={6} className="mb-4" key={index} >
      <div className="service-cards d-flex bg-dark h-70">
        
        {/* Image container */}
        <div className="service-img-wrapper">
          <img src={service.img} alt={service.title} />
        </div>

        {/* Content */}
        <div className="service-content d-flex flex-column p-3">
          <h3 className="text-white">{service.title}</h3>
          <p className="service-desc text-white flex-grow-1">
            {service.description}
          </p>

          <ul className="service-features text-white">
            {service.features.map((feature, idx) => (
              <li className="service-feautures" key={idx}>
                <FaCheckCircle className="text-primary me-2" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="service-btn btn btn-primary mt-auto">
            Book Now
          </button>
        </div>

      </div>
    </Col>
  ))}
</Row>

</Container>
</section>

  

{/*why fzc */}
<section className="why-fzc-section py-5 m-4">
  <Container>
    <Row className="align-items-center">

      {/* Left: Floating Image */}
      <Col lg={5} className="text-center mb-4 mb-lg-0">
        <img
          src={whyusimg}
          alt="Why FZC Digital"
          className="img-fluid floating-img"
          style={{ maxWidth: "420px" }}
        />
      </Col>

      {/* Right: Content */}
      <Col lg={7}>
        <h2 className="mb-4 text-white" style={{ fontWeight: "bold" }}>
          Why <span className="text-primary">FZC Digital</span>
        </h2>

        <Row className="g-4">
          <Col md={6}>
            <div className="service-card p-4 h-100">
              <h5>We Understand Your Business</h5>
              <p className="mb-0">
                We work with small businesses and professionals, so we know what you really need — simple, effective digital solutions.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="service-card p-4 h-100">
              <h5>Clear Communication</h5>
              <p className="mb-0">
                No technical language. We explain everything clearly and keep you informed at every step.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="service-card p-4 h-100">
              <h5>Affordable & Honest Pricing</h5>
              <p className="mb-0">
                Transparent prices with no surprises. You get exactly what your business needs — nothing more, nothing less.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="service-card p-4 h-100">
              <h5>Support After Delivery</h5>
              <p className="mb-0">
                We don’t disappear after launch. We stay with you to help, update, and support your project.
              </p>
            </div>
          </Col>
        </Row>
      </Col>

    </Row>
  </Container>
</section>
 
    

 {/* Our Process Section */}
      <section id="process" className="section-py m-4">
        <Container>
          <div className="text-center mb-5 pt-4">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">A structured approach to ensure project success</p>
          </div>
          <Row className="process-steps">
            {processSteps.map((step) => (
              <Col md={4} lg={2} className="mb-4" key={step.step}>
                <div className="process-step">
                  <div className="step-number">{step.step}</div>
                  <h5 className="step-title">{step.title}</h5>
                  <p className="step-description">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

  
      

  {/* Pricing Section - NEW */}
      <section id="pricing" className="section-py m-4">
        <Container>
          <div className="text-center mb-5 pt-4">
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle">Choose the perfect plan for your business needs</p>
          </div>

          <Row className="justify-content-center">
            {pricingPlans.map((plan, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className={`pricing-card h-100 ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && (
                    <div className="popular-badge">
                      <FaStar className="me-2" /> Most Popular
                    </div>
                  )}
                  <Card.Body className="text-center p-4">
                    <div className={`pricing-icon mb-4 ${plan.color}`}>
                      {plan.icon}
                    </div>
                    <Card.Title className="mb-3">{plan.name}</Card.Title>
                    <div className="pricing-price mb-3">
                      {plan.oldPrice && (
                        <div className="old-price">
                          <span>{plan.oldPrice}</span>
                        </div>
                      )}
                      <h2>{plan.price}</h2>
                      <p className="text-muted">/{plan.period}</p>
                    </div>

                    <Card.Text className="mb-4"  >{plan.description}</Card.Text>
                    
                    <ul className="pricing-features mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="pricing-li">
                          <FaCheckCircle className="text-success me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "warning" : "primary"} 
                      className="w-100 btn"
                      onClick={() => plan.name === "Enterprise" ? window.location.href = "#contact" : setSelectedPlan(plan.name)}
                    >
                      {plan.cta}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

           
        </Container>
      </section>


  


      {/* Clients Section */}
      <section id="clients" className="section-py m-4">
        <Container>
          <div className="text-center mb-5 pt-4">
            <h2 className="section-title">Our Clients</h2>
            <p className="section-subtitle">Trusted by businesses of all sizes</p>
          </div>
          <Row className="justify-content-center">
            {clients.map((client, index) => (
              <Col md={4} className="text-center mb-4 d-flex">
                <Card className="client-card flex-fill">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Text>"{client.testimonial}"</Card.Text>
                    <div className="mt-2">
                      {renderStars(client.rating)}
                    </div>
                  </Card.Body>
                </Card>
              </Col>

            ))}
          </Row>
        </Container>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="section-py m-4">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0 pt-4">
              <h2 className="section-title mb-4">Ready to Start Your Project?</h2>
              <p className="mb-4 text-white">
                Contact us for a free consultation and project estimate. Let's discuss how we can help your business grow.
              </p>
              <div className="contact-info">
                <div className="contact-item mb-3">
                  <FaEnvelope className="me-3" />
                  <span>contact@fzcdigital.com</span>
                </div>
                <div className="contact-item mb-3">
                  <FaWhatsapp className="me-3" />
                  <span>+212 776-653-648</span>
                </div>
                <div className="contact-social mt-4">
                  <a href="#" className="social-link me-3">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="social-link">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} className="pt-4">
              <Card className="contact-form-card">
                <Card.Body>
                  <h5 className="mb-4">Request a Quote</h5>
                  <form>
                    <div className="mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="mb-3">
                      <select className="form-control">
                        <option>Select Service</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Full-Stack Solution</option>
                        <option>Custom Software</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <textarea 
                        className="form-control" 
                        rows="4"
                        placeholder="Project Details"
                      ></textarea>
                    </div>
                    <Button type="submit" className="btn-primary w-100">
                      Submit Request
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

     

      {/* Footer */}
     <footer className="footer bg-dark text-white">
  {/* Top section avec gradient */}
  <div className="footer-top py-5">
    <Container>
      <Row className="align-items-start">
        {/* Colonne 1: Logo et description */}
        <Col lg={4} md={6} className="mb-4 mb-lg-0">
          <div className="footer-brand">
            <h3 className="footer-title mb-3">FZC Digital</h3>
            <p className="footer-text mb-4">
              Transforming businesses through innovative digital solutions. 
              We build the future of your digital presence.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </Col>

        {/* Colonne 2: Liens rapides */}
        <Col lg={2} md={6} className="mb-4 mb-md-0">
          <h5 className="footer-heading mb-4">Quick Links</h5>
          <ul className="footer-links list-unstyled">
            <li className="mb-2">
              <a href="#" className="footer-link">Home</a>
            </li>
            <li className="mb-2">
              <a href="#services" className="footer-link">Services</a>
            </li>
            <li className="mb-2">
              <a href="#pricing" className="footer-link">Pricing</a>
            </li>
            <li className="mb-2">
              <a href="#process" className="footer-link">Process</a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="footer-link">Contact</a>
            </li>
          </ul>
        </Col>

        {/* Colonne 3: Services */}
        <Col lg={2} md={6} className="mb-4 mb-md-0">
          <h5 className="footer-heading mb-4">Services</h5>
          <ul className="footer-links list-unstyled">
            <li className="mb-2">
              <a href="#services" className="footer-link">Web Development</a>
            </li>
            <li className="mb-2">
              <a href="#services" className="footer-link">Mobile Apps</a>
            </li>
            <li className="mb-2">
              <a href="#services" className="footer-link">Custom Software</a>
            </li>
            <li className="mb-2">
              <a href="#services" className="footer-link">Digital Consulting</a>
            </li>
            <li className="mb-2">
              <a href="#services" className="footer-link">UI/UX Design</a>
            </li>
            <li className="mb-2">
              <a href="#services" className="footer-link">Digital Marketing</a>
            </li>
          </ul>
        </Col>

        {/* Colonne 4: Contact */}
        <Col lg={4} md={6}>
          <h5 className="footer-heading mb-4">Get In Touch</h5>
          <div className="contact-info">
            <div className="contact-item mb-3">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <a href="mailto:contact@fzcdigital.com" className="footer-link">
                  contact@fzcdigital.com
                </a>
              </div>
            </div>
            
            <div className="contact-item mb-3">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">
                <a href="tel:+212776653648" className="footer-link">
                  +212 776-653-648
                </a>
              </div>
            </div>
            
            <div className="contact-item mb-4">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <p className="mb-0">Nador, Morocco</p>
              </div>
            </div>
            
            
          </div>
        </Col>
      </Row>
    </Container>
  </div>

  {/* Bottom section avec copyright */}
  <div className="footer-bottom py-3 border-top border-secondary">
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
          <p className="copyright-text mb-0">
            © {new Date().getFullYear()} FZC Digital. All rights reserved.
          </p>
        </Col>
        <Col md={6} className="text-center text-md-end">
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link me-3">Privacy Policy</a>
            <a href="#" className="footer-bottom-link me-3">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</footer>
    </div>
  );
};

export default App;