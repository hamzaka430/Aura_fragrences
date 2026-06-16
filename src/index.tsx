import { Hono } from 'hono';
import { layout } from './layout';
import { products, testimonials, blogPosts, faqs, collections } from './data';
import { homePage } from './pages/home';
import { shopPage } from './pages/shop';
import { productPage } from './pages/product';
import { aboutPage } from './pages/about';
import { collectionsPage } from './pages/collections';
import { blogPage, blogPostPage } from './pages/blog';
import { contactPage } from './pages/contact';
import { faqPage } from './pages/faq';
import { cartPage, checkoutPage, orderTrackingPage } from './pages/cart';
import { loginPage, signupPage, accountPage } from './pages/auth';
import { wishlistPage } from './pages/wishlist';

const app = new Hono();

// ─── Home ───────────────────────────────────────────────────────────
app.get('/', (c) => c.html(layout('Home', homePage(products, testimonials), 'home')));

// ─── Shop ───────────────────────────────────────────────────────────
app.get('/shop', (c) => c.html(layout('Shop', shopPage(products), 'shop')));

// ─── Product Detail ─────────────────────────────────────────────────
app.get('/product/:slug', (c) => {
  const slug = c.req.param('slug');
  const product = products.find(p => p.slug === slug);
  if (!product) return c.html(layout('Not Found', '<section class="section"><div class="container"><h1 class="section-title">Product Not Found</h1><p class="section-subtitle"><a href="/shop">Return to Shop</a></p></div></section>'), 404);
  const related = products.filter(p => p.id !== product.id && p.category.some(cat => product.category.includes(cat))).slice(0, 4);
  return c.html(layout(product.name, productPage(product, related), 'shop'));
});

// ─── Collections ────────────────────────────────────────────────────
app.get('/collections', (c) => c.html(layout('Collections', collectionsPage(collections, products), 'collections')));

// ─── About ──────────────────────────────────────────────────────────
app.get('/about', (c) => c.html(layout('About Us', aboutPage(), 'about')));

// ─── Blog ───────────────────────────────────────────────────────────
app.get('/blog', (c) => c.html(layout('Journal', blogPage(blogPosts), 'blog')));
app.get('/blog/:slug', (c) => {
  const slug = c.req.param('slug');
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return c.html(layout('Not Found', '<section class="section"><div class="container"><h1 class="section-title">Article Not Found</h1></div></section>'), 404);
  return c.html(layout(post.title, blogPostPage(post), 'blog'));
});

// ─── Contact ────────────────────────────────────────────────────────
app.get('/contact', (c) => c.html(layout('Contact', contactPage(), 'contact')));

// ─── FAQ ────────────────────────────────────────────────────────────
app.get('/faq', (c) => c.html(layout('FAQ', faqPage(faqs), 'faq')));

// ─── Cart & Checkout ────────────────────────────────────────────────
app.get('/cart', (c) => c.html(layout('Shopping Bag', cartPage(), 'shop')));
app.get('/checkout', (c) => c.html(layout('Checkout', checkoutPage(), 'shop')));
app.get('/order-tracking', (c) => c.html(layout('Order Tracking', orderTrackingPage(), 'shop')));

// ─── Auth ───────────────────────────────────────────────────────────
app.get('/login', (c) => c.html(layout('Sign In', loginPage())));
app.get('/signup', (c) => c.html(layout('Create Account', signupPage())));
app.get('/account', (c) => c.html(layout('My Account', accountPage())));

// ─── Wishlist ───────────────────────────────────────────────────────
app.get('/wishlist', (c) => c.html(layout('Wishlist', wishlistPage())));

// ─── API ────────────────────────────────────────────────────────────
app.get('/api/products', (c) => c.json(products));
app.get('/api/products/:slug', (c) => {
  const p = products.find(x => x.slug === c.req.param('slug'));
  return p ? c.json(p) : c.json({ error: 'Not found' }, 404);
});

export default app;
