'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#about' },
  { label: 'Why JSM', href: '#why-jsm' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

const menuCards = [
  { title: 'Crispy Ghee Ragi Dosa', price: '₹30', tag: 'Chef’s Favorite', description: 'Slow-fermented finger millet batter with pure desi ghee, peanut chutney, and red chili podi.', accent: 'gold', image: '/images/menu/crispy-ghee-ragi-dosa.png', imageAlt: 'Crispy ghee ragi dosa served on a banana leaf with chutneys' },
  { title: 'Onion Ragi Utappam', price: '₹70', tag: 'Best Seller', description: 'Soft-centered ragi pancake layered with onions, green chilies, curry leaves, and roasted cumin.', accent: 'green', image: '/images/menu/onion-ragi-utappam.jpeg', imageAlt: 'Onion ragi utappam with podi' },
  { title: 'Mung Sprout Garelu', price: '₹50', tag: 'Protein Power', description: 'Crisp, freshly sprouted moong vadalu served with ginger allam chutney.', accent: 'gold', image: '/images/menu/mung-sprout-garelu.jpeg', imageAlt: 'Crispy mung sprout garelu served with chutney' },
  { title: 'Millet Ponganalu', price: '₹40', tag: 'Low Oil', description: 'Crispy outer crust, soft center, with coriander, onion, and mustard seeds.', accent: 'green', image: '/images/menu/crispy-millet-ponganalu.jpeg', imageAlt: 'Millet ponganalu served with chutneys' },
  { title: 'Ragi Mudda & Pulusu', price: '₹80', tag: 'Traditional', description: 'Steamed finger millet served with country-style curry and warm ghee.', accent: 'gold', image: '/images/menu/ragi-mudda-pulusu.jpeg', imageAlt: 'Ragi mudda served with pulusu' },
  { title: 'Foxtail Millet Pongal', price: '₹50', tag: 'Comfort Food', description: 'Slow-cooked foxtail millet with moong dal, pepper, cashew, and the aroma of ghee.', accent: 'green', image: '/images/menu/foxtail-millet-pongal.jpeg', imageAlt: 'Foxtail millet pongal with cashews' },
  { title: 'Soft Millet Idly', price: '₹40', tag: 'Freshly Steamed', description: 'Soft and fluffy finger millet idlies, freshly steamed to perfection, served with traditional groundnut chutney, spicy red chili podi and flavorful sambar.', accent: 'green', image: '/images/menu/soft-millet-ragi-idli.png', imageAlt: 'Soft millet idlies served on a banana leaf with chutneys' },
  { title: 'Crispy Ragi Pasara Dosa', price: '₹40', tag: 'Crispy & Fresh', description: 'Thin and crispy dosa made with wholesome finger millet batter, freshly prepared and roasted to perfection, served with traditional chutney and spicy podi.', accent: 'gold', image: '/images/menu/ragi-pesara-dosa.png', imageAlt: 'Crispy ragi pesara dosa served with chutneys' },
  { title: 'Traditional Ragi Ambali', price: '₹20', tag: 'Naturally Fermented', description: 'A refreshing traditional finger millet drink, naturally fermented and blended to a smooth consistency, served cool with a light, wholesome and nourishing taste.', accent: 'green', image: '/images/menu/ragi-ambali.jpeg', imageAlt: 'Traditional ragi ambali garnished with herbs' },
];

const whyList = [
  { icon: '🌱', title: '100% Millets & Ragi', text: 'No refined maida, zero palm oil, and zero adulteration. Truly traditional grain ratios.' },
  { icon: '☀️', title: 'Fresh Daily Prep', text: 'Batters and stone-ground chutneys refreshed each morning with fresh ingredients.' },
  { icon: '🧈', title: 'Pure Desi Ghee', text: 'Sourced directly from trusted dairy sources for rich flavor and better nourishment.' },
  { icon: '📍', title: 'Multiple Outlets', text: 'Serving the Miyapur community from JPN Nagar and Mayuri Nagar.' },
  { icon: '🌾', title: 'Heritage Recipes', text: 'Rustic Andhra and Rayalaseema flavours preserved in every hot plate served.' },
];

const locations = [
  {
    name: 'Miyapur Branch',
    label: 'Main Branch',
    tagClass: 'tag-emerald',
    address: 'Opposite Viswanadha Garden, JPN Nagar, Miyapur, Hyderabad - 500049',
    morning: '6:30 AM – 12:00 PM',
    evening: '5:00 PM – 10:30 PM',
    maps: 'https://www.google.com/maps/search/Opposite+Viswanadha+Garden+JPN+Nagar+Miyapur+Hyderabad+500049',
  },
  {
    name: 'Mayuri Nagar, Miyapur Branch',
    label: 'Miyapur',
    tagClass: 'tag-gold',
    address: 'Near RDB Coconut Grove Apartments, Opposite HDFC Bank Line, Mayuri Nagar, Miyapur, Hyderabad, Telangana - 500049',
    morning: '7:00 AM – 12:30 PM',
    evening: '4:30 PM – 10:00 PM',
    maps: 'https://www.google.com/maps/search/Near+RDB+Coconut+Grove+Apartments+Opposite+HDFC+Bank+Line+Mayuri+Nagar+Miyapur+Hyderabad+500049',
  },
];

const categories = [
  { icon: '🌾', title: 'Ragi Specials', price: 'Starts ₹30', text: 'Crispy dosas, soft idlis, and fluffy steamed ragi tiffins packed with calcium.' },
  { icon: '🥣', title: 'Millet Specials', price: 'Starts ₹45', text: 'Foxtail, Kodo, and Little millet pongal, upma, and seasonal tiffins.' },
  { icon: '🥞', title: 'Traditional Tiffins', price: 'Starts ₹50', text: 'Cast-iron grilled multigrain utappam, pesarattu, and savory roasted crêpes.' },
  { icon: '🧆', title: 'Garelu & Snacks', price: 'Starts ₹40', text: 'Hot crunchy sprouted green gram garelu and spiced shallow-fried punugulu.' },
  { icon: '🍲', title: 'Sangati & Java', price: 'Starts ₹40', text: 'Wholesome Ragi Mudda served with dal pulusu and cooling Java.' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.14 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#home" className="brand" aria-label="JSM Home">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3JMNeaWDSBB8y73J3rx6fzr3kTu3y7V8jwPkdVEeh4WRWxdjUwFAnmn65oxTNH4ZZbERWrIKvFnBziAB85OhD0yR-K9QY-ADEeq3zJhO0S2oohk_O3Vb8YtzqURpGgdL0R9obX2xyapW5OSk7JthyrlpE_HGFNNpvg17pQJ_gR1Wh4OX-71n4no1uPAFpYijiGwMfTIaPoU-SqAzxfwfuvCkPF8OwD9ya88zmLur4I-SHCFdCTreNERsAUIBmlsLxwA" alt="JSM logo" />
            <div>
              <span className="brand-title">JSM Tiffins</span>
              <span className="brand-subtitle">Ragi &amp; Millet Authentic</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#locations" className="primary-btn">Find a Store</a>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span>☰</span>
            <span>Menu</span>
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-nav-panel" className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">Authentic Millet Delicacies • Hyderabad</span>
              <h1>
                Traditional Taste.<br />
                <span>Naturally Good.</span>
              </h1>
              <p>
                Authentic Ragi &amp; Millet Tiffins in Hyderabad. Freshly made on traditional banana leaves with pure desi ghee, stone-ground podis, and artisanal chutneys.
              </p>

              <div className="stats-row">
                <div>
                  <strong>100%</strong>
                  <span>Millets &amp; Ragi</span>
                </div>
                <div>
                  <strong>Pure</strong>
                  <span>Desi Ghee</span>
                </div>
                <div>
                  <strong>₹30</strong>
                  <span>Starting from</span>
                </div>
              </div>

              <div className="cta-row">
                <a href="#menu" className="primary-btn large">View Menu</a>
                <a href="#locations" className="secondary-btn large">Find a Store</a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="visual-glow" />
              <div className="dish-card">
                <img src="/images/menu/crispy-ghee-ragi-dosa.png" alt="Crispy ghee ragi dosa served on a banana leaf with chutneys" />
                <div className="dish-overlay">
                  <div className="overlay-top">
                    <div>
                      <p>Signature serving</p>
                      <h2>Crisp Ghee Ragi Dosa</h2>
                    </div>
                    <span>₹30</span>
                  </div>
                  <p>Served with groundnut chutney, tomato paste and gun powder.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="story section-shell reveal">
          <div className="container story-grid">
            <div className="story-visual">
              <div className="story-image-wrap">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeEJoHRFtGfewxBTx6QdNv1XHQgqrZpgdzuGfQwhU-QyvAa1GiYawbjNSm6jKFXDWQefUsWBPnzu7IZB0VY8xjwIeII_uSlxsSVK_jlTKTvqjMK70BXEavy3TAyFG8NSQDrLeZMRwhhC3xsSJQYOaYROoCrPOOHZe0Cm0R83xHSKgIhFjaNIbMZGrq58YWEZCfC4gexqgUMgExMo3CLoNGGPcf1qRPW58feNGkRQoz6yap-b5dZVf_RVXCMlxJ4-wUoA" alt="Authentic millet plate" />
              </div>
              <div className="story-badge">
                <strong>100%</strong>
                <span>Preservative free &amp; made daily from pure grains</span>
              </div>
            </div>

            <div className="story-copy">
              <span className="eyebrow eyebrow-dark">Our Heritage &amp; Vision</span>
              <h2>Revitalizing Andhra &amp; Rayalaseema&apos;s ancient millet roots</h2>
              <p>
                Founded by Sowjanya and Manoj, JSM was created to make breakfast deeply nutritious, delicious, and accessible without refined flours or artificial colours.
              </p>
              <p>
                Growing up on rustic, wholesome meals of Ragi Sangati, slow-cooked Jowar Rotis, and stone-pounded grain tiffins, they noticed Hyderabad&apos;s mornings were dominated by polished white rice and maida. JSM brings back that heritage in a modern, easy way.
              </p>
              <p>
                Every dish is prepared using slow culinary methods, served clean on fresh banana leaves, drizzled with fragrant farm desi ghee, and complemented by traditional coconut, peanut, and ginger chutneys.
              </p>
              <div className="mini-facts">
                <div><span>Slow Ground</span><small>Nutrient-dense batters</small></div>
                <div><span>No White Rice</span><small>Pure millet blends</small></div>
                <div><span>Eco-Friendly</span><small>Banana leaf service</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories section-shell reveal">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow eyebrow-dark">Curated Offerings</span>
              <h2>Our Culinary Categories</h2>
            </div>

            <div className="category-grid">
              {categories.map((item) => (
                <article key={item.title} className="category-card">
                  <div className="icon-wrap">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>{item.price}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="menu section-shell reveal">
          <div className="container">
            <div className="section-head split">
              <div>
                <span className="eyebrow eyebrow-dark">Dine In &amp; Takeaway</span>
                <h2>Our most loved breakfast items</h2>
              </div>
              <span className="pill">Freshly cooked to order</span>
            </div>

            <div className="menu-grid">
              {menuCards.map((item) => (
                <article key={item.title} className={`menu-card ${item.accent}`}>
                  <div className="menu-visual">
                    <img className="menu-photo" src={item.image} alt={item.imageAlt} />
                    <span className="price-tag">{item.price}</span>
                    <span className="item-badge">{item.tag}</span>
                  </div>
                  <div className="menu-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="menu-meta">
                      <span>Made fresh</span>
                      <strong>{item.accent === 'gold' ? '100% Ragi' : 'Traditional'}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-jsm" className="benefits section-shell reveal">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">Our Commitment</span>
              <h2>Why Hyderabad Chooses JSM</h2>
            </div>

            <div className="benefit-grid">
              {whyList.map((item) => (
                <div key={item.title} className="benefit-card">
                  <div className="benefit-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="locations section-shell reveal">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow eyebrow-dark">Visit us in person</span>
              <h2>Our Hyderabad outlets</h2>
            </div>

            <div className="location-grid">
              {locations.map((location) => (
                <article key={location.name} className="location-card">
                  <div className="location-header">
                    <h3>{location.name}</h3>
                    <span className={`loc-tag ${location.tagClass}`}>{location.label}</span>
                  </div>
                  <p className="location-address">📍 {location.address}</p>
                  <div className="hours">
                    <div>
                      <span>Morning Session</span>
                      <strong>{location.morning}</strong>
                    </div>
                    <div>
                      <span>Evening Session</span>
                      <strong>{location.evening}</strong>
                    </div>
                  </div>
                  <a href={location.maps} target="_blank" rel="noreferrer" className="direction-btn">Get directions ↗</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer section-shell reveal">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxwHPN2DrB2E26fuHoIQt7LgTVAPXmRrgTIrVxnBfv2FQyGssjrvkHhr_GKaKTsHF42IZb7WCGaUz_0ho_0WWNNy3kCZwuOGaxNssf92U1El6tuhk_ARi4LauQIjF8ITjk5TgLjrLXWqbbPSrDk0AxAUAp6VMbRUiN3LOx-jahuWuQG3dPiwlKhLbIwoomr9Xd5FOK8qlcqQRE_1YKawDzxEySCkMbouKoOLLIVrG-DUEr8PEMnUvodDa0K3GAJLMg2Q" alt="JSM brand" />
            <p>Dedicated to bringing back unpolished millets, heritage Andhra breakfast dishes, and nutritious breakfast routines to Hyderabad.</p>
            <strong>Founded with love by Sowjanya &amp; Manoj</strong>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Special Occasions</h4>
            <p>Planning a family ceremony, wellness breakfast, or office gathering? We offer fresh hot millet counters and takeaway catering.</p>
            <div className="footer-phone">+91 94917 33480</div>
          </div>

          <div>
            <h4>Operational Hours</h4>
            <p>Open 7 days a week across all Hyderabad outlets.</p>
            <div className="hours-box">
              <span>Morning: 6:30 AM – 12:00 PM</span>
              <span>Evening: 4:30 PM – 10:30 PM</span>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 JSM Ragi &amp; Millet Tiffins</span>
          <span>
            Opposite Viswanadha Garden, JPN Nagar, Miyapur
            <br />
            Hyderabad, Telangana, India - 500049
          </span>
        </div>
      </footer>

      <a
        href="https://wa.me/919491733480?text=Hello%20JSM%20Millet%20Tiffins,%20I%20would%20like%20to%20know%20more%20about%20your%20menu%20and%20outlets."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Contact JSM on WhatsApp"
      >
        WhatsApp Us
      </a>
    </>
  );
}
