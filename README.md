## 🚀 K7REEF | Professional Full Stack Developer Portfolio

A sleek, modern, and high-performance portfolio website built to showcase my projects and technical expertise. This project demonstrates a complete integration between a React frontend and a Strapi CMS backend.

## 🛠 Tech Stack

### Frontend

Framework: React.js (Functional Components & Hooks)
Styling: Tailwind CSS (Utility-first CSS for rapid UI development)
Deployment: Vercel
State Management: React Context API / Local State.

### Backend (Headless CMS)

CMS: Strapi (Hosted on Strapi Cloud)
Media Storage: Cloudinary (Optimized image delivery)
Database: PostgreSQL (Default Strapi Cloud DB)

## ✨ Key Features

- **Headless CMS Integration:** Leverages **Strapi Cloud** as a decoupled backend, providing a robust API for dynamic content management.
- Dynamic Content: All projects, services, and skills are fetched dynamically from the **Strapi** API.
- Responsive Design: Fully optimized for mobile, tablet, and desktop screens.
- Clean UI/UX: Dark-themed aesthetic with a focus on readability and modern design trends.
- Contact Integration: Functional contact section to bridge the gap between clients and me.

## 📂 Project Structure (Frontend)

    src/
    ├── components/      # Reusable UI elements (Buttons, Cards, etc.)
    ├── sections/        # Main page sections (Hero, Projects, Skills, Contact)
    ├── pages/           # Pages (Home, Projects, Project Detail)
    ├── assets/          # Static images and icons
    ├── utils/api.js     # API configuration and Strapi fetch logic
    └── App.js           # Main entry point and layout

## 🚀 Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Install NPM packages:
   ```bash
   npm install
   ```
3. Set up Environment Variables:
   Create a `.env` file in the root directory and add your Strapi API URL:
   ```bash
   VITE_API=your_strapi_cloud_url
   VITE_READ_TOKEN=your_strapi_access_read_token
   ```
4. Run the development server:
   ```bash
   npm start
   ```

## 📧 Contact Me

Feel free to reach out if you have a project in mind or just want to say hi!

- Email: **k7reef@gmail.com**
- GitHub: [**@K7reef**](https://github.com/k7areef)
