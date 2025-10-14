# WebTestingProject - Software Testing Blog

A modern, responsive blog website built with React, Vite, TypeScript, and Tailwind CSS. This project showcases software testing expertise and serves as a professional portfolio.

**Live Demo**: https://zlamb101.github.io/WebTestingProject

## 🚀 Features

- **Responsive Design**: Modern, mobile-first design using Tailwind CSS
- **Multi-page Navigation**: Home, Posts, and Projects pages
- **Professional Layout**: Clean navigation, footer, and content structure
- **TypeScript**: Full type safety and better development experience
- **Fast Development**: Vite for lightning-fast hot module replacement

## 📁 Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main layout component with navigation
├── pages/
│   ├── HomePage.tsx        # Homepage with personal info and recent posts
│   ├── PostsPage.tsx       # All blog posts with filtering
│   └── ProjectsPage.tsx    # Project showcase with categories
├── App.tsx                 # Main app component with routing
├── main.tsx               # App entry point
└── index.css              # Tailwind CSS imports
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.11.1 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd WebProject
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Posts

Edit the `recentPosts` array in `src/pages/HomePage.tsx` and `allPosts` array in `src/pages/PostsPage.tsx`:

```typescript
const newPost = {
  id: 4,
  title: "Your Post Title",
  excerpt: "Post excerpt...",
  date: "2024-01-20",
  readTime: "5 min read",
  category: "Category",
  tags: ["Tag1", "Tag2"]
}
```

### Adding New Projects

Edit the `projects` array in `src/pages/ProjectsPage.tsx`:

```typescript
const newProject = {
  id: 5,
  title: "Project Title",
  description: "Project description...",
  technologies: ["Tech1", "Tech2"],
  category: "Category",
  status: "Completed",
  // ... other properties
}
```

### Styling

The project uses Tailwind CSS. You can:
- Modify colors in `tailwind.config.js`
- Add custom styles in `src/index.css`
- Use Tailwind utility classes throughout components

## 🧪 Testing

This project is designed to be tested with Playwright (to be added later). The structure supports:

- Component testing
- End-to-end testing
- Cross-browser testing
- Responsive design testing

## 📦 Deployment

### GitHub Pages (Recommended for Portfolio)

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Create a workflow file (see below) for automatic deployment

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Vercel (Alternative)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ for the software testing community