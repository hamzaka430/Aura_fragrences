export function loginPage(): string {
  return `
  <section class="section auth-section">
    <div class="container">
      <div class="auth-card" data-animate="fade-up">
        <div class="auth-header">
          <span class="logo-icon">✦</span>
          <h1>Welcome Back</h1>
          <p>Sign in to your Aurum account</p>
        </div>
        <form class="auth-form" onsubmit="event.preventDefault(); alert('Demo login successful!')">
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required>
          </div>
          <div class="form-row form-row-between">
            <label class="checkbox-label"><input type="checkbox"> Remember me</label>
            <a href="#" class="form-link">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-full">Sign In</button>
        </form>
        <div class="auth-divider"><span>or continue with</span></div>
        <div class="social-auth">
          <button class="btn btn-outline btn-social"><i class="fab fa-google"></i> Google</button>
          <button class="btn btn-outline btn-social"><i class="fab fa-apple"></i> Apple</button>
        </div>
        <p class="auth-switch">Don't have an account? <a href="/signup">Create one</a></p>
      </div>
    </div>
  </section>`;
}

export function signupPage(): string {
  return `
  <section class="section auth-section">
    <div class="container">
      <div class="auth-card" data-animate="fade-up">
        <div class="auth-header">
          <span class="logo-icon">✦</span>
          <h1>Create Account</h1>
          <p>Join the Aurum inner circle</p>
        </div>
        <form class="auth-form" onsubmit="event.preventDefault(); alert('Demo account created!')">
          <div class="form-row">
            <div class="form-group"><label>First Name</label><input type="text" placeholder="First" required></div>
            <div class="form-group"><label>Last Name</label><input type="text" placeholder="Last" required></div>
          </div>
          <div class="form-group"><label>Email Address</label><input type="email" placeholder="you@example.com" required></div>
          <div class="form-group"><label>Password</label><input type="password" placeholder="Min. 8 characters" required minlength="8"></div>
          <div class="form-group"><label>Confirm Password</label><input type="password" placeholder="Repeat password" required></div>
          <label class="checkbox-label"><input type="checkbox"> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
          <label class="checkbox-label"><input type="checkbox" checked> Subscribe to exclusive offers and new launches</label>
          <button type="submit" class="btn btn-primary btn-lg btn-full">Create Account</button>
        </form>
        <div class="auth-divider"><span>or continue with</span></div>
        <div class="social-auth">
          <button class="btn btn-outline btn-social"><i class="fab fa-google"></i> Google</button>
          <button class="btn btn-outline btn-social"><i class="fab fa-apple"></i> Apple</button>
        </div>
        <p class="auth-switch">Already have an account? <a href="/login">Sign in</a></p>
      </div>
    </div>
  </section>`;
}

export function accountPage(): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>My Account</span></div>
      <h1 class="page-title">My Account</h1>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="account-layout">
        <aside class="account-sidebar">
          <nav class="account-nav">
            <a href="#" class="active"><i class="fas fa-user"></i> Profile</a>
            <a href="#"><i class="fas fa-shopping-bag"></i> Orders</a>
            <a href="/wishlist"><i class="fas fa-heart"></i> Wishlist</a>
            <a href="#"><i class="fas fa-map-marker-alt"></i> Addresses</a>
            <a href="#"><i class="fas fa-cog"></i> Settings</a>
            <a href="/login"><i class="fas fa-sign-out-alt"></i> Sign Out</a>
          </nav>
        </aside>
        <div class="account-content">
          <div class="account-card">
            <h3>Profile Information</h3>
            <form class="account-form" onsubmit="event.preventDefault(); alert('Profile updated!')">
              <div class="form-row">
                <div class="form-group"><label>First Name</label><input type="text" value="Alexander" required></div>
                <div class="form-group"><label>Last Name</label><input type="text" value="Duval" required></div>
              </div>
              <div class="form-group"><label>Email</label><input type="email" value="alexander@example.com" required></div>
              <div class="form-group"><label>Phone</label><input type="tel" value="+33 1 42 56 78 90"></div>
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </form>
          </div>

          <div class="account-card">
            <h3>Recent Orders</h3>
            <div class="orders-table">
              <div class="order-row order-header">
                <span>Order</span><span>Date</span><span>Status</span><span>Total</span>
              </div>
              <div class="order-row">
                <span>AUR-2026-00042</span><span>Jun 10, 2026</span><span class="status-shipped"><i class="fas fa-truck"></i> Shipped</span><span>$480.00</span>
              </div>
              <div class="order-row">
                <span>AUR-2026-00039</span><span>May 28, 2026</span><span class="status-delivered"><i class="fas fa-check-circle"></i> Delivered</span><span>$275.00</span>
              </div>
              <div class="order-row">
                <span>AUR-2026-00031</span><span>May 15, 2026</span><span class="status-delivered"><i class="fas fa-check-circle"></i> Delivered</span><span>$620.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
