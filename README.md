
#) Project name: SkillSpark

#) Purpose: The purpose of SkillSpark is to create a trusted, community-driven environment where people can explore new skills, gain personal growth, and connect with local experts. The platform empowers users to learn, teach, and collaborate through meaningful skill-sharing experiences.

#) Live URL:

#) Key features: 

🔐Authentication & Security

Firebase authentication (Email/Password + Google Login)

Signup with validation (uppercase, lowercase, min 6 chars)

Login with error handling

Forgot Password system with redirect to Gmail

Password toggle eye button

Protected route for Skill Details (redirects to Login if user is not logged in)

Environment variables used for Firebase config


💼 Skill Listings (JSON Data)

Minimum 6 skills displayed from JSON

Each card shows: image, name, price, rating, category

“View Details” button

Responsive grid layout

Clean UI with animations


📄 Skill Details Page (Protected)

Displays all info of the selected skill

Booking Form:

Name

Email

Submit → Shows success toast

Form clears automatically

Redirects back after login

👤 My Profile Page

Shows user’s:

Name

Email

Profile Photo

Functional Update Profile button using updateProfile()

User can edit name & profile image


🏠 Homepage Sections

Hero Slider (Swiper)

Popular Skills

Top Rated Providers

How It Works

Extra Section: (e.g., “Why Learn Locally?”, “Community Stories”, or “Start Teaching Today”)


🎨 UI / UX & Animations

Modern, minimalist design

Fully responsive

SPA behavior with no reload issues on routes

Smooth animations using NPM packages

#) NPM packages: tailwind, daisyui, swiper, 



























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
