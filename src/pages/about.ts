export function aboutPage(): string {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>About Us</span></div>
      <h1 class="page-title">Our Story</h1>
      <p class="page-subtitle">Two decades of passionate pursuit of olfactory perfection</p>
    </div>
  </section>

  <!-- Brand Story -->
  <section class="section">
    <div class="container">
      <div class="about-intro" data-animate="fade-up">
        <div class="about-intro-text">
          <span class="section-tag">Est. 2004</span>
          <h2 class="section-title">Born From Passion</h2>
          <p>Aurum Fragrances was born from a singular obsession: to create perfumes that transcend the ordinary. Founded in 2004 by master perfumer Alexander Duval, our maison began in a small atelier in the south of France, where the convergence of Provençal lavender fields and Mediterranean breezes first inspired our philosophy — that a great fragrance should tell a story.</p>
          <p>What started as a collection of three bespoke scents created for a circle of discerning collectors has grown into an internationally acclaimed house of twelve signature fragrances, each a testament to our uncompromising pursuit of excellence.</p>
          <p>Today, Aurum is recognized among the world's finest niche perfumeries, yet we remain true to our founding principle: every bottle must contain something extraordinary.</p>
        </div>
        <div class="about-intro-image">
          <img src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=700&q=80" alt="Aurum Fragrances atelier" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <!-- Mission & Vision -->
  <section class="section section-dark">
    <div class="container">
      <div class="mission-grid" data-animate="fade-up">
        <div class="mission-card">
          <div class="mission-icon"><i class="fas fa-compass"></i></div>
          <h3>Our Mission</h3>
          <p>To craft fragrances of extraordinary quality that become intimate expressions of individuality — scents that are felt before they are smelled, remembered long after they fade.</p>
        </div>
        <div class="mission-card">
          <div class="mission-icon"><i class="fas fa-eye"></i></div>
          <h3>Our Vision</h3>
          <p>To redefine luxury perfumery for a new generation — one that values authenticity, craftsmanship, and sustainability as much as it values beauty and prestige.</p>
        </div>
        <div class="mission-card">
          <div class="mission-icon"><i class="fas fa-hand-holding-heart"></i></div>
          <h3>Our Values</h3>
          <p>Uncompromising quality. Ethical sourcing. Environmental stewardship. Cultural respect for the communities and traditions that give us our precious ingredients.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section class="section">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">Milestones</span>
        <h2 class="section-title">Our Journey</h2>
      </div>
      <div class="timeline">
        <div class="timeline-item" data-animate="fade-up">
          <div class="timeline-year">2004</div>
          <div class="timeline-content">
            <h4>The Beginning</h4>
            <p>Alexander Duval opens a small atelier in Grasse, France, creating three bespoke fragrances for private collectors.</p>
          </div>
        </div>
        <div class="timeline-item" data-animate="fade-up">
          <div class="timeline-year">2008</div>
          <div class="timeline-content">
            <h4>First Boutique</h4>
            <p>Our flagship boutique opens on Avenue Montaigne, Paris. Royal Oud — now our bestseller — is introduced.</p>
          </div>
        </div>
        <div class="timeline-item" data-animate="fade-up">
          <div class="timeline-year">2012</div>
          <div class="timeline-content">
            <h4>International Expansion</h4>
            <p>Aurum expands to London, Dubai, and New York. The Oud Collection launches to critical acclaim.</p>
          </div>
        </div>
        <div class="timeline-item" data-animate="fade-up">
          <div class="timeline-year">2016</div>
          <div class="timeline-content">
            <h4>Sustainability Pledge</h4>
            <p>We become the first luxury fragrance house to achieve carbon-neutral certification for our entire production line.</p>
          </div>
        </div>
        <div class="timeline-item" data-animate="fade-up">
          <div class="timeline-year">2020</div>
          <div class="timeline-content">
            <h4>Digital Transformation</h4>
            <p>Launch of our online boutique brings the Aurum experience to discerning clients in 60+ countries.</p>
          </div>
        </div>
        <div class="timeline-item" data-animate="fade-up">
          <div class="timeline-year">2024</div>
          <div class="timeline-content">
            <h4>20th Anniversary</h4>
            <p>We celebrate two decades with Sultan's Gold — our most precious creation, featuring 24-karat gold-infused oil.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Founder Message -->
  <section class="section section-dark">
    <div class="container">
      <div class="founder-section" data-animate="fade-up">
        <div class="founder-image">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" alt="Alexander Duval, Founder" loading="lazy">
        </div>
        <div class="founder-message">
          <span class="section-tag">From the Founder</span>
          <h2 class="section-title">A Personal Note</h2>
          <blockquote>
            "A fragrance is the most intimate form of self-expression. It speaks before you do, lingers after you leave, and lives in the memory of everyone you meet. At Aurum, we don't just create scents — we create the invisible threads that connect moments, people, and emotions. Every bottle that leaves our atelier carries a piece of our soul."
          </blockquote>
          <p class="founder-name">— Alexander Duval</p>
          <p class="founder-title">Founder & Master Perfumer</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Brand Values -->
  <section class="section">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">What We Stand For</span>
        <h2 class="section-title">Our Pillars</h2>
      </div>
      <div class="values-grid">
        <div class="value-card" data-animate="fade-up">
          <span class="value-number">01</span>
          <h3>Craftsmanship</h3>
          <p>Every fragrance undergoes hundreds of iterations over months — sometimes years — before it meets our exacting standards.</p>
        </div>
        <div class="value-card" data-animate="fade-up">
          <span class="value-number">02</span>
          <h3>Integrity</h3>
          <p>No synthetics masquerading as naturals. No misleading marketing. Just honest, transparent luxury.</p>
        </div>
        <div class="value-card" data-animate="fade-up">
          <span class="value-number">03</span>
          <h3>Sustainability</h3>
          <p>From farm to flacon, every step of our process respects the planet and the people who make our art possible.</p>
        </div>
        <div class="value-card" data-animate="fade-up">
          <span class="value-number">04</span>
          <h3>Innovation</h3>
          <p>We honor tradition while embracing new techniques — molecular distillation, headspace technology, and AI-assisted blending.</p>
        </div>
      </div>
    </div>
  </section>`;
}
