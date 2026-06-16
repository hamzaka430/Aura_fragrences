/* ═══════════════════════════════════════════════════════════════════
   AURUM FRAGRANCES — Frontend Application
   Cart, Wishlist, Filters, Animations, Interactions
   ═══════════════════════════════════════════════════════════════════ */

// ─── State ─────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('aurum_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('aurum_wishlist') || '[]');

// ─── Products Cache ────────────────────────────────────────────────
let productsData = [];
fetch('/api/products').then(r => r.json()).then(d => { productsData = d; renderWishlistPage(); renderCartPage(); updateBadges(); });

// ─── Navigation ────────────────────────────────────────────────────
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const st = window.scrollY;
  navbar.classList.toggle('scrolled', st > 50);
  lastScroll = st;
});

// ─── Search ────────────────────────────────────────────────────────
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('searchInput').focus(), 300);
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function handleSearch(e) {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) window.location.href = '/shop?q=' + encodeURIComponent(q);
  }
  if (e.key === 'Escape') closeSearch();
}

// ─── Cart ──────────────────────────────────────────────────────────
function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCart();
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty = Math.min(existing.qty + 1, 10);
  } else {
    cart.push({ id: productId, qty: 1, volume: product.volumes[0].size, price: product.volumes[0].price });
  }
  saveCart();
  showToast(`${product.name} added to your bag`);
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
  renderCartPage();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, Math.min(10, item.qty + delta));
  saveCart();
  renderCart();
  renderCartPage();
}

function saveCart() {
  localStorage.setItem('aurum_cart', JSON.stringify(cart));
  updateBadges();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your bag is empty</p><a href="/shop" class="btn btn-primary">Start Shopping</a></div>';
    if (footer) footer.style.display = 'none';
    return;
  }

  let html = '';
  let subtotal = 0;
  cart.forEach(item => {
    const p = productsData.find(pr => pr.id === item.id);
    if (!p) return;
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    html += `<div class="cart-item">
      <div class="cart-item-img"><img src="${p.image}" alt="${p.name}"></div>
      <div class="cart-item-details">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">$${item.price} · ${item.volume}</div>
        <div class="cart-item-qty">
          <button onclick="updateCartQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${item.id}, 1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>`;
  });
  container.innerHTML = html;
  if (footer) {
    footer.style.display = 'block';
    document.getElementById('cartSubtotal').textContent = '$' + subtotal.toLocaleString();
  }
}

function renderCartPage() {
  const container = document.getElementById('cartPageItems');
  const summary = document.getElementById('cartPageSummary');
  const emptyEl = document.getElementById('cartEmptyPage');
  if (!container) return;

  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = '';
    if (summary) summary.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (summary) summary.style.display = '';

  let html = '';
  let subtotal = 0;
  cart.forEach(item => {
    const p = productsData.find(pr => pr.id === item.id);
    if (!p) return;
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    html += `<div class="cart-item" style="border:1px solid var(--border); border-radius:var(--radius-lg); padding:var(--space-xl); margin-bottom:var(--space-lg);">
      <div class="cart-item-img" style="width:100px;height:100px;"><img src="${p.image}" alt="${p.name}"></div>
      <div class="cart-item-details">
        <div class="cart-item-name" style="font-size:16px;">${p.name}</div>
        <div class="cart-item-price" style="font-size:16px;">$${item.price} · ${item.volume}</div>
        <div class="cart-item-qty" style="margin-top:12px;">
          <button onclick="updateCartQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${item.id}, 1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i> Remove</button>
        </div>
      </div>
    </div>`;
  });
  container.innerHTML = html;

  const sub = document.getElementById('summarySubtotal');
  const total = document.getElementById('summaryTotal');
  const shipping = document.getElementById('summaryShipping');
  if (sub) sub.textContent = '$' + subtotal.toLocaleString();
  if (shipping) shipping.textContent = subtotal >= 200 ? 'FREE' : '$15';
  if (total) total.textContent = '$' + (subtotal >= 200 ? subtotal : subtotal + 15).toLocaleString();

  // Also update checkout page
  const checkItems = document.getElementById('checkoutItems');
  const checkSub = document.getElementById('checkSubtotal');
  const checkTotal = document.getElementById('checkTotal');
  if (checkItems) {
    checkItems.innerHTML = cart.map(item => {
      const p = productsData.find(pr => pr.id === item.id);
      if (!p) return '';
      return `<div style="display:flex;justify-content:space-between;padding:8px 0;font-size:14px;border-bottom:1px solid var(--border);"><span>${p.name} × ${item.qty}</span><span>$${(item.price * item.qty).toLocaleString()}</span></div>`;
    }).join('');
  }
  if (checkSub) checkSub.textContent = '$' + subtotal.toLocaleString();
  if (checkTotal) checkTotal.textContent = '$' + subtotal.toLocaleString();
}

function applyCoupon() {
  const input = document.getElementById('pageCouponInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === 'AURUM10') {
    showToast('Coupon applied! 10% discount');
  } else {
    showToast('Invalid coupon code');
  }
}

// ─── Wishlist ──────────────────────────────────────────────────────
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(productId);
    const p = productsData.find(pr => pr.id === productId);
    showToast(`${p ? p.name : 'Item'} added to wishlist`);
  }
  localStorage.setItem('aurum_wishlist', JSON.stringify(wishlist));
  updateBadges();
  renderWishlistPage();
}

function renderWishlistPage() {
  const grid = document.getElementById('wishlistGrid');
  const empty = document.getElementById('wishlistEmpty');
  if (!grid) return;

  if (wishlist.length === 0) {
    if (empty) empty.style.display = '';
    return;
  }

  if (empty) empty.style.display = 'none';
  let html = '<div class="product-grid">';
  wishlist.forEach(id => {
    const p = productsData.find(pr => pr.id === id);
    if (!p) return;
    html += `<div class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}">
        <div class="product-actions" style="opacity:1;transform:none;">
          <button class="action-btn" onclick="toggleWishlist(${p.id})" style="background:var(--gold);color:var(--text-on-gold);border-color:var(--gold);" aria-label="Remove from wishlist"><i class="fas fa-heart"></i></button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${p.gender.charAt(0).toUpperCase() + p.gender.slice(1)}</span>
        <h3 class="product-name"><a href="/product/${p.slug}">${p.name}</a></h3>
        <div class="product-price"><span class="price-current">$${p.price}</span></div>
        <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})"><i class="fas fa-shopping-bag"></i> Add to Bag</button>
      </div>
    </div>`;
  });
  html += '</div>';
  grid.innerHTML = html;
}

// ─── Badges ────────────────────────────────────────────────────────
function updateBadges() {
  const cartBadge = document.getElementById('cartBadge');
  const wishBadge = document.getElementById('wishlistBadge');
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  if (cartBadge) cartBadge.textContent = totalItems;
  if (wishBadge) wishBadge.textContent = wishlist.length;
}

// ─── Shop Filters ──────────────────────────────────────────────────
let activeGender = 'all';
let activeCategory = 'all';

function filterProducts(gender, btn) {
  activeGender = gender;
  document.querySelectorAll('.filter-toggles .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  applyFilters();
}

function filterCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.category-filters .cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  applyFilters();
}

function applyFilters() {
  const cards = document.querySelectorAll('#shopGrid .product-card');
  let visible = 0;
  cards.forEach(card => {
    const gender = card.dataset.gender;
    const categories = JSON.parse(card.dataset.category || '[]');
    const genderMatch = activeGender === 'all' || gender === activeGender;
    const catMatch = activeCategory === 'all' || categories.includes(activeCategory);
    const show = genderMatch && catMatch;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  const noResults = document.getElementById('noResults');
  const count = document.getElementById('productCount');
  if (noResults) noResults.style.display = visible === 0 ? '' : 'none';
  if (count) count.textContent = `${visible} fragrance${visible !== 1 ? 's' : ''}`;
}

function sortProducts(sortBy) {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  const cards = Array.from(grid.children);
  cards.sort((a, b) => {
    const priceA = parseFloat(a.querySelector('.price-current').textContent.replace('$', ''));
    const priceB = parseFloat(b.querySelector('.price-current').textContent.replace('$', ''));
    const nameA = a.querySelector('.product-name').textContent;
    const nameB = b.querySelector('.product-name').textContent;
    const ratingA = a.querySelectorAll('.fa-star').length;
    const ratingB = b.querySelectorAll('.fa-star').length;
    switch (sortBy) {
      case 'price-low': return priceA - priceB;
      case 'price-high': return priceB - priceA;
      case 'rating': return ratingB - ratingA;
      case 'name': return nameA.localeCompare(nameB);
      default: return 0;
    }
  });
  cards.forEach(c => grid.appendChild(c));
}

// ─── Blog Filter ───────────────────────────────────────────────────
function filterBlog(category, btn) {
  document.querySelectorAll('.blog-filters .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.blog-card').forEach(card => {
    card.style.display = category === 'all' || card.dataset.category === category ? '' : 'none';
  });
}

// ─── FAQ ───────────────────────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

function filterFaq(category, btn) {
  document.querySelectorAll('.faq-categories .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  // Simple filter — all shown for demo
}

// ─── Product Detail Helpers ────────────────────────────────────────
function changeImage(thumb, src) {
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
  const main = document.getElementById('mainImage');
  if (main) { main.style.opacity = 0; setTimeout(() => { main.src = src; main.style.opacity = 1; }, 200); }
}

function selectVolume(btn, price) {
  document.querySelectorAll('.volume-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const addPrice = document.getElementById('addPrice');
  if (addPrice) addPrice.textContent = '$' + price;
}

function changeQty(delta) {
  const input = document.getElementById('qtyInput');
  if (!input) return;
  let val = parseInt(input.value) + delta;
  val = Math.max(1, Math.min(10, val));
  input.value = val;
}

// ─── Testimonials Slider ───────────────────────────────────────────
function slideTestimonials(dir) {
  const slider = document.getElementById('testimonialsSlider');
  if (!slider) return;
  const card = slider.querySelector('.testimonial-card');
  if (!card) return;
  const scrollAmount = card.offsetWidth + 24;
  slider.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
}

// ─── Newsletter ────────────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  showToast('Welcome to the Aurum inner circle!');
  e.target.reset();
}

// ─── Contact Form ──────────────────────────────────────────────────
function handleContact(e) {
  e.preventDefault();
  showToast('Thank you! We\'ll be in touch soon.');
  e.target.reset();
}

// ─── Toast Notification ────────────────────────────────────────────
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i><span>${message}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ─── Scroll Animations ────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// ─── Counter Animation ────────────────────────────────────────────
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const duration = 2000;
      const start = performance.now();
      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current.toLocaleString() + (target >= 1000 ? '+' : '+');
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ─── Hero Particles ────────────────────────────────────────────────
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(201, 168, 76, ${Math.random() * 0.3 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    container.appendChild(particle);
  }
}

// Inject particle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes particleFloat {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}50px); opacity: 0; }
  }
`;
document.head.appendChild(style);

// ─── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();
  createParticles();
  
  // Close search on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeCart();
    }
  });

  // Navbar padding for announcement bar
  const ann = document.querySelector('.announcement-bar');
  const nav = document.querySelector('.navbar');
  if (ann && nav) {
    nav.style.top = ann.offsetHeight + 'px';
  }
});
