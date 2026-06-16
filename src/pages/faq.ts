export function faqPage(faqs: any[]): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>FAQ</span></div>
      <h1 class="page-title">Frequently Asked Questions</h1>
      <p class="page-subtitle">Everything you need to know about Aurum Fragrances</p>
    </div>
  </section>

  <section class="section">
    <div class="container container-narrow">
      <div class="faq-categories">
        <button class="filter-btn active" onclick="filterFaq('all', this)">All</button>
        <button class="filter-btn" onclick="filterFaq('shipping', this)">Shipping</button>
        <button class="filter-btn" onclick="filterFaq('returns', this)">Returns</button>
        <button class="filter-btn" onclick="filterFaq('product', this)">Product</button>
        <button class="filter-btn" onclick="filterFaq('payment', this)">Payment</button>
      </div>
      <div class="faq-list" id="faqList">
        ${faqs.map((faq, i) => `
        <div class="faq-item" data-animate="fade-up">
          <button class="faq-question" onclick="toggleFaq(this)">
            <span>${faq.q}</span>
            <i class="fas fa-plus"></i>
          </button>
          <div class="faq-answer">
            <p>${faq.a}</p>
          </div>
        </div>`).join('')}
      </div>

      <div class="faq-cta" data-animate="fade-up">
        <h3>Still have questions?</h3>
        <p>Our fragrance advisors are happy to help with any other inquiries.</p>
        <a href="/contact" class="btn btn-primary btn-lg">Contact Us <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </section>`;
}
