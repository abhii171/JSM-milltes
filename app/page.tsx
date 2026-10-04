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
  { title: 'Ragi Java', price: '₹20', tag: 'Naturally Fermented', description: 'A refreshing traditional ragi drink, served cool.', accent: 'green', image: '/images/menu/ragi-ambali.jpeg', imageAlt: 'Traditional ragi java served chilled' },
  { title: 'Ragi Crispy Plain Dosa', price: '₹30', tag: 'Crispy & Fresh', description: 'Thin, crispy ragi dosa served with traditional chutney and podi.', accent: 'gold', image: '/images/menu/ragi-pesara-dosa.png', imageAlt: 'Crispy plain ragi dosa served with chutneys' },
  { title: 'Soft Ragi Idly', price: '₹40', tag: 'Freshly Steamed', description: 'Soft, fluffy ragi idlies served with traditional chutney and podi.', accent: 'green', image: '/images/menu/soft-millet-ragi-idli.png', imageAlt: 'Soft ragi idlies served with chutneys' },
  { title: 'Foxtail Pongal', price: '₹40', tag: 'Comfort Food', description: 'Warm foxtail millet pongal cooked with lentils and traditional spices.', accent: 'green', image: '/images/menu/foxtail-millet-pongal.jpeg', imageAlt: 'Foxtail millet pongal served warm' },
  { title: 'Crispy Millet Ponganalu', price: '₹40', tag: 'Traditional Cast-Iron', description: 'Crispy millet ponganalu with a soft center and savory seasoning.', accent: 'gold', image: '/images/menu/crispy-millet-ponganalu.jpeg', imageAlt: 'Crispy millet ponganalu served with chutneys' },
  { title: 'Crispy Sprouts Garelu', price: '₹50', tag: 'Protein Power', description: 'Crispy sprouted moong garelu served with ginger chutney.', accent: 'gold', image: '/images/menu/mung-sprout-garelu.jpeg', imageAlt: 'Crispy sprouts garelu served with chutney' },
  { title: 'Pesara Dosa', price: '₹50', tag: 'Crispy & Fresh', description: 'A crisp pesara dosa served with traditional chutney and podi.', accent: 'green', image: '/images/menu/ragi-pesara-dosa.jpeg', imageAlt: 'Pesara dosa served with chutneys' },
  { title: 'Onion Ragi Uttappam', price: '₹60', tag: 'Best Seller', description: 'A soft-centered ragi uttappam topped with onion and traditional spices.', accent: 'gold', image: '/images/menu/onion-ragi-utappam.jpeg', imageAlt: 'Onion ragi uttappam served with podi' },
  { title: 'Millet Set Dosa', price: '₹70', tag: 'Soft & Fluffy', description: 'Soft millet set dosa served with traditional accompaniments.', accent: 'green', image: '/images/menu/crispy-ghee-ragi-dosa.jpeg', imageAlt: 'Millet dosa served on a banana leaf with chutneys' },
  { title: 'Ragi Mudda Chicken', price: '₹120', tag: 'Traditional Meal', description: 'Ragi mudda served with chicken curry.', accent: 'gold', image: '/images/menu/ragi-mudda-pulusu.jpeg', imageAlt: 'Ragi mudda served with curry' },
  { title: 'Ragi Mudda Thalakaya', price: '₹150', tag: 'Traditional Meal', description: 'Ragi mudda served with thalakaya curry.', accent: 'green', image: '/images/menu/ragi-mudda-pulusu.jpeg', imageAlt: 'Ragi mudda served with curry' },
];

const whyList = [
  { icon: '🌱', title: '100% Millets & Ragi', text: 'With healthy and quality ingredients. No maida, palm oil, or added food colours.' },
  { icon: '☀️', title: 'Fresh Daily Prep', text: 'Batters and stone-ground chutneys ground fresh every single dawn. No overnight preservatives.' },
  { icon: '🧈', title: 'Pure Desi Ghee', text: 'Authentic food prepared with pure desi ghee, pure sunflower oil, and homemade chutneys.' },
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
  { icon: '🍲', title: 'Sangati & Java', price: 'Starts ₹40', text: 'Wholesome Rayalaseema Ragi Muddha served with spicy natukodi or dal pulusu & cooling java.' },
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
              <span className="eyebrow"><span>Best Millet Tiffins in Hyderabad<br /><span lang="te">మేము పెట్టుకున్నది కాదు, మీరు ఇచ్చింది.</span></span></span>
              <h1>
                Quality you can taste.<br />
                <span>Hygiene you can trust.</span>
              </h1>
              <p>
                JSM Millet Tiffins and Ragimuddha, Hyderabad, is a food brand dedicated to bringing the goodness of traditional millet-based food into modern everyday life. We also preserve the traditional experience—serving our food on steel plates with banana leaves, groundnut and tomato chutneys, and karampodi.
              </p>

              <div className="stats-row">
                <div>
                  <strong>100%</strong>
                  <span>Millets &amp; Ragi - 100% No maida, no palm oil and food colour</span>
                </div>
                <div>
                  <strong>Pure</strong>
                  <span>Desi Ghee - Pure Sunflower Oil, Homemade</span>
                </div>
                <div>
                  <strong>₹20</strong>
                  <span>Starting From</span>
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
                    <span>₹20</span>
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
                <img src="/images/jsm-story-poster.png" alt="JSM Millet Tiffins and Ragimuddha story poster" />
              </div>
            </div>

            <div className="story-copy">
              <span className="eyebrow eyebrow-dark">Our Story</span>
              <h2>From a family need to a shared journey</h2>
              <div className="story-narrative">
                <p>
                JSM Millet Tiffins &amp; Ragi Mudde started for a simple and personal reason — to support our family during a difficult time, help with their livelihood, and clear their debts.
                </p>
                <p>
                  We started with zero investment, zero experience, and very little knowledge about running a food business. We only had the willingness to learn, work hard, and keep moving forward.
                </p>
                <p>
                  What began as a way to support our family slowly became something much bigger. By God’s grace, today JSM supports more than 10 families who depend on this work for their livelihood.
                </p>
                <p>
                  In just one and a half years, we have served 100+ orders, with our customers consistently giving us 5-star ratings. JSM has also grown to become one of the top-rated millet tiffin options on Google in Hyderabad — something we are truly grateful for.
                </p>
                <p>
                  JSM is not just a business for us. It is our family’s journey, the livelihood of many families, and a reminder that you don’t always need a big investment or years of experience to start something. Sometimes, you just need the courage to begin and the determination to keep going.
                </p>
                <p>
                  We are deeply thankful to every customer who has ordered, supported, shared, reviewed, and encouraged us along the way.
                </p>
              </div>
              <div className="story-mission">
                <h3>Our Mission</h3>
                <p>
                  To make traditional millet food accessible, delicious, and affordable for everyday life while staying true to authentic flavours, quality, freshness, and customer satisfaction.
                </p>
              </div>
              <p className="story-closing">
                From zero investment. Zero experience. Zero knowledge.
                <span>To a journey supporting more than 10 families.</span>
              </p>
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
                  <div className="icon-wrap" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>{item.price}</span>
                  <a className="category-link" href="#menu">
                    Explore menu
                  </a>
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
          <div className="container benefit-panel">
            <div className="section-head center">
              <span className="eyebrow">Our Commitment</span>
              <h2 className="benefit-title">Why Hyderabad Chooses JSM</h2>
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
            <h4>Special occasions</h4>
            <p>Planning a family ceremony, wellness breakfast, or office gathering? We offer fresh hot millet counters and takeaway catering.</p>
            <div className="footer-phone">+91 94917 33480</div>
          </div>

          <div>
            <h4>Operational Hours</h4>
            <p>Open Monday to Saturday across all Hyderabad outlets.</p>
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
