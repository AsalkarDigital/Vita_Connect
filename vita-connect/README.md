# VitaConnect 🏙️🤝

**Your trusted local service directory for Vita, Maharashtra.**

VitaConnect is a modern, fast, and user-friendly web application designed to bridge the gap between local service providers and residents in Vita, Sangli District. Whether you need a plumber, an electrician, a doctor, or catering services, VitaConnect helps you find verified professionals and connect with them instantly via WhatsApp.

## 🚀 Features

- **Instant WhatsApp Integration:** Connect directly with service providers through automatically generated, pre-filled WhatsApp messages. No need to save numbers to your phonebook first!
- **Categorized Directory:** Easily browse popular and essential local services including:
  - 🔧 Plumbers
  - ⚡ Electricians
  - 👨‍⚕️ Doctors
  - 🪚 Carpenters
  - 🍲 Catering
- **List Your Service:** Local businesses, tradespeople, and freelancers can easily onboard and list their services to reach a wider digital audience in the Vita area.
- **Responsive Design:** A fully responsive, mobile-first interface that works seamlessly on smartphones, tablets, and desktops.
- **Modern UI/UX:** Features a sticky animated navigation bar, SVG wave transitions, and clean component layouts for an optimal user experience.

## 🛠️ Technology Stack

- **Frontend Framework:** React.js
- **Routing:** React Router DOM (`react-router-dom`)
- **Styling:** CSS3, Bootstrap (for layout grids), Bootstrap Icons
- **Utilities:** Custom WhatsApp link generation logic

## 📂 Project Structure Overview

The application follows a modular and scalable component-based architecture:

```text
vita-connect/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.js       # Responsive top navigation with scroll effects
│   │       ├── Footer.js       # Deep-linked footer with quick links and branding
│   │       └── ...
│   ├── utils/
│   │   ├── constants.js    # Global configuration (emails, phones, taglines)
│   │   └── whatsapp.js     # Helper functions to generate WhatsApp API links
│   ├── pages/              # Main route views (Home, Services, About, Contact)
│   └── App.js              # Root component & Route configuration
└── package.json
```

## 💻 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd vita-connect
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```
5. Open http://localhost:3000 in your browser to view the application.

## 🎯 Vision & Purpose

The primary goal of **VitaConnect** is to empower the local economy of Vita, Maharashtra. By providing a centralized digital platform, it eliminates the friction of finding reliable local help and gives small businesses a digital storefront to thrive in the modern age. *Built for Growth.*

## 👨‍💻 Developed By

**Sumit Asalkar / Asalkar Digital**
- **Website:** Asalkar Digital
- **Location:** Vita, Sangli District, Maharashtra 415311