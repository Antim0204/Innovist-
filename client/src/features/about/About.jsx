import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      
      <section className="about-hero">
        <h1>Who Are We?</h1>
        <p>
          At <span>Innovist</span>, we are a science-first personal care house built on 
          clean formulations, transparent ingredients, and in-house R&D.
          We own and operate brands like Bare Anatomy, Chemist at Play,
          SunScoop, and Vinci Botanicals — each rooted in clinical testing 
          and purposeful innovation.
        </p>
      </section>

      <section className="ethos-section">
        <h2>All Our Brands Have The Same DNA</h2>
        <p>
          Innovist is one of the only startups in India that began by first building 
          a Research Lab and Manufacturing Facility.
        </p>

        <div className="ethos-grid">
          <div className="ethos-card">
            <i className="fas fa-leaf"></i>
            <h3>Clean</h3>
            <p>Safe, non-toxic formulations free from harmful ingredients.</p>
          </div>

          <div className="ethos-card">
            <i className="fas fa-eye"></i>
            <h3>Transparent</h3>
            <p>Ingredient honesty with clear percentages and sourcing details.</p>
          </div>

          <div className="ethos-card">
            <i className="fas fa-flask"></i>
            <h3>Science</h3>
            <p>Clinically tested, evidence-led and efficacy-first products.</p>
          </div>
        </div>
      </section>

      <section className="brands-section">
        <h2>Brands That Lead</h2>
        <p>The powerhouses behind your favourites</p>

      <div className="brands-grid">
  <div className="brand-box">
    <img
      src="https://innovist.com/cdn/shop/files/Rectangle_19323.png?v=1755513630&width=1600"
      alt="Brand"
    />
  </div>

  <div className="brand-box">
    <img
      src="https://innovist.com/cdn/shop/files/Rectangle_19323.png?v=1755513630&width=1600"
      alt="Brand"
    />
  </div>

  <div className="brand-box">
    <img
      src="https://innovist.com/cdn/shop/files/Rectangle_19323.png?v=1755513630&width=1600"
      alt="Brand"
    />
  </div>

  <div className="brand-box">
    <img
      src="https://innovist.com/cdn/shop/files/Rectangle_19323.png?v=1755513630&width=1600"
      alt="Brand"
    />
  </div>
</div>
      </section>

      <section  className="mission-section">
        <h2>Our Mission</h2>
        <p style={{padding:"20px 80px"}}>
          We believe personal care should be as intelligent as it is intentional.
          We bridge the gap between what people are told and what actually works.
          We educate consumers on how ingredients function, how products are tested,
          and what makes formulas truly effective.
        </p>
      </section>

      <section className="values-section">
        <div className="value-card">
          <i className="fas fa-seedling"></i>
          <h3>Our Commitment</h3>
          <p>
            Clean, cruelty-free formulations backed by science with sustainability 
            at the core of our packaging and practices.
          </p>
        </div>

        <div className="value-card">
          <i className="fas fa-microscope"></i>
          <h3>In-House R&D</h3>
          <p>
            Every formula is tested and refined internally to ensure safety,
            transparency and performance.
          </p>
        </div>

        <div className="value-card">
          <i className="fas fa-industry"></i>
          <h3>India’s First BPC Facility</h3>
          <p>
            Our EU-grade manufacturing ensures consistency, reliability and trust
            in every batch.
          </p>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Choose Us?</h2>
        <p>
          Because we go beyond clean claims. Every product is driven by science,
          clinically tested, and fully transparent — right down to ingredient percentages.
          It’s personal care that’s honest, effective, and built on trust.
        </p>
      </section>

    </div>
  );
};

export default About;


