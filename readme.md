# E-Commerce Website
An e-commerce platform built using Node.js and Express.js that allows users to browse products, add items to their cart, and checkout. The admin can manage products and view orders.
## Features
* User Authentication: Register, login, and logout functionality.
* Product Management: Admin can add, edit, delete, and view products.
* Shopping Cart: Users can add products to their cart, update quantities, and remove items.
* Order Management: Users can place orders, and admins can manage those orders.
* Responsive Design: The site is fully responsive and works on various devices.
* Payment Integration: Option to integrate payment gateways (e.g., Stripe, PayPal).
* Database: MongoDB is used for data storage (Products, Users, Orders, etc.).
## Technologies Used
* Backend:
 * Node.js
 * Express.js
 * MongoDB (Mongoose)
 * Passport.js (User Authentication)
* Frontend:
 * HTML
 * CSS
 * JavaScript (ES6+)
 * EJS for server-side rendering
 * Bootstrap (for responsive UI)
## Installation
#### Prerequisites
Before you begin, ensure you have the following installed on your machine:
* Node.js (v14.x or higher)
* MongoDB (or set up MongoDB Atlas for cloud hosting)
#### Setup Instructions
1. Clone this repository:
    git clone https://github.com/your-username/ecommerce-website.git
2. Navigate into the project directory:
    cd ecommerce-website
3. Install the dependencies:
npm install
4. Create a .env file for environment variables:
    touch .env
5. Add the following variables to the .env file:
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    SESSION_SECRET=your_session_secret
6. Run the app:
    npm start
    The app should now be running at http://localhost:3000.

## Usage
1. Home Page: Displays featured products and categories.
2. Product Listing: Browse products by category or search by keyword.
3. Product Detail: View product details, including description, price, and images.
4. Add to Cart: Add items to the cart and update quantities.
5. Checkout: Complete purchases by entering shipping and payment information.
6. Admin Dashboard: Manage products and view order details.
## API Endpoints
#### Users
* POST /signup: Register a new user.
* POST /login: Log in an existing user.
* POST /logout: Log out the current user.
#### Products
* GET /products: Retrieve all products.
* GET /products/:id: Retrieve a single product by ID.
* POST /admin/add-product: Admin adds a new product.
* POST /admin/edit-product/:id: Admin edits an existing product.
* POST /admin/delete-product/:id: Admin deletes a product.
#### Cart
* GET /cart: Retrieve the current user's cart.
* POST /cart: Add a product to the cart.
* POST /cart/remove-item: Remove a product from the cart.
* POST /cart/update-quantity: Update the quantity of a product in the cart.
#### Orders
* POST /order: Place a new order.
* GET /orders: Retrieve the current user's orders.
* GET /admin/orders: Admin views all orders.
## Future Enhancements
* Integration with a payment gateway (Stripe, PayPal).
* Add product reviews and ratings.
* Implement product filters (e.g., price range, categories).
* Add pagination to product listings.