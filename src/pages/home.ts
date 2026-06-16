import { Product } from '../data';

function starRating(r: number): string {
  return Array.from({ length: 5 }, (_, i) => `<i class="fa${i < Math.floor(r) ? 's' : r - i > 0 ? 's fa-star-half-alt' : 'r'} fa-star"></i>`).join('');
}

function productCard(p: Product): string {
  return `<div class="product-card" data-category='${JSON.stringify(p.category)}' data-gender="${p.gender}">
    <div class="product-image">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <div class="product-actions">
        <button class="action-btn" onclick="toggleWishlist(${p.id})" aria-label="Add to wishlist"><i class="far fa-heart"></i></button>
        <a href="/product/${p.slug}" class="action-btn" aria-label="Quick view"><i class="far fa-eye"></i></a>
      </div>
    </div>
    <div class="product-info">
      <span class="product-category">${p.gender.charAt(0).toUpperCase() + p.gender.slice(1)}</span>
      <h3 class="product-name"><a href="/product/${p.slug}">${p.name}</a></h3>
      <div class="product-rating">${starRating(p.rating)} <span>(${p.reviews})</span></div>
      <div class="product-price">
        <span class="price-current">$${p.price}</span>
        ${p.originalPrice ? `<span class="price-original">$${p.originalPrice}</span>` : ''}
      </div>
      <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})"><i class="fas fa-shopping-bag"></i> Add to Bag</button>
    </div>
  </div>`;
}

export function homePage(products: Product[], testimonials: any[]): string {
  const bestsellers = products.filter(p => p.badge === 'Bestseller' || p.rating >= 4.8).slice(0, 4);
  const featured = products.slice(0, 6);

  return `
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-bg">
      <div class="hero-particles" id="heroParticles"></div>
    </div>
    <div class="container hero-content">
      <div class="hero-text" data-animate="fade-up">
        <span class="hero-badge"><i class="fas fa-gem"></i> Premium Luxury Fragrances</span>
        <h1 class="hero-title">Crafted to Leave a<br><em>Lasting Impression</em></h1>
        <p class="hero-subtitle">Discover extraordinary fragrances born from the world's rarest ingredients — each bottle a masterpiece of olfactory artistry.</p>
        <div class="hero-ctas">
          <a href="/shop" class="btn btn-primary btn-lg"><i class="fas fa-shopping-bag"></i> Shop Collection</a>
          <a href="/about" class="btn btn-outline btn-lg">Discover Our Story</a>
        </div>
        <div class="hero-trust">
          <div class="trust-item"><i class="fas fa-award"></i><span>Award Winning</span></div>
          <div class="trust-item"><i class="fas fa-leaf"></i><span>Cruelty Free</span></div>
          <div class="trust-item"><i class="fas fa-globe"></i><span>Worldwide Shipping</span></div>
        </div>
      </div>
      <div class="hero-visual" data-animate="fade-left">
        <div class="hero-bottle">
          <img src="https://images.unsplash.com/photo-1594035910387-fea081de045b?w=800&q=85" alt="Aurum Fragrances premium perfume bottle">
          <div class="hero-glow"></div>
        </div>
      </div>
    </div>
    <div class="hero-scroll">
      <span>Scroll to explore</span>
      <div class="scroll-indicator"></div>
    </div>
  </section>

  <!-- Featured Fragrances -->
  <section class="section" id="featured">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">Curated Selection</span>
        <h2 class="section-title">Featured Fragrances</h2>
        <p class="section-subtitle">Handpicked masterpieces from our ateliers</p>
      </div>
      <div class="product-grid">
        ${featured.map(p => productCard(p)).join('')}
      </div>
      <div class="section-cta">
        <a href="/shop" class="btn btn-outline btn-lg">View All Fragrances <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </section>

  <!-- Brand Story Banner -->
  <section class="section brand-banner">
    <div class="container">
      <div class="brand-banner-inner" data-animate="fade-up">
        <div class="brand-banner-content">
          <span class="section-tag">Our Heritage</span>
          <h2 class="section-title">Where Art Meets Alchemy</h2>
          <p>For over two decades, Aurum Fragrances has journeyed to the most remote corners of the Earth — from the oud forests of Southeast Asia to the rose valleys of Bulgaria — sourcing only the most exceptional raw materials.</p>
          <p>Each fragrance is the culmination of years of refinement, blending ancient perfumery traditions with contemporary artistry. We create not merely scents, but experiences that become part of your story.</p>
          <a href="/about" class="btn btn-outline">Read Our Story <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="brand-banner-image">
          <img src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=700&q=80" alt="Perfume crafting process" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <!-- Best Sellers -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">Most Loved</span>
        <h2 class="section-title">Bestsellers</h2>
        <p class="section-subtitle">The fragrances our clientele can't live without</p>
      </div>
      <div class="product-grid product-grid-4">
        ${bestsellers.map(p => productCard(p)).join('')}
      </div>
    </div>
  </section>

  <!-- Statistics -->
  <section class="section stats-section">
    <div class="container">
      <div class="stats-grid" data-animate="fade-up">
        <div class="stat-item">
          <span class="stat-number" data-count="50000">0</span>
          <span class="stat-label">Happy Clients</span>
        </div>
        <div class="stat-item">
          <span class="stat-number" data-count="12">0</span>
          <span class="stat-label">Signature Scents</span>
        </div>
        <div class="stat-item">
          <span class="stat-number" data-count="60">0</span>
          <span class="stat-label">Countries Served</span>
        </div>
        <div class="stat-item">
          <span class="stat-number" data-count="25">0</span>
          <span class="stat-label">Industry Awards</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="section">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">The Aurum Difference</span>
        <h2 class="section-title">Why Choose Us</h2>
      </div>
      <div class="features-grid">
        <div class="feature-card" data-animate="fade-up">
          <div class="feature-icon"><i class="fas fa-flask"></i></div>
          <h3>Master Perfumers</h3>
          <p>Each fragrance is composed by world-renowned master perfumers with decades of expertise in the art of scent.</p>
        </div>
        <div class="feature-card" data-animate="fade-up">
          <div class="feature-icon"><i class="fas fa-gem"></i></div>
          <h3>Rare Ingredients</h3>
          <p>We source the most precious raw materials — from Cambodian oud to Bulgarian rose — directly from premier growers.</p>
        </div>
        <div class="feature-card" data-animate="fade-up">
          <div class="feature-icon"><i class="fas fa-leaf"></i></div>
          <h3>Ethical & Sustainable</h3>
          <p>Cruelty-free formulations, sustainable sourcing, and eco-conscious packaging — luxury with a conscience.</p>
        </div>
        <div class="feature-card" data-animate="fade-up">
          <div class="feature-icon"><i class="fas fa-award"></i></div>
          <h3>Award Winning</h3>
          <p>Recognized with 25+ international perfumery awards for excellence in composition, longevity, and presentation.</p>
        </div>
        <div class="feature-card" data-animate="fade-up">
          <div class="feature-icon"><i class="fas fa-box-open"></i></div>
          <h3>Luxury Packaging</h3>
          <p>Every bottle is a work of art, presented in our signature black and gold packaging with hand-finished details.</p>
        </div>
        <div class="feature-card" data-animate="fade-up">
          <div class="feature-icon"><i class="fas fa-shipping-fast"></i></div>
          <h3>Global Delivery</h3>
          <p>Complimentary express shipping to 60+ countries. Every order arrives in pristine condition with our White Glove service.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Ingredients Showcase -->
  <section class="section section-dark ingredients-section">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">Nature's Finest</span>
        <h2 class="section-title">Featured Ingredients</h2>
        <p class="section-subtitle">The precious materials that define our fragrances</p>
      </div>
      <div class="ingredients-grid">
        <div class="ingredient-card" data-animate="fade-up">
          <div class="ingredient-image"><img src="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?w=400&q=80" alt="Oud Wood" loading="lazy"></div>
          <h4>Cambodian Oud</h4>
          <p>The most prized agarwood, aged for decades, producing a deep, complex aroma of smoky sweetness.</p>
        </div>
        <div class="ingredient-card" data-animate="fade-up">
          <div class="ingredient-image"><img src="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&q=80" alt="Bulgarian Rose" loading="lazy"></div>
          <h4>Bulgarian Rose</h4>
          <p>Hand-picked at dawn from the Valley of Roses, each kilogram requires 3,500 petals.</p>
        </div>
        <div class="ingredient-card" data-animate="fade-up">
          <div class="ingredient-image"><img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80" alt="Saffron" loading="lazy"></div>
          <h4>Royal Saffron</h4>
          <p>The world's most expensive spice, lending a warm, metallic honey sweetness to our oud compositions.</p>
        </div>
        <div class="ingredient-card" data-animate="fade-up">
          <div class="ingredient-image"><img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80" alt="Sandalwood" loading="lazy"></div>
          <h4>Indian Sandalwood</h4>
          <p>Sustainably sourced Mysore sandalwood, prized for its creamy, warm, and meditative character.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="section testimonials-section">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">Client Voices</span>
        <h2 class="section-title">What Our Clients Say</h2>
      </div>
      <div class="testimonials-slider" id="testimonialsSlider">
        ${testimonials.map(t => `
        <div class="testimonial-card">
          <div class="testimonial-stars">${Array(t.rating).fill('<i class="fas fa-star"></i>').join('')}</div>
          <p class="testimonial-text">"${t.text}"</p>
          <div class="testimonial-author">
            <div class="author-avatar">${t.name.charAt(0)}</div>
            <div>
              <strong>${t.name}</strong>
              <span>${t.location}</span>
            </div>
          </div>
        </div>`).join('')}
      </div>
      <div class="slider-controls">
        <button class="slider-btn" onclick="slideTestimonials(-1)"><i class="fas fa-chevron-left"></i></button>
        <button class="slider-btn" onclick="slideTestimonials(1)"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  </section>

  <!-- Instagram Gallery -->
  <section class="section instagram-section">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">@aurumfragrances</span>
        <h2 class="section-title">Follow Our Journey</h2>
      </div>
      <div class="instagram-grid">
        <div class="insta-item"><img src="https://images.unsplash.com/photo-1594035910387-fea081de045b?w=400&q=80" alt="Perfume flatlay" loading="lazy"><div class="insta-overlay"><i class="fab fa-instagram"></i></div></div>
        <div class="insta-item"><img src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&q=80" alt="Gold perfume" loading="lazy"><div class="insta-overlay"><i class="fab fa-instagram"></i></div></div>
        <div class="insta-item"><img src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&q=80" alt="Ingredients" loading="lazy"><div class="insta-overlay"><i class="fab fa-instagram"></i></div></div>
        <div class="insta-item"><img src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&q=80" alt="Dark perfume" loading="lazy"><div class="insta-overlay"><i class="fab fa-instagram"></i></div></div>
        <div class="insta-item"><img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80" alt="Perfume collection" loading="lazy"><div class="insta-overlay"><i class="fab fa-instagram"></i></div></div>
        <div class="insta-item"><img src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&q=80" alt="Luxury scent" loading="lazy"><div class="insta-overlay"><i class="fab fa-instagram"></i></div></div>
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section class="section newsletter-section">
    <div class="container">
      <div class="newsletter-inner" data-animate="fade-up">
        <div class="newsletter-content">
          <span class="section-tag">Exclusive Access</span>
          <h2 class="section-title">Join the Inner Circle</h2>
          <p>Subscribe for early access to new launches, exclusive offers, and fragrance insights from our master perfumers.</p>
        </div>
        <form class="newsletter-form" onsubmit="handleNewsletter(event)">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit" class="btn btn-primary">Subscribe <i class="fas fa-arrow-right"></i></button>
        </form>
      </div>
    </div>
  </section>`;
}

export { productCard };
