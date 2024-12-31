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
