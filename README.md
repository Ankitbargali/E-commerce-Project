MERN eCommerce Web Application

A full-stack eCommerce web application built using the MERN stack.
Includes JWT authentication, secure API integration, dynamic product search, category filters, cart & wishlist functionality, checkout page, and a complete admin dashboard for managing products, categories, and orders.

Features

User Features

User Registration & Login (JWT Authentication)
Browse products with:
Category filters
Subcategory filters
Size filters
Price range filtering
Product details page
Add to Cart
Add to Wishlist
Checkout Page
User Address Form (saved for future orders)
View Order History

Product Features

Product variants (size, old price, new price, stock)
Base64 / File upload image handling
Dynamic categories & subcategories
Real-time search results
GSAP-based animations for better UI/UX

Admin Features

Admin Dashboard with Sidebar Navigation
Add New Product
Update/Delete Product
Add Categories
Manage Categories & Subcategories
Admin-only Protected Routes (JWT + cookies)


Tech Stack
Frontend

React.js
React Router
Tailwind CSS
GSAP Animations
Context API
Axios

Backend

Node.js
Express.js
MongoDB (Mongoose)
JSON Web Token (JWT)
HTTP-only Cookies
REST API Endpoints

Other Tools

Git & GitHub

Folder Structure
E-commerce-Project/
│
├── frontend/       # React UI
└── backend/        # Node.js + Express server

Authentication

Login & Sign-up using JWT
Access token stored in HTTP-only cookies
Protected API routes
Admin-only routes

API Modules
Users API

Register
Login
Get user details
Update user (address, cart, wishlist)

Products API
Add product
Update product
Delete product
Get all products
Get product by ID

Categories API
Create category
Update category
Delete category
Fetch all categories

Cart API
Add to cart
Remove from cart
Update quantity

Orders API
Place order
Get user orders


 How to Run Locally
1️ Clone the repository
git clone https://github.com/Ankitbargali/E-commerce-Project.git
cd E-commerce-Project

2️ Install frontend dependencies
cd frontend
npm install
npm run dev

3️ Install backend dependencies
cd ../backend
npm install
npm start

Environment Variables
Create a .env file in the backend folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret

Future Enhancements

Stripe Payment Gateway
Fully responsive UI
Admin Analytics Dashboard
Pagination & Sorting
Product Reviews & Ratings

Contributing

Pull requests are welcome!

License

This project is open-source and free to use.
