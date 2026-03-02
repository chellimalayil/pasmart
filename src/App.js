import './App.css';

const categories = [
  {
    title: 'Gold Jewelry',
    description: 'Necklaces, bangles, and rings in 22K and 24K.',
    tone: 'gold',
  },
  {
    title: 'Silver Essentials',
    description: 'Everyday wear, gifting sets, and designer silver.',
    tone: 'silver',
  },
  {
    title: 'Investment Bars',
    description: 'Certified bullion with serial tracking.',
    tone: 'dark',
  },
  {
    title: 'Coins & Collectibles',
    description: 'Limited mintage coins for investors and collectors.',
    tone: 'gold',
  },
  {
    title: 'Wedding Sets',
    description: 'Curated bridal packs with assured buyback.',
    tone: 'silver',
  },
  {
    title: 'Corporate Gifting',
    description: 'Engraved silver bars and custom hampers.',
    tone: 'dark',
  },
];

const featuredProducts = [
  {
    name: 'Heritage Gold Necklace',
    metal: '24K Gold',
    weight: '18g',
    price: '$1,280',
    tag: 'Bestseller',
  },
  {
    name: 'Silver Lotus Kada',
    metal: 'Silver 999',
    weight: '42g',
    price: '$210',
    tag: 'Limited',
  },
  {
    name: 'Royal Coin Pack',
    metal: '22K Gold',
    weight: '8g',
    price: '$620',
    tag: 'Certified',
  },
  {
    name: 'Classic Silver Cutlery',
    metal: 'Silver 925',
    weight: '180g',
    price: '$390',
    tag: 'Gift Ready',
  },
  {
    name: 'Auric Investment Bar',
    metal: '24K Gold',
    weight: '10g',
    price: '$740',
    tag: 'Insured',
  },
  {
    name: 'Moonlight Anklets',
    metal: 'Silver 999',
    weight: '28g',
    price: '$165',
    tag: 'New',
  },
];

const testimonials = [
  {
    name: 'Anita Sharma',
    title: 'Verified Buyer',
    quote:
      'The pricing lock helped me secure gold at the right moment, and the delivery felt premium.',
  },
  {
    name: 'Rohan Patel',
    title: 'Investor',
    quote:
      'Transparent purity checks and buyback options. The dashboard is clean and fast.',
  },
  {
    name: 'Sana Ali',
    title: 'Gifting Customer',
    quote:
      'Gift-ready packaging and elegant silver pieces. Everything arrived on time.',
  },
];

const stats = [
  { label: 'Live rate refresh', value: 'Every 30 sec' },
  { label: 'Certified purity', value: 'BIS + 999' },
  { label: 'Instant buyback', value: 'T+1 payout' },
  { label: 'Secure shipping', value: 'Insured vault' },
];

function AnnouncementBar() {
  return (
    <div className="announcement">
      Free insured delivery on orders above $300. City-wide same day vault pickup available.
    </div>
  );
}

function Navbar() {
  return (
    <header className="nav">
      <div className="brand">
        PS MART
        <span>Gold & Silver</span>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#gold">Gold</a>
        <a href="#silver">Silver</a>
        <a href="#invest">Invest</a>
        <a href="#support">Support</a>
      </nav>
      <div className="nav-actions">
        <button className="btn btn-ghost" type="button">
          Login
        </button>
        <button className="btn btn-solid" type="button">
          Register
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="eyebrow">Mart of Gold and Silver Items</p>
        <h1>
          A trusted marketplace for curated gold and silver, priced in real time.
        </h1>
        <p className="hero-subtitle">
          Shop certified jewelry, investment bars, and collectible coins with assured purity, insured delivery,
          and instant buyback options.
        </p>
        <div className="hero-actions">
          <button className="btn btn-solid" type="button">
            Shop Gold
          </button>
          <button className="btn btn-outline" type="button">
            Shop Silver
          </button>
        </div>
        <div className="hero-badges">
          <div>
            <strong>99.9%</strong>
            <span>Assayed purity</span>
          </div>
          <div>
            <strong>48 hr</strong>
            <span>Dispatch window</span>
          </div>
          <div>
            <strong>0%</strong>
            <span>Hidden fees</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="rate-card">
          <div className="rate-header">
            <h3>Today&apos;s Rates</h3>
            <span className="pill">Live</span>
          </div>
          <div className="rate-row gold">
            <div>
              <p>Gold 24K</p>
              <span>1g</span>
            </div>
            <strong>$72.40</strong>
          </div>
          <div className="rate-row silver">
            <div>
              <p>Silver 999</p>
              <span>1g</span>
            </div>
            <strong>$0.98</strong>
          </div>
          <div className="rate-footer">
            <span>Locked for 5 minutes</span>
            <button className="btn btn-outline" type="button">
              Lock Price
            </button>
          </div>
        </div>
        <div className="vault-card">
          <h3>Vault Delivery</h3>
          <p>Track insured shipment from certified vault to your doorstep.</p>
          <div className="vault-progress">
            <span>Order Confirmed</span>
            <div className="progress-bar">
              <div className="progress" />
            </div>
            <span>Out for Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="stats">
      {stats.map((item) => (
        <div key={item.label}>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}

function CategorySection() {
  return (
    <section className="section" id="gold">
      <div className="section-head">
        <h2>Shop by category</h2>
        <p>From bridal collections to investment-grade bullion, browse the full mart.</p>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <article className={`category-card ${category.tone}`} key={category.title}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <button className="btn btn-ghost" type="button">
              Explore
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section className="section" id="silver">
      <div className="section-head">
        <h2>Featured gold and silver picks</h2>
        <p>Handpicked items with verified purity and instant buyback eligibility.</p>
      </div>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-tag">{product.tag}</div>
            <div className="product-body">
              <h3>{product.name}</h3>
              <p>{product.metal}</p>
              <div className="product-meta">
                <span>{product.weight}</span>
                <strong>{product.price}</strong>
              </div>
            </div>
            <button className="btn btn-outline" type="button">
              Add to cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function MarketSection({ onSubmit }) {
  return (
    <section className="section market" id="invest">
      <div className="section-head">
        <h2>Market desk</h2>
        <p>Stay on top of live rates, lock your price, and schedule vault pickup.</p>
      </div>
      <div className="market-grid">
        <div className="market-card gold">
          <h3>Gold 24K</h3>
          <p>$72.40 / g</p>
          <span>+0.42% today</span>
          <button className="btn btn-solid" type="button">
            Buy Gold
          </button>
        </div>
        <div className="market-card silver">
          <h3>Silver 999</h3>
          <p>$0.98 / g</p>
          <span>-0.12% today</span>
          <button className="btn btn-solid" type="button">
            Buy Silver
          </button>
        </div>
        <form className="order-panel" onSubmit={onSubmit}>
          <h3>Lock your price</h3>
          <label>
            Metal
            <select>
              <option>Gold 24K</option>
              <option>Silver 999</option>
              <option>Gold 22K</option>
            </select>
          </label>
          <label>
            Weight (grams)
            <input type="number" placeholder="e.g. 20" min="1" />
          </label>
          <label>
            Delivery city
            <input type="text" placeholder="Enter your city" />
          </label>
          <button className="btn btn-solid" type="submit">
            Lock rate
          </button>
        </form>
      </div>
    </section>
  );
}

function AccessSection({ onSubmit }) {
  return (
    <section className="section access" id="support">
      <div className="section-head">
        <h2>Customer login and register</h2>
        <p>Manage orders, track deliveries, and access loyalty pricing.</p>
      </div>
      <div className="access-grid">
        <form className="access-card" onSubmit={onSubmit}>
          <h3>Customer login</h3>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <div className="access-row">
            <label className="checkbox">
              <input type="checkbox" />
              Remember me
            </label>
            <button className="link" type="button">
              Forgot password?
            </button>
          </div>
          <button className="btn btn-solid" type="submit">
            Sign in
          </button>
        </form>
        <form className="access-card" onSubmit={onSubmit}>
          <h3>Create account</h3>
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Phone number
            <input type="tel" placeholder="+1 555 012 3344" />
          </label>
          <label>
            Create password
            <input type="password" placeholder="Minimum 8 characters" />
          </label>
          <button className="btn btn-solid" type="submit">
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section testimonials">
      <div className="section-head">
        <h2>Why customers trust PS MART</h2>
        <p>Real feedback from investors, collectors, and gift buyers.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <p>"{item.quote}"</p>
            <div>
              <strong>{item.name}</strong>
              <span>{item.title}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>PS MART</h3>
        <p>Trusted marketplace for certified gold and silver items.</p>
      </div>
      <div>
        <h4>Customer care</h4>
        <a href="#support">Track order</a>
        <a href="#support">Shipping</a>
        <a href="#support">Returns</a>
      </div>
      <div>
        <h4>Explore</h4>
        <a href="#gold">Gold mart</a>
        <a href="#silver">Silver mart</a>
        <a href="#invest">Investment desk</a>
      </div>
      <div>
        <h4>Security</h4>
        <p>PCI compliant checkout, insured logistics, and certified assays.</p>
      </div>
    </footer>
  );
}

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="page">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <CategorySection />
        <FeaturedSection />
        <MarketSection onSubmit={handleSubmit} />
        <AccessSection onSubmit={handleSubmit} />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
