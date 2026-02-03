import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Col, Row, Card, Button, Modal, Tab, Tabs, Badge, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";
 
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

      <section id="home" className="hero-section">
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

      <section id="services" className="section-py">
        <Container>
          <div className="text-center mb-5 pt-4">
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">{t('services.subtitle')}</p>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col lg={6} md={12} sm={12} className="mb-4" key={index}>
                <div className="service-cards d-flex bg-dark h-70">
                  <div className="service-img-wrapper">
                    <img src={service.img} alt={t(service.title)} />
                  </div>
                  <div className="service-content d-flex flex-column p-3">
                    <h3 className="text-white">{t(service.title)}</h3>
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
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why-fzc-section py-5 m-4">
        <div className="container">
          <div className="title-why-us">
            <h2 className="mb-4 text-white" style={{ fontWeight: "bold" }}>
              {t('whyUs.title')} <span className="text-primary">{t('whyUs.titleHighlight')}</span>
            </h2>
          </div>
          <div className="why-content">
            <div className="why-img-col">
              <img src={whyusimg} alt={t('whyUs.imageAlt')} className="img-fluid floating-img" />
            </div>
            <div className="why-cards">
              {[0, 1, 2, 3].map((index) => (
                <div className="service-card" key={index}>
                  <h5>{t(`whyUs.reasons.${index}.title`)}</h5>
                  <p className="mb-0 why-desc">{t(`whyUs.reasons.${index}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-py m-4">
        <Container>
          <div className="text-center mb-5 pt-4">
            <h2 className="section-title">{t('process.title')}</h2>
            <p className="section-subtitle">{t('process.subtitle')}</p>
          </div>
          <Row className="process-steps">
            {processSteps.map((step) => (
              <Col md={4} lg={2} className="mb-4" key={step.step}>
                <div className="process-step">
                  <div className="step-number">{step.step}</div>
                  <h5 className="step-title">{t(step.title)}</h5>
                  <p className="step-description">{t(step.description)}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

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

      <section id="clients" className="section-py m-4">
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