function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="brand">ZENNARA</span>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Property and facility management, elevated.</h1>
          <p>
            East Africa's eco-responsible property and facility management
            partner — institutional-grade operations with a genuine commitment
            to sustainable, green buildings across Nairobi and beyond.
          </p>
          <a className="cta" href="#contact">
            Get in touch
          </a>
        </section>

        <section id="services" className="grid">
          <article>
            <h3>Property Management</h3>
            <p>Comprehensive residential and commercial property management.</p>
          </article>
          <article>
            <h3>Facility Management</h3>
            <p>Smart building operations, maintenance, and engineering.</p>
          </article>
          <article>
            <h3>Eco FM Services</h3>
            <p>Green-certified cleaning, energy, and waste management.</p>
          </article>
        </section>
      </main>

      <footer id="contact">
        <p>
          © {new Date().getFullYear()} ZENNARA Property &amp; Facility
          Management Ltd. All rights reserved. Nairobi, Kenya.
        </p>
      </footer>
    </div>
  )
}

export default App
