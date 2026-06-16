export function wishlistPage(): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Wishlist</span></div>
      <h1 class="page-title">My Wishlist</h1>
      <p class="page-subtitle">Your curated collection of desired fragrances</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="wishlist-grid" id="wishlistGrid">
        <div class="cart-empty-page" id="wishlistEmpty">
          <i class="far fa-heart"></i>
          <h3>Your wishlist is empty</h3>
          <p>Browse our collection and save fragrances you love.</p>
          <a href="/shop" class="btn btn-primary btn-lg">Explore Fragrances</a>
        </div>
      </div>
    </div>
  </section>`;
}
