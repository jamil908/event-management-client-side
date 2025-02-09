# **Event Management Platform Frontend 🎉**

**Manage Events with Ease and Real-Time Interactions**

Welcome to the **Event Management Platform**, where users can create, manage, and join events seamlessly. The platform includes real-time attendee updates, secure user authentication, and an intuitive event dashboard for an enhanced experience.

### **Live Site URL**  
Visit the live site here: [Event Management Platform](https://simple-fiarbase-19a01.firebaseapp.com/)

---

## **Features**

- **User Authentication:**
  - Secure login and registration system using Firebase Authentication.
  - JWT-based private routes for secure access.

- **Event Dashboard:**
  - View upcoming and past events with real-time data.
  - Filter events by category and date.
  - Each event displays the number of attendees in real-time using Socket.IO.

- **Event Creation:**
  - Simple form to create events with details like name, description, date/time, and location.

- **Real-Time Attendee Updates:**
  - Real-time attendee count updates for each event via WebSocket (Socket.IO).
  - Live notification system to alert users of new events or updates.

- **Responsive Design:**
  - Fully responsive UI to support mobile, tablet, and desktop views using **Tailwind CSS**.
  - Clean and modern design with **DaisyUI** components for enhanced UX.

---

## **Technologies Used**

- **Frontend:**
  - **React.js**: For building the UI.
  - **Tailwind CSS**: For utility-first styling.
  - **DaisyUI**: For pre-designed components with Tailwind CSS.
  - **React Router**: For seamless navigation and routing.
  - **Socket.IO Client**: For real-time communication (attendee updates).
  - **React Query**: For efficient data fetching and caching.
  - **Swiper**: For creating interactive and responsive carousels.
  - **SweetAlert2**: For custom alerts and notifications.
  - **Firebase**: For user authentication.

- **Authentication and Security:**
  - **Firebase Authentication**: For secure login and registration with email/password and Google authentication.
  - **JWT (JSON Web Tokens)**: For protecting private routes and user sessions.

---

## **Key Pages**

1. **Home Page:**
   - Displays a dynamic banner and overview of the platform’s features.
   - Shows a list of upcoming events with quick access to event details.

2. **Dashboard (Events List):**
   - Displays all upcoming and past events.
   - Provides event filtering options by category, date, and attendee count.
   - Each event card shows the number of attendees and event details.

3. **Event Details:**
   - Shows detailed information about a specific event.
   - Displays real-time updates on attendee count.

4. **Create Event:**
   - Simple form to create a new event with fields like event name, description, date/time, and more.
   - Form validation and error handling.

5. **Login & Registration:**
   - Secure login and registration forms with Firebase Authentication.
   - Option to register via email/password or Google.

6. **Error Page (404):**
   - A user-friendly error page with a button to redirect to the homepage.
7. **user credential you need its:**
.local.env file 
   - VITE_apiKey=your-api-key
VITE_authDomain=your-auth-domain
VITE_projectId=your-project-id
VITE_storageBucket=your-storage-bucket
VITE_messagingSenderId=your-sender-id
VITE_appId=your-app-id

---

## **Frontend Setup Instructions**
   -  npm install
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <repo-folder>
