function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="brand">Zennar</span>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Build something people love.</h1>
          <p>
            A fast, modern foundation for your next website — ready to deploy and
            ready to grow.
          </p>
          <a className="cta" href="#contact">
            Get in touch
          </a>
        </section>

        <section id="services" className="grid">
          <article>
            <h3>Design</h3>
            <p>Clean, responsive interfaces that work on every device.</p>
          </article>
          <article>
            <h3>Development</h3>
            <p>Reliable, maintainable code built on a modern stack.</p>
          </article>
          <article>
            <h3>Deployment</h3>
            <p>Continuous delivery through GitHub, Railway, and Cloudflare.</p>
          </article>
        </section>
      </main>

      <footer id="contact">
        <p>© {new Date().getFullYear()} Zennar. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
