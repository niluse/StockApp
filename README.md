# Stock App

## Overview

The Stock App is a comprehensive platform designed for effective order and inventory management. It offers a range of functionalities, including seamless viewing, addition, modification, and deletion of products, firms, brands, sales, and purchases. The application leverages a versatile technical stack to ensure a dynamic and user-friendly interface.

## Key Features

- **Product Management:** View, add, modify, and delete products with ease.
- **Order Management:** Streamline the workflow of managing sales and purchases efficiently.
- **Brand and Firm Management:** Easily handle and organize information about brands and firms.
- **Dashboard Analytics:** Visual charts and KPIs for sales and purchases tracking.
- **User Authentication:** Secure login and registration with JWT token-based authentication.
- **User-Friendly Interface:** Crafted using HTML, CSS, JavaScript, React, and Material.UI to prioritize a responsive and intuitive user experience.

## Technical Stack

- **Frontend:** React 18, Material-UI, Tailwind CSS
- **State Management:** Redux Toolkit with Redux Persist
- **Data Visualization:** Tremor React Charts
- **Form Management:** Formik with Yup validation
- **HTTP Client:** Axios with custom hooks
- **Routing:** React Router v6
- **Notifications:** React Toastify

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API server running

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd stock-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create environment file:

```bash
cp .env.example .env
```

4. Update the `.env` file with your API base URL:

```
REACT_APP_BASE_URL=https://your-api-url.com/api
```

5. Start the development server:

```bash
npm start
# or
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/              # Redux store configuration
├── assets/           # Images and static files
├── components/       # Reusable UI components
├── features/         # Redux slices
├── helper/           # Utility functions
├── pages/            # Page components
├── router/           # Routing configuration
├── service/          # API service hooks
└── styles/           # Global styles
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Features in Detail

### Authentication

- User registration with validation
- Secure login with token persistence
- Protected routes for authenticated users

### Inventory Management

- CRUD operations for products, brands, and firms
- Real-time stock quantity tracking
- Category-based product organization

### Sales & Purchases

- Record and track sales transactions
- Manage purchase orders
- Automatic amount calculations
- Edit and delete capabilities

### Dashboard

- KPI cards showing total sales, purchases, and profit
- Interactive area charts for sales and purchases trends
- Real-time data updates

## Best Practices Implemented

- Component-based architecture
- Custom hooks for API calls
- Centralized state management
- Form validation with Yup schemas
- Error handling and user notifications
- Responsive design for all screen sizes
- Code splitting and lazy loading ready
- Environment-based configuration
