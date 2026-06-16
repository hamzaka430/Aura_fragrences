import { Product } from '../data';
import { productCard } from './home';

export function productPage(product: Product, related: Product[]): string {
  const stars = Array.from({ length: 5 }, (_, i) => `<i class="fa${i < Math.floor(product.rating) ? 's' : product.rating - i > 0 ? 's fa-star-half-alt' : 'r'} fa-star"></i>`).join('');

  return `
  <section class="section product-detail-section">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <a href="/shop">Shop</a> <i class="fas fa-chevron-right"></i> <span>${product.name}</span></div>
      <div class="product-detail">
        <div class="product-gallery">
          <div class="gallery-main">
            <img src="${product.image}" alt="${product.name}" id="mainImage">
            ${product.badge ? `<span class="product-badge product-badge-lg">${product.badge}</span>` : ''}
          </div>
          <div class="gallery-thumbs">
            <button class="thumb active" onclick="changeImage(this, '${product.image}')"><img src="${product.image}" alt="View 1"></button>
            <button class="thumb" onclick="changeImage(this, '${product.image}')"><img src="${product.image}" alt="View 2" style="filter:hue-rotate(15deg)"></button>
            <button class="thumb" onclick="changeImage(this, '${product.image}')"><img src="${product.image}" alt="View 3" style="filter:brightness(0.9)"></button>
          </div>
        </div>

        <div class="product-info-detail">
          ${product.collection ? `<span class="product-collection">${product.collection}</span>` : ''}
          <h1 class="product-detail-name">${product.name}</h1>
          <div class="product-rating-detail">
            <span class="stars">${stars}</span>
            <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
          </div>
          <div class="product-price-detail">
            <span class="price-main">$${product.price}</span>
            ${product.originalPrice ? `<span class="price-old">$${product.originalPrice}</span><span class="price-save">Save $${product.originalPrice - product.price}</span>` : ''}
          </div>
          <p class="product-description">${product.description}</p>

          <!-- Fragrance Notes -->
          <div class="fragrance-notes">
            <h3 class="notes-title">Fragrance Pyramid</h3>
            <div class="notes-pyramid">
              <div class="note-level">
                <div class="note-label"><i class="fas fa-wind"></i> Top Notes</div>
                <div class="note-tags">${product.topNotes.map(n => `<span class="note-tag">${n}</span>`).join('')}</div>
              </div>
              <div class="note-level">
                <div class="note-label"><i class="fas fa-heart"></i> Heart Notes</div>
                <div class="note-tags">${product.heartNotes.map(n => `<span class="note-tag">${n}</span>`).join('')}</div>
              </div>
              <div class="note-level">
                <div class="note-label"><i class="fas fa-mountain"></i> Base Notes</div>
                <div class="note-tags">${product.baseNotes.map(n => `<span class="note-tag">${n}</span>`).join('')}</div>
              </div>
            </div>
          </div>

          <!-- Volume Selection -->
          <div class="volume-select">
            <h4>Select Size</h4>
            <div class="volume-options">
              ${product.volumes.map((v, i) => `<button class="volume-btn${i === 0 ? ' active' : ''}" onclick="selectVolume(this, ${v.price})" data-price="${v.price}">${v.size} — $${v.price}</button>`).join('')}
            </div>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="product-add-section">
            <div class="quantity-selector">
              <button onclick="changeQty(-1)">−</button>
              <input type="number" value="1" min="1" max="10" id="qtyInput" readonly>
              <button onclick="changeQty(1)">+</button>
            </div>
            <button class="btn btn-primary btn-lg btn-add-cart" onclick="addToCart(${product.id})">
              <i class="fas fa-shopping-bag"></i> Add to Bag — <span id="addPrice">$${product.price}</span>
            </button>
          </div>
          <button class="btn btn-outline btn-full btn-wishlist-detail" onclick="toggleWishlist(${product.id})">
            <i class="far fa-heart"></i> Add to Wishlist
          </button>

          <!-- Trust -->
          <div class="product-trust">
            <div><i class="fas fa-shield-alt"></i> Authentic Guaranteed</div>
            <div><i class="fas fa-truck"></i> Free Express Over $200</div>
            <div><i class="fas fa-undo"></i> 30-Day Returns</div>
            <div><i class="fas fa-gift"></i> Gift Wrapping Available</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Reviews -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Customer Reviews</h2>
        <p class="section-subtitle">${product.reviews} reviews — ${product.rating} out of 5</p>
      </div>
      <div class="reviews-grid">
        <div class="review-card">
          <div class="review-stars">${Array(5).fill('<i class="fas fa-star"></i>').join('')}</div>
          <h4>Absolutely stunning</h4>
          <p>"This fragrance is everything I hoped for and more. The longevity is incredible — I can still smell it on my scarf the next day."</p>
          <span class="review-author">— Verified Buyer</span>
        </div>
        <div class="review-card">
          <div class="review-stars">${Array(5).fill('<i class="fas fa-star"></i>').join('')}</div>
          <h4>A masterpiece</h4>
          <p>"The complexity of this scent is remarkable. It evolves beautifully throughout the day, revealing different facets each time."</p>
          <span class="review-author">— Verified Buyer</span>
        </div>
        <div class="review-card">
          <div class="review-stars">${Array(4).fill('<i class="fas fa-star"></i>').join('<i class="far fa-star"></i>')}</div>
          <h4>Luxury in a bottle</h4>
          <p>"From the packaging to the scent itself, every detail speaks of quality. Worth every penny."</p>
          <span class="review-author">— Verified Buyer</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Related Products -->
  ${related.length > 0 ? `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">You May Also Like</span>
        <h2 class="section-title">Related Fragrances</h2>
      </div>
      <div class="product-grid product-grid-4">
        ${related.map(p => productCard(p)).join('')}
      </div>
    </div>
  </section>` : ''}`;
}
