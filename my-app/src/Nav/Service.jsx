import React from 'react';
import { ShoppingCart, Smartphone, BarChart3, Headphones, Shield, Truck, CreditCard, Users, Globe, Zap, Search, Settings } from 'lucide-react';

const Service = () => {
  const services = [
    {
      icon: <ShoppingCart className="service-icon" />,
      title: "Custom Ecommerce Development",
      description: "Build scalable, feature-rich online stores tailored to your business needs with modern technologies and best practices.",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Payment Integration"]
    },
    {
      icon: <Smartphone className="service-icon" />,
      title: "Mobile Commerce Solutions",
      description: "Develop native and progressive web apps that provide seamless shopping experiences across all devices.",
      features: ["iOS & Android Apps", "PWA Development", "Push Notifications", "Offline Capabilities"]
    },
    {
      icon: <BarChart3 className="service-icon" />,
      title: "Analytics & Reporting",
      description: "Gain insights into customer behavior, sales performance, and market trends with comprehensive analytics solutions.",
      features: ["Sales Tracking", "Customer Analytics", "Inventory Reports", "Performance Metrics"]
    },
    {
      icon: <CreditCard className="service-icon" />,
      title: "Payment Gateway Integration",
      description: "Secure and seamless payment processing with support for multiple payment methods and currencies.",
      features: ["Multiple Gateways", "Secure Transactions", "Recurring Payments", "Global Currencies"]
    },
    {
      icon: <Search className="service-icon" />,
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility and drive targeted traffic with our comprehensive SEO and marketing strategies.",
      features: ["Search Optimization", "Content Marketing", "Social Media", "PPC Campaigns"]
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Security & Compliance",
      description: "Protect your business and customers with enterprise-grade security measures and compliance solutions.",
      features: ["SSL Certificates", "PCI Compliance", "Data Protection", "Security Audits"]
    }
  ];

  const additionalServices = [
    { icon: <Truck />, title: "Logistics Integration", desc: "Shipping & fulfillment solutions" },
    { icon: <Headphones />, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
    { icon: <Users />, title: "CRM Integration", desc: "Customer relationship management" },
    { icon: <Globe />, title: "Multi-store Management", desc: "Manage multiple storefronts" },
    { icon: <Zap />, title: "Performance Optimization", desc: "Speed and efficiency improvements" },
    { icon: <Settings />, title: "Custom Integrations", desc: "Third-party system connections" }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Professional Ecommerce Services</h1>
          <p className="hero-subtitle">
            Transform your business with cutting-edge ecommerce solutions designed to drive growth, 
            enhance customer experience, and maximize your online potential.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive ecommerce solutions to power your online business success
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                {service.icon}
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <h2 className="section-title">Additional Services</h2>
        <div className="additional-grid">
          {additionalServices.map((service, index) => (
            <div key={index} className="additional-card">
              {service.icon}
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2 className="section-title">Our Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Discovery & Planning</h3>
            <p>We analyze your business requirements and create a comprehensive strategy.</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Design & Development</h3>
            <p>Our team creates and develops your custom ecommerce solution.</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Testing & Launch</h3>
            <p>Rigorous testing ensures a smooth launch and optimal performance.</p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <h3>Support & Growth</h3>
            <p>Ongoing support and optimization to scale your business.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how our ecommerce solutions can drive your success</p>
          <div className="cta-buttons">
            <button className="cta-primary">Get Started Today</button>
            <button className="cta-secondary">Schedule Consultation</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 20px 120px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.1)" points="0,1000 1000,800 1000,1000"/></svg>');
          background-size: cover;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 48px;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* Services Section */
        .services-section {
          padding: 120px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
        }

        .service-card {
          background: white;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-header {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .service-icon {
          width: 32px;
          height: 32px;
          color: #667eea;
          margin-right: 16px;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .service-description {
          color: #666;
          margin-bottom: 24px;
          line-height: 1.7;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
        }

        .feature-item {
          padding: 8px 0;
          color: #444;
          position: relative;
          padding-left: 24px;
        }

        .feature-item::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }

        .service-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .service-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        /* Additional Services */
        .additional-services {
          background: #f8fafc;
          padding: 80px 20px;
        }

        .additional-services .section-title {
          text-align: center;
          margin-bottom: 60px;
        }

        .additional-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .additional-card {
          background: white;
          padding: 32px 24px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .additional-card:hover {
          transform: translateY(-4px);
        }

        .additional-card svg {
          width: 24px;
          height: 24px;
          color: #667eea;
          margin-bottom: 16px;
        }

        .additional-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1a1a1a;
        }

        .additional-card p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }

        /* Process Section */
        .process-section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .process-section .section-title {
          text-align: center;
          margin-bottom: 80px;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .step {
          text-align: center;
          position: relative;
        }

        .step-number {
          display: inline-block;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 50%;
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          margin-left: auto;
          margin-right: auto;
        }

        .step h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .step p {
          color: #666;
          line-height: 1.7;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          color: white;
          padding: 100px 20px;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .cta-content p {
          font-size: 1.1rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .cta-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: white;
          color: #1a1a1a;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            gap: 24px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .process-steps {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-primary,
          .cta-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default Service;