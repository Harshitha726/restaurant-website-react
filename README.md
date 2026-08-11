# 🍽️ Sri Venkateswara Restaurant – React Restaurant Website

A modern and responsive restaurant website built with **React.js**, featuring a multi-page layout (Home, Menu, Gallery, Chef, Blog, Events, Reservation, Contact), an interactive menu with category filtering and live search, a Bootstrap image carousel, and a clean, mobile-friendly UI.

---

## 📌 Features

### Customer Interface
- Multi-page site with client-side routing (Home, Menu, Gallery, Chef, Blog, Events, Reservation, Contact, 404)
- Hero section with image carousel
- Dynamic menu with category filtering (coffee, breakfast, mains, dessert, tiffins, evening tiffins, lunch, chinese, milkshakes)
- Live menu search
- Restaurant gallery
- Table reservation page
- Contact page with Google Maps location embed
- Open/closed status indicator
- Floating quick-action button
- Preloader on page load
- "Back to top" button

### User Experience
- Smooth navigation via React Router
- Category-based + keyword menu filtering
- Responsive layout for desktop, tablet, and mobile

---

## 🛠 Tech Stack

| Layer            | Technology                        |
|-------------------|------------------------------------|
| Frontend          | React.js                          |
| Routing           | react-router-dom                  |
| UI Components     | react-bootstrap (Carousel, etc.)  |
| Language          | JavaScript (ES6+), JSX            |
| Styling           | CSS3 (`App.css`, `style.css`)     |
| Package Manager   | npm                                |
| IDE               | Visual Studio Code                |
| Version Control   | Git & GitHub                      |

---

## 🗂 Project Structure

```
restaurant-website-react/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── BackToTop.jsx
│   │   ├── FloatingActions.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── OpenStatus.jsx
│   │   └── Preloader.jsx
│   ├── data/
│   │   └── menuData.js
│   ├── pages/
│   │   ├── Blog.jsx
│   │   ├── Chef.jsx
│   │   ├── Contact.jsx
│   │   ├── Events.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── NotFound.jsx
│   │   └── Reservation.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── App.test.js
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── style.css
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository
```
git clone https://github.com/Harshitha726/restaurant-website-react.git
```

### Navigate to the project
```
cd restaurant-website-react
```

### Install dependencies
```
npm install
```

### Run the application
```
npm start
```

The application will run at:
```
http://localhost:3000
```

---

## 📸 Screenshots

> Add your screenshot images to a `docs/screenshots/` folder in this repo, then reference them below with relative paths (as shown). Avoid pasting the temporary "copy image URL" links GitHub's editor generates — those are signed URLs that expire and will break in a few minutes.

### 🏠 Home Page
<img width="1918" height="982" alt="Home Page" src="https://lens.usercontent.google.com/image?vsrid=CNOe-YncyIb2rAEQARgBIhCftGZIFmb8-V75JHBO8JEwMoIBIgJ0YSgEQnQKLmxmZS1kdW1teTozNDFjNTMxMC03YTQ4LTRkYmEtYTMyNS1kMDA4YjQ4NGEyZTcSQgpAL2Jucy90YS9ib3JnL3RhL2Jucy9sZW5zLWZyb250ZW5kLWFwaS9wcm9kLmxlbnMtZnJvbnRlbmQtYXBpLzIxN1oECgJ0YTjI19Tc3ZeWA0gAUABg9fmdqfvEm7q4AXgAgAEA" />

### 🍴 Menu
<img width="1918" height="982" alt="Menu Page" src="https://claude.ai/api/64428489-fafe-4ae6-a245-224bc1f1f482/files/493bf61f-dcd2-48f5-abd9-cec0a9f7fa8f/preview" />

### 🖼️ Gallery
<img width="1918" height="982" alt="Gallery Page" src="https://claude.ai/api/64428489-fafe-4ae6-a245-224bc1f1f482/files/c3cc8bd7-5682-40ce-bc1e-ee2ad6d98590/preview" />

### 📅 Reservation
<img width="1918" height="982" alt="Reservation Page" src="PASTE_LINK_HERE" />

### 📍 Contact / Location
<img width="1918" height="982" alt="Contact Page" src="PASTE_LINK_HERE" />

---

## 📄 Home Page Source (`src/pages/Home.jsx`)

<details>
<summary>Click to expand full Home.jsx code</summary>

```jsx
import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
      {/* Hero */}
      <header className="hero">
        <div className="container-narrow text-center">
          <div className="hero-eyebrow">Open Daily · 7:00 AM – 10:00 PM</div>
          <h1>Welcome to <br /><em>Sri Venkateswara Restaurant</em></h1>
          <p className="lead mx-auto">
            Authentic South Indian Tiffins, Biryani, Chinese, Milkshakes and Desserts served fresh every day.
          </p>
          <div className="stars mb-4">★★★★★ <span style={{ color: 'var(--cream-dim)', fontSize: '0.9rem' }}>4.8 rating</span></div>
          <div className="d-flex justify-content-center gap-3 mb-5">
            <Link to="/menu" className="btn-primary-qb">View Menu</Link>
            <Link to="/reservation" className="btn-outline-qb">Reserve Table</Link>
          </div>

          <Carousel className="hero-carousel" indicators={true} controls={true} interval={3500}>
            <Carousel.Item>
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
                alt="Restaurant dining area"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
                alt="Restaurant interior seating"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1200&q=80"
                alt="Restaurant ambiance"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </header>

      {/* Chef's Specials */}
      <section className="tight">
        <div className="container-narrow">
          <h2 className="section-title text-center">Chef's Specials</h2>
          <div className="row text-center g-4 mt-2">
            <div className="col-6 col-md-3">
              <div className="special-card">
                <div className="special-icon">🍛</div>
                <h5>Biryani</h5>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="special-card">
                <div className="special-icon">🥞</div>
                <h5>Dosa</h5>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="special-card">
                <div className="special-icon">🍜</div>
                <h5>Noodles</h5>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="special-card">
                <div className="special-icon">🥤</div>
                <h5>Milkshake</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section>
        <div className="container-narrow">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80"
                alt="About restaurant"
                className="about-image"
              />
            </div>
            <div className="col-lg-6">
              <div className="section-eyebrow">Our Story</div>
              <h2 className="section-title">About Our Restaurant</h2>
              <p className="section-sub">
                From soft idlis and crispy dosas to flavorful chicken biryani, Chinese specialties, and our
                famous apricot delight — every dish is prepared fresh with quality ingredients and authentic
                family recipes passed down over generations.
              </p>
              <Link to="/chef" className="btn-outline-qb">Meet the Chef</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="tight" style={{ background: 'var(--surface-2)' }}>
        <div className="container-narrow">
          <h2 className="section-title text-center">Gallery</h2>
          <div className="gallery-preview-grid">
            <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80" alt="Biryani" />
            <img src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80" alt="Dosa" />
            <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80" alt="Noodles" />
            <img src="https://images.unsplash.com/photo-1546173159-315724a31696?w=500&q=80" alt="Milkshake" />
          </div>
          <div className="text-center mt-4">
            <Link to="/gallery" className="btn-outline-qb">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <div className="container-narrow">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="row text-center g-4 mt-2">
            <div className="col-6 col-md-3">
              <div className="why-card">
                <div className="why-icon">🌿</div>
                <h5>Fresh Ingredients</h5>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="why-card">
                <div className="why-icon">👨‍🍳</div>
                <h5>Experienced Chefs</h5>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="why-card">
                <div className="why-icon">⚡</div>
                <h5>Fast Service</h5>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="why-card">
                <div className="why-icon">👨‍👩‍👧‍👦</div>
                <h5>Family Dining</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="tight" style={{ background: 'var(--surface-2)' }}>
        <div className="container-narrow">
          <h2 className="section-title text-center">Customer Reviews</h2>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"Best biryani in town — rich flavor and perfectly cooked rice every single time."</p>
                <strong>Ramesh K.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"The masala dosa is crispy perfection. Family favorite for weekend breakfast."</p>
                <strong>Priya S.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"Great service, generous portions, and the milkshakes are a must-try."</p>
                <strong>Arjun M.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Map */}
      <section>
        <div className="container-narrow">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="section-eyebrow">Visit Us</div>
              <h2 className="section-title">Find Us Here</h2>
              <p className="section-sub">12 Lakeview Road, Banjara Hills, Hyderabad, Telangana</p>
              <p className="section-sub">📞 +91 90000 12345<br />🕐 Open daily, 7:00 AM – 10:00 PM</p>
              <Link to="/contact" className="btn-primary-qb">Get Directions</Link>
            </div>
            <div className="col-lg-7">
              <div className="map-embed">
                <iframe
                    title="location map"
                    src="https://maps.google.com/maps?q=Banjara+Hills,Hyderabad,Telangana&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="380"
                    style={{ border: 0 }}
                    loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
```

</details>

---

## 🌟 Future Enhancements
- Online food ordering
- User authentication
- Table reservation backend
- Payment gateway integration
- Customer reviews & ratings
- Admin dashboard
- Online order tracking

---

## 👩‍💻 Author

**Harshitha Bachupally**

📍 Hyderabad, India

📧 harshitharao6310@gmail.com

🔗 GitHub: https://github.com/Harshitha726
