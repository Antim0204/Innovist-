# Innovist E-Commerce Cart Application

A full-stack e-commerce cart application built using **React, Node.js, Express, and MongoDB**.  
The project allows users to browse products, add them to a cart, update quantities, and view the final checkout amount with discount support.

This project demonstrates **scalable  architecture using feature-based folders and Jotai state management**, along with a **RESTful backend API**.

---

# Tech Stack

## Frontend
- React.js
- Jotai (State Management)
- React Router
- CSS
- Font Awesome Icons

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---
# Home Page
<img width="3392" height="1916" alt="image" src="https://github.com/user-attachments/assets/9417d8e6-e5e4-4295-b7cc-c6b9fa7ffba2" />

# Listed Products
<img width="2466" height="1900" alt="image" src="https://github.com/user-attachments/assets/c725b1b5-8912-4ee7-8f99-c63bc43f64a5" />

# Product Detail Page
<img width="2542" height="1214" alt="image" src="https://github.com/user-attachments/assets/676693bb-8c0e-447d-8efc-c1d307d4cc84" />

# Cart Page
<img width="2228" height="1388" alt="image" src="https://github.com/user-attachments/assets/e361cf54-28e6-4ffc-8f47-7225daccf8d5" />


# Project Structure

## Server (Backend)

```
server
│
├── models
│   ├── Cart.js
│   └── Product.js
│
├── routes
│   ├── cartRoutes.js
│   └── productRoutes.js
│
├── seed.js
├── server.js
├── package.json
```

### Key Files

**server.js**  
Main backend entry point. It initializes the Express server and connects to MongoDB.

**models/Product.js**  
Defines the schema for products including:
- name
- description
- image
- price

**models/Cart.js**  
Defines cart schema containing:
- product reference
- quantity

**routes/productRoutes.js**  
Handles API routes for fetching products.

**routes/cartRoutes.js**  
Handles API routes for adding items to cart and updating quantities.

**seed.js**  
Seeds the database with sample products.

---

# Client (Frontend)

```
client
│
└── src
    │
    ├── app
    │
    ├── features
    │   ├── about
    │   │   ├── About.jsx
    │   │   └── About.css
    │   │
    │   ├── cart
    │   │   ├── atoms.js
    │   │   ├── pages
    │   │   └── styles
    │   │
    │   └── products
    │       ├── api.js
    │       ├── atom.js
    │       ├── components
    │       ├── pages
    │       └── styles
    │
    ├── shared
    ├── index.js
    └── index.css
```

### Feature-Based Architecture

The frontend follows a **feature-based folder structure** where each feature contains its own:

- components
- pages
- styles
- state logic

This improves scalability and maintainability.

---

# Application Features

### Product Listing
Displays skincare products with:
- product image
- name
- description
- price

### Add to Cart
Users can add products to their shopping cart.

### Cart Management
Users can:
- increase quantity
- decrease quantity
- remove items

### Discount System
A discount code can be applied which updates the total price dynamically.

### Checkout Page
Shows:
- total cart value
- applied discount
- final payable amount

---

# State Management

The project uses **Jotai** for global state management.

Important atoms include:

- `cartAtom` → stores cart items  
- `totalAtom` → calculates cart total  
- `discountAtom` → stores applied discount  
- `updateQuantityAtom` → updates cart quantities  

This keeps state management **lightweight and scalable**.

---

# API Endpoints

## Products

```
GET /api/products
```

Returns all products.

---

## Cart

```
GET /api/cart
```

Returns cart items.

```
POST /api/cart
```

Adds product to cart.

```
PUT /api/cart/:id
```

Updates product quantity in the cart.

---

# Installation Guide

## 1 Clone Repository

```
git clone https://github.com/yourusername/innovist-cart-app.git
```

---

## 2 Backend Setup

```
cd server
npm install
```

Start server

```
npm start
```

---

## 3 Seed Products

```
node seed.js
```

---

## 4 Frontend Setup

```
cd client
npm install
npm start
```

---

# Future Improvements

- User authentication
- Order history
- Payment gateway integration
- Product search and filtering
- Wishlist feature
- Admin dashboard

---

