export function cartPage(): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Shopping Bag</span></div>
      <h1 class="page-title">Your Shopping Bag</h1>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cart-page-layout">
        <div class="cart-page-items" id="cartPageItems">
          <div class="cart-empty-page" id="cartEmptyPage">
            <i class="fas fa-shopping-bag"></i>
            <h3>Your bag is empty</h3>
            <p>Discover our collection and find your perfect scent.</p>
            <a href="/shop" class="btn btn-primary btn-lg">Start Shopping</a>
          </div>
        </div>
        <div class="cart-page-summary" id="cartPageSummary" style="display:none">
          <div class="summary-card">
            <h3>Order Summary</h3>
            <div class="summary-row"><span>Subtotal</span><span id="summarySubtotal">$0</span></div>
            <div class="summary-row"><span>Shipping</span><span id="summaryShipping">Calculated at checkout</span></div>
            <div class="summary-row coupon-row">
              <input type="text" placeholder="Coupon code" class="coupon-input" id="pageCouponInput">
              <button class="btn btn-sm btn-outline" onclick="applyCoupon()">Apply</button>
            </div>
            <div class="summary-row summary-total"><span>Total</span><span id="summaryTotal">$0</span></div>
            <a href="/checkout" class="btn btn-primary btn-full btn-lg">Proceed to Checkout</a>
            <a href="/shop" class="btn btn-outline btn-full">Continue Shopping</a>
            <div class="summary-trust">
              <span><i class="fas fa-lock"></i> Secure Checkout</span>
              <span><i class="fas fa-shield-alt"></i> Buyer Protection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

export function checkoutPage(): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <a href="/cart">Bag</a> <i class="fas fa-chevron-right"></i> <span>Checkout</span></div>
      <h1 class="page-title">Checkout</h1>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="checkout-layout">
        <div class="checkout-form">
          <div class="checkout-section">
            <h3><span class="step-num">1</span> Contact Information</h3>
            <div class="form-row">
              <div class="form-group"><label>Email</label><input type="email" placeholder="your@email.com" required></div>
              <div class="form-group"><label>Phone</label><input type="tel" placeholder="+1 (555) 000-0000"></div>
            </div>
          </div>

          <div class="checkout-section">
            <h3><span class="step-num">2</span> Shipping Address</h3>
            <div class="form-row">
              <div class="form-group"><label>First Name</label><input type="text" required></div>
              <div class="form-group"><label>Last Name</label><input type="text" required></div>
            </div>
            <div class="form-group"><label>Address</label><input type="text" placeholder="Street address" required></div>
            <div class="form-group"><label>Apartment, suite, etc.</label><input type="text" placeholder="Optional"></div>
            <div class="form-row">
              <div class="form-group"><label>City</label><input type="text" required></div>
              <div class="form-group"><label>State/Province</label><input type="text"></div>
              <div class="form-group"><label>ZIP/Postal Code</label><input type="text" required></div>
            </div>
            <div class="form-group"><label>Country</label>
              <select required>
                <option value="">Select country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>France</option>
                <option>Germany</option>
                <option>United Arab Emirates</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Japan</option>
              </select>
            </div>
          </div>

          <div class="checkout-section">
            <h3><span class="step-num">3</span> Payment Method</h3>
            <div class="payment-methods">
              <label class="payment-option active"><input type="radio" name="payment" value="card" checked><i class="far fa-credit-card"></i> Credit Card</label>
              <label class="payment-option"><input type="radio" name="payment" value="paypal"><i class="fab fa-paypal"></i> PayPal</label>
              <label class="payment-option"><input type="radio" name="payment" value="applepay"><i class="fab fa-apple-pay"></i> Apple Pay</label>
            </div>
            <div class="form-group"><label>Card Number</label><input type="text" placeholder="1234 5678 9012 3456" maxlength="19"></div>
            <div class="form-row">
              <div class="form-group"><label>Expiry</label><input type="text" placeholder="MM/YY" maxlength="5"></div>
              <div class="form-group"><label>CVV</label><input type="text" placeholder="123" maxlength="4"></div>
            </div>
            <div class="form-group"><label>Name on Card</label><input type="text" placeholder="Cardholder name"></div>
          </div>

          <div class="checkout-section">
            <label class="checkbox-label"><input type="checkbox"> Gift wrap this order ($15)</label>
            <label class="checkbox-label"><input type="checkbox"> Add a personalized message</label>
          </div>

          <button class="btn btn-primary btn-lg btn-full" onclick="alert('This is a demo checkout — no real payment will be processed.')">Place Order</button>
        </div>

        <div class="checkout-summary">
          <div class="summary-card">
            <h3>Order Summary</h3>
            <div id="checkoutItems" class="checkout-items">
              <p class="text-muted">Your bag is empty</p>
            </div>
            <div class="summary-row"><span>Subtotal</span><span id="checkSubtotal">$0</span></div>
            <div class="summary-row"><span>Express Shipping</span><span>FREE</span></div>
            <div class="summary-row summary-total"><span>Total</span><span id="checkTotal">$0</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

export function orderTrackingPage(): string {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Order Tracking</span></div>
      <h1 class="page-title">Track Your Order</h1>
      <p class="page-subtitle">Enter your order number to check the status of your delivery</p>
    </div>
  </section>

  <section class="section">
    <div class="container container-narrow">
      <div class="tracking-form" data-animate="fade-up">
        <div class="form-group"><label>Order Number</label><input type="text" placeholder="e.g. AUR-2026-00042"></div>
        <div class="form-group"><label>Email Address</label><input type="email" placeholder="The email used for your order"></div>
        <button class="btn btn-primary btn-lg btn-full" onclick="alert('Demo: Order AUR-2026-00042 — Currently in transit via DHL Express. Expected delivery: June 20, 2026.')">Track Order</button>
      </div>

      <div class="tracking-info" data-animate="fade-up">
        <h3>Shipping Information</h3>
        <div class="shipping-tiers">
          <div class="shipping-tier">
            <h4><i class="fas fa-truck"></i> Standard Shipping</h4>
            <p>5-7 business days — $15 (FREE over $200)</p>
          </div>
          <div class="shipping-tier">
            <h4><i class="fas fa-shipping-fast"></i> Express Shipping</h4>
            <p>2-3 business days — $25 (FREE over $200)</p>
          </div>
          <div class="shipping-tier">
            <h4><i class="fas fa-bolt"></i> Overnight</h4>
            <p>Next business day — $45</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
