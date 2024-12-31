# WhereIsIt - Client Side

## Project Purpose

WhereIsIt (Client Side) serves as the user interface for the Lost and Found platform. It allows users to interact with the application, report lost or found items, and manage their submissions. The client-side is designed to provide a seamless and responsive experience.

## Live Demo

[Visit WhereIsIt Live Website](https://whereisit-4b5c6.web.app/)

---

## Key Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Authentication**: Secure email/password-based login and registration with Google login option.
- **Lost & Found Items**: Users can add, view, and manage posts related to lost and found items.
- **Dynamic Pages**: Includes a dynamic title for each route.
- **Extra Sections**: Contains meaningful sections like a slider and additional features to enhance user engagement.
- **Framer Motion**: Implemented for smooth animations on the homepage.
- **Dynamic Title:** Updates website title dynamically based on the current route.
- **Navbar:** Includes Home, Lost & Found Items, and user account options.
- **Footer:** Informative and visually appealing.

### Functionalities

- **User Authentication:**
  - Email/password-based login.
  - Social login (Google).
- **Lost & Found Items Management:**
  - Add, update, and delete items.
  - View item details.
  - Mark items as recovered.
- **Search Functionality:** Filter items by title or location.
- **Animations and Notifications:**
  - Framer Motion for animations.
  - Toast notifications for CRUD operations.
- **404 Page:** Displays a custom error message for undefined routes.

### Home Page

1. **Home**: Displays a slider and the latest posts with relevant information.
2. **Add Lost & Found Items**: A private route for adding new posts.
3. **Manage My Items**: Allows users to manage their own posts.
4. **Lost & Found Items**: View all items with search functionality.
5. **All Recovered Items**: Displays items marked as recovered.
6. **Update Items**: Provides functionality to update existing posts.

---

## Technologies Used

- React.js
- React Router
- Framer Motion
- Firebase Authentication
- TailwindCSS
- React Datepicker
- SweetAlert2
- Axios

---

## Environment Variables

Ensure to set the following environment variables in a `.env` file:

- REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
- REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
- REACT_APP_FIREBASE_PROJECT_ID=your_project_id

## How to Run the Client Side Locally

### Prerequisites

- Node.js installed.

### Steps

1. Clone the repository.
2. Navigate to the `whereisit-client` directory.
3. Run `npm install` to install dependencies.
4. Create a `.env` file with Firebase configuration.
5. Start the development server with `npm start`.

---

## Meaningful Commits (15+ Commits)

1. Basic SetUp.
2. Added Footer.
3. Added a page.
4. Added All Items Page.
5. Details Page Added.
6. Connect Details page to Server.
7. Added MyItems page.
8. Added Update Page.
9. Added Most Recent Items.
10. Added Status Chnaging Function.
11. Update Challenge part.
12. Apply Framer Motion.
13. Added FAV icone and Daynamic Title.
14. Deploy.
15. Changed Local Host URL.

---

## Acknowledgments

Special thanks to the WhereIsIt team for the opportunity to work on this project.


<!-- ------------------------------------------------------------------------------------------------------- -->

# WhereIsIt - Server Side

## Project Purpose

WhereIsIt (Server Side) acts as the backend for the Lost and Found platform. It handles database operations, user authentication, and API endpoints to support client-side functionalities.

## Live Demo

[Visit WhereIsIt Live Server](https://where-is-it-server.vercel.app/)

---

## Key Features

- **API Endpoints**: Provides RESTful APIs for managing posts, user data, and authentication.
- **MongoDB Integration**: Securely stores data in a NoSQL database.
- **JWT Authentication**: Protects private routes using JSON Web Tokens.
- **Secure Credentials**: Firebase and MongoDB credentials are stored in environment variables.
- **CORS Enabled**: Ensures secure cross-origin requests.

### Core Functionalities

- **User Authentication:**
  - JWT-based secure authentication.
  - Token validation for private routes.
- **API Endpoints:**
  - CRUD operations for Lost & Found items.
  - Filter and search functionality.
- **Database Integration:**
  - MongoDB for storing user and item data.
  - Environment variable-based credential security.
- **Data Validation:** Ensures data integrity for all endpoints.
- **Error Handling:** Provides meaningful error messages for all API failures.

### Deployment

- Hosted on Vercel.
- Environment variables for Firebase configuration and MongoDB credentials.
- CORS enabled for secure API requests.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT
- dotenv
- Mongoose

---

## Environment Variables

Set the following variables in a `.env` file:

- PORT=your_port MONGODB_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret

## API Endpoints

- **POST /api/items**: Add a new item.
- **GET /api/items**: Retrieve all items.
- **GET /api/items/:id**: Retrieve a specific item.
- **PUT /api/items/:id**: Update an item.
- **DELETE /api/items/:id**: Delete an item.
- **POST /api/recovered**: Mark an item as recovered.

## How to Run the Server Side Locally

### Prerequisites

- Node.js installed.
- MongoDB Atlas account or local MongoDB setup.

### Steps

1. Clone the repository.
2. Navigate to the `whereisit-server` directory.
3. Run `npm install` to install dependencies.
4. Create a `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   FIREBASE_API_KEY=<your_firebase_api_key>
   FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
   FIREBASE_PROJECT_ID=<your_firebase_project_id>
   FIREBASE_STORAGE_BUCKET=<your_firebase_storage_bucket>
   FIREBASE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
   FIREBASE_APP_ID=<your_firebase_app_id>
   ```
5. Start the server with `npm start` or `npm run dev` for development.

---

## Meaningful Commits (8+ Commits)

1. SetUp Server.
2. Acced recoveredCollection and get data.
3. recoveredCollection post data.
4. Added get myItems.
5. Added Delete Operation.
6. Added Update Operation.
7. Updated Put Operation.
8. Added Vercel.json File.

---

## Acknowledgments

Special thanks to the WhereIsIt team for the opportunity to work on this project.
