### Requirements

#### 1. Backend Requirements
- **Node.js and Express**: Backend framework to handle APIs and business logic.
- **MongoDB and Mongoose**: MongoDB for data storage and Mongoose as an ORM for schema management.
- **JWT Authentication**: To handle user login, registration, and authorization.
- **Password Hashing (bcrypt)**: Securely hash passwords before storing them in the database.
- **Environment Configuration (.env)**: Store sensitive configurations like database URI, JWT secret, etc.

##### Dependencies
In your `package.json` under the **backend**, install the following:
```bash
npm install express mongoose bcryptjs jsonwebtoken dotenv
```

##### Development Dependencies
Install **nodemon** for auto-restarting the server on code changes:
```bash
npm install --save-dev nodemon
```

---

#### 2. Frontend Requirements (Angular)
- **Angular CLI**: To create and manage Angular components, services, and routing.
- **Forms Module**: For creating template-driven forms (login, registration).
- **HTTP Client**: For making HTTP requests to the backend.
- **JWT Helper Library (optional)**: To decode JWT and manage tokens.
- **Angular Routing**: For navigating between components like home, book details, cart, login, etc.

##### Dependencies
Inside the **frontend** directory, ensure these Angular libraries are installed:
```bash
ng add @angular/material  # For UI components (optional)
npm install ngx-toastr   # For notifications (like login success or error)
```

---

#### 3. Database (MongoDB)
- Set up a **MongoDB Atlas** account or use a **local MongoDB instance**.
- Create collections like **users**, **books**, **orders**, etc.

---

#### 4. .env File (Environment Configuration)
Create a `.env` file in the backend directory with the following variables:
```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

#### 5. Backend API Endpoints

##### Auth Routes:
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login with email and password, returning a JWT.

##### Book Routes:
- **GET /api/books**: Retrieve all books.
- **GET /api/books/:id**: Retrieve a specific book by ID.
- **POST /api/books**: Add a new book (admin only).
- **PUT /api/books/:id**: Update book details (admin only).
- **DELETE /api/books/:id**: Delete a book (admin only).

##### Cart and Order Routes:
- **POST /api/cart**: Add a book to the user’s cart.
- **GET /api/cart**: Retrieve cart items for a user.
- **POST /api/orders**: Place an order from cart items.

---

#### 6. Frontend Pages and Components
- **Login and Registration Pages**: Forms for user authentication. Token management using JWT in local storage.
- **Home Page**: List of all available books with search and filter options.
- **Book Details Page**: Details about a selected book with an "Add to Cart" option.
- **Cart and Checkout Pages**: Display cart items with options to modify or proceed to checkout.
- **Order Success and Order History**: Show order confirmation on successful checkout. Allow users to view their past orders.
- **Admin Panel (Optional)**: Restricted area for adding, updating, or deleting books.

---

#### 7. Additional Frontend/Backend Features
- **Error Handling and Notifications**: Use **ngx-toastr** for success and error messages.
- **Token Interceptor**: Attach JWT tokens to requests requiring authentication.
- **Responsive UI**: Ensure the design is mobile-friendly, especially for listing books.
