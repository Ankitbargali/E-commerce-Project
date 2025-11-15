# 🛒 MERN eCommerce Web Application

A full-stack eCommerce web application built using the MERN stack.  
Includes JWT authentication, secure REST APIs, product search with dynamic categories, cart & wishlist functionality, checkout flow, and an admin dashboard for managing products, categories, and orders.

---

## 🚀 Features

### 👤 User Features
- User registration & login (JWT authentication)
- Secure HTTP-only cookies
- Browse products with:
  - Category filters
  - Subcategory filters
  - Size filters
  - Price range slider
- Product detail page
- Add to Cart
- Add to Wishlist
- Checkout page with saved user address

---

### 🛍 Product Features
- Product variants (size, price, stock)
- Base64/file image uploads
- Dynamic categories & subcategories
- Real-time search functionality
- GSAP animations for smooth UI

---

### 🛠 Admin Features
- Dedicated Admin Dashboard
- Add new products
- Add categories & subcategories
- Edit/delete products

---

## 🧰 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Context API
- React Router
- Axios
- GSAP Animations

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- HTTP-only Cookies
- REST API Architecture

---

## 📡 API Endpoints

### 🔐 Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/createUser` | Register new user |
| POST | `/api/users/login` | User login |
| GET  | `/api/users/me` | Get logged-in user |

---

### 🛒 Product Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/products` | Get all products |
| GET    | `/api/products/:id` | Get product by ID |
| POST   | `/api/products/add` | Add new product (Admin) |
| PUT    | `/api/products/update/:id` | Update product (Admin) |
| DELETE | `/api/products/delete/:id` | Delete product (Admin) |

---

### 📦 Category Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| POST | `/api/categories/add` | Add category |
| PUT | `/api/categories/update/:id` | Update category |
| DELETE | `/api/categories/delete/:id` | Delete category |

---

### 🛍 Cart Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/cart/add` | Add to cart |
| PUT | `/api/cart/update` | Update cart |
| DELETE | `/api/cart/remove/:id` | Remove item |

---

### 📬 Order Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place order |
| GET | `/api/orders/user` | Get user orders |
| GET | `/api/orders/all` | Admin: get all orders |

---

## 🔧 Installation & Setup

### 📁 1. Clone the repository
```bash
git clone https://github.com/Ankitbargali/E-commerce-Project.git
cd E-commerce-Project
```

###  2. Install & run frontend
```
cd frontend
npm install
npm run dev
```

###  3. Install & run backend
```
cd ../backend
npm install
npm start
```

---

##  Environment Variables

Create a `.env` file inside the **backend** folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret
```


## 📦 Folder Structure

```
my-ecommerce-project/
│
├── frontend/     # React UI
├── backend/      # Node + Express API
└── README.md
```
##Live Demo
Live Demo: https://e-comm-frontend-taupe.vercel.app/
---

## 📌 Future Enhancements
- Stripe payment integration
- Fully responsive UI
- Product reviews & ratings
- Admin analytics dashboard

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome.

---

## 📬 Contact
**Ankit Bargali**  
Email: bargali.ankit@gmail.com 
LinkedIn: https://linkedin.com/in/ankit-bargali-2a1052263
