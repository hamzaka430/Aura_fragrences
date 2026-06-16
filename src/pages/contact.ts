export function contactPage(): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Contact</span></div>
      <h1 class="page-title">Get in Touch</h1>
      <p class="page-subtitle">We'd love to hear from you. Our fragrance advisors are here to help.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info" data-animate="fade-up">
          <div class="contact-card">
            <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
            <h3>Visit Us</h3>
            <p>Aurum Fragrances Boutique<br>42 Avenue Montaigne<br>75008 Paris, France</p>
          </div>
          <div class="contact-card">
            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
            <h3>Email Us</h3>
            <p><a href="mailto:hello@aurumfragrances.com">hello@aurumfragrances.com</a></p>
            <p><a href="mailto:vip@aurumfragrances.com">vip@aurumfragrances.com</a> (VIP Clients)</p>
          </div>
          <div class="contact-card">
            <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
            <h3>Call Us</h3>
            <p>+33 1 42 56 78 90</p>
            <p class="text-muted">Mon–Sat: 10am – 7pm CET</p>
          </div>
          <div class="contact-card">
            <div class="contact-icon"><i class="fas fa-share-alt"></i></div>
            <h3>Follow Us</h3>
            <div class="contact-social">
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-pinterest-p"></i></a>
            </div>
          </div>
        </div>
        <div class="contact-form-wrapper" data-animate="fade-up">
          <h2>Send Us a Message</h2>
          <form class="contact-form" onsubmit="handleContact(event)">
            <div class="form-row">
              <div class="form-group">
                <label for="contactName">Full Name</label>
                <input type="text" id="contactName" placeholder="Your name" required>
              </div>
              <div class="form-group">
                <label for="contactEmail">Email Address</label>
                <input type="email" id="contactEmail" placeholder="Your email" required>
              </div>
            </div>
            <div class="form-group">
              <label for="contactSubject">Subject</label>
              <select id="contactSubject" required>
                <option value="">Select a subject</option>
                <option>Product Inquiry</option>
                <option>Order Support</option>
                <option>Fragrance Consultation</option>
                <option>Corporate Gifting</option>
                <option>Press & Media</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contactMessage">Message</label>
              <textarea id="contactMessage" rows="5" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg">Send Message <i class="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Map -->
  <section class="map-section">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5!2d2.305!3d48.866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzU3LjYiTiAywrAxOCcxOC4wIkU!5e0!3m2!1sen!2sfr!4v1" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Aurum Fragrances Location"></iframe>
  </section>`;
}
