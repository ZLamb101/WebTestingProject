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

This project features a comprehensive testing suite with **97.63% code coverage**:

### **Test Suite Overview**
- **44 tests** across 4 test files
- **Unit Tests**: 19 tests covering utility functions (100% coverage)
- **Component Tests**: 12 tests covering React components (98%+ coverage)  
- **Integration Tests**: 13 tests covering app routing and navigation

### **Testing Tools**
- **Vitest** - Fast unit and component testing with Vite integration
- **React Testing Library** - Component testing utilities
- **happy-dom** - Lightweight DOM environment for testing
- **@testing-library/user-event** - Realistic user interaction simulation

### **Test Scripts**
```bash
npm run test          # Run all tests
npm run test:coverage # Run tests with coverage report
npm run test:ui       # Run tests with UI interface
```

### **Coverage Report**
```
File                | % Stmts | % Branch | % Funcs | % Lines
--------------------|---------|----------|---------|--------
All files           |  97.63  |   94.00  |   93.33 |  97.63
src/components      |  99.15  |   93.75  |   100   |  99.15
src/pages           |  99.83  |   95.65  |   100   |  99.83
src/utils           |   100   |   100    |   100   |   100
src/data            |   100   |   100    |   100   |   100
```

### **Testing Best Practices**
- ✅ **Behavior-driven testing** - Tests what users see and do
- ✅ **Semantic queries** - Uses `getByRole`, `getByText` for stability
- ✅ **Factory functions** - Reusable test data creation
- ✅ **Consolidated tests** - Complete user workflows
- ✅ **Accessibility testing** - Proper roles and labels

### **Future Testing Plans**
- [ ] E2E tests with Playwright
- [ ] Visual regression testing
- [ ] Accessibility testing automation
- [ ] Performance testing

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