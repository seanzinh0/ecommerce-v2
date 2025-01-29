# Audacieux Atelier

A modern e-commerce platform built with Vite, Express, and Tailwind CSS, featuring product browsing and sorting capabilities.

## 🛠 Tech Stack

- **Frontend**:
    - Vite (React)
    - Tailwind CSS
- **Backend**:
    - Express.js
- **Database**:
    - MySQL

## 🌟 Features
- Filtering by category
- Filtering by price
- Sort by title and price
- Fully responsive
- Form validation
- 1st party API to access DB


## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MySQL Server
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/seanzinh0/ecommerce-v2.git
   cd ecommerce-v2
   
2. **Install dependencies**
    ```bash
   npm install
   
3. **Build the project**
    ```bash
   npm run build
   
4. **Environment Setup**
   Create a .env file in the root directory and add the following:
    ```dotenv
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=ecommerce
   DB_PORT=3306

### Database Setup

1. **Create MySQL DB**
 ```sql
CREATE DATABASE ecommerce;
USE ecommerce;
```

2. **Create Products Table**
```sql
CREATE TABLE products (
product_id INT PRIMARY KEY AUTO_INCREMENT,
image VARCHAR(255) NOT NULL,
title VARCHAR(255) NOT NULL,
price INT NOT NULL,
description TEXT,
category VARCHAR(50) NOT NULL
);
```

### Running the App

1 **Start the server**
```bash
node src/backend/app.js
```

2. **Go to http://localhost:3000**

