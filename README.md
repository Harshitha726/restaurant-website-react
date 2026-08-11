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
<img width="1000" alt="Home" src="docs/screenshots/home.png" />

### 🍴 Menu
<img width="1000" alt="Menu" src="https://claude.ai/api/64428489-fafe-4ae6-a245-224bc1f1f482/files/8b6e641c-f043-4901-b025-41d47cee3e8a/preview" />

### 🖼️ Gallery
<img width="1000" alt="Gallery" src="docs/screenshots/gallery.png" />

### 📍 Contact
<img width="1000" alt="Contact" src="docs/screenshots/contact.png" />

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
