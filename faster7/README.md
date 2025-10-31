# 🏨 Restro Find Demo

A modern React web app to discover and preview restaurant images with a stylish hotel-themed background, responsive design, and seamless sharing capabilities.



## ✨ Features

- 🌆 **Beautiful UI** - Hotel-themed background with modern aesthetics
- 🖼️ **Dynamic Preview** - Smooth restaurant image rendering
- ⚡ **Canvas Rendering** - High-performance visualization using Konva.js
- 📱 **Responsive Design** - Seamless experience across all devices
- 🔐 **OTP Authentication** - Secure mobile-based login
- 📤 **Share & Download** - Easy image sharing and download options
- 🔍 **Intuitive Navigation** - Simple and elegant user interface

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React.js** | Core framework |
| **Vite** | Build tool & dev server |
| **React-Konva** | Canvas-based image rendering |
| **Tailwind CSS** | Utility-first styling |
| **React Router** | Client-side routing |
| **Axios** | HTTP client for API calls |
| **Unsplash API** | Background images |

## 📁 Project Structure

```
Faster7Technology-Assignment/faster7
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Loader.jsx
│   ├── pages/
│   │   ├── MobileLogin.jsx
│   │   ├── OTPVerify.jsx
│   │   ├── RestaurantDetail.jsx
│   │   └── RestaurantList.jsx
│   ├── utils/
│   │   └── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── db.json
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tikeshaswale/restro-find-demo.git
   cd restro-find-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server** (for mock API)
   ```bash
   npx json-server --watch db.json --port 5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 🌍 Deployment

### Deploy on Vercel

1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**

### Deploy on Netlify

1. Visit [netlify.com](https://netlify.com)
2. Select **Add new site → Import from GitHub**
3. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Click **Deploy site**


## 🔧 Configuration

### API Endpoints

Update the API base URL in `src/utils/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:5000';
```

### Environment Variables

Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000
VITE_UNSPLASH_KEY=your_unsplash_api_key
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Tikesh Aswale**

Full Stack Web Developer in Training

- 📧 Email: [aswaletinku@gmail.com](mailto:aswaletinku@gmail.com.com)
- 🐙 GitHub: [@tikesh97](https://github.com/tikesh97)

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for beautiful images
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [React-Konva](https://konvajs.org/docs/react/) for canvas rendering

---

⭐ If you found this project helpful, please give it a star!