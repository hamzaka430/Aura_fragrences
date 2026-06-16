import { Product } from '../data';
import { productCard } from './home';

export function collectionsPage(collections: any[], products: Product[]): string {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Collections</span></div>
      <h1 class="page-title">Our Collections</h1>
      <p class="page-subtitle">Four distinct worlds of fragrance, each with its own character and story</p>
    </div>
  </section>

  ${collections.map((col, idx) => {
    const colProducts = products.filter(p => {
      if (col.slug === 'signature') return p.collection === 'Signature Collection';
      if (col.slug === 'oud') return p.category.includes('oud');
      if (col.slug === 'exclusive') return p.collection === 'Exclusive Collection';
      if (col.slug === 'limited-edition') return p.collection === 'Limited Edition';
      return false;
    });
    return `
  <section class="section ${idx % 2 !== 0 ? 'section-dark' : ''}" id="${col.slug}">
    <div class="container">
      <div class="collection-header" data-animate="fade-up">
        <div class="collection-info">
          <span class="section-tag">${col.count} Fragrances</span>
          <h2 class="section-title">${col.name}</h2>
          <p class="collection-description">${col.description}</p>
        </div>
        <div class="collection-hero-img">
          <img src="${col.image}" alt="${col.name}" loading="lazy">
        </div>
      </div>
      ${colProducts.length > 0 ? `
      <div class="product-grid product-grid-4">
        ${colProducts.map(p => productCard(p)).join('')}
      </div>` : '<p class="text-center text-muted">Coming soon</p>'}
    </div>
  </section>`;
  }).join('')}

  <!-- Packaging Showcase -->
  <section class="section packaging-section">
    <div class="container">
      <div class="section-header" data-animate="fade-up">
        <span class="section-tag">The Presentation</span>
        <h2 class="section-title">Premium Packaging</h2>
        <p class="section-subtitle">Because the experience begins the moment you open the box</p>
      </div>
      <div class="packaging-grid">
        <div class="packaging-card" data-animate="fade-up">
          <div class="packaging-icon"><i class="fas fa-box-open"></i></div>
          <h4>Signature Gift Box</h4>
          <p>Matte black with gold foil embossing, magnetic closure, and satin ribbon.</p>
        </div>
        <div class="packaging-card" data-animate="fade-up">
          <div class="packaging-icon"><i class="fas fa-certificate"></i></div>
          <h4>Authenticity Card</h4>
          <p>Each bottle comes with a numbered certificate and batch verification code.</p>
        </div>
        <div class="packaging-card" data-animate="fade-up">
          <div class="packaging-icon"><i class="fas fa-recycle"></i></div>
          <h4>Eco-Conscious</h4>
          <p>100% recyclable materials. FSC-certified paper. Soy-based inks throughout.</p>
        </div>
        <div class="packaging-card" data-animate="fade-up">
          <div class="packaging-icon"><i class="fas fa-feather"></i></div>
          <h4>Handcrafted Bottle</h4>
          <p>Heavy glass flacons with gold-plated accents, each hand-inspected for perfection.</p>
        </div>
      </div>
    </div>
  </section>`;
}
