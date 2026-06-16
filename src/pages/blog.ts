export function blogPage(posts: any[]): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Journal</span></div>
      <h1 class="page-title">The Aurum Journal</h1>
      <p class="page-subtitle">Fragrance guides, perfume tips, and luxury lifestyle insights</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="blog-filters">
        <button class="filter-btn active" onclick="filterBlog('all', this)">All</button>
        <button class="filter-btn" onclick="filterBlog('Fragrance Guide', this)">Fragrance Guides</button>
        <button class="filter-btn" onclick="filterBlog('Perfume Tips', this)">Perfume Tips</button>
        <button class="filter-btn" onclick="filterBlog('Luxury Lifestyle', this)">Luxury Lifestyle</button>
      </div>
      <div class="blog-grid" id="blogGrid">
        ${posts.map((p, i) => `
        <article class="blog-card ${i === 0 ? 'blog-card-featured' : ''}" data-category="${p.category}" data-animate="fade-up">
          <div class="blog-image">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <span class="blog-category">${p.category}</span>
          </div>
          <div class="blog-content">
            <div class="blog-meta">
              <span><i class="far fa-calendar"></i> ${new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span><i class="far fa-clock"></i> ${p.readTime} read</span>
            </div>
            <h3><a href="/blog/${p.slug}">${p.title}</a></h3>
            <p>${p.excerpt}</p>
            <a href="/blog/${p.slug}" class="blog-read-more">Read Article <i class="fas fa-arrow-right"></i></a>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>`;
}

export function blogPostPage(post: any): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <a href="/blog">Journal</a> <i class="fas fa-chevron-right"></i> <span>${post.title}</span></div>
    </div>
  </section>

  <article class="section blog-post-section">
    <div class="container container-narrow">
      <header class="blog-post-header" data-animate="fade-up">
        <span class="blog-category-tag">${post.category}</span>
        <h1 class="blog-post-title">${post.title}</h1>
        <div class="blog-post-meta">
          <span><i class="far fa-calendar"></i> ${new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span><i class="far fa-clock"></i> ${post.readTime} read</span>
          <span><i class="far fa-user"></i> Aurum Editorial</span>
        </div>
      </header>
      <div class="blog-post-image">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="blog-post-body">
        <p class="lead">${post.excerpt}</p>
        <p>The world of fine fragrance is one of extraordinary depth and complexity. Like a great wine or a masterful composition, a truly exceptional perfume reveals itself in layers — each note carefully chosen to contribute to an evolving narrative that unfolds on your skin throughout the day.</p>
        <h2>Understanding the Foundations</h2>
        <p>At its core, every fragrance is built upon a three-tier architecture known as the olfactory pyramid. The top notes are the first impression — bright, volatile molecules that greet you in the first fifteen minutes. The heart notes form the body of the fragrance, emerging as the top notes dissipate. And the base notes are the foundation — deep, long-lasting molecules that anchor the entire composition and linger for hours.</p>
        <blockquote>"A great fragrance is not a collection of pleasant smells. It is a story told in scent — with a beginning, a middle, and an ending that you remember long after the last molecule has faded."<br><cite>— Alexander Duval, Founder of Aurum Fragrances</cite></blockquote>
        <h2>The Art of Selection</h2>
        <p>Choosing a fragrance is a deeply personal journey. It should resonate with your personality, your lifestyle, and the impression you wish to leave on the world. We recommend sampling a fragrance on your skin — not on a paper strip — and living with it for at least four hours before making your decision. A fragrance that captivates you immediately may not be the one you love after three hours, and vice versa.</p>
        <p>Consider the occasions you'll wear it, the climate you live in, and whether you prefer to make a statement or leave a whisper. Our fragrance advisors are always available to guide you through this journey — in our boutiques or via our virtual consultation service.</p>
        <h2>Making It Last</h2>
        <p>To maximize the longevity and projection of your fragrance, apply it to pulse points — the wrists, behind the ears, the base of the throat, and the inner elbows. These warm areas of the body help diffuse the scent throughout the day. Moisturized skin holds fragrance better than dry skin, so consider applying an unscented lotion before your perfume.</p>
      </div>
      <div class="blog-post-share">
        <span>Share this article:</span>
        <div class="share-links">
          <a href="#" aria-label="Share on Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Share on Pinterest"><i class="fab fa-pinterest-p"></i></a>
          <a href="#" aria-label="Share via Email"><i class="far fa-envelope"></i></a>
        </div>
      </div>
      <div class="blog-post-nav">
        <a href="/blog" class="btn btn-outline"><i class="fas fa-arrow-left"></i> Back to Journal</a>
      </div>
    </div>
  </article>`;
}
