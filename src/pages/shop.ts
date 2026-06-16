import { Product } from '../data';
import { productCard } from './home';

export function shopPage(products: Product[]): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Shop</span></div>
      <h1 class="page-title">Our Fragrances</h1>
      <p class="page-subtitle">Explore our complete collection of luxury perfumes</p>
    </div>
  </section>

  <section class="section shop-section">
    <div class="container">
      <div class="shop-toolbar">
        <div class="filter-toggles">
          <button class="filter-btn active" data-filter="all" onclick="filterProducts('all', this)">All</button>
          <button class="filter-btn" data-filter="men" onclick="filterProducts('men', this)">Men</button>
          <button class="filter-btn" data-filter="women" onclick="filterProducts('women', this)">Women</button>
          <button class="filter-btn" data-filter="unisex" onclick="filterProducts('unisex', this)">Unisex</button>
        </div>
        <div class="category-filters">
          <button class="cat-btn active" data-cat="all" onclick="filterCategory('all', this)">All Categories</button>
          <button class="cat-btn" data-cat="oud" onclick="filterCategory('oud', this)">Oud</button>
          <button class="cat-btn" data-cat="fresh" onclick="filterCategory('fresh', this)">Fresh</button>
          <button class="cat-btn" data-cat="floral" onclick="filterCategory('floral', this)">Floral</button>
          <button class="cat-btn" data-cat="woody" onclick="filterCategory('woody', this)">Woody</button>
          <button class="cat-btn" data-cat="luxury-collection" onclick="filterCategory('luxury-collection', this)">Luxury Collection</button>
        </div>
        <div class="shop-sort">
          <select onchange="sortProducts(this.value)" class="sort-select">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name A-Z</option>
          </select>
          <span class="product-count" id="productCount">${products.length} fragrances</span>
        </div>
      </div>
      <div class="product-grid" id="shopGrid">
        ${products.map(p => productCard(p)).join('')}
      </div>
      <div class="no-results" id="noResults" style="display:none">
        <i class="fas fa-search"></i>
        <h3>No fragrances found</h3>
        <p>Try adjusting your filters to discover more.</p>
        <button class="btn btn-primary" onclick="filterProducts('all', document.querySelector('[data-filter=all]'))">View All</button>
      </div>
    </div>
  </section>`;
}
