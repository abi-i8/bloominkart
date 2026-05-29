"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    // Nav Scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth scroll
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(a => {
      a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth' });
          setMobileMenuOpen(false);
        }
      });
    });

    // Reveal (Intersection Observer)
    const obs = new IntersectionObserver(es => 
      es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('v');
          obs.unobserve(e.target);
        }
      }), 
      { threshold: 0.1 }
    );
    document.querySelectorAll('.sr, .sl, .sr2').forEach(el => obs.observe(el));

    // Filter Logic
    const tabs = document.querySelectorAll('.ftab');
    tabs.forEach(b => {
      b.addEventListener('click', () => {
        tabs.forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        const f = b.dataset.f;
        document.querySelectorAll('.pcard').forEach(c => {
          c.classList.toggle('hide', f !== 'all' && c.dataset.c !== f);
        });
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Not strictly necessary to clean up Vanilla DOM event listeners in this simple SPA context, 
      // but good practice.
    };
  }, []);

  return (
    <>


{/*  NAV  */}
<nav id="nav" className={scrolled ? 'on' : ''}>
  <a href="#hero" className="logo">Bloom <b>Ink</b> Art</a>
  <ul className="nav-links">
    <li><a href="#about">Story</a></li>
    <li><a href="#collection">Collection</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#order">Order</a></li>
  </ul>
  <a href="#order" className="nav-btn">Order Now 🌸</a>
  <button className="ham" id="ham"><span></span><span></span><span></span></button>
</nav>
<div id="mob">
  <button className="mob-x" id="mob-x">✕</button>
  <a href="#about"      onClick={() => setMobileMenuOpen(false)}>Story</a>
  <a href="#collection" onClick={() => setMobileMenuOpen(false)}>Collection</a>
  <a href="#gallery"    onClick={() => setMobileMenuOpen(false)}>Gallery</a>
  <a href="#order"      onClick={() => setMobileMenuOpen(false)}>Order</a>
</div>

{/*  HERO  */}
<section id="hero">
  <span className="hero-badge">✦ Made by Gopika, with love ✦</span>
  <h1 className="hero-h">Beauty that<br />lasts <em>beyond</em></h1>
  <span className="hero-script">a moment ✦</span>
  <p className="hero-sub">Handcrafted pipe-cleaner bouquets &amp; faceless portraits – because some gifts should be as lasting as the feeling that inspired them.</p>
  <div className="hero-btns">
    <a href="#collection" className="btn-fill">Explore Collection</a>
    <a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="btn-outline">DM to Order ✿</a>
  </div>
  <div className="hero-photos">
    <div className="hphoto" onClick={() => setLightboxImg('/images/img_1.jpeg')}><img src="/images/img_1.jpeg" alt="" /><p className="hphoto-cap">lavender 💜</p></div>
    <div className="hphoto" onClick={() => setLightboxImg('/images/img_3.jpeg')}><img src="/images/img_3.jpeg" alt="" /><p className="hphoto-cap">gerbera 🌺</p></div>
    <div className="hphoto" onClick={() => setLightboxImg('/images/img_5.jpeg')}><img src="/images/img_5.jpeg" alt="" /><p className="hphoto-cap">pink tulip 🌷</p></div>
    <div className="hphoto" onClick={() => setLightboxImg('/images/img_7.jpeg')}><img src="/images/img_7.jpeg" alt="" /><p className="hphoto-cap">red roses 🥀</p></div>
    <div className="hphoto" onClick={() => setLightboxImg('/images/img_9.jpeg')}><img src="/images/img_9.jpeg" alt="" /><p className="hphoto-cap">sunflower 🌻</p></div>
  </div>
</section>

{/*  TICKER  */}
<div className="ticker">
  <div className="ticker-inner">
    <span className="ti">Handcrafted with love<span className="ti-dot"></span></span>
    <span className="ti">Pipe-cleaner bouquets<span className="ti-dot"></span></span>
    <span className="ti">Faceless portraits<span className="ti-dot"></span></span>
    <span className="ti">Made by Gopika<span className="ti-dot"></span></span>
    <span className="ti">Forever blooms<span className="ti-dot"></span></span>
    <span className="ti">Custom gift hampers<span className="ti-dot"></span></span>
    <span className="ti">Ethically handmade<span className="ti-dot"></span></span>
    <span className="ti">DM to order<span className="ti-dot"></span></span>
    <span className="ti">Handcrafted with love<span className="ti-dot"></span></span>
    <span className="ti">Pipe-cleaner bouquets<span className="ti-dot"></span></span>
    <span className="ti">Faceless portraits<span className="ti-dot"></span></span>
    <span className="ti">Made by Gopika<span className="ti-dot"></span></span>
    <span className="ti">Forever blooms<span className="ti-dot"></span></span>
    <span className="ti">Custom gift hampers<span className="ti-dot"></span></span>
    <span className="ti">Ethically handmade<span className="ti-dot"></span></span>
    <span className="ti">DM to order<span className="ti-dot"></span></span>
  </div>
</div>

{/*  ABOUT  */}
<section id="about">
  <div className="about-inner">
    <div className="about-photos sl">
      <div className="ap ap1" onClick={() => setLightboxImg('/images/img_5.jpeg')}><div className="wt wt1"></div><img src="/images/img_5.jpeg" alt="" /><p className="ap-cap">grande tulip 🌷</p></div>
      
      <div className="ap ap2" onClick={() => setLightboxImg('/images/img_7.jpeg')}><div className="wt wt2"></div><img src="/images/img_7.jpeg" alt="" /><p className="ap-cap">red roses 🥀</p></div>
      
      <div className="ap ap3" onClick={() => setLightboxImg('/images/img_9.jpeg')}><div className="wt wt3"></div><img src="/images/img_9.jpeg" alt="" /><p className="ap-cap">sunflower 🌻</p></div>
      <div className="ap ap4" onClick={() => setLightboxImg('/images/img_17.jpeg')}><div className="wt wt2"></div><img src="/images/img_17.jpeg" alt="" /><p className="ap-cap">red &amp; white ✨</p></div>
    </div>
    <div className="about-text sr2">
      <span className="stag">✦ our little story</span>
      <h2>Beauty That Lasts<br /><em>Beyond a Moment</em></h2>
      <p>At Bloom Ink Art, we create handcrafted pipe-cleaner bouquets and photo frames that turn memories into keepsakes – designed to last longer than fresh flowers and celebrate love, milestones, and meaningful moments.</p>
      <p>Every creation is fully customizable, ethically handmade, and crafted with care so your gift feels personal, lasting, and truly one of a kind.</p>
      <div className="about-quote">Every piece carries a little piece of my heart. I believe love should last forever – just like these blooms. – Gopika 🌸</div>
      <div className="about-pills">
        <span className="pill">🌿 Ethically Made</span>
        <span className="pill">✨ Fully Custom</span>
        <span className="pill">💛 Lasts Forever</span>
        <span className="pill">🎁 Made to Order</span>
        <span className="pill">📦 Gift-Wrapped</span>
      </div>
    </div>
  </div>
</section>

{/*  COLLECTION  */}
<section id="collection">
  <div className="sec-head sr">
    <div>
      <span className="stag">✦ The Theia Collection</span>
      <h2>Bouquets That <em>Never Wilt</em></h2>
    </div>
    <a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="btn-outline">All on Instagram →</a>
  </div>
  <div className="filters sr">
    <button className="ftab on" data-f="all">All</button>
    <button className="ftab" data-f="tulip">Tulips</button>
    <button className="ftab" data-f="mixed">Mixed</button>
    <button className="ftab" data-f="rose">Roses</button>
    <button className="ftab" data-f="sun">Sunflower</button>
  </div>
  <div className="pgrid">
    <div className="pcard sr"    data-c="tulip"><div className="pc-img"><img src="/images/img_19.jpeg" alt="" loading="lazy" /><span className="pc-lbl l-b">Bestseller</span><div className="pc-cta"><a href="https://www.instagram.com/bloom_ink.art" target="_blank">Quick Order ✦</a></div></div><div className="pc-body"><h3 className="pc-name">Pink Tulip Bouquet</h3><p className="pc-desc">Lush pink pipe-cleaner tulips — timeless, romantic, forever.</p><div className="pc-foot"><span className="pc-price">₹499</span><a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="pc-order">DM →</a></div></div></div>
    <div className="pcard sr d1" data-c="tulip"><div className="pc-img"><img src="/images/img_20.jpeg" alt="" loading="lazy" /><span className="pc-lbl l-n">New</span><div className="pc-cta"><a href="https://www.instagram.com/bloom_ink.art" target="_blank">Quick Order ✦</a></div></div><div className="pc-body"><h3 className="pc-name">Peach Tulip Bouquet</h3><p className="pc-desc">Soft peach &amp; white tulips in kraft wrap — warm &amp; elegant.</p><div className="pc-foot"><span className="pc-price">₹449</span><a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="pc-order">DM →</a></div></div></div>
    <div className="pcard sr d2" data-c="mixed"><div className="pc-img"><img src="/images/img_17.jpeg" alt="" loading="lazy" /><span className="pc-lbl l-s">Limited</span><div className="pc-cta"><a href="https://www.instagram.com/bloom_ink.art" target="_blank">Quick Order ✦</a></div></div><div className="pc-body"><h3 className="pc-name">Red &amp; White Mixed</h3><p className="pc-desc">Crimson tulips with ivory lilies — for anniversaries &amp; weddings.</p><div className="pc-foot"><span className="pc-price">₹599</span><a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="pc-order">DM →</a></div></div></div>
    <div className="pcard sr"    data-c="mixed"><div className="pc-img"><img src="/images/img_3.jpeg" alt="" loading="lazy" /><div className="pc-cta"><a href="https://www.instagram.com/bloom_ink.art" target="_blank">Quick Order ✦</a></div></div><div className="pc-body"><h3 className="pc-name">Pink Gerbera Bouquet</h3><p className="pc-desc">Vibrant hot-pink gerbera with lily accents — playful &amp; joyful.</p><div className="pc-foot"><span className="pc-price">₹399</span><a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="pc-order">DM →</a></div></div></div>
    <div className="pcard sr d1" data-c="tulip"><div className="pc-img"><img src="/images/img_5.jpeg" alt="" loading="lazy" /><span className="pc-lbl l-b">Signature</span><div className="pc-cta"><a href="https://www.instagram.com/bloom_ink.art" target="_blank">Quick Order ✦</a></div></div><div className="pc-body"><h3 className="pc-name">Grande Pink Tulip</h3><p className="pc-desc">12 blush tulips in premium wrap with silk ribbon — our finest.</p><div className="pc-foot"><span className="pc-price">₹799</span><a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="pc-order">DM →</a></div></div></div>
    <div className="pcard sr d2" data-c="rose"><div className="pc-img"><img src="/images/img_7.jpeg" alt="" loading="lazy" /><span className="pc-lbl l-n">New</span><div className="pc-cta"><a href="https://www.instagram.com/bloom_ink.art" target="_blank">Quick Order ✦</a></div></div><div className="pc-body"><h3 className="pc-name">Velvet Red Roses</h3><p className="pc-desc">Deep-red glitter roses — passionate, bold, unforgettable.</p><div className="pc-foot"><span className="pc-price">₹699</span><a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="pc-order">DM →</a></div></div></div>
    <div className="pcard sr"    data-c="mixed"><div className="pc-img"><img src="/images/img_25.jpeg" alt="" loading="lazy" /><div className="pc-cta"><a href="https://www.instagram.com/bloom_ink.art" target="_blank">Quick Order ✦</a></div></div><div className="pc-body"><h3 className="pc-name">Crimson &amp; Daisy Mix</h3><p className="pc-desc">Deep crimson tulips with white daisies — charming &amp; woodland.</p><div className="pc-foot"><span className="pc-price">₹499</span><a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="pc-order">DM →</a></div></div></div>
    <div className="pcard sr d1" data-c="tulip"><div className="pc-img"><img src="/images/img_1.jpeg" alt="" loading="lazy" /><span className="pc-lbl l-s">Limited</span><div className="pc-cta"><a href="https://www.instagram.com/bloom_ink.art" target="_blank">Quick Order ✦</a></div></div><div className="pc-body"><h3 className="pc-name">Lavender Tulip Bouquet</h3><p className="pc-desc">Dreamy purple tulips with gold bow — calming &amp; unique.</p><div className="pc-foot"><span className="pc-price">₹399</span><a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="pc-order">DM →</a></div></div></div>
    <div className="pcard sr d2" data-c="sun"><div className="pc-img"><img src="/images/img_9.jpeg" alt="" loading="lazy" /><span className="pc-lbl l-b">Fan Fav</span><div className="pc-cta"><a href="https://www.instagram.com/bloom_ink.art" target="_blank">Quick Order ✦</a></div></div><div className="pc-body"><h3 className="pc-name">Sunflower Bouquet</h3><p className="pc-desc">Giant sunflower with daisy accents — sunshine forever.</p><div className="pc-foot"><span className="pc-price">₹399</span><a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="pc-order">DM →</a></div></div></div>
  </div>
</section>

{/*  PROCESS  */}
<section id="process">
  <div className="proc-head sr">
    <span className="stag">✦ how it works</span>
    <h2>From <em>Dream</em> to Doorstep</h2>
  </div>
  <div className="steps">
    <div className="step sr"><span className="step-num">01</span><span className="step-ico">🌸</span><h3 className="step-title">Pick Your Bloom</h3><p className="step-body">Browse the collection and pick your favourite flowers, colours &amp; style — or start with a fresh idea.</p></div>
    <div className="step sr d1"><span className="step-num">02</span><span className="step-ico">💌</span><h3 className="step-title">DM Your Wishes</h3><p className="step-body">Message @bloom_ink.art on Instagram with the occasion, colours &amp; any personal touches you'd love.</p></div>
    <div className="step sr d2"><span className="step-num">03</span><span className="step-ico">🤲</span><h3 className="step-title">Gopika Makes It</h3><p className="step-body">Every piece is personally handcrafted with premium pipe-cleaners. No machines — pure, intentional craft.</p></div>
    <div className="step sr d3"><span className="step-num">04</span><span className="step-ico">🎁</span><h3 className="step-title">Gift &amp; Cherish</h3><p className="step-body">Receive beautifully wrapped blooms ready to gift. They'll look just as stunning years from now.</p></div>
  </div>
</section>

{/*  GALLERY  */}
<section id="gallery">
  <div className="gal-head sr">
    <div>
      <span className="stag">✦ our work</span>
      <h2>The <em>Gallery</em></h2>
    </div>
    <a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="btn-outline">Follow on Instagram →</a>
  </div>
  <div className="gal-grid sr">
    <div className="gi" onClick={() => setLightboxImg('/images/img_5.jpeg')}><img src="/images/img_5.jpeg" alt="" loading="lazy" /><p className="gi-cap">grande pink tulip 🌷</p><div className="gi-over">tap to view ✦</div></div>
    <div className="gi" onClick={() => setLightboxImg('/images/img_7.jpeg')}><img src="/images/img_7.jpeg" alt="" loading="lazy" /><p className="gi-cap">velvet red roses 🥀</p><div className="gi-over">tap to view ✦</div></div>
    <div className="gi" onClick={() => setLightboxImg('/images/img_9.jpeg')}><img src="/images/img_9.jpeg" alt="" loading="lazy" /><p className="gi-cap">sunflower love 🌻</p><div className="gi-over">tap to view ✦</div></div>
    <div className="gi" onClick={() => setLightboxImg('/images/img_19.jpeg')}><img src="/images/img_19.jpeg" alt="" loading="lazy" /><p className="gi-cap">pink tulip bunch 🌸</p><div className="gi-over">tap to view ✦</div></div>
    <div className="gi" onClick={() => setLightboxImg('/images/img_17.jpeg')}><img src="/images/img_17.jpeg" alt="" loading="lazy" /><p className="gi-cap">red &amp; white ✨</p><div className="gi-over">tap to view ✦</div></div>
    <div className="gi" onClick={() => setLightboxImg('/images/img_1.jpeg')}><img src="/images/img_1.jpeg" alt="" loading="lazy" /><p className="gi-cap">lavender dreams 💜</p><div className="gi-over">tap to view ✦</div></div>
    <div className="gi" onClick={() => setLightboxImg('/images/img_3.jpeg')}><img src="/images/img_3.jpeg" alt="" loading="lazy" /><p className="gi-cap">pop of colour 🌺</p><div className="gi-over">tap to view ✦</div></div>
    <div className="gi" onClick={() => setLightboxImg('/images/img_25.jpeg')}><img src="/images/img_25.jpeg" alt="" loading="lazy" /><p className="gi-cap">crimson &amp; daisy 🌿</p><div className="gi-over">tap to view ✦</div></div>
    <div className="gi" onClick={() => setLightboxImg('/images/img_20.jpeg')}><img src="/images/img_20.jpeg" alt="" loading="lazy" /><p className="gi-cap">peach perfection 🍑</p><div className="gi-over">tap to view ✦</div></div>
  </div>
  <div className="ig-box sr">
    <h3>Follow us on Instagram 🌸</h3>
    <p>New bouquets, behind-the-scenes &amp; special drops every week.<br />Come say hello – we'd love to see you there!</p>
    <a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="btn-ig">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      @bloom_ink.art
    </a>
  </div>
</section>

{/*  LIGHTBOX  */}
{lightboxImg && (
  <div id="lb" className="on" onClick={() => setLightboxImg(null)} style={{ display: 'flex', opacity: 1, pointerEvents: 'auto' }}>
    <button id="lb-x" onClick={() => setLightboxImg(null)}>Close ✕</button>
    <img id="lb-img" src={lightboxImg} alt="" onClick={(e) => e.stopPropagation()} />
  </div>
)}

{/*  ORDER  */}
<section id="order">
  <div className="order-wrap">
    <div className="order-left sl">
      <span className="stag">✦ place an order</span>
      <h2>Ready for Your<br /><em>Forever Bloom?</em></h2>
      <p>Each piece is made with love, just for you. Reach out on Instagram or fill the little note – Gopika will get back to you personally within 24 hours.</p>
      <div className="channels">
        <a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="ch">
          <span className="ch-ico">📸</span>
          <div className="ch-text"><strong>Instagram DM</strong><span>@bloom_ink.art · Fastest response</span></div>
          <span className="ch-arr">→</span>
        </a>
        <a href="https://wa.me/?text=Hi%20Bloom%20Ink%20Art!%20I%20want%20to%20place%20an%20order%20%F0%9F%8C%B8" target="_blank" className="ch">
          <span className="ch-ico">💬</span>
          <div className="ch-text"><strong>WhatsApp</strong><span>Send a message to get started</span></div>
          <span className="ch-arr">→</span>
        </a>
      </div>
    </div>
    <div className="note-card sr2">
      <h3>Leave a little note 💌</h3>
      <p>We'll reach out to craft your perfect bloom</p>
      <div className="f"><label>Your Name ✦</label><input type="text" placeholder="e.g. Priya Nair" /></div>
      <div className="f"><label>Instagram / WhatsApp ✦</label><input type="text" placeholder="@handle or +91..." /></div>
      <div className="f"><label>Which bouquet? ✦</label>
        <select>
          <option value="">– choose one –</option>
          <option>Pink Tulip Bouquet – ₹499</option>
          <option>Peach Tulip Bouquet – ₹449</option>
          <option>Red &amp; White Mixed – ₹599</option>
          <option>Pink Gerbera – ₹399</option>
          <option>Grande Pink Tulip – ₹799</option>
          <option>Velvet Red Roses – ₹699</option>
          <option>Crimson &amp; Daisy Mix – ₹499</option>
          <option>Lavender Tulip – ₹399</option>
          <option>Sunflower Bouquet – ₹399</option>
          <option>Custom / Something else</option>
        </select>
      </div>
      <div className="f"><label>Any special wishes? ✦</label><textarea placeholder="occasion, colours, personalisation..."></textarea></div>
      <button className="f-submit" onClick={(e) => {
        const btn = e.target;
        const n = document.querySelectorAll('.note-card input');
        if(!n[0].value.trim()||!n[1].value.trim()){
          btn.textContent='Please fill Name & Contact ✦';
          setTimeout(()=>btn.textContent='Send my note → ✦',2500);return;
        }
        window.open('https://www.instagram.com/bloom_ink.art','_blank');
        btn.textContent='Opening Instagram… ✓';
        btn.style.background='#6E9471';
      }}>Send my note → ✦</button>
    </div>
  </div>
</section>

{/*  FOOTER  */}
<footer>
  <div className="foot-wrap">
    <div className="foot-top">
      <div>
        <a href="#hero" className="foot-logo">Bloom <b>Ink</b> Art</a>
        <p className="foot-about">Handcrafted pipe-cleaner bouquets, faceless portraits &amp; gift hampers – made with love by Gopika in Kerala. Because some things should last forever.</p>
      </div>
      <div className="foot-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#collection">Collection</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#order">Place an Order</a></li>
        </ul>
      </div>
      <div className="foot-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://www.instagram.com/bloom_ink.art" target="_blank">@bloom_ink.art</a></li>
          <li><a href="#order">Send Enquiry</a></li>
          <li><a href="https://wa.me/?text=Hi%20Bloom%20Ink%20Art!" target="_blank">WhatsApp</a></li>
        </ul>
      </div>
    </div>
    <div className="foot-bot">
      <p className="foot-copy">© 2025 Bloom Ink Art by Gopika · Made with 🌸 in Kerala</p>
      <a href="https://www.instagram.com/bloom_ink.art" target="_blank" className="foot-ig">@bloom_ink.art</a>
    </div>
  </div>
</footer>



    </>
  );
}
