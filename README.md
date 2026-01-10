# Dumbways Stage 1 - Personal Web Portfolio

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-green.svg)
![Express](https://img.shields.io/badge/express-4.19.2-lightgrey.svg)

## 📖 Project Overview

**Dumbways Stage 1** is a personal web portfolio application built to showcase projects, testimonials, and provide a means of contact. It leverages server-side rendering with EJS and Express.js to deliver a dynamic and responsive user experience.

The application is designed to be a personal branding platform, allowing the author to present their work and skills professionally.

## ✨ Key Features

- **Dynamic Home Page**: showcasing personal introduction and key highlights.
- **Project Showcase**: specific section to display portfolio projects with details.
- **Testimonials**: section for client or peer reviews.
- **Contact Form**: functional interface for visitors to get in touch.
- **Responsive Design**: built with Bootstrap 5 for optimal viewing on all devices.
- **Server-Side Rendering**: utilizes EJS for SEO-friendly and fast page loads.

## 🛠️ Technology Stack

This project is built using the following technologies:

- **Runtime Environment**: [Node.js](https://nodejs.org/)
- **Web Framework**: [Express.js](https://expressjs.com/)
- **Templating Engine**: [EJS (Embedded JavaScript templates)](https://ejs.co/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & Custom CSS
- **Layouts**: [express-ejs-layouts](https://www.npmjs.com/package/express-ejs-layouts)
- **Utilities**: `dotenv` for configuration, `multer` for file handling.

## 📂 Project Structure

```bash
dumbways-stage-1/
├── assets/             # Static assets (CSS, Images, JS)
├── controller/         # Request logic controllers
├── route/              # Application routing definition
├── utils/              # Helper functions and middleware
├── views/              # EJS templates and views
├── app.mjs             # Main application entry point
├── package.json        # Project dependencies and scripts
└── .env.example        # Environment variables example
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: (v14 or higher recommended)
- **npm**: (Node Package Manager)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/MDF05/Dumbways.git
    cd Dumbways
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory (you can copy a reference if available, otherwise set your preferences):
    ```env
    PORT=3000
    ```

### Usage

**Development Mode** (with hot-reload):
```bash
npm run watch
```

**Production Start**:
```bash
npm start
```

Access the application at: `http://localhost:3000`

## 🤝 Contributing

Contributions are welcome! Please check the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to help improve this project.

## ✍️ Author

**Muhammad Dava Fahreza**
- Email: [mdavafahreza05@gmail.com](mailto:mdavafahreza05@gmail.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
