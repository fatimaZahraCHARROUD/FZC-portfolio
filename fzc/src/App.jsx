import React, { useState, useEffect, useRef } from "react";
import { Container, Navbar, Nav, Col, Row, Card, Button, Modal, Tab, Tabs, Badge, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";
 import { FiZap, FiStar, FiShield, FiThumbsUp,FiMic, FiCheckSquare, FiEdit3, FiHome, FiTool, FiHeadphones ,FiTruck, FiSmile, FiBriefcase, FiFileText, FiDollarSign } from 'react-icons/fi';
 import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { 
  FaBullhorn, FaCheckCircle, FaArrowRight, FaLinkedin, FaGithub, 
  FaEnvelope, FaWhatsapp, FaPlay, FaCode, FaMobileAlt, FaServer, 
  FaPaintBrush, FaShoppingCart, FaChartLine, FaStar, FaRocket, 
  FaCrown, FaTools, FaClock, FaUsers, FaHeadset 
} from "react-icons/fa";
import {  FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// i18next imports
import { useTranslation } from 'react-i18next';
 import i18n from './i18n';

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
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [activeTab, setActiveTab] = useState("web");
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [lightMode, setLightMode] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

   const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayRef = useRef(null);
// Map your steps to icons
const stepIcons = [
  FiMic,        // ear
  FiCheckSquare, // todo list
  FiEdit3,      // brush paint
  FiHome,       // building
  FiTool,       // test & maintenance
  FiHeadphones  // support
];
  // Language change handler
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");

    if (savedTheme === "light") {
      setLightMode(true);
      document.body.classList.add("light-theme");
    }

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  // Update language in localStorage
  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      localStorage.setItem("language", lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  useEffect(() => {
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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const handleDemoClick = (demo) => {
    setSelectedDemo(demo);
    setShowDemoModal(true);
  };

  // Pricing plans data with translation keys
  const pricingPlans = [
    {
      name: "pricing.plans.smart.name",
      icon: <FaRocket />,
      oldPrice: "$700",
      price: "$599",
      period: "pricing.plans.smart.period",
      description: "pricing.plans.smart.description",
      features: [
        "pricing.plans.smart.features.0",
        "pricing.plans.smart.features.1",
        "pricing.plans.smart.features.2",
        "pricing.plans.smart.features.3",
        "pricing.plans.smart.features.4",
        "pricing.plans.smart.features.5",
        "pricing.plans.smart.features.6",
        "pricing.plans.smart.features.7",
        "pricing.plans.smart.features.8",
        "pricing.plans.smart.features.9"
      ],
      popular: false,
      cta: "pricing.plans.smart.cta",
      color: "primary"
    },
    {
      name: "pricing.plans.starter.name",
      icon: <FaCrown />,
      oldPrice: "$300",
      price: "$249",
      period: "pricing.plans.starter.period",
      description: "pricing.plans.starter.description",
      features: [
        "pricing.plans.starter.features.0",
        "pricing.plans.starter.features.1",
        "pricing.plans.starter.features.2",
        "pricing.plans.starter.features.3",
        "pricing.plans.starter.features.4",
        "pricing.plans.starter.features.5",
        "pricing.plans.starter.features.6",
        "pricing.plans.starter.features.7",
        "pricing.plans.starter.features.8"
      ],
      popular: true,
      cta: "pricing.plans.starter.cta",
      color: "warning"
    },
    {
      name: "pricing.plans.premium.name",
      icon: <FaTools />,
      price: "pricing.plans.premium.price",
      period: "pricing.plans.premium.period",
      description: "pricing.plans.premium.description",
      features: [
        "pricing.plans.premium.features.0",
        "pricing.plans.premium.features.1",
        "pricing.plans.premium.features.2",
        "pricing.plans.premium.features.3",
        "pricing.plans.premium.features.4",
        "pricing.plans.premium.features.5",
        "pricing.plans.premium.features.6",
        "pricing.plans.premium.features.7",
        "pricing.plans.premium.features.8",
        "pricing.plans.premium.features.9"
      ],
      popular: false,
      cta: "pricing.plans.premium.cta",
      color: "dark"
    }
  ];

  const services = [
    {
      img: web,
      title: "services.items.0.title",
      description: "services.items.0.description",
      features: [
        "services.items.0.features.0",
        "services.items.0.features.1",
        "services.items.0.features.2",
        "services.items.0.features.3"
      ]
    },
    {
      img: mobile,
      title: "services.items.1.title",
      description: "services.items.1.description",
      features: [
        "services.items.1.features.0",
        "services.items.1.features.1",
        "services.items.1.features.2"
      ]
    },
    {
      img: ecomerce,
      title: "services.items.2.title",
      description: "services.items.2.description",
      features: [
        "services.items.2.features.0",
        "services.items.2.features.1",
        "services.items.2.features.2",
        "services.items.2.features.3"
      ]
    },
    {
      img: Dash,
      title: "services.items.3.title",
      description: "services.items.3.description",
      features: [
        "services.items.3.features.0",
        "services.items.3.features.1",
        "services.items.3.features.2",
        "services.items.3.features.3"
      ]
    },
    {
      img: design,
      title: "services.items.4.title",
      description: "services.items.4.description",
      features: [
        "services.items.4.features.0",
        "services.items.4.features.1",
        "services.items.4.features.2",
        "services.items.4.features.3"
      ]
    },
    {
      img: marketing,
      title: "services.items.5.title",
      description: "services.items.5.description",
      features: [
        "services.items.5.features.0",
        "services.items.5.features.1",
        "services.items.5.features.2",
        "services.items.5.features.3"
      ]
    }
  ];

  const clients = [
    {
      name: "TechCorp",
      rating: 5,
      logo: "techcorp-logo.png",
      testimonial: "testimonials.0.text"
    },
    {
      name: "StartupXYZ",
      rating: 5,
      logo: "startupxyz-logo.png",
      testimonial: "testimonials.1.text"
    },
    {
      name: "GlobalRetail",
      rating: 5,
      logo: "globalretail-logo.png",
      testimonial: "testimonials.2.text"
    }
  ];

  const processSteps = [
    { step: 1, title: "process.steps.0.title", description: "process.steps.0.description" },
    { step: 2, title: "process.steps.1.title", description: "process.steps.1.description" },
    { step: 3, title: "process.steps.2.title", description: "process.steps.2.description" },
    { step: 4, title: "process.steps.3.title", description: "process.steps.3.description" },
    { step: 5, title: "process.steps.4.title", description: "process.steps.4.description" },
    { step: 6, title: "process.steps.5.title", description: "process.steps.5.description" }
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
// Minimum swipe distance
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    const isFirstSlide = currentServiceIndex === 0;
    const newIndex = isFirstSlide ? services.length - 1 : currentServiceIndex - 1;
    setCurrentServiceIndex(newIndex);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    const isLastSlide = currentServiceIndex === services.length - 1;
    const newIndex = isLastSlide ? 0 : currentServiceIndex + 1;
    setCurrentServiceIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setIsAutoPlaying(false);
    setCurrentServiceIndex(slideIndex);
  };

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setTimeout(() => {
        const isLastSlide = currentServiceIndex === services.length - 1;
        const newIndex = isLastSlide ? 0 : currentServiceIndex + 1;
        setCurrentServiceIndex(newIndex);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentServiceIndex, isAutoPlaying, services.length]);

  // Touch events for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  return (
    <div>
      <Navbar expand="lg" fixed="top" className={`custom-navbar ${isScrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span className="brand-line"></span>
            <span className="brand-name text-primary">{t('company.name')}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              <Nav.Link active={activeLink === "home"} className="text-white" onClick={() => setActiveLink("home")} href="#home">
                {t('navigation.home')}
              </Nav.Link>
              <Nav.Link className={activeLink === "services" ? "text-white active" : "text-white"} onClick={() => setActiveLink("services")} href="#services">
                {t('navigation.services')}
              </Nav.Link>
              <Nav.Link className={activeLink === "pricing" ? "text-white active" : "text-white"} onClick={() => setActiveLink("pricing")} href="#pricing">
                {t('navigation.pricing')}
              </Nav.Link>
              <Nav.Link className={activeLink === "process" ? "text-white active" : "text-white"} onClick={() => setActiveLink("process")} href="#process">
                {t('navigation.process')}
              </Nav.Link>
              <Nav.Link href="#contact" className={`text-white nav-contact-btn ${activeLink === "contact" ? "activeconc" : ""}`} onClick={() => setActiveLink("contact")}>
                {t('navigation.quote')}
              </Nav.Link>
              
              {/* Language Switcher Dropdown */}
              <Dropdown className="ms-3" align="end">
                <Dropdown.Toggle variant="link" className="text-white p-0" id="language-dropdown">
                  <FaGlobe size={20} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="language-dropdown">
                  <Dropdown.Item onClick={() => changeLanguage('en')}>
                    <span className={`flag-icon ${i18n.language === 'en' ? 'text-primary' : ''}`}>🇺🇸</span> English
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('fr')}>
                    <span className={`flag-icon ${i18n.language === 'fr' ? 'text-primary' : ''}`}>🇫🇷</span> Français
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('ar')}>
                    <span className={`flag-icon ${i18n.language === 'ar' ? 'text-primary' : ''}`}>🇲🇦</span> العربية
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link className="ms-3 theme-toggle" onClick={() => setLightMode(!lightMode)} style={{ cursor: 'pointer' }}>
                {lightMode ? <FaMoon className="text-dark" /> : <FaSun className="text-warning" />}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="hero-section ">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <Container>
          <div className="hero-wrapper">
            <img src={heroTechImage} alt="" id="heroimg" className="hero-img" width={400} height={400} />
            <div className="hero-content">
              <h6 className="text-uppercase text-primary mb-3">
                <Badge bg="primary" className="me-2">{t('hero.new')}</Badge>
                {t('hero.tagline')}
              </h6>
              <h1 className="hero-title mb-4">
                {t('hero.title')} <span className="text-primary">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="hero-desc lead mb-4">{t('hero.description')}</p>
              <div className="hero-stats">
                <div className="stat-item">
                  <h3 className="text-primary">72h</h3>
                  <p>{t('hero.stats.delivery')}</p>
                </div>
                <div className="stat-item">
                  <h3 className="text-primary">100%</h3>
                  <p>{t('hero.stats.satisfaction')}</p>
                </div>
                <div className="stat-item">
                  <h3 className="text-primary">24/7</h3>
                  <p>{t('hero.stats.support')}</p>
                </div>
              </div>
              <div className="hero-buttons">
                <Button href="#pricing" className="btn-primary">
                  {t('hero.buttons.pricing')} <FaArrowRight className="ms-2" />
                </Button>
                <Button href="#services" variant="outline-light">
                  {t('hero.buttons.services')}
                </Button>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </Container>
      </section>

        <br/>        <br/>        <br/>

    <section className="why-fzc-section py-5 m-4">
       <div className="container">
    <div className="title-why-us">
      <h2 className="mb-4 text-white" style={{ fontWeight: "bold" }}>
        {t('whyUs.title')} <span className="text-primary">{t('whyUs.titleHighlight')}</span>
      </h2>
    </div>
    <div className="why-content d-flex flex-wrap align-items-start">
      
      <div className="why-cards d-flex flex-wrap gap-4">
        {[
          { icon: <FiTruck />, title: "Fast Delivery", desc: "We ensure your products reach you quickly and safely." },
          { icon: <FiSmile />, title: "Client Satisfaction", desc: "Your happiness is our top priority in every service." },
          { icon: <FiHeadphones />, title: "Support", desc: "24/7 dedicated support for all your questions and needs." },
          { icon: <FiBriefcase />, title: "Understand Business", desc: "We tailor our solutions to your specific business requirements." },
          { icon: <FiFileText />, title: "Clear CMC", desc: "Transparent and clear communication for all contracts and documents." },
          { icon: <FiDollarSign />, title: "Pricing", desc: "Competitive pricing with no hidden costs." },
        ].map((item, index) => (
          <div className="service-card text-center p-3 shadow-sm rounded" key={index} style={{ flex: "1 1 200px", minWidth: "180px", backgroundColor: "var(--card-bg)" }}>
            <div className="why-icon mb-3" style={{ fontSize: '2.5rem', color: '#0D6EFD' }}>
              {item.icon}
            </div>
            <h5>{item.title}</h5>
            <p className="mb-0 why-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
       </div>
</section>


 <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>
<section id="process" className={`section-py relative `}>
  <Container>
    <div className="text-center mb-5 pt-4">
      <h2 className="section-title display-4 fw-bold mb-3">{t('process.title')}</h2>
      <p className="section-subtitle lead text-muted mx-auto" style={{maxWidth: '700px'}}>
        {t('process.subtitle')}
      </p>
    </div>
    
   
    
    <Row className="process-steps g-4 justify-content-center">
      {processSteps.map((step, index) => {
        const Icon = stepIcons[index % stepIcons.length];
         
        return (
          <Col md={6} lg={3} xl={2} className="mb-4 mb-lg-0" key={step.step}>
            
            <Card className={`process-step h-100 text-center shadow-sm border-0 transition-all ${lightMode ? 'bg-white' : 'bg-dark-gray'}`}
                  style={{ 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = lightMode 
                      ? '0 10px 30px rgba(0,0,0,0.1)' 
                      : '0 10px 30px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                  }}>
              
              <Card.Body className="d-flex flex-column p-4 p-lg-3">
                {/* Icon with gradient background */}
                <div className={`step-icon-wrapper mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center ${lightMode ? 'bg-light-primary' : 'bg-dark-primary'}`}
                     style={{
                       width: '80px',
                       height: '80px',
                       background: lightMode 
                         ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' 
                         : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)'
                     }}>
                  <Icon className="display-6 text-primary" style={{ fontSize: '2.5rem' }} />
                </div>
                
                
                
                <Card.Title className="step-title fw-bold mb-3 fs-5" style={{minHeight: '3rem'}}>
                  {t(step.title)}
                </Card.Title>
                
                <Card.Text className={`step-description flex-grow-1 ${lightMode ? 'text-muted' : 'text-light'}`}
                           style={{fontSize: '0.9rem', lineHeight: '1.5'}}>
                  {t(step.description)}
                </Card.Text>
                
               
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
    
     
  </Container>
  
 
</section>

 <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>

     {/* Services Slider Section */}
      <section id="services" className="section-py position-relative">
        <Container>
          <div className="text-center mb-5 pt-4">
            <h2 className="section-title display-4 fw-bold mb-3">{t('services.title')}</h2>
            <p className="section-subtitle lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              {t('services.subtitle')}
            </p>
          </div>

          {/* Slider container */}
          <div className="position-relative"
               onTouchStart={onTouchStart}
               onTouchMove={onTouchMove}
               onTouchEnd={onTouchEnd}>
            
            {/* Navigation arrows */}
            <button
              className="slider-arrow slider-arrow-left position-absolute start-0 top-50 translate-middle-y d-none d-md-flex align-items-center justify-content-center border-0 rounded-circle"
              onClick={goToPrevious}
              aria-label="Previous service"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: lightMode ? 'white' : '#2d3748',
                color: lightMode ? '#333' : 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 10,
                left: '-25px'
              }}
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              className="slider-arrow slider-arrow-right position-absolute end-0 top-50 translate-middle-y d-none d-md-flex align-items-center justify-content-center border-0 rounded-circle"
              onClick={goToNext}
              aria-label="Next service"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: lightMode ? 'white' : '#2d3748',
                color: lightMode ? '#333' : 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 10,
                right: '-25px'
              }}
            >
              <FaChevronRight size={20} />
            </button>

            {/* Slider track */}
            <div className="overflow-hidden">
              <div
                className="d-flex transition-transform"
                style={{
                  transform: `translateX(-${currentServiceIndex * 70}%)`
,
                  transition: 'transform 0.5s ease-in-out',
                }}
              >
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 service-cont "
                      style={{ width: '70%' }}

                  >
                    <div
                      className={`service-c service-card rounded-4 overflow-hidden shadow-lg `}
                      style={{
                        height: 'auto',
                        maxWidth: '80%',
                        margin: '0 auto',
                      }}
                    >
                     <div style={{ borderRadius:"15px"}} className="service-cards d-flex h-70 ">
                  <div className="service-img-wrapper">
                    <img src={service.img} alt={t(service.title)} />
                  </div>
                  <div className={`service-content d-flex flex-column p-3 ${lightMode? "bg-white":""}`} >
                    <h2 className="text-white">{t(service.title)}</h2>
                    <p className="service-desc text-white flex-grow-1">{t(service.description)}</p>
                    <ul className="service-features text-white">
                      {service.features.map((feature, idx) => (
                        <li className="service-feautures" key={idx}>
                          <FaCheckCircle className="text-primary me-2" />
                          {t(feature)}
                        </li>
                      ))}
                    </ul>
                    <button className="service-btn btn btn-primary mt-auto">
                      {t('services.bookNow')}
                    </button>
                  </div>
                </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="d-flex gap-2">
              {services.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  className={`dot-indicator border-0 rounded-circle ${
                    slideIndex === currentServiceIndex ? 'active' : ''
                  }`}
                  onClick={() => goToSlide(slideIndex)}
                  aria-label={`Go to slide ${slideIndex + 1}`}
                  style={{
                    width: slideIndex === currentServiceIndex ? '30px' : '12px',
                    height: '12px',
                    backgroundColor:
                      slideIndex === currentServiceIndex
                        ? '#0d6efd'
                        : lightMode
                        ? '#dee2e6'
                        : '#495057',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mobile navigation buttons */}
          <div className="d-flex d-md-none justify-content-center align-items-center gap-3 mt-4">
            <button
              className="btn btn-outline-primary d-flex align-items-center justify-content-center rounded-circle"
              onClick={goToPrevious}
              style={{ width: '50px', height: '50px' }}
            >
              <FaChevronLeft />
            </button>
            <span className="text-muted">
              {currentServiceIndex + 1} / {services.length}
            </span>
            <button
              className="btn btn-outline-primary d-flex align-items-center justify-content-center rounded-circle"
              onClick={goToNext}
              style={{ width: '50px', height: '50px' }}
            >
              <FaChevronRight />
            </button>
          </div>
        </Container>
      </section>
 <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>

      <section id="pricing" className="section-py m-4">
              

        <Container>
          <div className="text-center mb-5 pt-4">
            <h2 className="section-title">{t('pricing.title')}</h2>
            <p className="section-subtitle">{t('pricing.subtitle')}</p>
          </div>
          <Row className="justify-content-center">
            {pricingPlans.map((plan, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className={`pricing-card h-100 ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && (
                    <div className="popular-badge">
                      <FaStar className="me-2" /> {t('pricing.mostPopular')}
                    </div>
                  )}
                  <Card.Body className="text-center p-4">
                    <div className={`pricing-icon mb-4 ${plan.color}`}>{plan.icon}</div>
                    <Card.Title className="mb-3">{t(plan.name)}</Card.Title>
                    <div className="pricing-price mb-3">
                      {plan.oldPrice && (
                        <div className="old-price">
                          <span>{plan.oldPrice}</span>
                        </div>
                      )}
                      <h2>{plan.price !== "Custom" ? t(plan.price) : "Custom"}</h2>
                      <p className="text-muted">/{t(plan.period)}</p>
                    </div>
                    <Card.Text className="mb-4">{t(plan.description)}</Card.Text>
                    <ul className="pricing-features mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="pricing-li">
                          <FaCheckCircle className="text-success me-2" />
                          {t(feature)}
                        </li>
                      ))}
                    </ul>
                    <Button variant={plan.popular ? "warning" : "primary"} className="w-100 btn" onClick={() => plan.name === "Enterprise" ? window.location.href = "#contact" : setSelectedPlan(plan.name)}>
                      {t(plan.cta)}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
 <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>

      <section  id="clients" className={`section-py ${
    lightMode ? "bg-light" : ""}`}>
       
        <Container>
          <div className="text-center mb-5 pt-4">
            <h2 className="section-title">{t('testimonials.title')}</h2>
            <p className="section-subtitle">{t('testimonials.subtitle')}</p>
          </div>
          <Row className="justify-content-center">
            {clients.map((client, index) => (
              <Col md={4} className="text-center mb-4 d-flex" key={index}>
                <Card className="client-card flex-fill">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Text>"{t(client.testimonial)}"</Card.Text>
                    <div className="mt-2">{renderStars(client.rating)}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
 <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>        <br/>

      <section id="contact" className="section-py m-4">
   
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0 pt-4">
              <h2 className="section-title mb-4">{t('contact.title')}</h2>
              <p className="mb-4 text-white">{t('contact.description')}</p>
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
                  <h5 className="mb-4">{t('contact.form.title')}</h5>
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder={t('contact.form.name')} />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder={t('contact.form.email')} />
                    </div>
                    <div className="mb-3">
                      <select className="form-control">
                        <option>{t('contact.form.selectService')}</option>
                        <option>{t('contact.form.services.web')}</option>
                        <option>{t('contact.form.services.mobile')}</option>
                        <option>{t('contact.form.services.fullstack')}</option>
                        <option>{t('contact.form.services.custom')}</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" rows="4" placeholder={t('contact.form.details')}></textarea>
                    </div>
                    <Button type="submit" className="btn-primary w-100">
                      {t('contact.form.submit')}
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer bg-dark text-white">
        <div className="footer-top py-5">
          <Container>
            <Row className="align-items-start">
              <Col lg={4} md={6} className="mb-4 mb-lg-0">
                <div className="footer-brand">
                  <h3 className="footer-title mb-3">{t('footer.companyName')}</h3>
                  <p className="footer-text mb-4">{t('footer.description')}</p>
                  <div className="social-links">
                    <a href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={6} className="mb-4 mb-md-0">
                <h5 className="footer-heading mb-4">{t('footer.quickLinks')}</h5>
                <ul className="footer-links list-unstyled">
                  {['home', 'services', 'pricing', 'process', 'contact'].map((item) => (
                    <li className="mb-2" key={item}>
                      <a href={`#${item}`} className="footer-link">{t(`footer.links.${item}`)}</a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg={2} md={6} className="mb-4 mb-md-0">
                <h5 className="footer-heading mb-4">{t('footer.services')}</h5>
                <ul className="footer-links list-unstyled">
                  {['web', 'mobile', 'custom', 'consulting', 'design', 'marketing'].map((item) => (
                    <li className="mb-2" key={item}>
                      <a href="#services" className="footer-link">{t(`footer.servicesList.${item}`)}</a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg={4} md={6}>
                <h5 className="footer-heading mb-4">{t('footer.contact')}</h5>
                <div className="contact-info">
                  <div className="contact-item mb-3">
                    <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                    <div className="contact-text">
                      <a href="mailto:contact@fzcdigital.com" className="footer-link">contact@fzcdigital.com</a>
                    </div>
                  </div>
                  <div className="contact-item mb-3">
                    <div className="contact-icon"><i className="fas fa-phone"></i></div>
                    <div className="contact-text">
                      <a href="tel:+212776653648" className="footer-link">+212 776-653-648</a>
                    </div>
                  </div>
                  <div className="contact-item mb-4">
                    <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="contact-text">
                      <p className="mb-0">{t('footer.location')}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom py-3 border-top border-secondary">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
                <p className="copyright-text mb-0">
                  © {new Date().getFullYear()} {t('footer.copyright')}
                </p>
              </Col>
              <Col md={6} className="text-center text-md-end">
                <div className="footer-bottom-links">
                  <a href="#" className="footer-bottom-link me-3">{t('footer.privacy')}</a>
                  <a href="#" className="footer-bottom-link me-3">{t('footer.terms')}</a>
                  <a href="#" className="footer-bottom-link">{t('footer.cookies')}</a>
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