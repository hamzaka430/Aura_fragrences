// ─── Shared HTML Layout ─────────────────────────────────────────────

export function layout(title: string, body: string, activePage: string = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Aurum Fragrances</title>
  <meta name="description" content="Aurum Fragrances — Premium luxury perfumes crafted with the world's finest ingredients. Discover your signature scent.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
  <link href="/static/style.css" rel="stylesheet">
</head>
<body>
  <!-- Announcement Bar -->
  <div class="announcement-bar">
    <div class="container">
      <p><i class="fas fa-gem"></i> Complimentary Express Shipping on Orders Over $200 &nbsp;|&nbsp; <a href="/shop">Shop Now</a></p>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="container nav-inner">
      <a href="/" class="logo">
        <span class="logo-icon">✦</span>
        <span class="logo-text">AURUM</span>
        <span class="logo-sub">FRAGRANCES</span>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="/" class="${activePage === 'home' ? 'active' : ''}">Home</a></li>
        <li><a href="/shop" class="${activePage === 'shop' ? 'active' : ''}">Shop</a></li>
        <li><a href="/collections" class="${activePage === 'collections' ? 'active' : ''}">Collections</a></li>
        <li><a href="/about" class="${activePage === 'about' ? 'active' : ''}">About</a></li>
        <li><a href="/blog" class="${activePage === 'blog' ? 'active' : ''}">Journal</a></li>
        <li><a href="/contact" class="${activePage === 'contact' ? 'active' : ''}">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <button class="nav-icon-btn" onclick="openSearch()" aria-label="Search"><i class="fas fa-search"></i></button>
        <a href="/wishlist" class="nav-icon-btn" aria-label="Wishlist"><i class="far fa-heart"></i><span class="badge" id="wishlistBadge">0</span></a>
        <button class="nav-icon-btn" onclick="openCart()" aria-label="Cart"><i class="fas fa-shopping-bag"></i><span class="badge" id="cartBadge">0</span></button>
        <a href="/login" class="nav-icon-btn" aria-label="Account"><i class="far fa-user"></i></a>
        <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Search Overlay -->
  <div class="search-overlay" id="searchOverlay">
    <div class="search-inner">
      <button class="search-close" onclick="closeSearch()"><i class="fas fa-times"></i></button>
      <input type="text" class="search-input" placeholder="Search fragrances, collections..." id="searchInput" onkeyup="handleSearch(event)">
      <div class="search-suggestions">
        <span>Popular:</span>
        <a href="/shop?q=oud">Oud</a>
        <a href="/shop?q=rose">Rose</a>
        <a href="/shop?q=fresh">Fresh</a>
        <a href="/collections">Collections</a>
      </div>
    </div>
  </div>

  <!-- Cart Sidebar -->
  <div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>
  <aside class="cart-sidebar" id="cartSidebar">
    <div class="cart-header">
      <h3>Shopping Bag</h3>
      <button onclick="closeCart()" class="cart-close"><i class="fas fa-times"></i></button>
    </div>
    <div class="cart-items" id="cartItems">
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your bag is empty</p>
        <a href="/shop" class="btn btn-primary">Start Shopping</a>
      </div>
    </div>
    <div class="cart-footer" id="cartFooter" style="display:none">
      <div class="cart-subtotal">
        <span>Subtotal</span>
        <span id="cartSubtotal">$0</span>
      </div>
      <input type="text" class="coupon-input" placeholder="Coupon Code" id="couponInput">
      <button class="btn btn-primary btn-full" onclick="window.location.href='/checkout'">Proceed to Checkout</button>
      <a href="/shop" class="btn btn-outline btn-full">Continue Shopping</a>
    </div>
  </aside>

  <!-- Main Content -->
  <main>${body}</main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/" class="logo">
            <span class="logo-icon">✦</span>
            <span class="logo-text">AURUM</span>
            <span class="logo-sub">FRAGRANCES</span>
          </a>
          <p class="footer-tagline">Crafted to Leave a Lasting Impression</p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="/shop?gender=men">Men</a></li>
            <li><a href="/shop?gender=women">Women</a></li>
            <li><a href="/shop?gender=unisex">Unisex</a></li>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/shop">All Fragrances</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/blog">Journal</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="/faq">Shipping & Returns</a></li>
            <li><a href="/order-tracking">Order Tracking</a></li>
            <li><a href="/faq">Authenticity</a></li>
            <li><a href="/faq">Product Care</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p class="footer-newsletter-text">Be the first to know about new launches and exclusive offers.</p>
          <form class="footer-newsletter" onsubmit="handleNewsletter(event)">
            <input type="email" placeholder="Your email address" required>
            <button type="submit"><i class="fas fa-arrow-right"></i></button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-trust">
          <span><i class="fas fa-shield-alt"></i> Authentic Guaranteed</span>
          <span><i class="fas fa-truck"></i> Free Express Over $200</span>
          <span><i class="fas fa-undo"></i> 30-Day Returns</span>
          <span><i class="fas fa-lock"></i> Secure Checkout</span>
        </div>
        <p class="footer-legal">&copy; 2026 Aurum Fragrances. All rights reserved. <a href="#">Privacy Policy</a> · <a href="#">Terms</a></p>
      </div>
    </div>
  </footer>

  <script src="/static/app.js"></script>
</body>
</html>`;
}
